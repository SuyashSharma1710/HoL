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

interface Pillar {
  num: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  circleGraphic: string;
  image: string;
  desc: string;
}

const pillars: Pillar[] = [
  { 
    num: "01", 
    name: "Balance Nutrition", 
    icon: Salad, 
    circleGraphic: "/images/Balance-Nutrition.webp",
    image: "/images/balanced-nutritionp.webp",
    desc: "Provide your cells with clean, real, and nutrient-dense food to fuel energy, support repair, and maintain optimal cellular function."
  },
  { 
    num: "02", 
    name: "Deep Detox", 
    icon: Sparkles, 
    circleGraphic: "/images/Deep-Detox.webp",
    image: "/images/deep-detoxp.webp",
    desc: "Remove accumulated toxins from the body at the cellular level to reduce toxic load and restore natural flow and clarity."
  },
  { 
    num: "03", 
    name: "Artery Cleanse", 
    icon: HeartPulse, 
    circleGraphic: "/images/Artery-Cleanse.webp",
    image: "/images/artery-cleansp.webp",
    desc: "Keep your arteries clean and flexible to ensure smooth blood flow, oxygen delivery, and strong heart health."
  },
  { 
    num: "04", 
    name: "Alkaline Chemistry", 
    icon: FlaskConical, 
    circleGraphic: "/images/Alkaline-Chemistry.webp",
    image: "/images/alkaline-chemistryp.webp",
    desc: "Maintain an alkaline internal environment to support optimal cellular function and long-term health."
  },
  { 
    num: "05", 
    name: "Cellular Vitality", 
    icon: Zap, 
    circleGraphic: "/images/Cellular-Vitality.webp",
    image: "/images/cellular-vitalityp.webp",
    desc: "Boost your cellular charge and energy production to enhance stamina, focus, and overall lifeforce."
  },
  { 
    num: "06", 
    name: "Gut Reset", 
    icon: ShieldPlus, 
    circleGraphic: "/images/Gut-Reset.webp",
    image: "/images/gut-resetp.webp",
    desc: "Heal the gut, improve digestion, and build a strong foundation for immunity, mood, and hormonal balance."
  },
  { 
    num: "07", 
    name: "Inflammation", 
    icon: Flame, 
    circleGraphic: "/images/Inflammation.webp",
    image: "/images/inflamantionp.webp",
    desc: "Reduce chronic inflammation that silently damages cells and tissues, and accelerate healing from the inside out."
  },
  { 
    num: "08", 
    name: "Deep Sleep", 
    icon: Moon, 
    circleGraphic: "/images/Deep-Sleep.webp",
    image: "/images/deep-sleepp.webp",
    desc: "Improve sleep quality and duration to allow your body and mind to repair, regenerate, and recharge deeply."
  },
  { 
    num: "09", 
    name: "Regular Exercise and Yoga", 
    icon: Activity, 
    circleGraphic: "/images/Regular-Exercise.webp",
    image: "/images/regular-exercisep.webp",
    desc: "Move your body daily to improve circulation, flexibility, strength, and metabolic efficiency."
  },
  { 
    num: "10", 
    name: "Immunity", 
    icon: ShieldCheck, 
    circleGraphic: "/images/Immunity.webp",
    image: "/images/immunityp.webp",
    desc: "Strengthen your natural defences to protect against illness, infections, and modern lifestyle challenges."
  },
  { 
    num: "11", 
    name: "Nature Connect", 
    icon: TreePine, 
    circleGraphic: "/images/Nature-Connect.webp",
    image: "/images/nature-connectp.webp",
    desc: "Reconnect with nature to reduce stress, balance emotions, and enhance your body's natural healing intelligence."
  },
  { 
    num: "12", 
    name: "Social Connect", 
    icon: Users, 
    circleGraphic: "/images/Social-Connect.webp",
    image: "/images/social-connectp.webp",
    desc: "Nurture meaningful relationships that uplift, support, and create emotional wellbeing."
  },
];

