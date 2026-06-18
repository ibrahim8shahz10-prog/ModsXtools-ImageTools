"use client";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function ProcessingOverlay({ message = "Processing…" }: { message?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div className="glass-card rounded-2xl p-8 flex flex-col items-center gap-4 max-w-xs w-full mx-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin" />
          <Loader2 className="w-6 h-6 text-indigo-500 absolute inset-0 m-auto animate-spin" style={{ animationDirection: "reverse", animationDuration: "1.5s" }} />
        </div>
        <p className="font-semibold text-slate-700 dark:text-slate-300 text-center">{message}</p>
        <p className="text-xs text-slate-400 text-center">This may take a few seconds</p>
      </div>
    </motion.div>
  );
}
