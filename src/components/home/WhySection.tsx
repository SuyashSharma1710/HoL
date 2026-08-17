"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function WhySection() {
  return (
    <section id="reversal" className="relative w-full bg-background text-primary py-24 sm:py-32 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="w-full grid grid-cols-1 lg:grid-cols-2 bg-background rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-primary/20 relative"
        >
          {/* Subtle inner shadow for depth */}
          <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(20,43,35,0.05)] pointer-events-none z-20" />
          
          {/* Image Side */}
          <div className="relative h-80 sm:h-96 lg:h-auto min-h-75 w-full">
            <Image 
              src="/images/resolution-joyful.png" 
              alt="Root Cause Reversal"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          
          {/* Editorial Text Side */}
          <div className="p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center relative z-10">
            <span className="font-semibold text-secondary tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-6 block">
              The Resolution
            </span>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-[1.15] mb-6 sm:mb-8">
              Addressing the <span className="italic text-accent">root cause</span> of the root cause.
            </h2>
            
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-primary/80 leading-relaxed font-medium border-l-2 border-accent pl-5 sm:pl-6">
                Harmony of Life is built entirely on this fundamental concept.
              </p>
              
              <p className="text-base sm:text-lg text-primary font-medium leading-relaxed">
                All these modern healthcare challenges will be resolved by increasing your <strong className="font-semibold text-accent italic">Lifeforce</strong> and <strong className="font-semibold text-accent italic">Cellular Charge</strong>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
