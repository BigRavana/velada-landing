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
      <div className="absolute inset-0 bg-black" />
      
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-pink-900/10 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 opacity-[0.015]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          <p className="text-sm sm:text-base uppercase tracking-[0.3em] text-purple-400 mb-6">
            {EVENT_INFO.date}
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-black leading-[0.9] tracking-tight mb-6">
            <span className="text-gradient">
              {EVENT_INFO.name}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            {EVENT_INFO.tagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-12 text-gray-500 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{formatDate(EVENT_DATE)}</span>
          </div>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{EVENT_INFO.venue}</span>
          </div>
        </div>

        <div id="countdown" className="mb-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <Countdown />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6">
            <Ticket className="w-5 h-5 mr-2" />
            Comprar Entradas
          </Button>
          <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 px-8 py-6">
            <Play className="w-5 h-5 mr-2" />
            Ver Cartel
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#fighters"
          className="flex flex-col items-center text-gray-600 hover:text-white transition-colors"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#fighters")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] mb-2">Descubre más</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
