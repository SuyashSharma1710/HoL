"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FlipText } from "@/components/ui/FlipText";
import { AuroraHero } from "@/components/ui/AuroraHero";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const quotes = [
  "Presence of Lifeforce is Life.",
  "Absence of Lifeforce is Death.",
  "Blockages in Lifeforce cause Disease.",
];

const badges = ["ATP", "Mitochondria", "Magnesium", "Zinc"];

export default function Authority() {
  const container = useRef<HTMLElement>(null);
  const auroraRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    // Pin the container and update index on scroll
    ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: "+=300%", // 3 times the viewport height for scrolling
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        // progress is 0 to 1
        const index = Math.min(
          quotes.length - 1,
          Math.floor(self.progress * quotes.length)
        );
        setActiveIndex(index);
      }
    });

    // Fade OUT the solid cream overlay instead of fading IN the complex blended AuroraHero
    gsap.to(auroraRef.current, {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true
      }
    });
  }, { scope: container });

  return (
    <section id="authority" ref={container} className="h-screen w-full bg-background flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="absolute inset-0 w-full h-full -z-10">
        <AuroraHero title="" className="w-full h-full min-h-screen" />
        {/* This solid overlay fades out to reveal the AuroraHero below it */}
        <div ref={auroraRef} className="absolute inset-0 w-full h-full bg-background pointer-events-none" />
      </div>

      <div className="absolute top-1/4 text-secondary font-sans text-sm font-medium tracking-[0.05em]">
        Dr. Ashutosh Rastogi
      </div>

      <div className="relative w-full max-w-5xl h-48 flex items-center justify-center px-4">
        <h2 className="absolute text-4xl md:text-5xl font-heading font-bold text-center text-foreground tracking-[-0.02em]">
          <FlipText key={activeIndex} loop={false}>
            {"\"" + quotes[activeIndex] + "\""}
          </FlipText>
        </h2>
      </div>

      {/* Bottom Anchor */}
      <div className="absolute bottom-16 flex flex-wrap justify-center gap-4 px-4">
        {badges.map((badge, i) => (
          <div key={i} className="backdrop-blur-md bg-foreground/5 border border-foreground/10 rounded-full px-8 py-4 text-foreground font-sans text-sm font-medium tracking-[0.05em] shadow-sm">
            {badge}
          </div>
        ))}
      </div>
    </section>
  );
}
