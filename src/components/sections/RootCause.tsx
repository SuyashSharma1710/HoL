"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TwistingRibbon } from "@/components/ui/TwistingRibbon";
import { Pizza, Brain, Sprout, Activity, TestTube, Moon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const cardsData = [
  { title: "Processed Diet", desc: "Excessive refined sugars", details: "Modern diets rely heavily on processed foods and refined sugars that feed harmful gut bacteria, cause severe inflammation, and drain your body's natural energy reserves.", icon: Pizza },
  { title: "Chronic Stress", desc: "High cortisol levels", details: "Prolonged exposure to stress keeps cortisol levels artificially high. This constant 'fight or flight' state prevents cellular repair and accelerates the aging process.", icon: Brain },
  { title: "Soil Depletion", desc: "Lack of core minerals", details: "Conventional farming practices have stripped our soil of essential trace minerals like magnesium and zinc. Even when eating healthy, our cells are starved of the building blocks they need.", icon: Sprout },
  { title: "Sedentary Life", desc: "Poor circulation", details: "Sitting for prolonged periods stagnates blood flow and lymphatic drainage. Toxins build up when our natural circulatory pump is turned off by inactivity.", icon: Activity },
  { title: "Microplastics", desc: "Endocrine disruption", details: "Invisible microplastics in our water and food chain act as endocrine disruptors. They mimic hormones in the body, leading to metabolic chaos and toxic accumulation.", icon: TestTube },
  { title: "Sleep Deficit", desc: "Halted cellular repair", details: "Without adequate deep sleep, the brain's glymphatic system cannot clear metabolic waste. Chronic sleep debt literally halts the deep detoxification our cells rely on.", icon: Moon },
];

export default function RootCause() {
  const container = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedCard, setSelectedCard] = useState<typeof cardsData[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
    <section id="root-cause" aria-labelledby="root-cause-title" ref={container} className="min-h-dvh md:h-screen w-full bg-background flex flex-col items-center justify-center relative overflow-hidden py-32 md:py-24">
      
      <div className="absolute inset-0 w-full h-full -z-20 opacity-20 pointer-events-none" aria-hidden="true">
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
        <h2 id="root-cause-title" className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 tracking-tight">
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
              className="w-full max-w-sm"
            >
              <div 
                className="group w-full h-full backdrop-blur-xl bg-white/60 hover:bg-white/80 border border-white/50 hover:border-secondary/40 rounded-2xl p-8 flex flex-col items-start justify-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(181,153,94,0.15)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-pointer"
                onClick={() => {
                  setSelectedCard(card);
                  setIsDialogOpen(true);
                }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                
                <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-secondary/10 flex items-center justify-center mb-6 text-primary group-hover:text-secondary transition-colors duration-500 relative z-10">
                  <card.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-secondary transition-colors duration-500 mb-2 relative z-10">{card.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed relative z-10">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-background/95 backdrop-blur-xl border border-foreground/10 text-foreground rounded-xl max-w-md">
          <DialogHeader className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center text-secondary mb-2">
              {selectedCard && <selectedCard.icon className="w-8 h-8" />}
            </div>
            <DialogTitle className="text-3xl font-bold font-bricolage">{selectedCard?.title}</DialogTitle>
            <DialogDescription className="text-lg text-foreground/80 leading-relaxed">
              {selectedCard?.details}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}
