"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { categories } from "@/lib/tools-data";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { ArrowRight } from "lucide-react";

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-title mb-4">
          Everything in One Place
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Seven categories. 50+ tools. All free, all instant, all professional-grade.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
          >
            <Link href={cat.href} className="group block glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <DynamicIcon name={cat.icon} className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-semibold text-slate-800 dark:text-slate-100 mb-1">{cat.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">{cat.description}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">{cat.toolCount} tools</span>
                <span className="flex items-center gap-1 text-indigo-500 font-medium group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
