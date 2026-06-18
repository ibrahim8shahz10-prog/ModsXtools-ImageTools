"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { cn } from "@/lib/utils";

interface ToolPageLayoutProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  backHref: string;
  backLabel: string;
  children: React.ReactNode;
}

export default function ToolPageLayout({
  title, description, icon, gradient, backHref, backLabel, children,
}: ToolPageLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-indigo-500 transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          {backLabel}
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className={cn("w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg", gradient)}>
            <DynamicIcon name={icon} className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="font-display font-bold text-2xl md:text-3xl text-slate-800 dark:text-slate-100">{title}</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">{description}</p>
          </div>
        </div>

        {children}
      </motion.div>
    </div>
  );
}
