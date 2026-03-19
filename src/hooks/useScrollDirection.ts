"use client";

import { useEffect, useState } from "react";

interface ScrollDirectionResult {
  scrollDir: "up" | "down";
  isAtTop: boolean;
}

export function useScrollDirection(): ScrollDirectionResult {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      setIsAtTop(scrollY < 50);
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    const onScroll = () => {
      requestAnimationFrame(updateScrollDir);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrollDir, isAtTop };
}
