"use client";
import { motion } from "framer-motion";
import { tools } from "@/lib/tools-data";
import ToolCard from "@/components/tools/ToolCard";

const featured = ["bg-remover", "img-compress", "pdf-merge", "qr-gen", "img-resize", "jpg-png"];

export default function FeaturedTools() {
  const featuredTools = featured.map((id) => tools.find((t) => t.id === id)!).filter(Boolean);

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">Most Popular Tools</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            The tools professionals reach for every day
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredTools.map((tool, i) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <ToolCard tool={tool} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
