"use client";
import { useState } from "react";
import ToolPageLayout from "@/components/tools/ToolPageLayout";
import UploadZone from "@/components/tools/UploadZone";
import ProcessingOverlay from "@/components/tools/ProcessingOverlay";
import SuccessMessage from "@/components/tools/SuccessMessage";
import { Sparkles } from "lucide-react";

export default function BgRemoverPage() {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);

  const handleFile = (f: File) => {
    setFile(f);
    setResultUrl(null);
  };

  const handleProcess = async () => {
    if (!file) return;
    setProcessing(true);
    // Simulate AI processing (replace with real API call)
    await new Promise((r) => setTimeout(r, 2500));
    const url = URL.createObjectURL(file);
    setResultUrl(url);
    setProcessing(false);
  };

  const handleDownload = () => {
    if (!resultUrl) return;
    const a = document.createElement("a");
    a.href = resultUrl;
    a.download = "removed-bg.png";
    a.click();
  };

  const handleReset = () => {
    setFile(null);
    setResultUrl(null);
  };

  return (
    <ToolPageLayout
      title="AI Background Remover"
      description="Remove image backgrounds instantly using AI. Outputs transparent PNG."
      icon="Eraser"
      gradient="from-violet-500 to-purple-600"
      backHref="/background"
      backLabel="Back to Background Tools"
    >
      {processing && <ProcessingOverlay message="AI is removing background…" />}

      {!resultUrl ? (
        <div className="space-y-6">
          <UploadZone
            onFileSelect={handleFile}
            accept="image/jpeg,image/png,image/webp"
            label="Drop your image here"
            hint="JPG, PNG, WebP up to 20MB"
          />
          {file && (
            <button onClick={handleProcess} className="btn-primary w-full flex items-center justify-center gap-2 text-base py-4">
              <Sparkles className="w-5 h-5" />
              Remove Background with AI
            </button>
          )}
        </div>
      ) : (
        <SuccessMessage
          fileName={`${file?.name?.split(".")[0]}-transparent.png`}
          onDownload={handleDownload}
          onReset={handleReset}
          previewUrl={resultUrl}
        />
      )}

      <div className="mt-8 glass-card rounded-2xl p-6">
        <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-3">How it works</h3>
        <ol className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
          <li className="flex gap-2"><span className="text-indigo-500 font-bold">1.</span> Upload any JPG, PNG, or WebP image</li>
          <li className="flex gap-2"><span className="text-indigo-500 font-bold">2.</span> Our AI detects and isolates the subject</li>
          <li className="flex gap-2"><span className="text-indigo-500 font-bold">3.</span> Download your transparent PNG instantly</li>
        </ol>
      </div>
    </ToolPageLayout>
  );
}
