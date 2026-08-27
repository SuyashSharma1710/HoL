"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Users, Leaf, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PathwayCard {
  num: string;
  id: "products" | "knowledge" | "opportunity";
  eyebrow: string;
  title: string;
  subTitle: string;
  desc: string;
  image: string;
  badgeText: string;
  badgeIcon: React.ComponentType<{ className?: string }>;
  highlights: string[];
  link: string;
  waLink: string;
  waCta: string;
}

const pathways: PathwayCard[] = [
  {
    num: "01",
    id: "products",
    eyebrow: "You want",
    title: "PRODUCTS",
    subTitle: "Cellular Nutrition & Detox",
    desc: "Science-backed, high-quality wellness solutions designed to detox, nourish, and recharge your body at the cellular level.",
    image: "/images/pathway-products-icon.webp",
    badgeText: "FUEL YOUR BODY. ELEVATE YOUR LIFE.",
    badgeIcon: Leaf,
    highlights: [
      "Root-cause cellular detox to eliminate metabolic waste",
      "Bio-available nutrition supporting mitochondrial energy",
      "Restores cellular voltage to optimal 70–90 mV",
    ],
    link: "#cta",
    waLink: "https://wa.me/918800828863?text=Hello!%20I%20am%20interested%20in%20Harmony%20of%20Life%20Products%20to%20elevate%20my%20cellular%20health.",
    waCta: "Connect on WhatsApp",
  },
  {
    num: "02",
    id: "knowledge",
    eyebrow: "You want",
    title: "KNOWLEDGE",
    subTitle: "Holistic Health Education",
    desc: "Evidence-based knowledge, tools, and guidance to help you understand your body, increase your lifeforce, and live young.",
    image: "/images/pathway-knowledge-icon.webp",
    badgeText: "EMPOWER YOUR MIND. TRANSFORM YOUR HEALTH.",
    badgeIcon: BookOpen,
    highlights: [
      "Mastery of the 12 Foundational Pillars of Longevity",
      "Evidence-based biology vs symptom suppression",
      "Practical lifestyle protocols to live young and thrive",
    ],
    link: "#cta",
    waLink: "https://wa.me/918800828863?text=Hello!%20I%20want%20to%20explore%20Harmony%20of%20Life%20Knowledge%20and%20holistic%20wellness%20programs.",
    waCta: "Connect on WhatsApp",
  },
  {
    num: "03",
    id: "opportunity",
    eyebrow: "You want",
    title: "INCOME OPPORTUNITY",
    subTitle: "Wellness Career & Impact",
    desc: "Be part of a purpose-driven community and build a meaningful income while helping others create healthier, happier lives.",
    image: "/images/pathway-opportunity-icon.webp",
    badgeText: "CREATE IMPACT. BUILD YOUR FUTURE.",
    badgeIcon: Users,
    highlights: [
      "Certified Wellness Relationship Manager (WRM) training",
      "Purpose-driven entrepreneurship with high earning potential",
      "Join an expanding nationwide healthcare movement",
    ],
    link: "#cta",
    waLink: "https://wa.me/918800828863?text=Hello!%20I%20am%20interested%20in%20joining%20Harmony%20of%20Life%20as%20a%20Wellness%20Relationship%20Manager%20%2F%20Partner.",
    waCta: "Connect on WhatsApp",
  },
];

