"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { EventCardSkeleton } from "@/components/ui/Skeleton";
import { Badge } from "@/components/ui/Badge";
import type { Event, Fighter } from "@/types";
import { formatTime } from "@/lib/utils";
import { Clock } from "lucide-react";

interface EventsSectionProps {
  events: Event[];
  fighters: Fighter[];
}

export function EventsSection({ events, fighters }: EventsSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "100px",
  });

  const getFighterById = (id: string) => fighters.find((f) => f.id === id);

  return (
    <section id="schedule" className="py-24 bg-neutral-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-pink-400 mb-4">
            Orden de combate
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-gradient">
              Cartel
            </span>
          </h2>
        </div>

        <div ref={ref} className="space-y-4">
          {isVisible ? (
            events.map((event, index) => {
              const fighter1 = getFighterById(event.fighters[0]);
              const fighter2 = getFighterById(event.fighters[1]);
              if (!fighter1 || !fighter2) return null;

              return (
                <EventCard
                  key={event.id}
                  event={event}
                  fighter1={fighter1}
                  fighter2={fighter2}
                  index={index}
                />
              );
            })
          ) : (
            Array.from({ length: 4 }).map((_, i) => <EventCardSkeleton key={i} />)
          )}
        </div>
      </div>
    </section>
  );
}

interface EventCardProps {
  event: Event;
  fighter1: Fighter;
  fighter2: Fighter;
  index: number;
}

function EventCard({ event, fighter1, fighter2, index }: EventCardProps) {
  const getEventTypeLabel = () => {
    switch (event.type) {
      case "main-event":
        return "Combate Principal";
      case "co-main-event":
        return "Combate Secundario";
      case "undercard":
        return `Combate ${index + 1}`;
      case "special":
        return "Combate Especial";
      default:
        return "Combate";
    }
  };

  const getBadgeVariant = () => {
    switch (event.status) {
      case "live":
        return "live";
      case "upcoming":
        return "upcoming";
      case "finished":
        return "finished";
      default:
        return "default";
    }
  };

  return (
    <article className="group relative rounded-xl bg-neutral-900/50 border border-neutral-800 overflow-hidden hover:border-purple-500/30 transition-all duration-300">
      <div className="relative p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">
              {getEventTypeLabel()}
            </span>
            <Badge variant={getBadgeVariant()}>
              {event.status === "upcoming" ? "Próximo" : event.status === "live" ? "EN VIVO" : "Finalizado"}
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-xs font-mono">{formatTime(new Date(event.scheduledTime))}</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <FighterInfo fighter={fighter1} side="left" />
          
          <div className="flex-shrink-0 px-3">
            <span className="text-xl sm:text-2xl font-black text-neutral-700 group-hover:text-purple-500 transition-colors">
              VS
            </span>
          </div>
          
          <FighterInfo fighter={fighter2} side="right" />
        </div>
      </div>
    </article>
  );
}

interface FighterInfoProps {
  fighter: Fighter;
  side: "left" | "right";
}

function FighterInfo({ fighter, side }: FighterInfoProps) {
  return (
    <div className={`flex items-center gap-3 flex-1 ${side === "right" ? "flex-row-reverse text-right" : ""}`}>
      <div className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border ${side === "left" ? "border-purple-500" : "border-pink-500"}`}>
        <Image
          src={fighter.image}
          alt={fighter.name}
          fill
          sizes="56px"
          className="object-cover"
          placeholder="blur"
          blurDataURL={fighter.blurDataUrl}
        />
      </div>
      <div className={side === "right" ? "text-right" : ""}>
        <h4 className="text-sm sm:text-base font-bold text-white leading-tight">{fighter.name}</h4>
        <p className="text-xs text-purple-400">
          &quot;{fighter.nickname}&quot;
        </p>
        <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">
          {fighter.record.wins}V - {fighter.record.losses}D · {fighter.weight}
        </p>
      </div>
    </div>
  );
}
