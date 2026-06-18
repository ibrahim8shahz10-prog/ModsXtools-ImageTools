import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variant === "default" && "bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300",
        variant === "success" && "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300",
        variant === "warning" && "bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300",
        className
      )}
    >
      {children}
    </span>
  );
}
