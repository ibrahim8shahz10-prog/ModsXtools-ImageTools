"use client";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Tool } from "@/types";
import ToolCard from "./ToolCard";
import { cn } from "@/lib/utils";

interface CategoryPageLayoutProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  tools: Tool[];
}

export default function CategoryPageLayout({ title, description, icon, gradient, tools }: CategoryPageLayoutProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className={cn("w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg", gradient)}>
            <DynamicIcon name={icon} className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-slate-800 dark:text-slate-100">{title}</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">{description}</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
          >
            <ToolCard tool={tool} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
