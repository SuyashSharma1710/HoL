"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Salad, Sparkles, HeartPulse, FlaskConical, ShieldPlus, 
  Flame, Moon, Activity, ShieldCheck, Users, TreePine, 
  Zap, X, ChevronLeft, ChevronRight, ChevronDown
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const pillars = [
  { num: "01", name: "Balanced Nutrition", icon: Salad, image: "/images/balanced-nutritionp.jpeg" },
  { num: "02", name: "Deep Detox", icon: Sparkles, image: "/images/deep-detoxp.jpeg" },
  { num: "03", name: "Artery Cleanse", icon: HeartPulse, image: "/images/artery-cleansp.jpeg" },
  { num: "04", name: "Gut Reset", icon: ShieldPlus, image: "/images/gut-resetp.jpeg" },
  { num: "05", name: "Cellular Vitality", icon: Zap, image: "/images/cellular-vitalityp.jpeg" },
  { num: "06", name: "Inflammation Support", icon: Flame, image: "/images/inflamantionp.jpeg" },
  { num: "07", name: "Immunity Strength", icon: ShieldCheck, image: "/images/immunityp.jpeg" },
  { num: "08", name: "Deep Sleep", icon: Moon, image: "/images/deep-sleepp.jpeg" },
  { num: "09", name: "Regular Exercise & Yoga", icon: Activity, image: "/images/regular-exercisep.jpeg" },
  { num: "10", name: "Nature Connect", icon: TreePine, image: "/images/nature-connectp.jpeg" },
  { num: "11", name: "Social Connect", icon: Users, image: "/images/social-connectp.jpeg" },
  { num: "12", name: "Alkaline Chemistry", icon: FlaskConical, image: "/images/alkaline-chemistryp.jpeg" },
];

