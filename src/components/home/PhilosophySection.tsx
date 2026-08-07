"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function PhilosophySection() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Subtle parallax for images
  const y1 = useTransform(scrollYProgress, [0, 1], ["-5%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} id="philosophy" className="relative w-full bg-background text-primary py-24 sm:py-32 overflow-hidden">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Opening Statement */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-3xl mx-auto"
          >
            <p className="font-semibold text-secondary tracking-widest uppercase text-sm mb-4">
              Our Philosophy
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.15] text-primary mb-6">
              We don&apos;t believe in one-size-fits-all wellness.
            </h2>
          </motion.div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start relative z-10 mb-32 lg:mb-48">
          
          {/* Left: Tall Parallax Image */}
          <div className="lg:col-span-7 relative">
            <motion.div 
              style={{ y: y1 }}
              className="relative w-full aspect-4/5 sm:aspect-4/3 lg:aspect-3/4 rounded-[16px] overflow-hidden shadow-2xl shadow-primary/10"
            >
              {/* Added scale to prevent empty edges during parallax */}
              <Image 
                src="/images/1st-optimized.webp"
                alt="Personalized Wellness"
                fill
                className="object-cover scale-110"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </motion.div>
          </div>

          {/* Right: Editorial Typography */}
          <div className="lg:col-span-5 lg:pt-48 flex flex-col space-y-16">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="pl-6 sm:pl-8 border-l border-secondary/30 relative"
            >
              <div className="absolute top-0 left-0 w-0.75 h-12 bg-accent rounded-full translate-x-[-1.5px]" />
              <p className="text-4xl font-heading font-medium text-primary leading-tight mb-6">
                We believe every person is unique.
              </p>
              <p className="text-lg leading-relaxed font-medium text-primary/80">
                Harmony of Life provides a personalized approach designed to help you build sustainable habits that support your body&apos;s natural ability to produce energy, adapt, recover, and thrive.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="pl-6 sm:pl-8 border-l border-secondary/30"
            >
              <p className="text-lg leading-relaxed font-medium text-primary/80">
                Because when your <span className="italic font-semibold text-primary">Cellular Charge</span> is supported, your cells are better equipped to communicate, generate energy, and perform their essential functions. And when your cells function at their best, your <span className="italic font-semibold text-primary">Lifeforce</span> can flourish.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Cinematic Closing Statement / Glassmorphic Overlap */}
        <div className="relative w-full h-125 sm:h-auto sm:aspect-video lg:aspect-21/9 rounded-[16px] overflow-hidden mt-24 lg:mt-48 shadow-2xl shadow-primary/10">
          {/* Background Image with slow upward parallax */}
          <motion.div style={{ y: y2 }} className="absolute inset-0 origin-center h-[120%] top-[-10%]">
            <Image 
              src="/images/2nd-optimized.webp"
              alt="Cellular Life Movement"
              fill
              className="object-cover scale-105"
              sizes="100vw"
            />
            {/* Dark overlay to make text pop */}
            <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
          </motion.div>

          {/* Floating Frosted Glass Card */}
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="bg-primary/20 backdrop-blur-2xl border border-white/20 p-6 sm:p-12 lg:p-16 rounded-[16px] max-w-4xl text-center shadow-2xl w-full sm:w-auto"
            >
              <h3 className="font-heading text-4xl sm:text-5xl font-medium text-white leading-[1.1] mb-6 sm:mb-8 drop-shadow-sm">
                This is more than a<br className="hidden sm:block"/> wellness platform.
              </h3>
              <p className="text-white/90 text-base sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
                It is a movement dedicated to helping people create a healthier, more energetic, and more vibrant life from the cellular level upward.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
