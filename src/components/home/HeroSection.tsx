"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import SearchBar from "./SearchBar";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-violet-500/10 blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-indigo-200 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            50+ Professional Tools — 100% Free
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6"
        >
          Every Image & PDF Tool
          <br />
          <span className="text-gradient">You'll Ever Need</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8"
        >
          Remove backgrounds, convert formats, compress, resize, merge PDFs and more.
          No signup. No watermarks. No limits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <Link href="/background/remover" className="btn-primary flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Try AI Background Remover
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#categories"
            className="px-6 py-3 rounded-xl font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Browse All Tools
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <SearchBar />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-6 text-sm text-slate-400 dark:text-slate-500"
        >
          {["No signup required", "Works on any device", "Files never stored"].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
