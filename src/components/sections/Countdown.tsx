"use client";

import { useEffect, useState } from "react";
import { calculateTimeLeft } from "@/lib/utils";
import { EVENT_DATE } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CountdownProps {
  className?: string;
}

export function Countdown({ className }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(EVENT_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(EVENT_DATE));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.isExpired) {
    return (
      <div className={cn("text-center", className)}>
        <span className="text-4xl font-bold text-neon-red animate-pulse">
          ¡EL EVENTO HA COMENZADO!
        </span>
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Seg" },
  ];

  return (
    <div className={cn("flex flex-wrap justify-center gap-4 sm:gap-6", className)}>
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-4 sm:gap-6">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-neon-blue/20 blur-xl rounded-lg" />
              <div className="relative bg-dark-100 border border-neon-blue/30 rounded-lg px-4 py-3 sm:px-6 sm:py-4 min-w-[70px] sm:min-w-[90px]">
                <span className="block text-3xl sm:text-5xl font-bold font-mono text-neon-blue text-center">
                  {String(unit.value).padStart(2, "0")}
                </span>
              </div>
            </div>
            <span className="mt-2 text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
              {unit.label}
            </span>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="text-3xl sm:text-5xl font-bold text-neon-blue/50 -mt-6 sm:-mt-8">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
