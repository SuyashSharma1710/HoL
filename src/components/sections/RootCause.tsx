"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TwistingRibbon } from "@/components/ui/TwistingRibbon";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const cardsData = [
  { title: "Processed Diet", desc: "Excessive refined sugars" },
  { title: "Chronic Stress", desc: "High cortisol levels" },
  { title: "Soil Depletion", desc: "Lack of core minerals" },
  { title: "Sedentary Life", desc: "Poor circulation" },
  { title: "Microplastics", desc: "Endocrine disruption" },
  { title: "Sleep Deficit", desc: "Halted cellular repair" },
];

export default function RootCause() {
  const container = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // DESKTOP ANIMATION
    mm.add("(min-width: 768px)", () => {
      // Pin the container
      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: true,
      });

      // Initial random scatter
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.set(card, {
          x: () => gsap.utils.random(-800, 800),
          y: () => gsap.utils.random(-800, 800),
          rotation: () => gsap.utils.random(-90, 90),
          scale: () => gsap.utils.random(0.5, 1.5),
          opacity: 0,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
        },
      });

      // Animate to scattered visible state quickly
      tl.to(cardsRef.current, {
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power1.inOut",
      });

      // Vacuum into clean rigid grid
      tl.to(cardsRef.current, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 3,
        stagger: 0.05,
        ease: "power3.inOut",
      }, "+=0.5");
    });

    // MOBILE ANIMATION
    mm.add("(max-width: 767px)", () => {
      // Reset any desktop properties just in case
      gsap.set(cardsRef.current, { clearProps: "all" });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        // Alternate coming from left (-100) and right (100)
        const xOffset = i % 2 === 0 ? -100 : 100;

        gsap.fromTo(card,
          { x: xOffset, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%", // Trigger when top of card hits 85% of viewport
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    });

    return () => mm.revert();
  }, { scope: container });

  return (
    <section id="root-cause" ref={container} className="min-h-dvh md:h-screen w-full bg-background flex flex-col items-center justify-center relative overflow-hidden py-32 md:py-24">
      
      <div className="absolute inset-0 w-full h-full -z-20 opacity-20 pointer-events-none">
        <TwistingRibbon
          lightColors={{
            face: "#142B23",   // Deep Forest
            foldA: "#B69C5F",  // Warm Gold
            foldB: "#607860",  // Muted Sage
            foldC: "#8BA58B"   // Tertiary Container
          }}
          waveSpeed={0.01}
          twistCycles={4}
        />
      </div>

      <div className="text-center z-10 px-4 mb-12 md:mb-8 shrink-0 mt-8 md:mt-0">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 tracking-tight">
          The Root Cause
        </h2>
        <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
          When Toxins Build Up: The shift from 1970 to 2025 has left our cellular environment scattered and overwhelmed.
        </p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 z-20 flex-1 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full place-items-center">
          {cardsData.map((card, i) => (
            <div
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="w-full max-w-sm backdrop-blur-lg bg-background/80 border border-primary/10 rounded-2xl p-8 flex flex-col items-start justify-center shadow-md relative"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-secondary">
                {/* SVG Icon Placeholder */}
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
