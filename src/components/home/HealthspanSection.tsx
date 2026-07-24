"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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

export function HealthspanSection() {
  return (
    <section id="about" className="relative w-full py-24 sm:py-32 lg:py-40 bg-background overflow-hidden">
      {/* Subtle background glow to add a mystical feel */}
      <div className="absolute top-0 left-1/4 w-full h-125 bg-secondary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col space-y-8"
          >
            <motion.div variants={itemVariants}>
              <p className="font-semibold text-secondary tracking-widest uppercase text-sm mb-4">
                Healthspan
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary font-semibold leading-[1.15]">
                You are living longer but <br className="hidden sm:block" /> are you living healthier?
              </h2>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-primary/70 font-medium text-lg leading-relaxed max-w-xl">
              Modern medicine has extended your years but it has not filled those years with vitality. True wealth is a body that serves you until the very last day.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="relative">
                {/* Minimalist vertical line indicator */}
                <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-primary/10 rounded-full" />
                <div className="pl-6">
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-primary mb-2">Lifespan</h3>
                  <p className="text-primary/70 font-medium leading-relaxed text-sm">
                    The total number of years you are alive
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-accent/40 rounded-full" />
                <div className="pl-6">
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-primary mb-2">Healthspan</h3>
                  <p className="text-primary/70 font-medium leading-relaxed text-sm">
                    The years you live in peak physical and mental vigor
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-8">
              <Link 
                href="#lifeforce"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-primary text-background hover:bg-primary/90 rounded-sm px-10 py-6 font-medium text-base transition-all shadow-lg shadow-primary/10"
                )}
              >
                Discover
              </Link>
              <Link 
                href="#living-young"
                className="group flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors px-4 py-2"
              >
                Science 
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-accent" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full aspect-square max-w-150 mx-auto lg:mx-0"
          >
            {/* Glassmorphic ethereal frame */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-2xl transform rotate-3 scale-[1.02] transition-transform duration-700 hover:rotate-0 border border-white/50 shadow-2xl shadow-primary/5" />
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/60 shadow-inner">
              <Image 
                src="/images/healthspan-vitality.png"
                alt="Ethereal representation of cellular vitality and healthspan"
                fill
                className="object-cover object-center scale-[1.01] hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
