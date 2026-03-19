import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "live" | "upcoming" | "finished" | "default";
  children: React.ReactNode;
  className?: string;
  pulse?: boolean;
}

const variantStyles = {
  live: "bg-red-500/20 text-red-400 border border-red-500/30",
  upcoming: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
  finished: "bg-neutral-800 text-neutral-500",
  default: "bg-neutral-800 text-neutral-400",
};

const dotColors = {
  live: "bg-red-400",
  upcoming: "bg-purple-400",
  finished: "bg-neutral-500",
  default: "bg-neutral-400",
};

export function Badge({ variant = "default", children, className, pulse = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
    >
      {(variant === "live" || pulse) && (
        <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", dotColors[variant])} />
      )}
      {children}
    </span>
  );
}
