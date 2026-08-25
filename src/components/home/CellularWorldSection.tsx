"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, RotateCw, Sparkles, X, Equal, TreePine, ChevronRight } from "lucide-react";

export function CellularWorldSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress across the 300vh height to drive horizontal RTL scroll on desktop
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress into horizontal translateX across 3 panels (0% -> -66.666%)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);
  
  // Background subtle horizontal parallax drift moving slowly from right to left (0% -> -25%)
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  // Progress bar width for the desktop indicator pill
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* ========================================================= */}
      {/* DESKTOP VIEWPORT (lg: and up): 300vh STICKY HORIZONTAL SCROLL */}
      {/* ========================================================= */}
      <section 
        ref={containerRef} 
        id="cellular-health-world" 
        className="hidden lg:block relative w-full h-[300vh] bg-background text-primary select-none"
      >
        {/* Sticky Viewport Container */}
        <div className="sticky top-0 h-dvh w-full flex flex-col justify-center overflow-hidden">
          
          {/* Continuous Panoramic Background with Slow RTL Parallax */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <motion.div 
              style={{ x: bgX }} 
              className="absolute top-0 left-0 h-full w-[135vw] will-change-transform"
            >
              <Image 
                src="/images/cellular-world-teal-bg.webp"
                alt="Celestial Cellular Health Sanctuary Background"
                fill
                priority
                sizes="135vw"
                className="object-cover object-left"
              />
            </motion.div>
            
            {/* Radial soft center wash for optimal text contrast and reading clarity */}
            <div className="absolute inset-0 bg-background/10 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,224,207,0.75)_0%,rgba(233,224,207,0.3)_60%,transparent_100%)] pointer-events-none z-1" />

            {/* Seamless top & bottom gradient feathering for flawless section flow */}
            <div className="absolute inset-x-0 top-0 h-28 sm:h-40 lg:h-48 bg-linear-to-b from-background via-background/70 to-transparent pointer-events-none z-1" />
            <div className="absolute inset-x-0 bottom-0 h-28 sm:h-40 lg:h-48 bg-linear-to-t from-background via-background/70 to-transparent pointer-events-none z-1" />
          </div>

          {/* Horizontal Motion Track containing the 3 Distinct Panes */}
          <motion.div 
            style={{ x }} 
            className="relative z-10 flex w-[300vw] h-full items-center will-change-transform"
          >
            {/* PANEL 1: OPEN HERO EDITORIAL */}
            <div className="w-screen h-full shrink-0 flex items-center justify-center px-8 lg:px-12 xl:px-16 py-12">
              <PanelIntro />
            </div>

            {/* PANEL 2: QUOTE & SACRED TREE PILLAR */}
            <div className="w-screen h-full shrink-0 flex items-center justify-center px-8 lg:px-12 xl:px-16 py-12">
              <PanelQuote />
            </div>

            {/* PANEL 3: YOU ARE ELECTRIC & VOLTAGE CHART */}
            <div className="w-screen h-full shrink-0 flex items-center justify-center px-8 lg:px-12 xl:px-16 py-12">
              <PanelElectric />
            </div>
          </motion.div>

          {/* Scroll Progress & Stage Pill Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-background/90 backdrop-blur-md px-4 py-2 rounded-full border border-accent/35 shadow-xl shadow-primary/5">
            <span className="font-sans font-semibold text-[11px] tracking-wider text-primary/70 uppercase">
              Scroll to Journey
            </span>
            <div className="w-20 h-1.5 bg-primary/15 rounded-full overflow-hidden">
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
        id="cellular-health-world-mobile" 
        className="block lg:hidden relative w-full bg-background text-primary select-none overflow-hidden [clip-path:inset(0)]"
      >
        {/* Fixed Atmospheric Background for Mobile (Viewport-Pinned via clip-path) */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Image 
            src="/images/cellular-world-teal-bg.webp"
            alt="Celestial Cellular Health Sanctuary Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Radial soft wash */}
          <div className="absolute inset-0 bg-background/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,224,207,0.85)_0%,rgba(233,224,207,0.4)_70%,transparent_100%)]" />
        </div>

        {/* Top and bottom feathering (relative to section container) */}
        <div className="absolute inset-x-0 top-0 h-28 sm:h-36 bg-linear-to-b from-background via-background/70 to-transparent pointer-events-none z-1" />
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-linear-to-t from-background via-background/70 to-transparent pointer-events-none z-1" />

        {/* Content Flow Container */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-14 sm:space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <PanelIntro />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <PanelQuote />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <PanelElectric />
          </motion.div>
        </div>
      </section>
    </>
  );
}

{/* ========================================================= */}
{/* PANEL 1: OPEN HERO EDITORIAL — WELCOME TO CELLULAR HEALTH */}
{/* ========================================================= */}
function PanelIntro() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
      {/* Luminous Frosted Heading Backplate for Ultra-Crisp Visibility */}
      <div className="relative w-full max-w-5xl mx-auto mb-8 sm:mb-10 px-6 sm:px-10 py-8 sm:py-10 rounded-3xl bg-white/75 backdrop-blur-xl border border-white/90 shadow-xl shadow-primary/5 flex flex-col items-center">
        {/* Sacred Lotus Icon Emblem */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-3 text-accent drop-shadow-xs"
        >
          <LotusIcon className="w-10 h-10 sm:w-12 sm:h-12 stroke-accent stroke-[1.5]" />
        </motion.div>

        {/* Display Headings — High Contrast Cormorant Garamond */}
        <div className="mb-2">
          <span className="block font-heading text-xl sm:text-2xl lg:text-3xl font-medium text-primary tracking-[0.2em] uppercase leading-tight">
            Welcome to the
          </span>
          <span className="block font-heading text-xl sm:text-2xl lg:text-3xl font-medium text-primary tracking-[0.16em] uppercase leading-tight mt-0.5">
            World of
          </span>
        </div>

        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#a06f20] tracking-wide leading-none mt-2 mb-4 drop-shadow-xs">
          CELLULAR HEALTH
        </h2>

        {/* Signature Gold Accent Divider Bar */}
        <div className="w-16 h-0.5 bg-accent/90 rounded-full mx-auto shadow-[0_0_10px_rgba(183,135,54,0.4)]" />
      </div>

      {/* 3-Column Floating Pillar Pill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl">
        {/* Pillar 1: YOUNG */}
        <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/85 backdrop-blur-md border border-white/90 shadow-lg shadow-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-left">
          <div className="shrink-0 w-12 h-12 rounded-full bg-[#1b4e47] border-2 border-white text-white flex items-center justify-center shadow-md shadow-[#1b4e47]/20 group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
            <Sparkles className="w-5 h-5 stroke-[1.85]" />
          </div>
          <p className="font-sans text-xs sm:text-sm lg:text-[15px] text-primary/90 font-normal leading-relaxed">
            Where we make you{" "}
            <strong className="font-heading font-bold text-[#a06f20] text-base sm:text-lg tracking-wider block sm:inline">
              YOUNG
            </strong>{" "}
            from within.
          </p>
        </div>

        {/* Pillar 2: CHARGE */}
        <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/85 backdrop-blur-md border border-white/90 shadow-lg shadow-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-left">
          <div className="shrink-0 w-12 h-12 rounded-full bg-[#1d5564] border-2 border-white text-white flex items-center justify-center shadow-md shadow-[#1d5564]/20 group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
            <Zap className="w-5 h-5 stroke-[1.85]" />
          </div>
          <p className="font-sans text-xs sm:text-sm lg:text-[15px] text-primary/90 font-normal leading-relaxed">
            Where we can{" "}
            <strong className="font-heading font-bold text-[#a06f20] text-base sm:text-lg tracking-wider block sm:inline">
              CHARGE
            </strong>{" "}
            you from within.
          </p>
        </div>

        {/* Pillar 3: RENEW */}
        <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/85 backdrop-blur-md border border-white/90 shadow-lg shadow-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-left">
          <div className="shrink-0 w-12 h-12 rounded-full bg-[#1b4e47] border-2 border-white text-white flex items-center justify-center shadow-md shadow-[#1b4e47]/20 group-hover:scale-110 group-hover:bg-accent transition-all duration-300">
            <RotateCw className="w-5 h-5 stroke-[1.85]" />
          </div>
          <p className="font-sans text-xs sm:text-sm lg:text-[15px] text-primary/90 font-normal leading-relaxed">
            Where we{" "}
            <strong className="font-heading font-bold text-[#a06f20] text-base sm:text-lg tracking-wider block sm:inline">
              RENEW
            </strong>{" "}
            from within.
          </p>
        </div>
      </div>
    </div>
  );
}

