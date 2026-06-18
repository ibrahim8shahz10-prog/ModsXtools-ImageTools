import Link from "next/link";
import { Zap, Github, Twitter, Heart } from "lucide-react";
import { categories } from "@/lib/tools-data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-lg mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-gradient">PixlTools</span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Professional image and PDF tools, free forever. No signup required.
            </p>
          </div>
          {categories.slice(0, 3).map((cat) => (
            <div key={cat.id}>
              <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200 mb-3">{cat.name}</h4>
              <Link
                href={cat.href}
                className="block text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-500 transition-colors mb-1"
              >
                View all tools →
              </Link>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> — Free & Open Source
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com" className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
              <Github className="w-4 h-4" />
            </Link>
            <Link href="https://twitter.com" className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
              <Twitter className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
