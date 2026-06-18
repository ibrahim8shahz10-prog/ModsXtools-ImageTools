import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

// Safe icon name type
type IconName = keyof typeof dynamicIconImports;

// Static imports for all icons we actually use
import {
  Layers, RefreshCw, Minimize2, Crop, FileText, Wrench, Layers2,
  Eraser, Blend, Palette, Square, ArrowRight, Archive, Sliders,
  Maximize2, RotateCw, FlipHorizontal, FilePlus, FileImage, Scissors,
  PackageOpen, Stamp, Info, QrCode, ScanLine, RefreshCcw, FolderArchive,
  FileEdit, Merge, Zap, Sun, Moon, Menu, X, Search, ChevronLeft,
  Upload, Image, CheckCircle2, Download, Sparkles, Shield, Heart,
  Github, Twitter, ExternalLink, Home
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Layers, RefreshCw, Minimize2, Crop, FileText, Wrench, Layers2,
  Eraser, Blend, Palette, Square, ArrowRight, Archive, Sliders,
  Maximize2, RotateCw, FlipHorizontal, FilePlus, FileImage, Scissors,
  PackageOpen, Stamp, Info, QrCode, ScanLine, RefreshCcw, FolderArchive,
  FileEdit, Merge, Zap, Sun, Moon, Menu, X, Search, ChevronLeft,
  Upload, Image, CheckCircle2, Download, Sparkles, Shield, Heart,
  Github, Twitter, ExternalLink, Home
};

interface DynamicIconProps extends LucideProps {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const Icon = iconMap[name] ?? Wrench;
  return <Icon {...props} />;
}
