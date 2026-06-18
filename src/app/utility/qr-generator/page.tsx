"use client";
import { useState } from "react";
import ToolPageLayout from "@/components/tools/ToolPageLayout";
import { Download } from "lucide-react";

export default function QrGeneratorPage() {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState<string | null>(null);

  const generateQR = () => {
    if (!text.trim()) return;
    const encoded = encodeURIComponent(text);
    setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encoded}`);
  };

  const download = async () => {
    if (!qrUrl) return;
    const res = await fetch(qrUrl);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "qr-code.png";
    a.click();
  };

  return (
    <ToolPageLayout
      title="QR Code Generator"
      description="Generate QR codes from any URL, text, or contact info."
      icon="QrCode"
      gradient="from-sky-500 to-indigo-600"
      backHref="/utility"
      backLabel="Back to Utility Tools"
    >
      <div className="space-y-6">
        <div className="glass-card rounded-2xl p-6 space-y-4">
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Enter URL or text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="https://example.com"
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            onKeyDown={(e) => e.key === "Enter" && generateQR()}
          />
          <button onClick={generateQR} disabled={!text.trim()} className="btn-primary w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed">
            Generate QR Code
          </button>
        </div>

        {qrUrl && (
          <div className="glass-card rounded-2xl p-8 text-center space-y-5">
            <img src={qrUrl} alt="QR Code" className="w-52 h-52 mx-auto rounded-xl" />
            <p className="text-sm text-slate-500 truncate max-w-xs mx-auto">{text}</p>
            <button onClick={download} className="btn-primary inline-flex items-center gap-2 mx-auto">
              <Download className="w-4 h-4" />
              Download PNG
            </button>
          </div>
        )}
      </div>
    </ToolPageLayout>
  );
}
