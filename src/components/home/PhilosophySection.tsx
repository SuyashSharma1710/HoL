"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function PhilosophySection() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll progress relative to this section for subtle cinematic parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section 
      ref={containerRef} 
      id="philosophy" 
      className="relative w-full bg-background text-primary overflow-hidden"
    >
      {/* Cinematic Cellular Backdrop Frame */}
      <div className="relative w-full min-h-dvh sm:min-h-160 lg:h-dvh flex items-center justify-center overflow-hidden">
        
        {/* Parallax Background Image */}
        <motion.div 
          style={{ y: yParallax }} 
          className="absolute inset-0 origin-center h-[120%] top-[-10%] z-0"
        >
          <Image 
            src="/images/2nd-optimized.webp"
            alt="Cellular Vitality and Living Young Movement"
            fill
            priority
            className="object-cover object-center scale-105"
            sizes="100vw"
          />
          {/* Deep Forest Gradient Overlay for optimal contrast */}
          {/* <div className="absolute inset-0 bg-primary/45 mix-blend-multiply" /> */}
          <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-primary/40" />
        </motion.div>

        {/* Atmospheric Top & Bottom Edge Blends with Base Sand-Cream Canvas */}
        <div className="absolute inset-x-0 top-0 h-32 sm:h-48 lg:h-56 bg-linear-to-b from-background via-background/60 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-48 lg:h-56 bg-linear-to-t from-background via-background/60 to-transparent pointer-events-none z-10" />

        {/* Luminous Glassmorphic Statement Card */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative overflow-hidden bg-white/40 backdrop-blur-2xl border border-white/25 sm:border-accent/35 p-8 sm:p-12 lg:p-16 rounded-3xl max-w-3xl text-center shadow-2xl shadow-primary/30 w-full"
          >
            {/* Ambient Celestial Glow Flare inside card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-glow/15 blur-3xl rounded-full pointer-events-none" />

            {/* Dual-Tone Editorial Typography (Design.md §3) */}
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-[1.15] mb-4 sm:mb-5">
              This is more than a wellness platform,{" "}
              <span className="italic font-normal text-glow text-accent block sm:inline">
                it is a movement.
              </span>
            </h3>

            {/* Gold Accent Divider Bar (Design.md §3) */}
            <div className="w-12 h-0.5 bg-accent/90 rounded-full mx-auto mb-6 sm:mb-7 shadow-[0_0_8px_rgba(255,216,117,0.4)]" />

            {/* Narrative Body Copy (Design.md §3) */}
            <p className="font-sans text-primary/90 text-sm sm:text-base lg:text-lg font-normal leading-[1.7] max-w-2xl mx-auto mb-8 drop-shadow-xs">
              Dedicated to helping you create a healthier, more energetic, and more vibrant life—grounded in science and revitalized from the{" "}
              <strong className="font-semibold text-glow">cellular level</strong> upward.
            </p>
           
          </motion.div>
        </div>

      </div>
    </section>
  );
}

