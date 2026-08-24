"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import heroBg from "../../../public/images/hero-vitality-banner.webp";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

const annotationVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.7 + custom * 0.15, duration: 0.7, ease: "easeOut" as const }
  }),
};

export function Hero() {
  return (
    <section className="relative w-full min-h-dvh lg:h-dvh -mt-24 flex items-center overflow-hidden pt-28 pb-16 lg:py-0">
      {/* Background Image & Atmospheric Layers */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Harmony of Life - The Science of Living Young"
          fill
          priority
          fetchPriority="high"
          placeholder="blur"
          sizes="100vw"
          quality={85}
          className="object-cover object-[72%_center] sm:object-[70%_center] md:object-[65%_center] lg:object-center"
        />

        {/* Top subtle gradient for seamless navbar integration */}
        <div className="absolute inset-x-0 top-0 h-36 sm:h-44 lg:h-52 bg-linear-to-b from-background/90 via-background/50 to-transparent pointer-events-none z-1" />

        {/* Left atmospheric wash for crisp text readability across all devices */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[62%] bg-linear-to-r from-background/95 via-background/75 sm:via-background/60 to-transparent pointer-events-none z-1" />

        {/* Mobile/Tablet bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-background/80 to-transparent pointer-events-none z-1" />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 w-full max-w-360 mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text & Conversion Block */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left"
          >
            {/* Dual-Tone Display Title */}
            <motion.h1 
              variants={itemVariants}
              className="tracking-tight leading-none mb-2"
            >
              <span className="block font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.75rem] font-semibold text-primary tracking-tight leading-[1.06] drop-shadow-xs">
                Harmony of Life,
              </span>
              <span className="block font-heading italic text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-[3.85rem] font-medium text-accent leading-[1.12] mt-1.5 sm:mt-2 drop-shadow-xs">
                The Science of Living Young.
              </span>
            </motion.h1>

            {/* Amber-Gold Divider */}
            <motion.div 
              variants={itemVariants}
              className="w-14 h-[2.5px] bg-accent my-4 sm:my-6 rounded-full"
            />

            {/* Eyebrow Mission Statement */}
            <motion.p 
              variants={itemVariants}
              className="font-sans font-bold text-[11px] sm:text-xs md:text-[13px] tracking-[0.2em] text-primary/95 uppercase mb-3 sm:mb-4"
            >
              INDIA&apos;S FIRST PERSONALISED HEALTH &amp; WELLNESS COMMUNITY
            </motion.p>

            {/* Narrative Body Copy */}
            <motion.p 
              variants={itemVariants}
              className="font-sans text-primary/85 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-xl mb-7 sm:mb-9 font-normal"
            >
              Rooted in science. Guided by nature. Focused on you. We help you increase your lifeforce, improve your healthspan, and live a younger, fuller life.
            </motion.p>

            {/* Action Buttons (Full Pill Cluster with Subtle Shimmer) */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-row flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              {/* Primary Solid Pill with Golden Sheen */}
              <Link
                href="#cta"
                className="relative overflow-hidden inline-flex items-center justify-center bg-accent hover:bg-[#a6782e] text-white font-medium text-sm sm:text-base px-7 sm:px-8 py-3.5 rounded-full shadow-md shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
              >
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/35 to-transparent skew-x-12 pointer-events-none"
                  animate={{
                    translateX: ["-120%", "220%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                />
                <span className="relative z-1">Join the Community</span>
              </Link>

              {/* Secondary Frosted Outline Pill with Soft Shimmer */}
              <Link
                href="#why-hol"
                className="relative overflow-hidden inline-flex items-center justify-center bg-background/50 hover:bg-background/80 text-primary border border-accent/60 backdrop-blur-md font-medium text-sm sm:text-base px-7 sm:px-8 py-3.5 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
              >
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-accent/25 to-transparent skew-x-12 pointer-events-none"
                  animate={{
                    translateX: ["-120%", "220%"],
                  }}
                  transition={{
                    duration: 3,
                    delay: 0.8,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                />
                <span className="relative z-1">Discover More</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column / Floating Bio-Electric Annotations Area */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 relative h-130 pointer-events-none">
            
            {/* Annotation 1: Increase Lifeforce (Left of Figure) */}
            <motion.div
              custom={1}
              variants={annotationVariants}
              initial="hidden"
              animate="visible"
              className="absolute top-[28%] right-[58%] xl:right-[54%] flex items-center gap-2.5"
            >
              <span className="relative overflow-hidden font-sans text-xs xl:text-sm font-medium text-primary bg-background/80 border border-accent/40 backdrop-blur-xs px-3 py-1 rounded-full whitespace-nowrap shadow-xs">
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none"
                  animate={{ translateX: ["-120%", "220%"] }}
                  transition={{ duration: 3.5, delay: 1, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
                />
                <span className="relative z-1">Increase Lifeforce</span>
              </span>
              <div className="w-10 xl:w-14 h-px bg-accent/80" />
              <div className="w-2 h-2 rounded-full bg-glow ring-2 ring-accent shadow-[0_0_8px_#ffd875] animate-pulse" />
            </motion.div>

            {/* Annotation 2: Improve Healthspan (Left of Figure - Lower) */}
            <motion.div
              custom={2}
              variants={annotationVariants}
              initial="hidden"
              animate="visible"
              className="absolute top-[52%] right-[62%] xl:right-[58%] flex items-center gap-2.5"
            >
              <span className="relative overflow-hidden font-sans text-xs xl:text-sm font-medium text-primary bg-background/80 border border-accent/40 backdrop-blur-xs px-3 py-1 rounded-full whitespace-nowrap shadow-xs">
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none"
                  animate={{ translateX: ["-120%", "220%"] }}
                  transition={{ duration: 3.5, delay: 1.6, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
                />
                <span className="relative z-1">Improve Healthspan</span>
              </span>
              <div className="w-10 xl:w-14 h-px bg-accent/80" />
              <div className="w-2 h-2 rounded-full bg-glow ring-2 ring-accent shadow-[0_0_8px_#ffd875] animate-pulse" />
            </motion.div>

            {/* Annotation 3: Cellular Vitality (Right of Figure - Head Aura) */}
            <motion.div
              custom={3}
              variants={annotationVariants}
              initial="hidden"
              animate="visible"
              className="absolute top-[16%] right-[2%] xl:right-[6%] flex items-center gap-2.5"
            >
              <div className="w-2 h-2 rounded-full bg-glow ring-2 ring-accent shadow-[0_0_8px_#ffd875] animate-pulse" />
              <div className="w-10 xl:w-14 h-px bg-accent/80" />
              <span className="relative overflow-hidden font-sans text-xs xl:text-sm font-medium text-primary bg-background/80 border border-accent/40 backdrop-blur-xs px-3 py-1 rounded-full whitespace-nowrap shadow-xs">
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none"
                  animate={{ translateX: ["-120%", "220%"] }}
                  transition={{ duration: 3.5, delay: 2.2, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
                />
                <span className="relative z-1">Cellular Vitality</span>
              </span>
            </motion.div>

            {/* Annotation 4: Personalised Wellness (Right of Figure - Neck) */}
            <motion.div
              custom={4}
              variants={annotationVariants}
              initial="hidden"
              animate="visible"
              className="absolute top-[36%] right-[0%] xl:right-[4%] flex items-center gap-2.5"
            >
              <div className="w-2 h-2 rounded-full bg-glow ring-2 ring-accent shadow-[0_0_8px_#ffd875] animate-pulse" />
              <div className="w-10 xl:w-14 h-px bg-accent/80" />
              <span className="relative overflow-hidden font-sans text-xs xl:text-sm font-medium text-primary bg-background/80 border border-accent/40 backdrop-blur-xs px-3 py-1 rounded-full whitespace-nowrap shadow-xs">
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none"
                  animate={{ translateX: ["-120%", "220%"] }}
                  transition={{ duration: 3.5, delay: 2.8, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
                />
                <span className="relative z-1">Personalised Wellness</span>
              </span>
            </motion.div>

            {/* Annotation 5: Science Backed Solutions (Right of Figure - Shoulder) */}
            <motion.div
              custom={5}
              variants={annotationVariants}
              initial="hidden"
              animate="visible"
              className="absolute top-[56%] right-[-2%] xl:right-[2%] flex items-center gap-2.5"
            >
              <div className="w-2 h-2 rounded-full bg-glow ring-2 ring-accent shadow-[0_0_8px_#ffd875] animate-pulse" />
              <div className="w-10 xl:w-14 h-px bg-accent/80" />
              <span className="relative overflow-hidden font-sans text-xs xl:text-sm font-medium text-primary bg-background/80 border border-accent/40 backdrop-blur-xs px-3 py-1 rounded-full whitespace-nowrap shadow-xs">
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none"
                  animate={{ translateX: ["-120%", "220%"] }}
                  transition={{ duration: 3.5, delay: 3.4, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
                />
                <span className="relative z-1">Science Backed Solutions</span>
              </span>
            </motion.div>
          </div>

        </div>

        {/* Mobile/Tablet Pill Badges Row with Shimmer */}
        <div className="lg:hidden mt-8 flex flex-wrap gap-2 pt-2">
          {["Increase Lifeforce", "Improve Healthspan", "Cellular Vitality", "Personalised Wellness", "Science Backed Solutions"].map((tag, idx) => (
            <span 
              key={idx}
              className="relative overflow-hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 border border-accent/40 text-[11px] font-medium text-primary shadow-xs backdrop-blur-xs"
            >
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/45 to-transparent skew-x-12 pointer-events-none"
                animate={{ translateX: ["-120%", "220%"] }}
                transition={{ duration: 3.2, delay: idx * 0.4, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
              />
              <span className="relative z-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {tag}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

