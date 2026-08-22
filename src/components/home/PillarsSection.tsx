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

const pillars = [
  { 
    num: "01", 
    name: "Balanced Nutrition", 
    icon: Salad, 
    circleGraphic: "/images/Balance-Nutrition.jpeg",
    image: "/images/balanced-nutritionp.jpeg",
    desc: "Provide your cells with clean, real, and nutrient-dense food to fuel energy, support repair, and maintain optimal cellular function."
  },
  { 
    num: "02", 
    name: "Deep Detox", 
    icon: Sparkles, 
    circleGraphic: "/images/Deep-Detox.jpeg",
    image: "/images/deep-detoxp.jpeg",
    desc: "Remove accumulated toxins from the body at the cellular level to reduce toxic load and restore natural flow and clarity."
  },
  { 
    num: "03", 
    name: "Artery Cleanse", 
    icon: HeartPulse, 
    circleGraphic: "/images/Artery-Cleanse.jpeg",
    image: "/images/artery-cleansp.jpeg",
    desc: "Keep your arteries clean and flexible to ensure smooth blood flow, oxygen delivery, and strong heart health."
  },
  { 
    num: "04", 
    name: "Gut Reset", 
    icon: ShieldPlus, 
    circleGraphic: "/images/Gut-Reset.jpeg",
    image: "/images/gut-resetp.jpeg",
    desc: "Heal the gut, improve digestion, and build a strong foundation for immunity, mood, and hormonal balance."
  },
  { 
    num: "05", 
    name: "Cellular Vitality", 
    icon: Zap, 
    circleGraphic: "/images/Cellular-Vitality.jpeg",
    image: "/images/cellular-vitalityp.jpeg",
    desc: "Boost your cellular charge and energy production to enhance stamina, focus, and overall lifeforce."
  },
  { 
    num: "06", 
    name: "Inflammation Support", 
    icon: Flame, 
    circleGraphic: "/images/Inflammation.jpeg",
    image: "/images/inflamantionp.jpeg",
    desc: "Reduce chronic inflammation that silently damages cells and tissues, and accelerate healing from the inside out."
  },
  { 
    num: "07", 
    name: "Immunity Strength", 
    icon: ShieldCheck, 
    circleGraphic: "/images/Immunity.jpeg",
    image: "/images/immunityp.jpeg",
    desc: "Strengthen your natural defences to protect against illness, infections, and modern lifestyle challenges."
  },
  { 
    num: "08", 
    name: "Deep Sleep", 
    icon: Moon, 
    circleGraphic: "/images/Deep-Sleep.jpeg",
    image: "/images/deep-sleepp.jpeg",
    desc: "Improve sleep quality and duration to allow your body and mind to repair, regenerate, and recharge deeply."
  },
  { 
    num: "09", 
    name: "Regular Exercise & Yoga", 
    icon: Activity, 
    circleGraphic: "/images/Regular-Exercise.jpeg",
    image: "/images/regular-exercisep.jpeg",
    desc: "Move your body daily to improve circulation, flexibility, strength, and metabolic efficiency."
  },
  { 
    num: "10", 
    name: "Nature Connect", 
    icon: TreePine, 
    circleGraphic: "/images/Nature-Connect.jpeg",
    image: "/images/nature-connectp.jpeg",
    desc: "Reconnect with nature to reduce stress, balance emotions, and enhance your body's natural healing intelligence."
  },
  { 
    num: "11", 
    name: "Social Connect", 
    icon: Users, 
    circleGraphic: "/images/Social-Connect.jpeg",
    image: "/images/social-connectp.jpeg",
    desc: "Nurture meaningful relationships that uplift, support, and create emotional wellbeing."
  },
  { 
    num: "12", 
    name: "Alkaline Chemistry", 
    icon: FlaskConical, 
    circleGraphic: "/images/Alkaline-Chemistry.jpeg",
    image: "/images/alkaline-chemistryp.jpeg",
    desc: "Maintain an alkaline internal environment to support optimal cellular function and long-term health."
  },
];