export function NextStepSection() {
  const [activeMobileTab, setActiveMobileTab] = useState<number>(0);
  const activeItem = pathways[activeMobileTab];
  const ActiveIcon = activeItem.badgeIcon;

  return (
    <section 
      id="next-step" 
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-background text-primary overflow-hidden"
    >
      {/* ========================================================= */}
      {/* FULL-BLEED BACKGROUND IMAGE & SEAMLESS GRADIENT BLENDS    */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/next-step-card-bg.webp"
          alt="Your Next Step Celestial Landscape Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft Ambient Contrast Veil */}
        <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px] pointer-events-none" />
        
        {/* Top Edge Gradient Blend into Previous Section */}
        <div className="absolute inset-x-0 top-0 h-36 sm:h-52 lg:h-64 bg-linear-to-b from-background via-background/70 to-transparent pointer-events-none z-1" />
        
        {/* Bottom Edge Gradient Blend into Next Section */}
        <div className="absolute inset-x-0 bottom-0 h-36 sm:h-52 lg:h-64 bg-linear-to-t from-background via-background/70 to-transparent pointer-events-none z-1" />
      </div>

      {/* Container with Standardized Responsive Gutter Padding */}
      <div className="relative z-10 w-full max-w-360 mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col items-center select-none">
        
        {/* Header Content Layer */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="w-full max-w-3xl mx-auto text-center flex flex-col items-center mb-10 sm:mb-14"
        >
          {/* Top Eyebrow: Gold Accent Lines */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="w-8 sm:w-16 h-px bg-accent/70" />
            <span className="font-sans font-semibold text-[10.5px] sm:text-xs tracking-[0.22em] text-primary/90 uppercase">
              YOUR NEXT STEP
            </span>
            <div className="w-8 sm:w-16 h-px bg-accent/70" />
          </div>

          {/* Main Section Title (Dual-Tone Cormorant Garamond) */}
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#142b23] tracking-tight leading-[1.1] mb-2 sm:mb-3">
            What do <span className="italic font-medium text-accent">you</span> want?
          </h2>

          {/* Leaf Accent Flourish */}
          <div className="flex items-center justify-center my-1 text-accent">
            <LeafPairIcon className="w-5 h-5 text-accent stroke-accent" />
          </div>

          {/* Sub-heading Narrative Copy */}
          <p className="font-sans text-xs sm:text-sm lg:text-base text-primary/85 max-w-2xl mx-auto leading-relaxed mt-1">
            Harmony of Life offers you 3 powerful pathways to transform your{" "}
            <strong className="font-semibold text-[#1a4a40]">health</strong>, your{" "}
            <strong className="font-semibold text-[#1a4a40]">life</strong>, and your{" "}
            <strong className="font-semibold text-[#1a4a40]">future</strong>.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* MOBILE ONLY (below md): INTERACTIVE SANCTUARY PORTAL STAGE */}
        {/* ========================================================= */}
        <div className="block md:hidden w-full max-w-md mb-12">
          {/* Segmented Tab Selector Pills */}
          <div className="flex items-center justify-center p-1.5 bg-white/75 backdrop-blur-md rounded-full border border-accent/30 shadow-md mb-6 w-full">
            {pathways.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveMobileTab(idx)}
                className={`relative flex-1 py-2 px-1.5 xs:px-2 rounded-full font-sans text-[10.5px] xs:text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer overflow-hidden min-w-0 ${
                  activeMobileTab === idx 
                    ? "text-white shadow-xs" 
                    : "text-primary/70 hover:text-primary"
                }`}
              >
                {activeMobileTab === idx && (
                  <motion.div
                    layoutId="active-pathway-mobile-tab"
                    className="absolute inset-0 bg-linear-to-r from-[#b78736] to-[#a06f20] rounded-full z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-1 font-mono text-[10px] opacity-85 shrink-0">{item.num}</span>
                <div className="relative z-1 overflow-hidden min-w-0 max-w-full">
                  <TabMarqueeText text={item.title} />
                </div>
              </button>
            ))}
          </div>

          {/* Active Pathway Spotlight Showcase Stage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative w-full bg-white/90 backdrop-blur-2xl border border-white/95 rounded-3xl p-6 flex flex-col items-center text-center shadow-xl overflow-hidden"
            >
              {/* Subtle top-right ambient gold flare */}
              <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-accent/20 blur-2xl pointer-events-none" />

              {/* Top Circular Graphic with Number Badge */}
              <div className="relative mb-4">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    sizes="112px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-accent/30 pointer-events-none" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#f4ebd9] border border-accent/40 text-accent font-mono text-[11px] font-bold flex items-center justify-center shadow-xs">
                  {activeItem.num}
                </div>
              </div>

              {/* Title & Category Lockup */}
              <div className="space-y-1 mb-2.5 mt-1">
                <span className="font-sans text-xs text-primary/70 font-medium">
                  {activeItem.eyebrow}
                </span>
                <h3 className="font-heading font-bold text-xl text-[#142b23] tracking-wide leading-tight">
                  {activeItem.title}
                </h3>
                <p className="font-heading italic text-xs text-accent font-medium">
                  {activeItem.subTitle}
                </p>
              </div>

              {/* Description */}
              <p className="font-sans text-xs text-primary/80 leading-relaxed font-normal mb-4 px-1">
                {activeItem.desc}
              </p>

              {/* 3 Key Protocol Highlights */}
              <div className="w-full bg-background/60 rounded-2xl p-3.5 border border-accent/25 text-left space-y-2 mb-4">
                <span className="font-sans font-semibold text-[9.5px] tracking-[0.18em] uppercase text-accent block">
                  KEY HIGHLIGHTS
                </span>
                {activeItem.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-[11.5px] text-primary/85">
                    <span className="text-accent font-bold mt-0.5">✦</span>
                    <span className="leading-snug">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Feature Pill Badge */}
              <div className="py-2 px-3 bg-primary/5 rounded-xl border border-accent/20 w-full flex items-center justify-center gap-2 text-primary/80 mb-5">
                <div className="shrink-0 w-5 h-5 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                  <ActiveIcon className="w-3 h-3" />
                </div>
                <span className="font-sans font-semibold text-[9px] tracking-wider uppercase text-[#1a4a40] text-center leading-tight">
                  {activeItem.badgeText}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="w-full space-y-2">
                <a
                  href={activeItem.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#b78736] hover:bg-[#a06f20] text-white font-sans font-medium text-xs shadow-[0_6px_20px_rgba(183,135,54,0.3)] active:scale-95 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-white shrink-0" />
                  <span>{activeItem.waCta}</span>
                </a>

                <Link
                  href={activeItem.link}
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(new CustomEvent("select-pathway", { detail: activeItem.id }));
                    }
                  }}
                  className="inline-flex items-center justify-center gap-1 text-[11px] font-semibold text-primary/70 hover:text-accent tracking-wider uppercase transition-colors pt-0.5"
                >
                  <span>Or register online</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP & TABLET (md: and up): 3-CARD SIDE-BY-SIDE GRID   */}
        {/* ========================================================= */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 w-full max-w-6xl mb-12 sm:mb-16">
          {pathways.map((item, idx) => {
            const IconComponent = item.badgeIcon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="h-full"
              >
                <div className="relative w-full h-full bg-white/80 hover:bg-white/95 backdrop-blur-xl border border-white/90 hover:border-accent/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-between text-center shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group">
                  {/* Top Circular Image Graphic with Number Badge */}
                  <div className="relative mb-4 sm:mb-5">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:scale-108 transition-transform duration-300">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 128px, 144px"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-accent/30 pointer-events-none" />
                    </div>

                    {/* Number Badge Tag */}
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#f4ebd9] border border-accent/40 text-accent font-mono text-xs font-bold flex items-center justify-center shadow-xs group-hover:bg-accent group-hover:text-white transition-colors">
                      {item.num}
                    </div>
                  </div>

                  {/* Middle Title & Description */}
                  <div className="flex flex-col items-center grow justify-center space-y-1.5 mt-2 mb-4">
                    <span className="font-sans text-xs sm:text-[13px] text-primary/70 font-medium">
                      {item.eyebrow}
                    </span>

                    <h3 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-[#142b23] tracking-wide group-hover:text-[#1a4a40] transition-colors leading-tight">
                      {item.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-[13px] text-primary/80 leading-relaxed font-normal pt-1">
                      {item.desc}
                    </p>
                  </div>

                  {/* Feature Pill Badge */}
                  <div className="mt-1 py-2 px-3 bg-primary/5 rounded-xl border border-accent/20 w-full flex items-center justify-center gap-2 text-primary/80 group-hover:text-primary transition-colors">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                      <IconComponent className="w-3 h-3" />
                    </div>
                    <span className="font-sans font-semibold text-[9.5px] sm:text-[10px] tracking-wider uppercase text-[#1a4a40] text-center leading-tight">
                      {item.badgeText}
                    </span>
                  </div>

                  {/* WhatsApp Direct Conversion CTA */}
                  <div className="w-full space-y-2 mt-4 pt-1">
                    <a
                      href={item.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-[#b78736] hover:bg-[#a06f20] text-white font-sans font-medium text-xs sm:text-sm shadow-[0_6px_20px_rgba(183,135,54,0.3)] hover:shadow-[0_8px_24px_rgba(183,135,54,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer group/btn"
                    >
                      <MessageCircle className="w-4 h-4 text-white transition-transform duration-300 group-hover/btn:scale-110 shrink-0" />
                      <span>{item.waCta}</span>
                    </a>

                    <Link
                      href={item.link}
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.dispatchEvent(new CustomEvent("select-pathway", { detail: item.id }));
                        }
                      }}
                      className="inline-flex items-center justify-center gap-1 text-[11px] sm:text-xs font-semibold text-primary/65 hover:text-accent tracking-wider uppercase transition-colors pt-0.5 group/sub"
                    >
                      <span>Or register online</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover/sub:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* BOTTOM NARRATIVE BANNER: ONE MISSION. THREE PATHS...      */}
        {/* ========================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col items-center space-y-2 max-w-2xl mx-auto text-center"
        >
          <p className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary font-medium tracking-tight">
            One <span className="italic font-medium text-accent">Mission.</span> Three <span className="italic font-medium text-accent">Paths.</span> Infinite <span className="italic font-medium text-accent">Possibilities.</span>
          </p>

          {/* Delicate Leaf Flourish */}
          <div className="flex items-center justify-center my-0.5 text-accent">
            <LeafPairIcon className="w-4 h-4 text-accent stroke-accent" />
          </div>

          <p className="font-sans text-xs sm:text-sm text-primary/80 font-normal">
            The choice is yours. We&apos;re here to walk with you.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

{/* Delicate Botanical Leaf Pair SVG Icon */}
function LeafPairIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className || "w-5 h-5"}
    >
      <path d="M12 18C12 18 10 13 6 11C2 9 3 4 8 4C13 4 13 9 12 18Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M12 18C12 18 14 13 18 11C22 9 21 4 16 4C11 4 11 9 12 18Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M12 18V21" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

{/* Auto-scrolling Marquee Text when tab label exceeds compact button width */}
function TabMarqueeText({ text, className }: { text: string; className?: string }) {
  const cleanText = text.replace(/<[^>]*>?/gm, " ").replace(/\s+/g, " ").trim();

  // If text is short, render standard text
  if (cleanText.length <= 10) {
    return <span className={cn("truncate", className)}>{cleanText}</span>;
  }

  // If text is long (e.g. "Income Opportunity"), display an elegant auto-scrolling marquee
  return (
    <div className="w-full max-w-full overflow-hidden whitespace-nowrap flex items-center justify-center pointer-events-none">
      <motion.div
        className={cn("inline-flex items-center whitespace-nowrap will-change-transform", className)}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 5,
        }}
      >
        <span className="px-1">{cleanText}</span>
        <span className="px-1.5 opacity-50 text-[9px]">•</span>
        <span className="px-1">{cleanText}</span>
        <span className="px-1.5 opacity-50 text-[9px]">•</span>
      </motion.div>
    </div>
  );
}

