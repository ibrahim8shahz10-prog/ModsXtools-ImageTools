import { Category, Tool } from "@/types";

export const categories: Category[] = [
  {
    id: "background",
    name: "Background Tools",
    description: "Remove, blur, or replace image backgrounds instantly",
    icon: "Layers",
    color: "violet",
    gradient: "from-violet-500 to-purple-600",
    href: "/background",
    toolCount: 4,
  },
  {
    id: "convert",
    name: "Convert Tools",
    description: "Convert between image formats with zero quality loss",
    icon: "RefreshCw",
    color: "blue",
    gradient: "from-blue-500 to-cyan-600",
    href: "/convert",
    toolCount: 5,
  },
  {
    id: "compress",
    name: "Compress Tools",
    description: "Shrink file sizes without visible quality difference",
    icon: "Minimize2",
    color: "emerald",
    gradient: "from-emerald-500 to-teal-600",
    href: "/compress",
    toolCount: 3,
  },
  {
    id: "resize",
    name: "Resize Tools",
    description: "Resize, crop, rotate, and flip images precisely",
    icon: "Crop",
    color: "orange",
    gradient: "from-orange-500 to-amber-600",
    href: "/resize",
    toolCount: 4,
  },
  {
    id: "pdf",
    name: "PDF Tools",
    description: "Merge, split, compress and convert PDF files",
    icon: "FileText",
    color: "rose",
    gradient: "from-rose-500 to-pink-600",
    href: "/pdf",
    toolCount: 5,
  },
  {
    id: "utility",
    name: "Utility Tools",
    description: "Watermark, metadata, QR codes and more",
    icon: "Wrench",
    color: "sky",
    gradient: "from-sky-500 to-indigo-600",
    href: "/utility",
    toolCount: 4,
  },
  {
    id: "batch",
    name: "Batch Tools",
    description: "Process hundreds of files at once efficiently",
    icon: "Layers2",
    color: "fuchsia",
    gradient: "from-fuchsia-500 to-pink-600",
    href: "/batch",
    toolCount: 3,
  },
];

export const tools: Tool[] = [
  // Background
  { id: "bg-remover", name: "AI Background Remover", description: "Remove backgrounds instantly with AI", icon: "Eraser", href: "/background/remover", category: "background", badge: "AI" },
  { id: "bg-blur", name: "Background Blur", description: "Blur image backgrounds professionally", icon: "Blend", href: "/background/blur", category: "background" },
  { id: "bg-color", name: "Background Color Changer", description: "Replace background with solid colors", icon: "Palette", href: "/background/color", category: "background" },
  { id: "bg-transparent", name: "Transparent PNG Creator", description: "Make image backgrounds transparent", icon: "Square", href: "/background/transparent", category: "background" },

  // Convert
  { id: "jpg-png", name: "JPG to PNG", description: "Convert JPG images to PNG format", icon: "ArrowRight", href: "/convert/jpg-to-png", category: "convert" },
  { id: "png-jpg", name: "PNG to JPG", description: "Convert PNG images to JPG format", icon: "ArrowRight", href: "/convert/png-to-jpg", category: "convert" },
  { id: "webp-png", name: "WebP to PNG", description: "Convert WebP images to PNG format", icon: "ArrowRight", href: "/convert/webp-to-png", category: "convert" },
  { id: "png-webp", name: "PNG to WebP", description: "Convert PNG images to WebP format", icon: "ArrowRight", href: "/convert/png-to-webp", category: "convert" },
  { id: "jpeg-png", name: "JPEG to PNG", description: "Convert JPEG images to PNG format", icon: "ArrowRight", href: "/convert/jpeg-to-png", category: "convert" },

  // Compress
  { id: "img-compress", name: "Image Compressor", description: "Compress images while keeping quality", icon: "Minimize2", href: "/compress/image", category: "compress", badge: "Popular" },
  { id: "bulk-compress", name: "Bulk Image Compressor", description: "Compress multiple images at once", icon: "Archive", href: "/compress/bulk", category: "compress" },
  { id: "quality-opt", name: "Quality Optimizer", description: "Find best quality/size balance", icon: "Sliders", href: "/compress/optimizer", category: "compress" },

  // Resize
  { id: "img-resize", name: "Image Resizer", description: "Resize images to exact dimensions", icon: "Maximize2", href: "/resize/resizer", category: "resize" },
  { id: "img-crop", name: "Image Cropper", description: "Crop images to custom areas", icon: "Crop", href: "/resize/cropper", category: "resize" },
  { id: "img-rotate", name: "Image Rotator", description: "Rotate images to any angle", icon: "RotateCw", href: "/resize/rotator", category: "resize" },
  { id: "img-flip", name: "Image Flipper", description: "Flip images horizontally or vertically", icon: "FlipHorizontal", href: "/resize/flipper", category: "resize" },

  // PDF
  { id: "img-pdf", name: "Images to PDF", description: "Convert images into a PDF document", icon: "FilePlus", href: "/pdf/images-to-pdf", category: "pdf" },
  { id: "pdf-img", name: "PDF to Images", description: "Extract pages as image files", icon: "FileImage", href: "/pdf/pdf-to-images", category: "pdf" },
  { id: "pdf-merge", name: "PDF Merger", description: "Combine multiple PDFs into one", icon: "Merge", href: "/pdf/merger", category: "pdf", badge: "Popular" },
  { id: "pdf-split", name: "PDF Splitter", description: "Split PDF into separate files", icon: "Scissors", href: "/pdf/splitter", category: "pdf" },
  { id: "pdf-compress", name: "PDF Compressor", description: "Reduce PDF file size efficiently", icon: "PackageOpen", href: "/pdf/compressor", category: "pdf" },

  // Utility
  { id: "watermark", name: "Watermark Adder", description: "Add text or image watermarks", icon: "Stamp", href: "/utility/watermark", category: "utility" },
  { id: "metadata", name: "Metadata Viewer", description: "View and edit image metadata", icon: "Info", href: "/utility/metadata", category: "utility" },
  { id: "qr-gen", name: "QR Code Generator", description: "Generate QR codes from any URL or text", icon: "QrCode", href: "/utility/qr-generator", category: "utility", badge: "Free" },
  { id: "qr-scan", name: "QR Code Scanner", description: "Scan and decode QR codes from images", icon: "ScanLine", href: "/utility/qr-scanner", category: "utility" },

  // Batch
  { id: "batch-convert", name: "Batch Image Converter", description: "Convert hundreds of images at once", icon: "RefreshCcw", href: "/batch/converter", category: "batch" },
  { id: "batch-compress", name: "Batch Image Compressor", description: "Compress entire folders of images", icon: "FolderArchive", href: "/batch/compressor", category: "batch" },
  { id: "batch-rename", name: "Batch File Renamer", description: "Rename files with custom patterns", icon: "FileEdit", href: "/batch/renamer", category: "batch" },
];

export const getCategoryTools = (categoryId: string) =>
  tools.filter((t) => t.category === categoryId);

export const getCategoryById = (id: string) =>
  categories.find((c) => c.id === id);
