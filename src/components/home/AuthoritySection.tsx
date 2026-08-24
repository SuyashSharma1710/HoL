"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Compass, Zap, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

const portraitVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] as const }
  }
};

const pillarCards = [
  {
    icon: Target,
    title: "His Vision",
    desc: "To stop the rise of chronic lifestyle disorders across India by empowering individuals with root-cause understanding rather than symptom management.",
  },
  {
    icon: Compass,
    title: "His Philosophy",
    desc: "Bridging the timeless wisdom of holistic lifestyle harmony with the profound science of cellular vitality and natural healing.",
  },
  {
    icon: Zap,
    title: "The Core Principle",
    desc: "When your cells receive the right nutrition, deep detox, and daily care, natural vitality returns. The body is built to restore itself.",
  },
];

export function AuthoritySection() {
  return (
    <section 
      id="authority" 
      className="relative w-full bg-background overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-radial from-glow/15 via-accent/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-secondary/10 to-transparent blur-2xl pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-10 items-center"
        >
          
          {/* ========================================================= */}
          {/* COLUMN 1: Left Editorial Narrative & Actions (Col 4)     */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            {/* Eyebrow Pill Badge */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="relative overflow-hidden inline-flex items-center gap-2 font-sans font-semibold text-[11px] sm:text-xs tracking-[0.2em] text-primary uppercase bg-background/80 border border-accent/40 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-xs">
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none"
                  animate={{ translateX: ["-120%", "220%"] }}
                  transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
                />
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Founder &amp; Visionary</span>
              </span>
            </motion.div>

            {/* Dual-Tone Display Title */}
            <motion.h2 
              variants={itemVariants}
              className="tracking-tight leading-none mb-2"
            >
              <span className="block font-heading text-3xl sm:text-4xl xl:text-5xl font-semibold text-primary tracking-tight leading-[1.1]">
                A Visionary Who Believes
              </span>
              <span className="block font-heading italic text-2xl sm:text-3xl xl:text-4xl font-medium text-accent leading-[1.15] mt-1 drop-shadow-xs">
                The Body Can Heal Itself.
              </span>
            </motion.h2>

            {/* Amber Gold Divider */}
            <motion.div 
              variants={itemVariants}
              className="w-14 h-[2.5px] bg-accent my-4 sm:my-5 rounded-full"
            />

            {/* Narrative Body Copy */}
            <motion.p 
              variants={itemVariants}
              className="font-sans text-primary/85 text-sm sm:text-base leading-relaxed font-normal mb-6"
            >
              Dr. Ashutosh Rastogi, Ph.D. founded Harmony of Life on a profound truth: given the right cellular conditions, clean nourishment, and daily care, the human body is naturally equipped to restore balance and vitality.
            </motion.p>

            {/* Doctor Signature Callout */}
            <motion.div 
              variants={itemVariants}
              className="mb-8 p-4 rounded-2xl bg-white/50 border border-accent/20 backdrop-blur-xs w-full"
            >
              <p className="font-heading text-lg font-semibold text-primary">
                Dr. Ashutosh Rastogi, Ph.D.
              </p>
              <p className="font-sans text-xs tracking-wider text-secondary uppercase font-semibold mt-0.5">
                Founder &amp; Chief Visionary, Harmony of Life
              </p>
            </motion.div>

            {/* Full-Pill CTA Cluster */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-row flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              {/* Primary Solid Gold Pill CTA */}
              <Link
                href="#cta"
                className="relative overflow-hidden inline-flex items-center justify-center bg-accent hover:bg-[#a6782e] text-white font-medium text-sm px-6 sm:px-7 py-3.5 rounded-full shadow-md shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
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
                <span className="relative z-1 flex items-center gap-2">
                  Connect with Us
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>

              {/* Secondary Frosted Outline Pill CTA */}
              <Link
                href="#pillars"
                className="relative overflow-hidden inline-flex items-center justify-center bg-background/50 hover:bg-background/80 text-primary border border-accent/60 backdrop-blur-md font-medium text-sm px-6 sm:px-7 py-3.5 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
              >
                <span className="relative z-1">Explore Framework</span>
              </Link>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 2: Center Framed Portrait Artwork (Col 4)          */}
          {/* ========================================================= */}
          <motion.div 
            variants={portraitVariants}
            className="lg:col-span-4 flex flex-col items-center justify-center relative my-2 lg:my-0"
          >
            {/* Ambient Radial Aura behind portrait */}
            <div className="absolute inset-0 scale-105 bg-radial from-glow/30 via-accent/10 to-transparent blur-2xl rounded-3xl -z-10" />

            {/* Framed Portrait Box */}
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none aspect-square rounded-3xl ">
              <Image
                src="/images/dr-ashutosh-rastogi.png"
                alt="Dr. Ashutosh Rastogi, Ph.D. - Harmony of Life Founder"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 380px"
                className="object-contain object-top hover:scale-103 transition-transform duration-700 ease-out"
              />

              {/* Subtle top and bottom atmospheric gradients inside the frame */}
              {/* <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-primary/20 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-primary/60 via-primary/20 to-transparent pointer-events-none" /> */}

              {/* Floating Bottom Credential Tag */}
              <div className="absolute bottom-4 inset-x-4 flex justify-center pointer-events-none">
                <div className="relative overflow-hidden bg-background/90 border border-accent/50 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-glow ring-2 ring-accent shadow-[0_0_6px_#ffd875] animate-pulse shrink-0" />
                  <span className="font-sans text-xs font-semibold text-primary tracking-wide whitespace-nowrap">
                    Founder of Harmony of Life
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* COLUMN 3: Right Structured Vision & Philosophy Cards      */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5">
            {pillarCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 sm:p-6 rounded-2xl bg-white/75 border border-white/90 shadow-xs hover:shadow-md hover:border-accent/40 backdrop-blur-md transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon Pill */}
                    <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col">
                      <h3 className="font-heading text-lg sm:text-xl font-semibold text-primary mb-1">
                        {card.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-primary/75 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Bottom Mini Affirmation Banner */}
            <motion.div
              variants={itemVariants}
              className="p-4 rounded-2xl bg-secondary/15 border border-secondary/25 flex items-center gap-3"
            >
              <Sparkles className="w-4 h-4 text-accent shrink-0" />
              <p className="font-sans text-xs text-primary/85 font-medium leading-normal">
                <em>&ldquo;When you give the body the right conditions, it knows exactly how to heal itself.&rdquo;</em>
              </p>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