export function PillarsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Desktop Pinned scroll management across 3 stages
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

  // Scroll Progress indicator for desktop
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
    <>
      {/* ========================================================= */}
      {/* DESKTOP VIEWPORT (lg: and up): 360vh STICKY MULTI-STAGE   */}
      {/* ========================================================= */}
      <section 
        id="pillars" 
        ref={containerRef} 
        className="hidden lg:block relative w-full h-[360vh] bg-background text-primary"
      >
        {/* Sticky Viewport Shell */}
        <div className="sticky top-0 h-dvh w-full overflow-hidden flex items-center justify-center select-none">
          
          {/* Unified Background Canvas */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0">
              <Image
                src="/images/cellular-restore-bg-desktop.webp"
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

          {/* STAGE 1: INTRO QUESTION */}
          <motion.div 
            style={{ 
              opacity: stage1Opacity, 
              scale: stage1Scale, 
              y: stage1Y,
              display: stage1Display,
              pointerEvents: stage1PointerEvents
            }}
            className="absolute inset-0 z-10 flex items-center justify-center px-8 lg:px-12 xl:px-16 py-6 sm:py-8"
          >
            <Stage1Intro />
          </motion.div>

          {/* STAGE 2: THE 12 PILLARS FRAMEWORK & ORBIT */}
          <motion.div 
            style={{ 
              opacity: stage2Opacity, 
              scale: stage2Scale, 
              y: stage2Y,
              display: stage2Display,
              pointerEvents: stage2PointerEvents
            }}
            className="absolute inset-0 z-10 flex items-center justify-center px-8 lg:px-12 xl:px-16 py-4 sm:py-6"
          >
            <Stage2Framework onSelectPillar={(idx) => setSelectedIndex(idx)} />
          </motion.div>

          {/* STAGE 3: 12 FOUNDATIONAL PILLARS GRID BOARD */}
          <motion.div 
            style={{ 
              opacity: stage3Opacity, 
              scale: stage3Scale, 
              y: stage3Y,
              display: stage3Display,
              pointerEvents: stage3PointerEvents
            }}
            className="absolute inset-0 z-15 flex items-center justify-center px-8 lg:px-12 xl:px-16 py-3 sm:py-6"
          >
            <Stage3PillarsGrid onSelectPillar={(idx) => setSelectedIndex(idx)} />
          </motion.div>

          {/* Floating Desktop Scroll Progress Controller */}
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
      </section>

      {/* ========================================================= */}
      {/* MOBILE & TABLET (below lg): VERTICAL SCROLL WITH FIXED BG */}
      {/* ========================================================= */}
      <section 
        id="pillars-mobile" 
        className="block lg:hidden relative w-full bg-background text-primary select-none overflow-hidden [clip-path:inset(0)]"
      >
        {/* Fixed Atmospheric Background for Mobile (Viewport-Pinned via clip-path) */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Image
            src="/images/cellular-restore-bg-mobile.webp"
            alt="Cellular Health & Longevity Framework"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Ambient soft background contrast */}
          <div className="absolute inset-0 bg-[#e9e0cf]/85 backdrop-blur-xs" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,224,207,0.8)_0%,rgba(233,224,207,0.45)_70%,transparent_100%)]" />
        </div>

        {/* Top & bottom gradient edge feathering */}
        <div className="absolute inset-x-0 top-0 h-28 sm:h-36 bg-linear-to-b from-background via-background/70 to-transparent pointer-events-none z-1" />
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-linear-to-t from-background via-background/70 to-transparent pointer-events-none z-1" />

        {/* Vertical Content Flow */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-14 sm:space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <Stage1Intro isMobile />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <Stage2Framework onSelectPillar={(idx) => setSelectedIndex(idx)} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <Stage3PillarsGrid onSelectPillar={(idx) => setSelectedIndex(idx)} />
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* MINIMAL POSTER LIGHTBOX DIALOG (Shared Across All Devices) */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedPillar && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-primary/60 backdrop-blur-md overflow-y-auto overscroll-contain"
          >
            <motion.div 
              key={selectedPillar.num}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[min(94vw,430px)] max-h-[92dvh] sm:max-h-[90dvh] bg-background/95 backdrop-blur-2xl shadow-2xl rounded-3xl p-3 sm:p-4.5 flex flex-col items-center border border-white/90 sm:border-accent/40 select-none overflow-hidden my-auto shrink-0"
            >
              {/* Corner Ambient Glow Flare */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-radial from-accent/25 to-transparent blur-3xl pointer-events-none" />

              {/* Top Header Bar: Pillar Eyebrow & Close Button */}
              <div className="w-full flex items-center justify-between mb-2 px-0.5 shrink-0">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 mr-2 rounded-full bg-accent/15 border border-accent/35 text-primary shadow-2xs">
                  <selectedPillar.icon className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="font-sans font-semibold text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase truncate max-w-[55vw] sm:max-w-none">
                    PILLAR {selectedPillar.num} • {selectedPillar.name}
                  </span>
                </div>

                {/* Close Button */}
                <button 
                  onClick={() => setSelectedIndex(null)}
                  className="p-1.5 sm:p-2 bg-white/80 hover:bg-white backdrop-blur-md text-primary hover:text-accent transition-all rounded-full border border-accent/30 shadow-xs active:scale-90 cursor-pointer shrink-0"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Central Poster Display (Rock-Solid Visible 3:4 Frame) */}
              <div className="relative w-70 sm:w-82.5 md:w-87.5 max-w-[84vw] aspect-3/4 max-h-[52dvh] sm:max-h-[58dvh] rounded-2xl overflow-hidden shadow-xl border border-accent/30 bg-[#f4eee4] flex items-center justify-center my-1.5 sm:my-2 shrink-0">
                {/* Luminous Lotus Loading Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-radial from-accent/20 via-background/80 to-background/95 z-0">
                  <div className="relative flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-accent/25 border-t-accent animate-spin" />
                    <LotusIcon className="absolute w-6 h-6 sm:w-7 sm:h-7 text-accent stroke-accent stroke-[1.5]" />
                  </div>
                  <span className="font-mono text-[9px] sm:text-[9.5px] font-semibold text-primary/70 tracking-widest uppercase mt-2 animate-pulse">
                    Loading Protocol...
                  </span>
                </div>

                {/* Full-Fidelity 3:4 Poster Image */}
                <Image 
                  src={selectedPillar.image} 
                  alt={selectedPillar.name}
                  fill
                  priority
                  className="object-contain object-center relative z-10 transition-opacity duration-300"
                  sizes="(max-width: 768px) 84vw, 360px"
                />
              </div>

              {/* Primary Full-Width CTA */}
              <Link 
                href="#cta"
                onClick={() => setSelectedIndex(null)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2 sm:py-2.5 rounded-full bg-[#b78736] hover:bg-[#a06f20] text-white font-sans font-medium text-xs sm:text-sm shadow-[0_8px_24px_rgba(183,135,54,0.3)] transition-all hover:scale-[1.01] active:scale-95 cursor-pointer mt-1.5 sm:mt-2 shrink-0"
              >
                <span>Start Your Wellness Journey</span>
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90" />
              </Link>

              {/* Bottom Navigation Strip */}
              <div className="w-full flex items-center justify-between pt-2 border-t border-accent/20 mt-1.5 sm:mt-2 px-0.5 shrink-0">
                <button 
                  onClick={handlePrev}
                  aria-label="Previous Pillar"
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/70 hover:bg-white border border-accent/30 text-primary font-sans font-medium text-[11px] sm:text-xs transition-all hover:scale-105 active:scale-90 shadow-2xs cursor-pointer group"
                >
                  <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-x-0.5 text-accent" />
                  <span>Previous</span>
                </button>
                
                {/* Counter Badge */}
                <span className="font-mono text-[11px] sm:text-xs font-semibold text-primary/60 tracking-wider">
                  {selectedIndex !== null ? selectedIndex + 1 : 0} / 12
                </span>

                <button 
                  onClick={handleNext}
                  aria-label="Next Pillar"
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/70 hover:bg-white border border-accent/30 text-primary font-sans font-medium text-[11px] sm:text-xs transition-all hover:scale-105 active:scale-90 shadow-2xs cursor-pointer group"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 text-accent" />
                </button>
              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

{/* ========================================================= */}
{/* STAGE 1: INTRO QUESTION ("HOW DO WE INCREASE...")         */}
{/* ========================================================= */}
function Stage1Intro({ isMobile }: { isMobile?: boolean }) {
  return (
    <div className="relative w-full max-w-5xl mx-auto bg-white/80 backdrop-blur-2xl border border-white/95 sm:border-accent/40 rounded-3xl shadow-2xl p-6 sm:p-12 lg:p-16 text-center overflow-hidden">
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

      {/* Direction Prompt */}
      <div className="flex items-center justify-center gap-2 text-primary/70 font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase mt-4">
        <span>{isMobile ? "Scroll down to explore the framework" : "Scroll down to explore the 12-pillar framework"}</span>
        <ChevronDown className="w-4 h-4 text-accent animate-bounce" />
      </div>
    </div>
  );
}

{/* ========================================================= */}
{/* STAGE 2: THE 12 PILLARS FRAMEWORK & ORBIT                 */}
{/* ========================================================= */}
function Stage2Framework({ onSelectPillar }: { onSelectPillar: (idx: number) => void }) {
  return (
    <div className="relative w-full max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl border border-white/95 sm:border-accent/35 rounded-3xl shadow-2xl p-5 sm:p-8 lg:p-10 flex flex-col justify-center">
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
        <div className="lg:col-span-7 relative w-full aspect-square max-w-85 xs:max-w-95 sm:max-w-115 lg:max-w-135 mx-auto flex items-center justify-center my-4 sm:my-0">
          {/* Circular Orbit Ring Guide Track */}
          <div className="absolute w-[86%] h-[86%] rounded-full border border-accent/30 shadow-[0_0_24px_rgba(183,135,54,0.15),inset_0_0_24px_rgba(183,135,54,0.15)] pointer-events-none" />

          {/* Center Holographic Prana Energy Body Avatar (Full uncropped height with object-contain) */}
          <div className="relative z-10 w-44 h-64 xs:w-52 xs:h-76 sm:w-64 sm:h-92 lg:w-76 lg:h-110 flex items-center justify-center pointer-events-none">
            <Image
              src="/images/prana-energy-avatar.webp"
              alt="Prana Cellular Energy Body Avatar"
              fill
              priority
              sizes="(max-width: 640px) 210px, (max-width: 1024px) 260px, 310px"
              className="object-contain object-center"
            />
            {/* Glowing Pulsing Solar Plexus Halo */}
            <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-radial from-[#ffd875]/90 via-accent/50 to-transparent blur-md animate-pulse pointer-events-none" />
          </div>

          {/* 12 Interactive Orbital Pillar Badges */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
          >
            {pillars.map((pillar, index) => {
              const angle = (index / 12) * Math.PI * 2 - Math.PI / 2;
              const radiusPercent = 43;
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
                  className="absolute pointer-events-auto"
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                    onClick={() => onSelectPillar(index)}
                    className="flex flex-col items-center justify-center group cursor-pointer"
                    title={pillar.name}
                  >
                    <div className="relative w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-white/95 border border-accent/40 flex items-center justify-center shadow-md group-hover:scale-115 group-hover:bg-[#1b4e47] group-hover:border-white transition-all duration-300">
                      <pillar.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-primary group-hover:text-white transition-colors" />
                    </div>

                    <span className="mt-0.5 text-[7.5px] sm:text-[8.5px] font-semibold text-primary/90 text-center leading-none bg-white/95 backdrop-blur-xs px-2 py-0.5 sm:py-1 rounded-full border border-accent/25 whitespace-nowrap shadow-2xs group-hover:bg-[#1b4e47] group-hover:text-white group-hover:border-white transition-all">
                      {pillar.name}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

{/* ========================================================= */}
{/* STAGE 3: FULL 12 FOUNDATIONAL PILLARS GRID BOARD          */}
{/* ========================================================= */}
function Stage3PillarsGrid({ onSelectPillar }: { onSelectPillar: (idx: number) => void }) {
  return (
    <div className="relative w-full max-w-360 mx-auto flex flex-col justify-between">
      {/* Top Section Header & Narrative */}
      <div className="relative z-10 space-y-1.5 sm:space-y-2 text-left max-w-3xl pr-4 mb-4">
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

      {/* 12 Pillars Full Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-2.5 lg:gap-3 xl:gap-3.5 my-2 sm:my-3">
        {pillars.map((pillar, index) => (
          <div
            key={pillar.num}
            onClick={() => onSelectPillar(index)}
            className="relative group bg-white/85 hover:bg-white backdrop-blur-xl border border-white/95 hover:border-accent/60 rounded-2xl p-2.5 sm:p-3 flex flex-col items-center text-center shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
          >
            {/* Number Badge Tag */}
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

            {/* Pillar Title */}
            <h3 className="font-heading font-semibold text-xs sm:text-[13px] lg:text-sm text-primary leading-tight mt-1 mb-1 group-hover:text-[#1a4a40] transition-colors">
              {pillar.name}
            </h3>

            {/* Pillar Description */}
            <p className="font-sans text-[9.5px] sm:text-[10px] xl:text-[10.5px] text-primary/80 leading-[1.3] line-clamp-3 group-hover:text-primary transition-colors">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Lotus Tagline Bar */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 pt-3 sm:pt-4 border-t border-accent/20 mt-2">
        <div className="w-8 sm:w-20 h-px bg-accent/60" />
        <div className="flex items-center gap-1.5 text-primary/80 font-heading italic text-xs sm:text-sm text-center">
          <LotusIcon className="w-3.5 h-3.5 text-accent stroke-accent" />
          <span>Small daily choices. Big cellular impact. Infinite possibilities.</span>
        </div>
        <div className="w-8 sm:w-20 h-px bg-accent/60" />
      </div>
    </div>
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


