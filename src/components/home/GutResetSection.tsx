"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const }
  },
};

export function GutResetSection() {
  return (
    <section id="gut-reset" className="relative w-full bg-background py-24 sm:py-32 overflow-hidden">
      {/* Subtle background glow to add a mystical feel, mirroring HealthspanSection */}
      <div className="absolute top-0 right-1/4 w-full h-125 bg-secondary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Image Container (Matches Healthspan styling but on the left) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full aspect-square max-w-150 mx-auto lg:mx-0 order-2 lg:order-1"
          >
            {/* Glassmorphic ethereal frame - rotated slightly opposite to Healthspan */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-2xl transform -rotate-3 scale-[1.02] transition-transform duration-700 hover:rotate-0 border border-white/50 shadow-2xl shadow-primary/5" />
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/60 shadow-inner">
              <Image 
                src="/images/Human_microbiome_biological_comm…_202608041313.jpeg"
                alt="Gut Reset Visualization"
                fill
                className="object-cover object-center scale-[1.01] hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col space-y-8 order-1 lg:order-2"
          >
            <motion.div variants={itemVariants}>
                
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary font-semibold leading-[1.15]">
                Gut reset is the command<br className="hidden sm:block" /> center of charge
              </h2>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-primary/70 font-medium text-lg leading-relaxed max-w-xl">
              A compromised gut blocks every electron you try to absorb. Heal the lining, feed the good bacteria, and watch your voltage surge back to life.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-8">
              <Link 
                href="#living-young"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-primary text-background hover:bg-primary/90 rounded-sm px-10 py-6 font-medium text-base transition-all shadow-lg shadow-primary/10"
                )}
              >
                Heal
              </Link>
              <Link 
                href="#pillars"
                className="group flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors px-4 py-2"
              >
                Pillars 
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-accent" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
