import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "live" | "upcoming" | "finished" | "default";
  children: React.ReactNode;
  className?: string;
  pulse?: boolean;
}

const variantStyles = {
  live: "bg-neon-red text-white animate-pulse",
  upcoming: "bg-neon-blue/20 text-neon-blue border border-neon-blue/30",
  finished: "bg-dark-300 text-gray-400",
  default: "bg-dark-300 text-gray-300",
};

const dotColors = {
  live: "bg-white",
  upcoming: "bg-neon-blue",
  finished: "bg-gray-500",
  default: "bg-gray-400",
};

export function Badge({ variant = "default", children, className, pulse = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
    >
      {(variant === "live" || pulse) && (
        <span className={cn("w-2 h-2 rounded-full", dotColors[variant])} />
      )}
      {children}
    </span>
  );
}