export function PillarsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Pinned scroll management across 2 stages
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Stage 1: "HOW DO WE INCREASE CELLULAR CHARGE" card
  const stage1Opacity = useTransform(scrollYProgress, [0, 0.32, 0.44], [1, 1, 0]);
  const stage1Scale = useTransform(scrollYProgress, [0, 0.32, 0.44], [1, 1, 0.9]);
  const stage1Y = useTransform(scrollYProgress, [0, 0.32, 0.44], [0, 0, -40]);
  const stage1Display = useTransform(scrollYProgress, (v) => v > 0.45 ? "none" : "flex");
  const stage1PointerEvents = useTransform(scrollYProgress, (v) => v > 0.45 ? "none" : "auto");

  // Stage 2: "THE FRAMEWORK: How we restore your cellular charge" card + 12 Pillars Orbit
  const stage2Opacity = useTransform(scrollYProgress, [0.45, 0.58, 1], [0, 1, 1]);
  const stage2Scale = useTransform(scrollYProgress, [0.45, 0.58, 1], [0.94, 1, 1]);
  const stage2Y = useTransform(scrollYProgress, [0.45, 0.58, 1], [40, 0, 0]);
  const stage2Display = useTransform(scrollYProgress, (v) => v < 0.43 ? "none" : "flex");
  const stage2PointerEvents = useTransform(scrollYProgress, (v) => v < 0.43 ? "none" : "auto");

  // Scroll Progress indicator
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["15%", "100%"]);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % pillars.length);
    }
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + pillars.length) % pillars.length);
    }
  }, [selectedIndex]);

  // Lock body scroll when modal is open + Keyboard Navigation
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedIndex(null);
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedIndex, handlePrev, handleNext]);

  const selectedPillar = selectedIndex !== null ? pillars[selectedIndex] : null;

  return (
    <section 
      id="pillars" 
      ref={containerRef} 
      className="relative w-full h-[240vh] bg-background text-primary"
    >
      {/* Sticky Viewport Shell */}
      <div className="sticky top-0 h-dvh w-full overflow-hidden flex items-center justify-center select-none">
        
        {/* ========================================================= */}
        {/* SINGLE UNIFIED BACKGROUND CANVAS (Fixed for both stages)  */}
        {/* ========================================================= */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Background (16:9) */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src="/images/cellular-restore-bg-desktop.jpg"
              alt="Cellular Health & Longevity Framework"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Mobile Background (9:16) */}
          <div className="block md:hidden absolute inset-0">
            <Image
              src="/images/cellular-restore-bg-mobile.jpg"
              alt="Cellular Health & Longevity Framework"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Atmospheric Ambient Gradients & Edge Transitions */}
          <div className="absolute inset-0 bg-background/5 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-32 sm:h-48 lg:h-56 bg-linear-to-b from-background via-background/60 to-transparent pointer-events-none z-1" />
          <div className="absolute inset-x-0 bottom-0 h-32 sm:h-48 lg:h-56 bg-linear-to-t from-background via-background/60 to-transparent pointer-events-none z-1" />
        </div>

        {/* Ambient Center Glow Flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-180 max-h-180 rounded-full bg-radial from-white/60 via-accent/15 to-transparent blur-3xl pointer-events-none z-1" />


        {/* ========================================================= */}
        {/* STAGE 1: INTRO QUESTION ("HOW DO WE INCREASE...")         */}
        {/* ========================================================= */}
        <motion.div 
          style={{ 
            opacity: stage1Opacity, 
            scale: stage1Scale, 
            y: stage1Y,
            display: stage1Display,
            pointerEvents: stage1PointerEvents
          }}
          className="absolute inset-0 z-10 flex items-center justify-center p-4 sm:p-6 lg:p-8"
        >
          <div className="relative w-full max-w-5xl mx-auto bg-white/80 backdrop-blur-2xl border border-white/95 sm:border-accent/40 rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
            
            {/* Subtle Top-Right Ambient Glow Flare */}
            <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-accent/20 blur-2xl pointer-events-none" />

            {/* Sacred Lotus Icon Emblem */}
            <div className="flex justify-center mb-4 sm:mb-6 text-accent">
              <LotusIcon className="w-12 h-12 sm:w-14 sm:h-14 stroke-accent stroke-[1.5]" />
            </div>

            {/* Main Editorial Display Heading */}
            <div className="space-y-1 sm:space-y-2 mb-6">
              <span className="block font-heading font-medium text-2xl sm:text-3xl lg:text-4xl text-primary tracking-[0.14em] uppercase leading-tight">
                HOW DO WE
              </span>
              <span className="block font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1a4a40] tracking-[0.12em] uppercase leading-tight">
                INCREASE
              </span>
              <h2 className="block font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-primary tracking-[0.08em] uppercase leading-tight drop-shadow-xs">
                CELLULAR CHARGE
              </h2>
            </div>

            {/* Signature Gold Accent Star Divider */}
            <div className="flex items-center justify-center gap-3 my-6">
              <div className="w-12 sm:w-16 h-0.5 bg-accent/80 rounded-full" />
              <div className="w-2.5 h-2.5 rotate-45 bg-accent" />
              <div className="w-12 sm:w-16 h-0.5 bg-accent/80 rounded-full" />
            </div>

            {/* Scroll Direction Indicator Prompt */}
            <div className="flex items-center justify-center gap-2 text-primary/70 font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase mt-4">
              <span>Scroll down to explore the 12-pillar framework</span>
              <ChevronDown className="w-4 h-4 text-accent animate-bounce" />
            </div>

          </div>
        </motion.div>


        {/* ========================================================= */}
        {/* STAGE 2: THE 12 PILLARS FRAMEWORK & PRANA ENERGY BODY     */}
        {/* ========================================================= */}
        <motion.div 
          style={{ 
            opacity: stage2Opacity, 
            scale: stage2Scale, 
            y: stage2Y,
            display: stage2Display,
            pointerEvents: stage2PointerEvents
          }}
          className="absolute inset-0 z-10 flex items-center justify-center p-3 sm:p-6 lg:p-8"
        >
          <div className="relative w-full max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl border border-white/95 sm:border-accent/35 rounded-3xl shadow-2xl p-5 sm:p-8 lg:p-10 max-h-[92vh] overflow-y-auto lg:overflow-hidden flex flex-col justify-center">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Column: Framework Narrative */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-5 text-left">
                
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-1.5 max-w-fit px-3 py-1 rounded-full bg-accent/15 border border-accent/35 text-primary">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  <span className="font-sans font-semibold text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                    THE FRAMEWORK
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-[1.15]">
                  How we restore <br />
                  your <span className="italic font-medium text-accent">cellular charge.</span>
                </h2>

                {/* Amber Gold Divider */}
                <div className="w-12 h-0.5 bg-accent/90 rounded-full" />

                {/* Narrative Copy */}
                <p className="font-sans text-xs sm:text-sm lg:text-base text-primary/85 leading-relaxed">
                  A holistic protocol designed to address the root electrical cause of disease, increasing your <strong className="font-semibold text-primary">lifeforce</strong> one pillar at a time.
                </p>

                {/* 12 Foundational Pillars Metric Block */}
                <div className="flex items-center gap-4 py-2">
                  <span className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-primary leading-none">
                    12
                  </span>
                  <p className="font-heading font-medium text-sm sm:text-base lg:text-lg text-primary/90 leading-tight max-w-[170px]">
                    Foundational Pillars of Optimal Health
                  </p>
                </div>

                {/* Brand Tagline */}
                <div className="border-l-2 border-accent/80 pl-3.5 pt-0.5">
                  <p className="font-heading text-sm sm:text-base text-primary/80 font-normal">
                    The Science of <span className="italic font-medium text-accent">Living Young.</span>
                  </p>
                </div>

              </div>

              {/* Right Column: Interactive Circular 12-Pillar Orbit with Energy Body */}
              <div className="lg:col-span-7 relative w-full aspect-square max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] mx-auto flex items-center justify-center my-2 sm:my-0">
                
                {/* Circular Orbit Ring Guide Track */}
                <div className="absolute w-[85%] h-[85%] rounded-full border border-accent/30 shadow-[0_0_20px_rgba(183,135,54,0.15),_inset_0_0_20px_rgba(183,135,54,0.15)] pointer-events-none" />

                {/* Center Holographic Prana Energy Body Avatar */}
                <div className="relative z-10 w-60 h-44 sm:w-70 sm:h-70 lg:w-85 lg:h-85 overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/prana-energy-avatar.png"
                    alt="Prana Cellular Energy Body Avatar"
                    fill
                    className="object-cover object-center"
                  />
                  {/* Glowing Solar Plexus / Heart Aura Pulsing Halo */}
                  <div className="absolute top-[32%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-radial from-[#ffd875]/90 via-accent/50 to-transparent blur-md animate-pulse pointer-events-none" />
                </div>

                {/* 12 Interactive Orbital Pillar Badges */}
                {pillars.map((pillar, index) => {
                  const angle = (index / 12) * Math.PI * 2 - Math.PI / 2;
                  const radiusPercent = 42; // Radius percentage from center
                  const x = (50 + Math.cos(angle) * radiusPercent).toFixed(2);
                  const y = (50 + Math.sin(angle) * radiusPercent).toFixed(2);

                  return (
                    <div
                      key={pillar.num}
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      onClick={() => setSelectedIndex(index)}
                      className="absolute z-20 flex flex-col items-center justify-center group cursor-pointer"
                      title={pillar.name}
                    >
                      {/* Number Tag */}
                      <span className="font-mono text-[8px] sm:text-[9px] font-bold text-primary/70 group-hover:text-accent transition-colors mb-0.5">
                        {pillar.num}
                      </span>

                      {/* Icon Circle Badge */}
                      <div className="relative w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-white/95 border border-accent/40 flex items-center justify-center shadow-md group-hover:scale-115 group-hover:bg-[#1b4e47] group-hover:border-white transition-all duration-300">
                        <pillar.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-primary group-hover:text-white transition-colors" />
                      </div>

                      {/* Name Label */}
                      <span className="mt-0.5 text-[7.5px] sm:text-[8.5px] font-semibold text-primary/90 text-center leading-none bg-white/95 backdrop-blur-xs px-2 py-0.5 pt-1 rounded-full border border-accent/25 whitespace-nowrap shadow-2xs group-hover:bg-[#1b4e47] group-hover:text-white group-hover:border-white transition-all">
                        {pillar.name}
                      </span>
                    </div>
                  );
                })}

              </div>

            </div>

          </div>
        </motion.div>


        {/* ========================================================= */}
        {/* BOTTOM FLOATING SCROLL PROGRESS CONTROLLER                */}
        {/* ========================================================= */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-background/90 backdrop-blur-md px-4 py-2 rounded-full border border-accent/35 shadow-xl shadow-primary/5">
          <span className="font-sans font-semibold text-[11px] tracking-wider text-primary/70 uppercase">
            Scroll to Reveal Framework
          </span>
          <div className="w-20 h-1.5 bg-primary/15 rounded-full overflow-hidden">
            <motion.div style={{ width: progressWidth }} className="h-full bg-accent rounded-full" />
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-accent animate-pulse" />
        </div>

      </div>

      {/* ========================================================= */}
      {/* MINIMAL POSTER LIGHTBOX DIALOG (Design.md §4 & §5)        */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedPillar && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-6 bg-primary/50 backdrop-blur-md"
          >
            <motion.div 
              key={selectedPillar.num}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-auto max-w-[94vw] sm:max-w-md md:max-w-lg max-h-[94vh] bg-background/95 backdrop-blur-2xl shadow-2xl rounded-3xl p-3.5 sm:p-5 flex flex-col items-center border border-white/90 sm:border-accent/40 select-none overflow-hidden"
            >
              {/* Corner Ambient Glow Flare */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-radial from-accent/25 to-transparent blur-3xl pointer-events-none" />

              {/* Top Header Bar: Pillar Eyebrow & Close Button */}
              <div className="w-full flex items-center justify-between mb-2.5 px-0.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 mr-4 rounded-full bg-accent/15 border border-accent/35 text-primary shadow-2xs">
                  <selectedPillar.icon className="w-3.5 h-3.5 text-accent" />
                  <span className="font-sans font-semibold text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                    PILLAR {selectedPillar.num} • {selectedPillar.name}
                  </span>
                </div>

                {/* Close Button */}
                <button 
                  onClick={() => setSelectedIndex(null)}
                  className="p-2 bg-white/80 hover:bg-white backdrop-blur-md text-primary hover:text-accent transition-all rounded-full border border-accent/30 shadow-xs active:scale-90 cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Central Poster Display (Strict Non-Collapsing 3:4 Frame with Loading State) */}
              <div className="relative w-[280px] sm:w-[340px] md:w-[380px] max-w-[88vw] aspect-[3/4] max-h-[58vh] sm:max-h-[64vh] rounded-2xl overflow-hidden shadow-xl border border-accent/30 bg-[#f4eee4] flex items-center justify-center">
                
                {/* Luminous Lotus Loading Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-radial from-accent/20 via-background/80 to-background/95 z-0">
                  <div className="relative flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-2 border-accent/25 border-t-accent animate-spin" />
                    <LotusIcon className="absolute w-7 h-7 text-accent stroke-accent stroke-[1.5]" />
                  </div>
                  <span className="font-mono text-[9.5px] font-semibold text-primary/70 tracking-widest uppercase mt-2.5 animate-pulse">
                    Loading Protocol...
                  </span>
                </div>

                {/* Full-Fidelity 3:4 Poster Image */}
                <Image 
                  src={selectedPillar.image} 
                  alt={selectedPillar.name}
                  fill
                  priority
                  className="object-cover object-center relative z-10 transition-opacity duration-300"
                  sizes="(max-width: 768px) 88vw, 380px"
                />
              </div>

              {/* Primary Full-Width CTA (Old CTA Restored) */}
              <Link 
                href="#cta"
                onClick={() => setSelectedIndex(null)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#b78736] hover:bg-[#a06f20] text-white font-sans font-medium text-xs sm:text-sm shadow-[0_8px_24px_rgba(183,135,54,0.3)] transition-all hover:scale-[1.02] active:scale-95 cursor-pointer mt-3"
              >
                <span>Start Your Wellness Journey</span>
                <Sparkles className="w-4 h-4 text-white/90" />
              </Link>

              {/* Bottom Navigation Strip */}
              <div className="w-full flex items-center justify-between pt-2.5 border-t border-accent/20 mt-2.5 px-0.5">
                <button 
                  onClick={handlePrev}
                  aria-label="Previous Pillar"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 hover:bg-white border border-accent/30 text-primary font-sans font-medium text-xs transition-all hover:scale-105 active:scale-90 shadow-2xs cursor-pointer group"
                >
                  <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 text-accent" />
                  <span>Previous</span>
                </button>
                
                {/* Counter Badge */}
                <span className="font-mono text-xs font-semibold text-primary/60 tracking-wider">
                  {selectedIndex !== null ? selectedIndex + 1 : 0} / 12
                </span>

                <button 
                  onClick={handleNext}
                  aria-label="Next Pillar"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 hover:bg-white border border-accent/30 text-primary font-sans font-medium text-xs transition-all hover:scale-105 active:scale-90 shadow-2xs cursor-pointer group"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-accent" />
                </button>
              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

{/* Delicate Sacred Lotus SVG Icon */}
function LotusIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className || "w-10 h-10"}
    >
      <path d="M32 10C32 10 38 24 38 36C38 42 35 46 32 46C29 46 26 42 26 36C26 24 32 10 32 10Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" />
      <path d="M32 20C26 24 16 32 18 42C19 46 23 48 27 46C30 44 32 38 32 38" stroke="currentColor" />
      <path d="M32 20C38 24 48 32 46 42C45 46 41 48 37 46C34 44 32 38 32 38" stroke="currentColor" />
      <path d="M28 32C20 34 8 40 12 48C14 51 20 50 25 46" stroke="currentColor" />
      <path d="M36 32C44 34 56 40 52 48C50 51 44 50 39 46" stroke="currentColor" />
      <path d="M16 52C26 55 38 55 48 52" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}
