"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ToolPageLayout from "@/components/tools/ToolPageLayout";
import { FileEdit, Download } from "lucide-react";

export default function BatchRenamerPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [prefix, setPrefix] = useState("image");
  const [start, setStart] = useState(1);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setFiles(Array.from(e.dataTransfer.files));
  };

  const previewNames = files.map((f, i) => {
    const ext = f.name.split(".").pop();
    return `${prefix}-${String(start + i).padStart(3, "0")}.${ext}`;
  });

  return (
    <ToolPageLayout
      title="Batch File Renamer"
      description="Rename multiple files with custom patterns and sequential numbering."
      icon="FileEdit"
      gradient="from-fuchsia-500 to-pink-600"
      backHref="/batch"
      backLabel="Back to Batch Tools"
    >
      <div className="space-y-6">
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="upload-zone"
          onClick={() => document.getElementById("batch-input")?.click()}
        >
          <input
            id="batch-input"
            type="file"
            multiple
            className="hidden"
            onChange={(e) => setFiles(Array.from(e.target.files || []))}
          />
          <FileEdit className="w-10 h-10 text-indigo-400 mx-auto mb-3" />
          <p className="font-semibold text-slate-700 dark:text-slate-300">Drop multiple files here</p>
          <p className="text-sm text-slate-400 mt-1">or click to select files</p>
          {files.length > 0 && (
            <p className="text-sm text-indigo-500 font-medium mt-2">{files.length} files selected</p>
          )}
        </div>

        <div className="glass-card rounded-2xl p-5 grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">Prefix</label>
            <input
              type="text"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">Start number</label>
            <input
              type="number"
              value={start}
              onChange={(e) => setStart(+e.target.value)}
              min={0}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {files.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-2xl overflow-hidden">
            <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Preview ({files.length} files)</span>
              <button className="btn-primary text-xs px-3 py-1.5 flex items-center gap-1">
                <Download className="w-3 h-3" /> Download All
              </button>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800 max-h-64 overflow-y-auto">
              {files.map((f, i) => (
                <div key={i} className="flex items-center justify-between px-5 py-2.5 text-xs">
                  <span className="text-slate-400 truncate max-w-[45%]">{f.name}</span>
                  <span className="text-slate-300 dark:text-slate-600 mx-2">→</span>
                  <span className="text-indigo-500 font-medium truncate max-w-[45%]">{previewNames[i]}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </ToolPageLayout>
  );
}
