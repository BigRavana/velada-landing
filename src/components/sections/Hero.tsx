"use client";

import { EVENT_INFO, EVENT_DATE } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import { Countdown } from "./Countdown";
import { Button } from "@/components/ui/Button";
import { MapPin, Calendar, Ticket, Play } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-dark-100" />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/30 rounded-full blur-[120px]" />
      </div>

      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="mb-8 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-neon-purple/20 text-neon-purple text-sm font-semibold mb-6 border border-neon-purple/30">
            {EVENT_INFO.subtitle}
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-4">
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
              {EVENT_INFO.name}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-2">{EVENT_INFO.tagline}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-gray-400 animate-slide-up">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-neon-blue" />
            <span>{formatDate(EVENT_DATE)}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-neon-pink" />
            <span>{EVENT_INFO.venue}, {EVENT_INFO.location}</span>
          </div>
        </div>

        <div id="countdown" className="mb-16 animate-slide-up">
          <Countdown />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up">
          <Button size="lg" className="group">
            <Ticket className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Comprar Entradas
          </Button>
          <Button size="lg" variant="outline" className="group">
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Ver Cartel Completo
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#fighters"
            className="flex flex-col items-center text-gray-500 hover:text-neon-blue transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#fighters")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
