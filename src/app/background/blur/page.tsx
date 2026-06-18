"use client";
import { useState } from "react";
import ToolPageLayout from "@/components/tools/ToolPageLayout";
import UploadZone from "@/components/tools/UploadZone";
import SuccessMessage from "@/components/tools/SuccessMessage";
import ProcessingOverlay from "@/components/tools/ProcessingOverlay";

export default function BgBlurPage() {
  const [file, setFile] = useState<File | null>(null);
  const [blur, setBlur] = useState(10);
  const [processing, setProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);

  const handleProcess = async () => {
    if (!file) return;
    setProcessing(true);
    await new Promise((r) => setTimeout(r, 1500));
    setResultUrl(URL.createObjectURL(file));
    setProcessing(false);
  };

  return (
    <ToolPageLayout
      title="Background Blur"
      description="Blur your image background to create a professional depth-of-field effect."
      icon="Blend"
      gradient="from-violet-500 to-purple-600"
      backHref="/background"
      backLabel="Back to Background Tools"
    >
      {processing && <ProcessingOverlay message="Blurring background…" />}
      {!resultUrl ? (
        <div className="space-y-6">
          <UploadZone onFileSelect={setFile} />
          {file && (
            <>
              <div className="glass-card rounded-2xl p-5 space-y-3">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Blur Intensity: {blur}px</label>
                <input type="range" min={2} max={40} value={blur} onChange={(e) => setBlur(+e.target.value)} className="w-full accent-indigo-500" />
              </div>
              <button onClick={handleProcess} className="btn-primary w-full py-4">Apply Background Blur</button>
            </>
          )}
        </div>
      ) : (
        <SuccessMessage
          fileName="background-blurred.jpg"
          onDownload={() => { const a = document.createElement("a"); a.href = resultUrl!; a.download = "blurred.jpg"; a.click(); }}
          onReset={() => { setFile(null); setResultUrl(null); }}
          previewUrl={resultUrl}
        />
      )}
    </ToolPageLayout>
  );
}
