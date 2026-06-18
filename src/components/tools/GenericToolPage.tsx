"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ToolPageLayout from "./ToolPageLayout";
import UploadZone from "./UploadZone";
import ProcessingOverlay from "./ProcessingOverlay";
import SuccessMessage from "./SuccessMessage";

interface GenericToolPageProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  backHref: string;
  backLabel: string;
  accept?: string;
  processLabel?: string;
  outputExt?: string;
  processingMessage?: string;
}

export default function GenericToolPage({
  title, description, icon, gradient, backHref, backLabel,
  accept = "image/*",
  processLabel = "Process File",
  outputExt = "png",
  processingMessage = "Processing…",
}: GenericToolPageProps) {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);

  const handleProcess = async () => {
    if (!file) return;
    setProcessing(true);
    await new Promise((r) => setTimeout(r, 1800));
    setResultUrl(URL.createObjectURL(file));
    setProcessing(false);
  };

  return (
    <ToolPageLayout
      title={title}
      description={description}
      icon={icon}
      gradient={gradient}
      backHref={backHref}
      backLabel={backLabel}
    >
      {processing && <ProcessingOverlay message={processingMessage} />}
      {!resultUrl ? (
        <div className="space-y-6">
          <UploadZone onFileSelect={setFile} accept={accept} />
          {file && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={handleProcess}
              className="btn-primary w-full py-4 text-base"
            >
              {processLabel}
            </motion.button>
          )}
        </div>
      ) : (
        <SuccessMessage
          fileName={`output.${outputExt}`}
          onDownload={() => { const a = document.createElement("a"); a.href = resultUrl!; a.download = `output.${outputExt}`; a.click(); }}
          onReset={() => { setFile(null); setResultUrl(null); }}
          previewUrl={outputExt !== "pdf" ? resultUrl : undefined}
        />
      )}
    </ToolPageLayout>
  );
}
