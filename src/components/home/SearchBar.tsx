"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { tools } from "@/lib/tools-data";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof tools>([]);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (val.length > 1) {
      setResults(tools.filter((t) => t.name.toLowerCase().includes(val.toLowerCase())).slice(0, 5));
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-3 glass-card rounded-2xl px-4 py-3">
        <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search tools… e.g. 'remove background', 'compress PDF'"
          value={query}
          onChange={handleChange}
          className="flex-1 bg-transparent outline-none text-slate-700 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-500 text-sm"
        />
      </div>
      {results.length > 0 && (
        <div className="absolute top-full mt-2 w-full glass-card rounded-xl overflow-hidden z-50">
          {results.map((tool) => (
            <button
              key={tool.id}
              onClick={() => { router.push(tool.href); setResults([]); setQuery(""); }}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-colors text-left"
            >
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{tool.name}</span>
              <span className="text-xs text-slate-400 ml-auto">{tool.category}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
