"use client";
import { useState } from "react";
import ToolPageLayout from "@/components/tools/ToolPageLayout";
import UploadZone from "@/components/tools/UploadZone";
import { motion } from "framer-motion";
import { ScanLine, ExternalLink } from "lucide-react";

export default function QrScannerPage() {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (file: File) => {
    setResult(null);
    setError(null);
    // Use goqr.me API for real scanning
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("https://api.qrserver.com/v1/read-qr-code/", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      const text = data?.[0]?.symbol?.[0]?.data;
      if (text) setResult(text);
      else setError("No QR code detected. Try a clearer image.");
    } catch {
      setError("Could not read QR code. Please try again.");
    }
  };

  const isUrl = (str: string) => str.startsWith("http://") || str.startsWith("https://");

  return (
    <ToolPageLayout
      title="QR Code Scanner"
      description="Upload an image containing a QR code to decode it instantly."
      icon="ScanLine"
      gradient="from-sky-500 to-indigo-600"
      backHref="/utility"
      backLabel="Back to Utility Tools"
    >
      <div className="space-y-6">
        <UploadZone
          onFileSelect={handleFile}
          label="Drop an image with a QR code"
          hint="JPG, PNG, WebP supported"
        />
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-2xl p-6 space-y-3"
          >
            <div className="flex items-center gap-2 text-emerald-500">
              <ScanLine className="w-5 h-5" />
              <span className="font-semibold text-sm">QR Code Decoded</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 break-all text-sm bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3">{result}</p>
            {isUrl(result) && (
              <a
                href={result}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-indigo-500 font-medium hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                Open URL
              </a>
            )}
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-card rounded-2xl p-5 text-rose-500 text-sm text-center"
          >
            {error}
          </motion.div>
        )}
      </div>
    </ToolPageLayout>
  );
}
