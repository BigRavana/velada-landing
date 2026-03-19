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
    <section id="schedule" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-neon-pink to-neon-yellow bg-clip-text text-transparent">
              Cartel del Evento
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tres horas de acción ininterrumpida con los mejores combates
          </p>
        </div>

        <div ref={ref} className="space-y-6">
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
        return "Main Event";
      case "co-main-event":
        return "Co-Main Event";
      case "undercard":
        return `Combate ${index}`;
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
    <article className="group relative rounded-2xl bg-dark-200 border border-dark-300 overflow-hidden hover:border-neon-purple/50 transition-colors">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white">{getEventTypeLabel()}</h3>
            <Badge variant={getBadgeVariant()}>
              {event.status === "upcoming" ? "Próximo" : event.status === "live" ? "EN VIVO" : "Finalizado"}
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-mono">{formatTime(new Date(event.scheduledTime))}</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <FighterInfo fighter={fighter1} side="left" />
          
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl font-black text-gray-600 group-hover:text-neon-purple transition-colors">
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
    <div className={`flex items-center gap-4 flex-1 ${side === "right" ? "flex-row-reverse text-right" : ""}`}>
      <div className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 ${side === "left" ? "border-neon-blue" : "border-neon-pink"}`}>
        <Image
          src={fighter.image}
          alt={fighter.name}
          fill
          sizes="80px"
          className="object-cover"
          placeholder="blur"
          blurDataURL={fighter.blurDataUrl}
        />
      </div>
      <div className={side === "right" ? "text-right" : ""}>
        <h4 className="text-lg sm:text-xl font-bold text-white">{fighter.name}</h4>
        <p className={`text-sm text-neon-blue ${side === "right" ? "" : ""}`}>
          &quot;{fighter.nickname}&quot;
        </p>
        <p className="text-xs text-gray-500 mt-1">
          {fighter.record.wins}V - {fighter.record.losses}D - {fighter.record.draws}E | {fighter.weight}
        </p>
      </div>
    </div>
  );
}
