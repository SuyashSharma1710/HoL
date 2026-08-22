"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Users, Leaf } from "lucide-react";

interface PathwayCard {
  num: string;
  eyebrow: string;
  title: string;
  desc: string;
  image: string;
  badgeText: string;
  badgeIcon: React.ComponentType<{ className?: string }>;
  link: string;
}

const pathways: PathwayCard[] = [
  {
    num: "01",
    eyebrow: "You want",
    title: "PRODUCTS",
    desc: "Science-backed, high-quality wellness solutions designed to detox, nourish, and recharge your body at the cellular level.",
    image: "/images/pathway-products-icon.jpg",
    badgeText: "FUEL YOUR BODY. ELEVATE YOUR LIFE.",
    badgeIcon: Leaf,
    link: "#pillars",
  },
  {
    num: "02",
    eyebrow: "You want",
    title: "KNOWLEDGE",
    desc: "Evidence-based knowledge, tools, and guidance to help you understand your body, increase your lifeforce, and live young.",
    image: "/images/pathway-knowledge-icon.jpg",
    badgeText: "EMPOWER YOUR MIND. TRANSFORM YOUR HEALTH.",
    badgeIcon: BookOpen,
    link: "#gut-reset",
  },
  {
    num: "03",
    eyebrow: "You want",
    title: "INCOME OPPORTUNITY",
    desc: "Be part of a purpose-driven community and build a meaningful income while helping others create healthier, happier lives.",
    image: "/images/pathway-opportunity-icon.jpg",
    badgeText: "CREATE IMPACT. BUILD YOUR FUTURE.",
    badgeIcon: Users,
    link: "#community",
  },
];

export function NextStepSection() {
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
          src="/images/next-step-card-bg.jpeg"
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

        {/* 3 Pathway Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 w-full max-w-6xl mb-12 sm:mb-16">
          {pathways.map((item, idx) => {
            const IconComponent = item.badgeIcon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <Link
                  href={item.link}
                  className="relative w-full h-full bg-white/80 hover:bg-white/95 backdrop-blur-xl border border-white/90 hover:border-accent/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-between text-center shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
                >
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
                  <div className="flex flex-col items-center flex-grow justify-center space-y-1.5 mt-2 mb-4">
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

                  {/* Bottom Feature Pill Badge */}
                  <div className="mt-2 pt-3 border-t border-accent/20 w-full flex items-center justify-center gap-2 text-primary/80 group-hover:text-primary transition-colors">
                    <div className="shrink-0 w-7 h-7 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-sans font-semibold text-[9.5px] sm:text-[10px] tracking-wider uppercase text-[#1a4a40] text-left leading-tight">
                      {item.badgeText}
                    </span>
                  </div>
                </Link>
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