export function PillarsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Pinned scroll management across 3 stages
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Stage 1 (0% - 28%): "HOW DO WE INCREASE CELLULAR CHARGE" question card
  const stage1Opacity = useTransform(scrollYProgress, [0, 0.20, 0.28], [1, 1, 0]);
  const stage1Scale = useTransform(scrollYProgress, [0, 0.20, 0.28], [1, 1, 0.9]);
  const stage1Y = useTransform(scrollYProgress, [0, 0.20, 0.28], [0, 0, -30]);
  const stage1Display = useTransform(scrollYProgress, (v) => v > 0.29 ? "none" : "flex");
  const stage1PointerEvents = useTransform(scrollYProgress, (v) => v > 0.29 ? "none" : "auto");

  // Stage 2 (30% - 58%): "THE FRAMEWORK" split card with Prana Energy Avatar & Orbit
  const stage2Opacity = useTransform(scrollYProgress, [0.30, 0.38, 0.54, 0.60], [0, 1, 1, 0]);
  const stage2Scale = useTransform(scrollYProgress, [0.30, 0.38, 0.54, 0.60], [0.94, 1, 1, 0.94]);
  const stage2Y = useTransform(scrollYProgress, [0.30, 0.38, 0.54, 0.60], [30, 0, 0, -30]);
  const stage2Display = useTransform(scrollYProgress, (v) => (v < 0.29 || v > 0.61) ? "none" : "flex");
  const stage2PointerEvents = useTransform(scrollYProgress, (v) => (v < 0.29 || v > 0.61) ? "none" : "auto");

  // Stage 3 (62% - 100%): Full-Width 12 Foundational Pillars Grid Board (Open Area)
  const stage3Opacity = useTransform(scrollYProgress, [0.62, 0.70, 1], [0, 1, 1]);
  const stage3Scale = useTransform(scrollYProgress, [0.62, 0.70, 1], [0.96, 1, 1]);
  const stage3Y = useTransform(scrollYProgress, [0.62, 0.70, 1], [30, 0, 0]);
  const stage3Display = useTransform(scrollYProgress, (v) => v < 0.61 ? "none" : "flex");
  const stage3PointerEvents = useTransform(scrollYProgress, (v) => v < 0.61 ? "none" : "auto");

  // Dynamic Background Contrast Wash (Fades when Stage 3 enters for crystal clear reading)
  const stage3BackdropOpacity = useTransform(scrollYProgress, [0.58, 0.68, 1], [0, 0.92, 0.92]);

  // Scroll Progress indicator
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["10%", "100%"]);

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
      className="relative w-full h-[360vh] bg-background text-primary"
    >
      {/* Sticky Viewport Shell */}
      <div className="sticky top-0 h-dvh w-full overflow-hidden flex items-center justify-center select-none">
        
        {/* ========================================================= */}
        {/* SINGLE UNIFIED BACKGROUND CANVAS                         */}
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

          {/* Dynamic Backdrop Fade Overlay for Stage 3 */}
          <motion.div 
            style={{ opacity: stage3BackdropOpacity }} 
            className="absolute inset-0 bg-[#e9e0cf]/90 backdrop-blur-md z-1 pointer-events-none"
          />

          {/* Atmospheric Ambient Gradients & Edge Transitions */}
          <div className="absolute inset-0 bg-background/5 pointer-events-none z-1" />
          <div className="absolute inset-x-0 top-0 h-28 sm:h-40 bg-linear-to-b from-background via-background/60 to-transparent pointer-events-none z-2" />
          <div className="absolute inset-x-0 bottom-0 h-28 sm:h-40 bg-linear-to-t from-background via-background/60 to-transparent pointer-events-none z-2" />
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
          className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-8 lg:px-12 xl:px-16 py-6 sm:py-8"
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
          className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-8 lg:px-12 xl:px-16 py-4 sm:py-6"
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
                  <p className="font-heading font-medium text-sm sm:text-base lg:text-lg text-primary/90 leading-tight max-w-42.5">
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
              <div className="lg:col-span-7 relative w-full aspect-square max-w-105 sm:max-w-120 lg:max-w-130 mx-auto flex items-center justify-center my-2 sm:my-0">
                
                {/* Circular Orbit Ring Guide Track */}
                <div className="absolute w-[85%] h-[85%] rounded-full border border-accent/30 shadow-[0_0_20px_rgba(183,135,54,0.15),inset_0_0_20px_rgba(183,135,54,0.15)] pointer-events-none" />

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
        {/* STAGE 3: FULL-WIDTH 12 FOUNDATIONAL PILLARS GRID BOARD    */}
        {/* ========================================================= */}
        <motion.div 
          style={{ 
            opacity: stage3Opacity, 
            scale: stage3Scale, 
            y: stage3Y,
            display: stage3Display,
            pointerEvents: stage3PointerEvents
          }}
          className="absolute inset-0 z-15 flex items-center justify-center px-4 sm:px-8 lg:px-12 xl:px-16 py-3 sm:py-6"
        >
          {/* Open Full-Width Presentation Board (Not a small card box) */}
          <div className="relative w-full max-w-360 mx-auto h-full max-h-[96vh] flex flex-col justify-between overflow-y-auto lg:overflow-hidden">
            
            {/* Top-Right Background Ambient Avatar Silhouette */}
            <div className="absolute right-2 top-0 w-48 h-36 sm:w-64 sm:h-48 lg:w-80 lg:h-56 pointer-events-none opacity-40 mix-blend-multiply overflow-hidden hidden sm:block">
              <Image
                src="/images/prana-energy-avatar.png"
                alt="Prana Cellular Aura"
                fill
                className="object-contain object-top-right"
              />
            </div>

            {/* Top Section Header & Narrative (Design.md Dual-Tone Editorial Typography) */}
            <div className="relative z-10 space-y-1.5 sm:space-y-2 text-left max-w-3xl pr-4">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-accent/15 border border-accent/35 text-primary">
                <span className="font-sans font-semibold text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                  THE FRAMEWORK
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-primary tracking-tight leading-[1.1]">
                12 Foundational Pillars <br className="hidden sm:inline" />
                <span className="italic font-medium text-accent">of Optimal Health</span>
              </h2>

              {/* Sub-heading Bar */}
              <div className="flex items-center gap-2 sm:gap-3 pt-0.5">
                <div className="w-12 h-0.5 bg-accent/80 rounded-full" />
                <span className="font-sans font-semibold text-[9.5px] sm:text-xs tracking-[0.2em] text-accent uppercase">
                  THE SCIENCE OF LIVING YOUNG
                </span>
                <div className="w-12 h-0.5 bg-accent/80 rounded-full" />
              </div>

              {/* Narrative Copy */}
              <p className="font-sans text-[11px] sm:text-xs lg:text-sm text-primary/85 leading-relaxed">
                A holistic protocol designed to address the root electrical cause of disease, increasing your <strong className="font-semibold text-primary">lifeforce</strong> one pillar at a time.
              </p>
            </div>

            {/* 12 Pillars Full Responsive Grid (6 cols on Desktop / 3-4 cols on Tablet / 2 cols on Mobile) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-2.5 lg:gap-3 xl:gap-3.5 my-2 sm:my-3">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.num}
                  onClick={() => setSelectedIndex(index)}
                  className="relative group bg-white/85 hover:bg-white backdrop-blur-xl border border-white/95 hover:border-accent/60 rounded-2xl p-2.5 sm:p-3 flex flex-col items-center text-center shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  {/* Number Badge Tag (Full Pill) */}
                  <div className="absolute top-2 left-2 w-5 h-5 rounded-full bg-accent/20 border border-accent/40 text-primary font-mono text-[9px] font-bold flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                    {pillar.num}
                  </div>

                  {/* Circular 3D Artwork Image */}
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-15 lg:h-15 xl:w-16 xl:h-16 rounded-full overflow-hidden border-2 border-white shadow-sm my-1 group-hover:scale-108 transition-transform duration-300">
                    <Image
                      src={pillar.circleGraphic}
                      alt={pillar.name}
                      fill
                      sizes="80px"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-accent/30 pointer-events-none" />
                  </div>

                  {/* Pillar Title (Cormorant Garamond) */}
                  <h3 className="font-heading font-semibold text-xs sm:text-[13px] lg:text-sm text-primary leading-tight mt-1 mb-1 group-hover:text-[#1a4a40] transition-colors">
                    {pillar.name}
                  </h3>

                  {/* Pillar Description (Inter) */}
                  <p className="font-sans text-[9.5px] sm:text-[10px] xl:text-[10.5px] text-primary/80 leading-[1.3] line-clamp-3 group-hover:text-primary transition-colors">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Lotus Tagline Bar */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 pt-1 sm:pt-2 border-t border-accent/20">
              <div className="w-8 sm:w-20 h-px bg-accent/60" />
              <div className="flex items-center gap-1.5 text-primary/80 font-heading italic text-xs sm:text-sm text-center">
                <LotusIcon className="w-3.5 h-3.5 text-accent stroke-accent" />
                <span>Small daily choices. Big cellular impact. Infinite possibilities.</span>
              </div>
              <div className="w-8 sm:w-20 h-px bg-accent/60" />
            </div>

          </div>
        </motion.div>


        {/* ========================================================= */}
        {/* BOTTOM FLOATING SCROLL PROGRESS CONTROLLER                */}
        {/* ========================================================= */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-background/90 backdrop-blur-md px-4 py-2 rounded-full border border-accent/35 shadow-xl shadow-primary/5">
          <span className="font-sans font-semibold text-[10px] sm:text-[11px] tracking-wider text-primary/70 uppercase">
            Scroll Framework Journey
          </span>
          <div className="w-20 sm:w-24 h-1.5 bg-primary/15 rounded-full overflow-hidden">
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
              <div className="relative w-70 sm:w-85 md:w-95 max-w-[88vw] aspect-3/4 max-h-[58vh] sm:max-h-[64vh] rounded-2xl overflow-hidden shadow-xl border border-accent/30 bg-[#f4eee4] flex items-center justify-center">
                
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

              {/* Primary Full-Width CTA */}
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