{/* ========================================================= */}
{/* PANEL 2: ASYMMETRIC QUOTE & SACRED TREE PILLAR            */}
{/* ========================================================= */}
function PanelQuote() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Asymmetric 2-Column Floating Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Column: Dr. Ashutosh Rastogi Quote */}
        <div className="lg:col-span-8 p-6 sm:p-10 rounded-3xl bg-white/85 backdrop-blur-xl border border-white/90 shadow-xl shadow-primary/5 flex flex-col justify-center items-center text-center">
          {/* Sacred Lotus Emblem */}
          <div className="mb-4 text-accent">
            <LotusIcon className="w-10 h-10 stroke-accent stroke-[1.5]" />
          </div>

          {/* Top Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mb-6 w-full max-w-xs">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-accent/60" />
            <span className="text-accent text-[10px]">✦</span>
            <div className="h-px flex-1 bg-linear-to-l from-transparent to-accent/60" />
          </div>

          {/* Core Triad Quote */}
          <div className="space-y-3 sm:space-y-4 my-2 max-w-xl">
            <p className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary font-medium leading-snug">
              Presence of Lifeforce is <span className="font-semibold text-[#1b4e47]">Life</span>
            </p>
            <p className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary font-medium leading-snug">
              Absence of Lifeforce is <span className="font-semibold text-[#a06f20]">Death</span>
            </p>
            <p className="font-heading text-2xl sm:text-3xl lg:text-4xl text-primary font-medium leading-snug">
              Blockages in Lifeforce Cause <span className="font-semibold text-[#1b4e47]">Disease</span>
            </p>
          </div>

          {/* Attribution */}
          <p className="font-sans text-sm sm:text-base text-primary/80 italic mt-6 font-medium">
            — Dr. Ashutosh Rastogi
          </p>

          {/* Bottom Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mt-6 w-full max-w-xs">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-accent/60" />
            <span className="text-accent text-[10px]">✦</span>
            <div className="h-px flex-1 bg-linear-to-l from-transparent to-accent/60" />
          </div>
        </div>

        {/* Right Column: Increase Your Lifeforce Pillar Emblem Banner */}
        <div className="lg:col-span-4 relative overflow-hidden rounded-3xl bg-linear-to-br from-[#12362f] via-[#17443c] to-[#0c2621] text-white p-8 sm:p-10 flex flex-col items-center justify-center text-center shadow-2xl border border-accent/40 min-h-80 lg:min-h-105">
          {/* Glowing Ambient Halo */}
          <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-accent/50 via-transparent to-transparent" />

          {/* Sacred Tree Emblem in Golden Sun Ring */}
          <div className="relative mb-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-accent/60 bg-accent/15 flex items-center justify-center shadow-[0_0_24px_rgba(183,135,54,0.35)]">
            <TreePine className="w-10 h-10 sm:w-12 sm:h-12 text-accent stroke-[1.6]" />
          </div>

          {/* Title Lockup */}
          <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-accent leading-tight">
            Increase <br />
            <span className="text-white font-light text-2xl sm:text-3xl block my-1">your</span>
            <span className="font-semibold text-accent">Lifeforce</span>
          </h3>

          <div className="w-10 h-0.5 bg-accent/90 rounded-full mt-5 shadow-[0_0_8px_rgba(255,216,117,0.5)]" />
        </div>
      </div>
    </div>
  );
}

