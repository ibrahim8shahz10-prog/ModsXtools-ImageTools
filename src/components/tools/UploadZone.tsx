"use client";
import { useState, useRef } from "react";
import { Upload, Image as ImageIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface UploadZoneProps {
  onFileSelect: (file: File) => void;
  accept?: string;
  label?: string;
  hint?: string;
}

export default function UploadZone({
  onFileSelect,
  accept = "image/*",
  label = "Drop your image here",
  hint = "JPG, PNG, WebP, GIF up to 20MB",
}: UploadZoneProps) {
  const [dragging, setDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    setFileName(file.name);
    if (file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
    onFileSelect(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const clear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview(null);
    setFileName(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className={cn(
        "upload-zone relative",
        dragging && "border-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/30 scale-[1.01]"
      )}
    >
      <input ref={inputRef} type="file" accept={accept} onChange={handleChange} className="hidden" />

      {preview ? (
        <div className="relative">
          <img src={preview} alt="Preview" className="max-h-48 mx-auto rounded-xl object-contain" />
          <button
            onClick={clear}
            className="absolute -top-2 -right-2 w-6 h-6 bg-slate-800 text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="text-sm text-slate-500 mt-3 truncate">{fileName}</p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center">
            {dragging ? (
              <ImageIcon className="w-8 h-8 text-indigo-500 animate-bounce" />
            ) : (
              <Upload className="w-8 h-8 text-indigo-400" />
            )}
          </div>
          <div>
            <p className="font-semibold text-slate-700 dark:text-slate-300">{label}</p>
            <p className="text-sm text-slate-400 mt-1">or <span className="text-indigo-500 font-medium">click to browse</span></p>
          </div>
          <p className="text-xs text-slate-400">{hint}</p>
        </div>
      )}
    </div>
  );
}
