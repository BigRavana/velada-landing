import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular";
}

export function Skeleton({ className, variant = "rectangular" }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-neutral-800",
        {
          "h-4 w-full rounded": variant === "text",
          "w-12 h-12 rounded-full": variant === "circular",
          "w-full h-full rounded-xl": variant === "rectangular",
        },
        className
      )}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-xl bg-neutral-900/50 border border-neutral-800 p-4 sm:p-6">
      <Skeleton variant="rectangular" className="aspect-square mb-4" />
      <Skeleton variant="text" className="w-3/4 mb-2" />
      <Skeleton variant="text" className="w-1/2" />
    </div>
  );
}

export function FighterCardSkeleton() {
  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900">
      <Skeleton variant="rectangular" className="absolute inset-0" />
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
        <Skeleton variant="text" className="w-3/4 mb-2" />
        <Skeleton variant="text" className="w-1/2" />
      </div>
    </div>
  );
}

export function EventCardSkeleton() {
  return (
    <div className="rounded-xl bg-neutral-900/50 border border-neutral-800 p-5 sm:p-6">
      <div className="flex items-center justify-between mb-5">
        <Skeleton variant="text" className="w-24" />
        <Skeleton variant="rectangular" className="w-20 h-6 rounded-full" />
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <Skeleton variant="circular" className="w-12 h-12 sm:w-14 sm:h-14 mb-2" />
          <Skeleton variant="text" className="w-full mb-1" />
          <Skeleton variant="text" className="w-1/2" />
        </div>
        <Skeleton variant="text" className="text-xl sm:text-2xl font-bold" />
        <div className="flex-1 text-right">
          <Skeleton variant="circular" className="w-12 h-12 sm:w-14 sm:h-14 mb-2 ml-auto" />
          <Skeleton variant="text" className="w-full mb-1" />
          <Skeleton variant="text" className="w-1/2 ml-auto" />
        </div>
      </div>
    </div>
  );
}