{/* ========================================================= */}
{/* PANEL 3: YOU ARE ELECTRIC & VOLTAGE / AGE SCIENTIFIC CARD */}
{/* ========================================================= */}
function PanelElectric() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Split Calculation & Interactive Graph Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-3xl bg-white/85 backdrop-blur-xl border border-white/90 shadow-xl shadow-primary/5 p-6 sm:p-8 lg:p-10 items-center">
        {/* Left Column: Equations & Core Concept */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          {/* Sacred Lotus Emblem */}
          <div className="mb-2 text-accent">
            <LotusIcon className="w-8 h-8 stroke-accent stroke-[1.5]" />
          </div>

          <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
            YOU ARE <br className="hidden sm:block" />
            <span className="text-[#a06f20]">ELECTRIC</span>
          </h3>

          <p className="font-heading text-lg sm:text-xl lg:text-2xl text-[#a06f20] font-medium italic mb-5">
            You are sitting on 3.5 Trillion Volts.
          </p>

          {/* 4 Calculation Equations */}
          <div className="space-y-3.5">
            {/* Row 1: 50 Trillion Cells */}
            <div className="flex items-center gap-3.5">
              <div className="shrink-0 w-9 h-9 rounded-full bg-[#1b4e47] border border-white/60 text-white flex items-center justify-center shadow-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="font-sans text-xs sm:text-sm text-primary/90 leading-snug">
                Our body contains <strong className="font-heading font-bold text-primary text-sm sm:text-base">50 TRILLION CELLS</strong> in our body.
              </p>
            </div>

            {/* Row 2: 70 Millivolt */}
            <div className="flex items-center gap-3.5">
              <div className="shrink-0 w-9 h-9 rounded-full bg-[#1b4e47] border border-white/60 text-white flex items-center justify-center shadow-xs">
                <Zap className="w-4 h-4" />
              </div>
              <p className="font-sans text-xs sm:text-sm text-primary/90 leading-snug">
                Each cell carries <strong className="font-heading font-bold text-primary text-sm sm:text-base">70 MILLIVOLT</strong> current.
              </p>
            </div>

            {/* Row 3: Multiplication */}
            <div className="flex items-center gap-3.5">
              <div className="shrink-0 w-9 h-9 rounded-full bg-[#1b4e47] border border-white/60 text-white flex items-center justify-center shadow-xs">
                <X className="w-4 h-4 stroke-[2.5]" />
              </div>
              <p className="font-heading font-bold text-xs sm:text-sm text-primary tracking-wide">
                50 TRILLION CELLS × 70 MILLIVOLT
              </p>
            </div>

            {/* Row 4: Final Voltage */}
            <div className="flex items-center gap-3.5 pt-1 border-t border-accent/20">
              <div className="shrink-0 w-9 h-9 rounded-full bg-accent border border-white text-white flex items-center justify-center shadow-xs">
                <Equal className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div>
                <p className="font-heading font-bold text-base sm:text-lg text-[#a06f20] tracking-wider leading-tight">
                  3.5 TRILLION VOLTS
                </p>
                <p className="font-sans text-[11px] sm:text-xs text-primary/80 font-medium">
                  This is your Lifeforce or Pranik Shakti.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Voltage vs Age Chart Card */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-4 sm:p-6 border border-primary/10 shadow-lg flex flex-col justify-center">
          <div className="flex justify-between items-center mb-2">
            <span className="font-sans font-semibold text-[11px] uppercase tracking-wider text-primary/70">
              Voltage Decline Curve vs. Living Young
            </span>
            <span className="font-sans text-[11px] text-accent font-medium">Voltage / mV</span>
          </div>

          {/* Chart Visualization */}
          <div className="relative w-full aspect-16/11 bg-[#fcfbf9] rounded-lg border border-primary/15 p-2 overflow-hidden">
            {/* SVG Grid & Coordinate Lines */}
            <svg viewBox="0 0 460 260" className="w-full h-full select-none">
              <defs>
                {/* Shaded Optimal Zone Gradient */}
                <linearGradient id="optimalZoneGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#b78736" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#b78736" stopOpacity="0.06" />
                </linearGradient>
                {/* Glow Filter for Anchor Nodes */}
                <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#ffd875" floodOpacity="0.8" />
                </filter>
              </defs>

              {/* Optimal Healthy Shaded Zone (70 - 100 mV) - Top 2 Grid Rows */}
              <rect 
                x="48" 
                y="20" 
                width="378" 
                height="50" 
                fill="url(#optimalZoneGrad)" 
              />
              <line 
                x1="48" 
                y1="70" 
                x2="426" 
                y2="70" 
                stroke="#b78736" 
                strokeOpacity="0.4" 
                strokeWidth="1" 
                strokeDasharray="3 3" 
              />

              {/* Horizontal Grid lines (8 divisions of 25px) */}
              {[20, 45, 70, 95, 120, 145, 170, 195, 220].map((y, i) => (
                <line 
                  key={i} 
                  x1="48" 
                  y1={y} 
                  x2="426" 
                  y2={y} 
                  stroke="#142b23" 
                  strokeOpacity={i === 0 || i === 8 ? "0.35" : "0.12"} 
                  strokeWidth={i === 0 || i === 8 ? "1.5" : "1"} 
                />
              ))}

              {/* Vertical Grid lines (9 intervals of 42px) */}
              {[48, 90, 132, 174, 216, 258, 300, 342, 384, 426].map((x, i) => (
                <line 
                  key={i} 
                  x1={x} 
                  y1="20" 
                  x2={x} 
                  y2="220" 
                  stroke="#142b23" 
                  strokeOpacity={i === 0 || i === 9 ? "0.35" : "0.12"} 
                  strokeWidth={i === 0 || i === 9 ? "1.5" : "1"} 
                />
              ))}

              {/* Critical Inflection Age 35 Dashed Vertical Line */}
              <line 
                x1="195" 
                y1="20" 
                x2="195" 
                y2="220" 
                stroke="#142b23" 
                strokeOpacity="0.5" 
                strokeWidth="1.5" 
                strokeDasharray="4 3" 
              />

              {/* Age 35 Drop Indicator Tag */}
              <g>
                <rect x="166" y="5" width="58" height="13" rx="3.5" fill="#142b23" />
                <text x="195" y="14.5" textAnchor="middle" fontSize="7.5" fill="#ffffff" fontWeight="600" fontFamily="var(--font-inter)">
                  Age 35 Drop
                </text>
              </g>

              {/* Optimal Health Zone Badge in SVG */}
              <g>
                <rect x="268" y="25" width="150" height="16" rx="4" fill="#ffffff" fillOpacity="0.85" stroke="#b78736" strokeOpacity="0.4" />
                <circle cx="277" cy="33" r="2.5" fill="#b78736" />
                <text x="284" y="36" fontSize="8" fill="#142b23" fontWeight="600" fontFamily="var(--font-inter)">
                  Optimal Health (70 – 90 mV)
                </text>
              </g>

              {/* Y-Axis Labels (Voltage mV) */}
              <text x="40" y="24" textAnchor="end" fontSize="9" fill="#142b23" opacity="0.65" fontFamily="var(--font-inter)" fontWeight="500">100</text>
              <text x="40" y="74" textAnchor="end" fontSize="9" fill="#142b23" opacity="0.65" fontFamily="var(--font-inter)" fontWeight="500">75</text>
              <text x="40" y="124" textAnchor="end" fontSize="9" fill="#142b23" opacity="0.65" fontFamily="var(--font-inter)" fontWeight="500">50</text>
              <text x="40" y="174" textAnchor="end" fontSize="9" fill="#142b23" opacity="0.65" fontFamily="var(--font-inter)" fontWeight="500">25</text>
              <text x="40" y="224" textAnchor="end" fontSize="9" fill="#142b23" opacity="0.65" fontFamily="var(--font-inter)" fontWeight="500">0</text>

              {/* X-Axis Labels (Age in Years: 0 to 90) */}
              {["0", "10", "20", "30", "40", "50", "60", "70", "80", "90"].map((age, i) => (
                <text 
                  key={age} 
                  x={i * 42 + 48} 
                  y="238" 
                  textAnchor="middle" 
                  fontSize="9.5" 
                  fill="#142b23" 
                  opacity="0.7"
                  fontFamily="var(--font-inter)"
                  fontWeight="500"
                >
                  {age}
                </text>
              ))}

              {/* Branch B: Cellular Discharge Line (Unmanaged Rapid Decline) */}
              {/* Starts at Age 35 (195, 82.5), plunges steeply to Age 60 (300, 186), then flattens along the bottom to Age 90 (426, 205) */}
              <path
                d="M 195 82.5 C 225 102, 268 160, 300 186 C 335 196, 380 202, 426 205"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Branch A: Recharged Living Young Line (Harmony of Life) */}
              {/* Common trunk from (48, 20) -> (195, 82.5), pivots sharply UP to Age 40 (216, 50), peaks at Age 60 (300, 43), glides to Age 90 (426, 72) */}
              <path
                d="M 48 20 C 85 24, 110 35, 132 45 C 155 55, 175 70, 195 82.5 C 202 70, 209 54, 216 50 C 245 45, 275 42, 300 43 C 340 46, 390 60, 426 72"
                fill="none"
                stroke="#1b4e47"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Active Anchor Nodes */}
              {/* Age 35 Critical Split Point */}
              <circle cx="195" cy="82.5" r="4.5" fill="#ffd875" stroke="#1b4e47" strokeWidth="2" filter="url(#nodeGlow)" />
              {/* Age 60 Peak Recharged */}
              <circle cx="300" cy="43" r="3.5" fill="#ffd875" stroke="#1b4e47" strokeWidth="1.5" />
              {/* Age 90 Sustained High Charge */}
              <circle cx="426" cy="72" r="4" fill="#b78736" stroke="#ffffff" strokeWidth="1.5" />
              {/* Age 90 Low Discharge Endpoint */}
              <circle cx="426" cy="205" r="3.5" fill="#94a3b8" stroke="#ffffff" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Chart Legend */}
          <div className="flex items-center justify-between mt-3 text-[11px] px-1 font-sans">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-1 bg-[#1b4e47] rounded-full" />
              <span className="text-primary font-medium">Recharged Lifeforce (70–85 mV)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-1 bg-[#94a3b8] rounded-full" />
              <span className="text-primary/60">Cellular Discharge</span>
            </div>
          </div>
        </div>
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
