"use client";

import React, { useMemo } from "react";
import { SolarSystem } from "@/components/ui/SolarSystem";

export default function Pillars() {
  // Generate deterministic stars to avoid hydration mismatch
  const stars = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      left: `${(i * 137.51) % 100}%`,
      top: `${(i * 93.13) % 100}%`,
      size: (i % 3) === 0 ? 2 : 1, // Occasional slightly larger star
      opacity: ((i % 5) + 3) / 10,
      animationDelay: `${i % 5}s`,
    }));
  }, []);

  return (
    <section id="pillars" aria-labelledby="pillars-title" className="relative w-full min-h-screen bg-[#05050A] flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: star.animationDelay,
              animationDuration: `${3 + (star.id % 3)}s`,
              boxShadow: star.size > 1 ? "0 0 4px 1px rgba(255,255,255,0.3)" : "none",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 id="pillars-title" className="text-4xl md:text-5xl font-heading font-bold text-white mb-12 text-center tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          The Science & Art of Living Young
        </h2>
        <div aria-hidden="true">
          <SolarSystem centerLogo="/images/astral-body-optimized.webp" />
        </div>
      </div>
    </section>
  );
}
