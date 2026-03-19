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
    <section id="fighters" className="py-24 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Participantes
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Los mejores competidores se enfrentan en el evento más esperado del año
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
          {isVisible ? (
            fighters.map((fighter, index) => (
              <FighterCard key={fighter.id} fighter={fighter} priority={index < 4} />
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
    <article className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-dark-200 cursor-pointer">
      <Image
        src={fighter.image}
        alt={fighter.name}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        placeholder="blur"
        blurDataURL={fighter.blurDataUrl}
        priority={priority}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {fighter.isMainEvent && (
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 text-xs font-bold bg-neon-pink rounded-full animate-pulse">
            MAIN EVENT
          </span>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg">{getCountryFlag(fighter.countryCode)}</span>
          <span className="text-xs text-gray-400">{fighter.country}</span>
        </div>
        <h3 className="text-lg font-bold text-white leading-tight">{fighter.name}</h3>
        <p className="text-sm text-neon-blue">&quot;{fighter.nickname}&quot;</p>
        <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
          <span>{fighter.record.wins}V - {fighter.record.losses}D</span>
          <span className="text-gray-600">|</span>
          <span>{fighter.weight}</span>
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 60px ${fighter.color}30`,
        }}
      />
    </article>
  );
}
