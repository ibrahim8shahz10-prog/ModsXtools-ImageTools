"use client";
import { useState } from "react";
import ToolPageLayout from "@/components/tools/ToolPageLayout";
import UploadZone from "@/components/tools/UploadZone";
import SuccessMessage from "@/components/tools/SuccessMessage";
import ProcessingOverlay from "@/components/tools/ProcessingOverlay";

export default function ImageCompressorPage() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(80);
  const [processing, setProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);

  const handleCompress = async () => {
    if (!file) return;
    setProcessing(true);
    await new Promise((r) => setTimeout(r, 1200));

    const img = new Image();
    const url = URL.createObjectURL(file);
    img.src = url;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      canvas.getContext("2d")!.drawImage(img, 0, 0);
      const compressed = canvas.toDataURL("image/jpeg", quality / 100);
      setResultUrl(compressed);
      setProcessing(false);
    };
  };

  return (
    <ToolPageLayout
      title="Image Compressor"
      description="Reduce image file size while preserving visual quality."
      icon="Minimize2"
      gradient="from-emerald-500 to-teal-600"
      backHref="/compress"
      backLabel="Back to Compress Tools"
    >
      {processing && <ProcessingOverlay message="Compressing image…" />}
      {!resultUrl ? (
        <div className="space-y-6">
          <UploadZone onFileSelect={setFile} />
          {file && (
            <>
              <div className="glass-card rounded-2xl p-5 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Quality</span>
                  <span className="text-indigo-500 font-bold">{quality}%</span>
                </div>
                <input type="range" min={10} max={100} value={quality} onChange={(e) => setQuality(+e.target.value)} className="w-full accent-indigo-500" />
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Smaller file</span><span>Better quality</span>
                </div>
                <p className="text-xs text-slate-400">Original: {(file.size / 1024).toFixed(0)} KB → Est. {Math.round(file.size * quality / 100 / 1024)} KB</p>
              </div>
              <button onClick={handleCompress} className="btn-primary w-full py-4">Compress Image</button>
            </>
          )}
        </div>
      ) : (
        <SuccessMessage
          fileName="compressed.jpg"
          onDownload={() => { const a = document.createElement("a"); a.href = resultUrl!; a.download = "compressed.jpg"; a.click(); }}
          onReset={() => { setFile(null); setResultUrl(null); }}
          previewUrl={resultUrl}
        />
      )}
    </ToolPageLayout>
  );
}
