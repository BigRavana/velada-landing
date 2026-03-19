import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular";
}

export function Skeleton({ className, variant = "rectangular" }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-dark-300",
        {
          "h-4 w-full rounded": variant === "text",
          "w-12 h-12 rounded-full": variant === "circular",
          "w-full h-full rounded-2xl": variant === "rectangular",
        },
        className
      )}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl bg-dark-200 border border-dark-300 p-6">
      <Skeleton variant="rectangular" className="aspect-square mb-4" />
      <Skeleton variant="text" className="w-3/4 mb-2" />
      <Skeleton variant="text" className="w-1/2" />
    </div>
  );
}

export function FighterCardSkeleton() {
  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-dark-200">
      <Skeleton variant="rectangular" className="absolute inset-0" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <Skeleton variant="text" className="w-3/4 mb-2" />
        <Skeleton variant="text" className="w-1/2" />
      </div>
    </div>
  );
}

export function EventCardSkeleton() {
  return (
    <div className="rounded-2xl bg-dark-200 border border-dark-300 p-6">
      <div className="flex items-center justify-between mb-4">
        <Skeleton variant="text" className="w-24" />
        <Skeleton variant="rectangular" className="w-20 h-6 rounded-full" />
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <Skeleton variant="circular" className="w-16 h-16 mb-2" />
          <Skeleton variant="text" className="w-full mb-1" />
          <Skeleton variant="text" className="w-1/2" />
        </div>
        <Skeleton variant="text" className="text-2xl font-bold" />
        <div className="flex-1 text-right">
          <Skeleton variant="circular" className="w-16 h-16 mb-2 ml-auto" />
          <Skeleton variant="text" className="w-full mb-1" />
          <Skeleton variant="text" className="w-1/2 ml-auto" />
        </div>
      </div>
    </div>
  );
}
