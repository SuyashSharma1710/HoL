"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CommunityIntake() {
  return (
    <section id="community" data-theme="dark" className="min-h-screen w-full bg-primary flex items-center justify-center relative py-32 px-4 overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] max-w-4xl bg-secondary/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] max-w-2xl bg-tertiary/10 blur-[120px] pointer-events-none rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-5xl backdrop-blur-3xl bg-background/5 border border-background/10 rounded-4xl p-8 md:p-24 z-10 flex flex-col items-center text-center shadow-[0_0_80px_-15px_rgba(182,156,95,0.15)] relative overflow-hidden group"
      >
        
        {/* Subtle inner border glow on hover */}
        <div className="absolute inset-0 rounded-4xl border border-secondary/0 group-hover:border-secondary/30 transition-colors duration-1000 pointer-events-none" />

        <h2 className="text-4xl md:text-5xl font-bold text-background mb-6 leading-tight tracking-tight">
          Start Detoxing at the Root.<br />
          <span className="text-background/40 block mt-2 text-4xl md:text-5xl">Not just symptoms... but your cells.</span>
        </h2>
        
        <p className="text-lg text-background/80 mb-16 max-w-2xl font-light">
          Join Harmony of Life to know how to increase lifeforce.
        </p>
        
        <motion.a
          href="https://wa.me/918800828863"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-4 bg-secondary text-foreground font-bold rounded-full px-8 py-4 shadow-[0_0_40px_rgba(181,153,94,0.4)] transition-shadow hover:shadow-[0_0_60px_rgba(181,153,94,0.6)] cursor-pointer"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="text-lg tracking-wide">Connect on WhatsApp</span>
        </motion.a>

        <div className="mt-16 inline-block backdrop-blur-md bg-background/5 border border-background/10 rounded-full px-8 py-4">
          <p className="text-background/60 text-sm md:text-lg font-medium tracking-widest uppercase">
            Call or Whatsapp <span className="text-background font-bold ml-2">8800828863</span>
          </p>
        </div>

      </motion.div>

    </section>
  );
}
