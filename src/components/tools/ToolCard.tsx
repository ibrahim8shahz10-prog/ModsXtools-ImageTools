import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Tool } from "@/types";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  background: "from-violet-500 to-purple-600",
  convert: "from-blue-500 to-cyan-600",
  compress: "from-emerald-500 to-teal-600",
  resize: "from-orange-500 to-amber-600",
  pdf: "from-rose-500 to-pink-600",
  utility: "from-sky-500 to-indigo-600",
  batch: "from-fuchsia-500 to-pink-600",
};

const categoryBorder: Record<string, string> = {
  background: "group-hover:border-violet-400/50",
  convert: "group-hover:border-blue-400/50",
  compress: "group-hover:border-emerald-400/50",
  resize: "group-hover:border-orange-400/50",
  pdf: "group-hover:border-rose-400/50",
  utility: "group-hover:border-sky-400/50",
  batch: "group-hover:border-fuchsia-400/50",
};

export default function ToolCard({ tool }: { tool: Tool }) {
  const gradient = categoryColors[tool.category] || "from-indigo-500 to-violet-600";
  const border = categoryBorder[tool.category] || "";

  return (
    <Link
      href={tool.href}
      className={cn(
        "group block glass-card rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1",
        border
      )}
    >
      <div className="flex items-start gap-4">
        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
          <DynamicIcon name={tool.icon} className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 text-sm truncate">{tool.name}</h3>
            {tool.badge && (
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium bg-gradient-to-r ${gradient} text-white flex-shrink-0`}>
                {tool.badge}
              </span>
            )}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{tool.description}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-end text-xs text-indigo-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity gap-1">
        Open tool <ArrowRight className="w-3 h-3" />
      </div>
    </Link>
  );
}
