"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const fixes = [
  { title: "Deep Detox", desc: "Cleanse the liver and cellular environment to prepare for restoration.", state: "detox" },
  { title: "Artery Cleanse", desc: "Optimize circulation to support oxygen and nutrient delivery to every cell.", state: "cleanse" },
  { title: "Gut Reset", desc: "Restore the microbiome to influence immunity, energy, and mood.", state: "reset" },
];

export default function Solution() {
  const container = useRef<HTMLElement>(null);
  const [activeState, setActiveState] = useState("gap");

  useGSAP(() => {
    const triggers = gsap.utils.toArray(".fix-item") as HTMLElement[];
    
    // Add a trigger for the initial state (the gap)
    ScrollTrigger.create({
      trigger: ".intro-item",
      start: "top center",
      end: "bottom center",
      onEnter: () => setActiveState("gap"),
      onEnterBack: () => setActiveState("gap"),
    });

    triggers.forEach((trigger: HTMLElement, i) => {
      ScrollTrigger.create({
        trigger: trigger,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveState(fixes[i].state),
        onEnterBack: () => setActiveState(fixes[i].state),
      });
    });
  }, { scope: container });

  return (
    <section id="solution" ref={container} className="w-full bg-background relative flex flex-col md:flex-row">
      
      {/* Left Column (Pinned) */}
      <div className="w-full md:w-1/2 h-screen sticky top-0 flex flex-col items-center justify-center border-r border-primary/10 p-8 overflow-hidden">
        
        <div className="absolute top-24 z-20 text-center px-8">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-2">The Breakfast Gap in India</h2>
          <p className="text-foreground/60 text-sm uppercase tracking-widest">High in Calories, Low in Nutrients.</p>
        </div>

        {/* Placeholder Graphic for 3D Plate */}
        <div className="relative w-full max-w-[24rem] aspect-square rounded-full flex items-center justify-center transition-all duration-1000 ease-out mt-12">
          
          <div className={cn(
            "absolute inset-0 rounded-full blur-[100px] transition-colors duration-1000",
            activeState === "gap" ? "bg-red-500/30" :
            activeState === "detox" ? "bg-orange-500/30" :
            activeState === "cleanse" ? "bg-blue-500/30" :
            "bg-tertiary/30" // reset/harmonious state
          )} />
          
          <div className={cn(
            "relative z-10 w-3/4 h-3/4 rounded-full border flex items-center justify-center backdrop-blur-2xl transition-all duration-1000",
            activeState === "gap" ? "border-red-500/50 bg-red-500/5" :
            activeState === "detox" ? "border-orange-500/50 bg-orange-500/5" :
            activeState === "cleanse" ? "border-blue-500/50 bg-blue-500/5" :
            "border-tertiary/50 bg-tertiary/5"
          )}>
            <span className={cn(
              "font-bold tracking-[0.3em] uppercase text-sm transition-colors duration-1000",
              activeState === "gap" ? "text-red-600" :
              activeState === "detox" ? "text-orange-600" :
              activeState === "cleanse" ? "text-blue-600" :
              "text-tertiary"
            )}>
              {activeState === "gap" ? "Warning" :
               activeState === "reset" ? "Harmonious" : "Adapting"}
            </span>
          </div>

          {/* Rotating Rings */}
          <div className="absolute inset-0 pointer-events-none border border-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-4 pointer-events-none border border-primary/10 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]" />
        </div>
      </div>

      {/* Right Column (Scrolling) */}
      <div className="w-full md:w-1/2 flex flex-col py-[25vh]">
        
        {/* Intro Item */}
        <div className="intro-item min-h-[50vh] flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <h3 className={cn(
            "text-4xl md:text-5xl font-heading font-bold mb-6 transition-all duration-500",
            activeState === "gap" ? "text-foreground scale-100 opacity-100" : "text-foreground/30 scale-95 opacity-50"
          )}>
            Start small.<br/>Stay consistent.<br/>Transform from within.
          </h3>
          <p className={cn(
            "text-lg leading-relaxed transition-colors duration-500 max-w-lg",
            activeState === "gap" ? "text-foreground/80" : "text-foreground/20"
          )}>
            Fuel your cells, not just your cravings. Scroll to reveal the biological fixes.
          </p>
        </div>

        {fixes.map((item, i) => (
          <div key={i} className="fix-item min-h-[50vh] flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <div className={cn(
              "inline-block mb-4 px-4 py-2 rounded-full text-sm font-semibold tracking-widest uppercase border transition-colors duration-500",
              activeState === item.state ? "border-secondary text-secondary bg-secondary/10" : "border-foreground/10 text-foreground/30"
            )}>
              {item.title}
            </div>
            <h3 className={cn(
              "text-4xl md:text-5xl font-heading font-bold mb-6 transition-all duration-500",
              activeState === item.state ? "text-foreground scale-100 opacity-100" : "text-foreground/30 scale-95 opacity-50"
            )}>
              {item.title}
            </h3>
            <p className={cn(
              "text-lg leading-relaxed transition-colors duration-500 max-w-lg",
              activeState === item.state ? "text-foreground/80" : "text-foreground/20"
            )}>
              {item.desc}
            </p>
          </div>
        ))}
        {/* Extra padding at the bottom so the last item can reach center screen */}
        <div className="h-[25vh]" />
      </div>

    </section>
  );
}
