"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import React, { useEffect, useState } from "react";

interface LeafData {
  id: number;
  color: string;
  left: number;
  delay: number;
  duration: number;
  scale: number;
}

const Leaf = ({ color, delay, left, duration, scale }: LeafData) => (
  <motion.div
    className="absolute top-[-10%] pointer-events-none"
    style={{ left: `${left}%`, zIndex: 5 }}
    animate={{
      y: ["0vh", "150vh"],
      x: ["0vw", "-4vw", "4vw", "-2vw", "0vw"],
      rotate: [0, 180, 360],
    }}
    transition={{
      y: { duration: duration, repeat: Infinity, ease: "linear", delay },
      x: { duration: duration * 0.7, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay },
      rotate: { duration: duration * 0.8, repeat: Infinity, ease: "linear", delay }
    }}
  >
    <div
      style={{
        width: 32 * scale,
        height: 32 * scale,
        backgroundColor: color,
        borderRadius: "100% 0% 100% 0%",
        opacity: 0.5,
        boxShadow: `0 0 15px ${color}40`
      }}
    />
  </motion.div>
);

export default function CommunityIntake() {
  const [leaves, setLeaves] = useState<LeafData[]>([]);

  useEffect(() => {
    // Generate leaves on the client asynchronously to avoid strict React 19 purity and effect warnings
    const timeoutId = setTimeout(() => {
      const colors = ["#B5995E", "#6B7D6A", "#EAE0D1", "#2B443C"];
      const newLeaves = Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        color: colors[i % colors.length],
        left: Math.random() * 100,
        delay: Math.random() * -20, // Negative delay so they start spread out on the screen
        duration: 12 + Math.random() * 18,
        scale: 0.5 + Math.random() * 0.7,
      }));
      setLeaves(newLeaves);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="community" data-theme="dark" className="min-h-screen w-full bg-primary flex items-center justify-center relative py-32 px-4 overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] max-w-4xl bg-secondary/10 blur-[150px] pointer-events-none rounded-full z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] max-w-2xl bg-tertiary/10 blur-[120px] pointer-events-none rounded-full z-0" />

      {/* Falling Leaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {leaves.map((leaf) => (
          <Leaf key={leaf.id} {...leaf} />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-5xl backdrop-blur-3xl bg-background/5 border border-background/10 rounded-xl p-8 md:p-24 z-10 flex flex-col items-center text-center shadow-[0_0_80px_-15px_rgba(182,156,95,0.15)] relative overflow-hidden group"
      >
        
        {/* Subtle inner border glow on hover */}
        <div className="absolute inset-0 rounded-xl border border-secondary/0 group-hover:border-secondary/30 transition-colors duration-1000 pointer-events-none" />

        <h2 className="text-4xl md:text-5xl font-heading font-bold text-background mb-6 leading-tight tracking-tight">
          Start Detoxing at the Root.<br />
          <span className="text-background/40 block mt-2 text-4xl md:text-5xl font-heading">Not just symptoms... but your cells.</span>
        </h2>
        
        <p className="text-lg text-background/80 mb-16 max-w-2xl font-normal">
          Join Harmony of Life to know how to increase Lifeforce.
        </p>
        
        <motion.a
          href="https://wa.me/918800828863"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-2 min-h-12 py-3 md:py-0 md:h-12 bg-secondary text-foreground font-bold rounded-full px-6 md:px-8 shadow-[0_0_40px_rgba(181,153,94,0.4)] transition-shadow hover:shadow-[0_0_60px_rgba(181,153,94,0.6)] cursor-pointer"
        >
          <MessageCircle className="w-6 h-6 md:w-8 md:h-8 shrink-0" />
          <span className="text-base md:text-lg tracking-wide whitespace-nowrap">Connect on WhatsApp</span>
        </motion.a>

        <div className="mt-8 md:mt-16 flex flex-col md:flex-row items-center justify-center min-h-12 py-3 md:py-0 md:h-12 backdrop-blur-md bg-background/5 border border-background/10 rounded-3xl md:rounded-full px-6 md:px-8 text-center gap-1 md:gap-0">
          <p className="text-background/60 text-xs md:text-lg font-medium tracking-widest uppercase">
            Call or WhatsApp 
          </p>
          <span className="text-background font-bold text-sm md:text-lg tracking-widest md:ml-2">
            8800828863
          </span>
        </div>

      </motion.div>

    </section>
  );
}
