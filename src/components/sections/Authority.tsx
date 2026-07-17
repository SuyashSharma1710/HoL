"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FlipText } from "@/components/ui/FlipText";
import { AuroraHero } from "@/components/ui/AuroraHero";
import Image from "next/image";

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

  }, { scope: container });

  return (
    <section id="authority" aria-labelledby="authority-title" ref={container} className="h-screen w-full bg-background flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="absolute inset-0 w-full h-full -z-10" aria-hidden="true">
        <AuroraHero title="" className="w-full h-full min-h-screen" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center h-full py-20 gap-12 lg:gap-24">
        
        {/* Left: Image Container */}
        <div className="w-full lg:w-1/2 flex items-center justify-center h-[40vh] lg:h-[60vh] relative">
          <div className="relative w-full max-w-sm lg:max-w-md h-full rounded-2xl md:rounded-3xl overflow-hidden border border-foreground/10 shadow-2xl">
            <Image 
              src="/images/dr_rastogi.png" 
              alt="Dr. Ashutosh Rastogi" 
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            {/* Gradient overlay to blend image bottom */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col items-start">
               <div className="bg-white text-black font-sans text-[10px] md:text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1.5 rounded-full shadow-md">
                 Founder & Visionary
               </div>
               <div className="text-white text-2xl md:text-3xl font-heading font-bold drop-shadow-md">
                 Dr. Ashutosh Rastogi
               </div>
            </div>
          </div>
        </div>

        {/* Right: Quotes & Badges */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          <div className="relative w-full h-32 md:h-48 flex items-center justify-center lg:justify-start">
            <h2 id="authority-title" className="absolute text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-[-0.02em] leading-tight">
              <FlipText key={activeIndex} loop={false}>
                {quotes[activeIndex]}
              </FlipText>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mt-6 md:mt-8">
            {badges.map((badge, i) => (
              <div key={i} className="backdrop-blur-md bg-foreground/5 border border-foreground/10 rounded-full px-6 py-3 md:px-8 md:py-4 text-foreground font-sans text-sm font-medium tracking-wide shadow-sm transition-colors hover:bg-foreground/10">
                {badge}
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
