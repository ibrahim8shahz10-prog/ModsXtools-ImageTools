"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Download, RefreshCw } from "lucide-react";

interface SuccessMessageProps {
  fileName?: string;
  onDownload: () => void;
  onReset: () => void;
  previewUrl?: string;
}

export default function SuccessMessage({ fileName, onDownload, onReset, previewUrl }: SuccessMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card rounded-2xl p-8 text-center space-y-5"
    >
      <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center">
        <CheckCircle2 className="w-8 h-8 text-emerald-500" />
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-slate-800 dark:text-slate-100 mb-1">Done!</h3>
        {fileName && <p className="text-sm text-slate-500">{fileName} is ready</p>}
      </div>
      {previewUrl && (
        <img src={previewUrl} alt="Result" className="max-h-48 mx-auto rounded-xl object-contain" />
      )}
      <div className="flex gap-3 justify-center">
        <button onClick={onDownload} className="btn-primary flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download
        </button>
        <button
          onClick={onReset}
          className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-semibold text-sm flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Process another
        </button>
      </div>
    </motion.div>
  );
}
