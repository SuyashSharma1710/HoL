"use client";

import { SolarSystem } from "@/components/ui/SolarSystem";

export default function Pillars() {
  return (
    <section id="pillars" className="w-full min-h-screen bg-background flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12 text-center tracking-tight">
        The Science & Art of Living Young
      </h2>
      <SolarSystem centerLogo="/images/astral-body.png" />
    </section>
  );
}
