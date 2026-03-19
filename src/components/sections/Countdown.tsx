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
        <span className="text-2xl sm:text-3xl font-bold text-pink-500 animate-pulse">
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
    <div className={cn("flex flex-wrap justify-center gap-2 sm:gap-0", className)}>
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center">
          <div className="flex flex-col items-center">
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 sm:px-6 sm:py-4 min-w-[65px] sm:min-w-[85px]">
              <span className="block text-3xl sm:text-5xl font-bold font-mono text-white text-center tabular-nums">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            <span className="mt-2 text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest">
              {unit.label}
            </span>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="text-3xl sm:text-5xl font-bold text-neutral-700 mx-1 sm:mx-2 -mt-4">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
