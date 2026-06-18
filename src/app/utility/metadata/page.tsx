"use client";
import { useState } from "react";
import ToolPageLayout from "@/components/tools/ToolPageLayout";
import UploadZone from "@/components/tools/UploadZone";
import { motion } from "framer-motion";

export default function MetadataPage() {
  const [meta, setMeta] = useState<Record<string, string> | null>(null);

  const handleFile = (file: File) => {
    const info: Record<string, string> = {
      "File Name": file.name,
      "File Type": file.type,
      "File Size": `${(file.size / 1024).toFixed(1)} KB`,
      "Last Modified": new Date(file.lastModified).toLocaleString(),
    };
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.src = url;
    img.onload = () => {
      info["Width"] = `${img.width}px`;
      info["Height"] = `${img.height}px`;
      info["Aspect Ratio"] = `${(img.width / img.height).toFixed(2)}:1`;
      setMeta({ ...info });
    };
    if (!file.type.startsWith("image/")) setMeta(info);
  };

  return (
    <ToolPageLayout
      title="Metadata Viewer"
      description="View detailed metadata and properties of any image file."
      icon="Info"
      gradient="from-sky-500 to-indigo-600"
      backHref="/utility"
      backLabel="Back to Utility Tools"
    >
      <div className="space-y-6">
        <UploadZone onFileSelect={handleFile} label="Drop any image to inspect metadata" />
        {meta && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 text-sm">File Properties</h3>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {Object.entries(meta).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between px-5 py-3">
                  <span className="text-sm text-slate-500 dark:text-slate-400">{key}</span>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200 text-right max-w-[60%] truncate">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </ToolPageLayout>
  );
}
