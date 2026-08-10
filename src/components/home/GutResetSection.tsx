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
    <section id="gut-reset" className="relative w-full bg-background overflow-hidden min-h-200 flex items-center">
      
      {/* Full-width Image Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Desktop Image (Landscape) */}
        <Image 
          src="/images/gut_reset_desktop.png"
          alt="Gut Reset Visualization"
          fill
          className="hidden lg:block object-cover object-left opacity-100"
          sizes="100vw"
          priority
        />
        {/* Mobile Image (Portrait) */}
        <Image 
          src="/images/gut_reset_mobile.png"
          alt="Gut Reset Visualization"
          fill
          className="block lg:hidden object-cover object-bottom opacity-90"
          sizes="100vw"
          priority
        />
        {/* Desktop: fade from right to left (since text is on the right) */}
        <div className="hidden lg:block absolute inset-0 bg-linear-to-l from-background via-background/95 to-transparent z-10" />
        
        {/* Mobile: fade from top to bottom (so text is readable on top, image visible on bottom) */}
        <div className="lg:hidden absolute inset-0 bg-linear-to-b from-background via-background/60 to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-360 mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-95 sm:pt-32 sm:pb-112.5 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left column is left empty on desktop to show the background image */}
          <div className="hidden lg:block h-120" />

          {/* Right Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary font-semibold leading-[1.15]">
                Gut reset is the command<br className="hidden sm:block" /> center of charge
              </h2>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-primary/70 font-medium text-lg leading-relaxed max-w-xl">
              A compromised gut blocks every electron you try to absorb. Heal the lining, feed the good bacteria, and watch your voltage surge back to life.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-8">
              <Link 
                href="#living-young"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-primary text-background hover:bg-primary/90 rounded-sm px-10 py-6 font-medium text-base transition-all shadow-sm"
                )}
              >
                Heal
              </Link>
              <Link 
                href="#pillars"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-primary text-primary hover:bg-primary hover:text-background rounded-sm px-8 py-6 font-medium text-base transition-all group flex items-center gap-2 bg-transparent"
                )}
              >
                Pillars 
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-primary group-hover:text-background" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
