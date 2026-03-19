"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import { FighterCardSkeleton } from "@/components/ui/Skeleton";
import type { Fighter } from "@/types";
import { getCountryFlag } from "@/lib/utils";

interface FightersSectionProps {
  fighters: Fighter[];
}

export function FightersSection({ fighters }: FightersSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "100px",
  });

  return (
    <section id="fighters" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-purple-400 mb-4">
            El evento
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-gradient">
              Luchadores
            </span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            Los competidores que se enfrentarán en el evento más esperado del año
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
          {isVisible ? (
            fighters.map((fighter, index) => (
              <FighterCard key={fighter.id} fighter={fighter} priority={index < 6} />
            ))
          ) : (
            Array.from({ length: 12 }).map((_, i) => <FighterCardSkeleton key={i} />)
          )}
        </div>
      </div>
    </section>
  );
}

interface FighterCardProps {
  fighter: Fighter;
  priority?: boolean;
}

function FighterCard({ fighter, priority = false }: FighterCardProps) {
  return (
    <article className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900 cursor-pointer">
      <Image
        src={fighter.image}
        alt={fighter.name}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        placeholder="blur"
        blurDataURL={fighter.blurDataUrl}
        priority={priority}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {fighter.isMainEvent && (
        <div className="absolute top-2 left-2">
          <span className="px-2 py-1 text-[10px] font-bold bg-pink-500 rounded-full">
            PRINCIPAL
          </span>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-sm">{getCountryFlag(fighter.countryCode)}</span>
          <span className="text-[10px] text-gray-500">{fighter.country}</span>
        </div>
        <h3 className="text-sm sm:text-base font-bold text-white leading-tight">{fighter.name}</h3>
        <p className="text-xs text-purple-400">&quot;{fighter.nickname}&quot;</p>
        <div className="flex items-center gap-2 mt-1.5 text-[10px] text-gray-500">
          <span>{fighter.record.wins}V - {fighter.record.losses}D</span>
          <span>·</span>
          <span>{fighter.weight}</span>
        </div>
      </div>
    </article>
  );
}
