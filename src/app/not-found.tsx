"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <div className="text-8xl font-display font-extrabold text-gradient">404</div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">Page not found</h2>
          <p className="text-slate-500 dark:text-slate-400">This tool or page doesn't exist yet.</p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Link href="/" className="btn-primary flex items-center gap-2">
            <Home className="w-4 h-4" /> Go Home
          </Link>
          <Link href="/#categories" className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-semibold text-sm flex items-center gap-2">
            <Search className="w-4 h-4" /> Browse Tools
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
