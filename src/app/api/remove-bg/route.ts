import { NextRequest, NextResponse } from "next/server";

async function tryRemoveBg(file: File): Promise<ArrayBuffer | null> {
  const apiKey = process.env.REMOVEBG_API_KEY;
  if (!apiKey) return null;
  try {
    const form = new FormData();
    form.append("image_file", file);
    form.append("size", "auto");
    const res = await fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      headers: { "X-Api-Key": apiKey },
      body: form,
    });
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

async function tryPhotoRoom(file: File): Promise<ArrayBuffer | null> {
  const apiKey = process.env.PHOTOROOM_API_KEY;
  if (!apiKey) return null;
  try {
    const form = new FormData();
    form.append("image_file", file);
    const res = await fetch("https://sdk.photoroom.com/v1/segment", {
      method: "POST",
      headers: { "x-api-key": apiKey },
      body: form,
    });
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

async function tryRemovalAi(file: File): Promise<ArrayBuffer | null> {
  const apiKey = process.env.REMOVALAI_API_KEY;
  if (!apiKey) return null;
  try {
    const form = new FormData();
    form.append("image_file", file);
    const res = await fetch("https://api.removal.ai/3.0/remove", {
      method: "POST",
      headers: { "Rm-Token": apiKey },
      body: form,
    });
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    if (file.size > 12 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large. Max 12MB." }, { status: 400 });
    }

    let result = await tryRemoveBg(file);
    if (!result) result = await tryPhotoRoom(file);
    if (!result) result = await tryRemovalAi(file);

    if (!result) {
      return NextResponse.json(
        { error: "All services unavailable. Please try again later." },
        { status: 503 }
      );
    }

    return new NextResponse(result, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": 'attachment; filename="removed-bg.png"',
      },
    });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
