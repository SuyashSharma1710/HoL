"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SolutionCard {
  id: string;
  title: string;
  desc: string;
  link: string;
  image: string;
}

const solutions: SolutionCard[] = [
  {
    id: "living-young",
    title: "LIVING YOUNG",
    desc: "Rejuvenate. Renew. Restore.",
    link: "#pillars",
    image: "/images/living-young-icon.jpeg",
  },
  {
    id: "gut-reset",
    title: "GUT RESET",
    desc: "Heal your gut. Heal your life.",
    link: "#gut-reset",
    image: "/images/gut-reset-icon.jpeg",
  },
  {
    id: "lifestyle-disorder",
    title: "PROTOCOL FOR LIFESTYLE DISORDER",
    desc: "Targeted support for modern health challenges.",
    link: "#cta",
    image: "/images/lifestyle-disorder-icon.jpeg",
  },
];

export function ScienceSolutionsSection() {
  return (
    <section 
      id="solutions" 
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-background text-primary overflow-hidden"
    >
      {/* Container with Standardized Responsive Gutter Padding */}
      <div className="relative z-10 w-full max-w-360 mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ========================================================= */}
        {/* MAIN LUXURY FEATURE CARD WITH EMBEDDED BACKGROUND IMAGE   */}
        {/* ========================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative w-full rounded-3xl sm:rounded-[36px] overflow-hidden border border-white/90 shadow-2xl p-6 sm:p-10 lg:p-14 xl:p-16 flex flex-col items-center text-center select-none"
        >
          {/* Dedicated High-Res Generated Card Background (Applies to this card only) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/science-solutions-card-bg.jpeg"
              alt="Science Based Solutions Botanical Backdrop"
              fill
              priority
              sizes="(max-width: 1560px) 100vw, 1560px"
              className="object-cover object-center"
            />
            {/* Frosted Center Contrast Veil for Ultra-Crisp Legibility */}
            <div className="absolute inset-0 bg-white/45 backdrop-blur-[2px] pointer-events-none" />
            <div className="absolute inset-0 bg-radial from-white/70 via-white/40 to-transparent pointer-events-none" />
          </div>

          {/* Card Content Layer */}
          <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
            
            {/* Top Eyebrow: Sacred Lotus with Delicate Divider Lines */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-8 sm:w-16 h-px bg-accent/70" />
              <div className="flex items-center gap-2 text-primary/90 font-sans font-semibold text-[10.5px] sm:text-xs tracking-[0.22em] uppercase">
                <LotusIcon className="w-4 h-4 text-accent stroke-accent" />
                <span>SCIENCE BACKED SOLUTIONS</span>
              </div>
              <div className="w-8 sm:w-16 h-px bg-accent/70" />
            </div>

            {/* Main Section Title (Cormorant Garamond SemiBold) */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#142b23] tracking-tight leading-[1.1] mb-2 sm:mb-3">
              SCIENCE BASED SOLUTIONS
            </h2>

            {/* Accent Star Divider */}
            <div className="flex items-center justify-center my-1 text-accent text-xs">
              <span>✦</span>
            </div>

            {/* Sub-heading / Mission Copy */}
            <p className="font-sans text-xs sm:text-sm lg:text-base text-primary/85 max-w-2xl mx-auto leading-relaxed mt-1 mb-8 sm:mb-12">
              Evidence-backed protocols to restore cellular charge, increase lifeforce, and help you live young.
            </p>

            {/* 3 Pillar Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 w-full">
              {solutions.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 + idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <Link
                    href={item.link}
                    className="relative w-full h-full bg-white/80 hover:bg-white/95 backdrop-blur-xl border border-white/90 hover:border-accent/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-between text-center shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
                  >
                    {/* Top Circular Image Graphic */}
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden mb-4 sm:mb-6 border-2 border-white shadow-md group-hover:scale-108 transition-transform duration-300">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 128px, 144px"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-accent/30 pointer-events-none" />
                    </div>

                    {/* Middle Title & Description */}
                    <div className="flex flex-col items-center grow justify-center space-y-2">
                      <h3 className="font-heading font-bold text-base sm:text-lg lg:text-xl text-[#142b23] tracking-wide group-hover:text-[#1a4a40] transition-colors leading-tight">
                        {item.title}
                      </h3>

                      {/* Small Star Accent */}
                      <span className="text-accent text-[10px] leading-none">✦</span>

                      <p className="font-sans text-xs sm:text-[13px] text-primary/80 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Leaf Flourish & Hover Action */}
                    <div className="mt-5 sm:mt-6 pt-3 border-t border-accent/20 w-full flex items-center justify-center gap-1.5 text-accent/80 group-hover:text-accent transition-colors">
                      <LeafIcon className="w-4 h-4 text-accent fill-accent/20" />
                      <span className="font-sans text-[11px] font-semibold tracking-wider uppercase text-primary/70 group-hover:text-primary transition-colors inline-flex items-center gap-1">
                        Explore
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1 text-accent" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

          </div>

        </motion.div>

      </div>
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
      className={className || "w-6 h-6"}
    >
      <path d="M32 10C32 10 38 24 38 36C38 42 35 46 32 46C29 46 26 42 26 36C26 24 32 10 32 10Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
      <path d="M32 20C26 24 16 32 18 42C19 46 23 48 27 46C30 44 32 38 32 38" stroke="currentColor" strokeWidth="1.5" />
      <path d="M32 20C38 24 48 32 46 42C45 46 41 48 37 46C34 44 32 38 32 38" stroke="currentColor" strokeWidth="1.5" />
      <path d="M28 32C20 34 8 40 12 48C14 51 20 50 25 46" stroke="currentColor" strokeWidth="1.5" />
      <path d="M36 32C44 34 56 40 52 48C50 51 44 50 39 46" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 52C26 55 38 55 48 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

{/* Botanical Leaf Triple Flourish Icon */}
function LeafIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className || "w-4 h-4"}
    >
      <path d="M12 4C12 4 14 8 14 12C14 14 13 16 12 16C11 16 10 14 10 12C10 8 12 4 12 4Z" fill="currentColor" stroke="currentColor" strokeWidth="1.2" />
      <path d="M12 12C8 9 5 12 5 15C5 17 7 18 9 17C11 16 12 12 12 12Z" fill="currentColor" stroke="currentColor" strokeWidth="1.2" />
      <path d="M12 12C16 9 19 12 19 15C19 17 17 18 15 17C13 16 12 12 12 12Z" fill="currentColor" stroke="currentColor" strokeWidth="1.2" />
      <path d="M12 16V20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
