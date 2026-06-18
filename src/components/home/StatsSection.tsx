"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Free Tools" },
  { value: "10M+", label: "Files Processed" },
  { value: "0", label: "Sign-ups Needed" },
  { value: "100%", label: "Private & Secure" },
];

export default function StatsSection() {
  return (
    <section className="py-10 border-y border-slate-200 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-display font-extrabold text-3xl md:text-4xl text-gradient mb-1">{s.value}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
