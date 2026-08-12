"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function LifeforceSequenceSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background Opacity mapping for the three images
  // Phase 1 & 2 (0 - 0.5): Isolated Orb
  // Phase 3 (0.5 - 0.75): Particles Tunnel
  // Phase 4 (0.75 - 1.0): Burst

  const orbOpacity = useTransform(scrollYProgress, [0, 0.45, 0.55], [1, 1, 0]);
  const particlesOpacity = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.8], [0, 1, 1, 0]);
  const burstOpacity = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]);

  // Phase 1: Intro Text
  const p1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [0, 1, 1, 0]);
  const p1Y = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [50, 0, 0, -50]);

  // Phase 2: Dr Rastogi Quote
  // Staggering the opacity of the 3 lines and the name
  const p2L1 = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const p2L2 = useTransform(scrollYProgress, [0.3, 0.35, 0.45, 0.5], [0, 1, 1, 0]);
  const p2L3 = useTransform(scrollYProgress, [0.35, 0.4, 0.45, 0.5], [0, 1, 1, 0]);
  const p2Author = useTransform(scrollYProgress, [0.4, 0.45, 0.45, 0.5], [0, 1, 1, 0]);
  const p2Scale = useTransform(scrollYProgress, [0.45, 0.5], [1, 1.2]);
  const p2Blur = useTransform(scrollYProgress, [0.45, 0.5], ["blur(0px)", "blur(10px)"]);

  // Phase 3: The Microscopic Connection
  const p3Opacity = useTransform(scrollYProgress, [0.5, 0.55, 0.7, 0.75], [0, 1, 1, 0]);
  const p3X = useTransform(scrollYProgress, [0.5, 0.75], ["-50%", "10%"]);

  // Phase 4: The Conclusion
  // clipPath sweep from left to right
  const p4Clip = useTransform(scrollYProgress, [0.75, 0.9], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
  const p4Opacity = useTransform(scrollYProgress, [0.75, 0.8, 1], [0, 1, 1]);

  // Orb Rotation & Scaling
  const orbRotate = useTransform(scrollYProgress, [0, 0.5], [0, 180]);
  const orbScale = useTransform(scrollYProgress, [0.25, 0.5], [1, 1.2]);

  return (
    <section ref={containerRef} id="lifeforce-sequence" className="relative w-full h-[400vh] bg-background text-primary">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Background Layer 1: Orb */}
        <motion.div style={{ opacity: orbOpacity, rotate: orbRotate, scale: orbScale }} className="absolute inset-0 flex items-center justify-center origin-center">
          <Image 
            src="/images/orb-isolated.png"
            alt="Cellular Orb"
            fill
            className="object-cover mix-blend-screen scale-110"
            sizes="100vw"
            priority
          />
        </motion.div>

        {/* Background Layer 2: Particles Tunnel */}
        <motion.div style={{ opacity: particlesOpacity }} className="absolute inset-0">
          <Image 
            src="/images/orb-particles.png"
            alt="Cellular Particles"
            fill
            className="object-cover mix-blend-screen scale-110"
            sizes="100vw"
          />
        </motion.div>

        {/* Background Layer 3: Burst */}
        <motion.div style={{ opacity: burstOpacity }} className="absolute inset-0">
          <Image 
            src="/images/orb-burst.png"
            alt="Lifeforce Burst"
            fill
            className="object-cover mix-blend-screen scale-110"
            sizes="100vw"
          />
        </motion.div>

        {/* Phase 1 Text */}
        <motion.div style={{ opacity: p1Opacity, y: p1Y }} className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform">
          <h2 className="font-heading text-5xl sm:text-7xl text-center font-medium drop-shadow-sm max-w-4xl px-4">
            Lifeforce and <span className="italic text-accent">cellular charge</span>
          </h2>
        </motion.div>

        {/* Phase 2 Text (Dr Rastogi Quote) */}
        <motion.div 
          style={{ scale: p2Scale, filter: p2Blur }} 
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 w-full px-4 will-change-transform"
        >
          <div className="font-heading text-4xl sm:text-6xl text-center font-medium leading-[1.2] max-w-5xl">
            <motion.p style={{ opacity: p2L1 }} className="text-primary">Increase in lifeforce leads to <span className="italic">wellness</span></motion.p>
            <motion.p style={{ opacity: p2L2 }} className="text-primary/80">Decrease in lifeforce leads to <span className="italic">illness</span></motion.p>
            <motion.p style={{ opacity: p2L3 }} className="text-primary/60">Absence of lifeforce is <span className="italic">Death</span></motion.p>
          </div>
          <motion.p style={{ opacity: p2Author }} className="mt-8 text-xl sm:text-2xl font-sans tracking-widest uppercase text-primary/50">
            — Dr Rastogi
          </motion.p>
        </motion.div>

        {/* Phase 3 Text */}
        <motion.div style={{ opacity: p3Opacity, x: p3X }} className="absolute inset-0 flex flex-col items-start justify-center pointer-events-none pl-4 sm:pl-12 lg:pl-24 will-change-transform">
          <div className="max-w-2xl bg-white/40 backdrop-blur-md p-8 sm:p-12 border-l-2 border-accent rounded-r-2xl shadow-xl shadow-primary/5">
            <p className="text-2xl sm:text-3xl font-medium leading-relaxed text-primary drop-shadow-sm mb-6 tracking-wide">
              Every single heartbeat and breath you take literally begins at the cellular level.
            </p>
            <p className="text-xl sm:text-2xl text-primary/80 font-medium tracking-wide">
              Your body is made up of trillions of cells.
            </p>
          </div>
        </motion.div>

        {/* Phase 4 Text */}
        <motion.div style={{ opacity: p4Opacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform z-20">
          <div className="max-w-4xl text-center px-4 relative flex items-center justify-center">
            <h2 className="font-heading text-4xl sm:text-6xl font-medium leading-[1.2] text-primary/20">
              The healthier your cells, the greater your cellular charge, the greater your lifeforce.
            </h2>
            <motion.h2 
              style={{ clipPath: p4Clip }}
              className="font-heading text-4xl sm:text-6xl font-medium leading-[1.2] text-primary drop-shadow-[0_0_30px_rgba(20,43,35,0.3)] absolute inset-0 flex items-center justify-center"
            >
              The healthier your cells, the greater your cellular charge, the greater your lifeforce.
            </motion.h2>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
