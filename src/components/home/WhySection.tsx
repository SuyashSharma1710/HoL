"use client";

import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const blueprintData = [
  { title: "Our Aim", content: "To empower people with the right knowledge about their health and help prevent the growing lifestyle disorder in India.", image: "/images/blueprint-aim.png" },
  { title: "Our Vision", content: "To make a world where people create happy healthier lives.", image: "/images/blueprint-vision.png" },
  { title: "Our Mission", content: "To create a trusted science-backed ecosystem that delivers personalized health solutions.", image: "/images/blueprint-mission.png" },
  { title: "Our Objective", content: "To train wellness relationship managers on the tenets of optimal health.", image: "/images/blueprint-objective.png" }
];

export function WhySection() {
  const containerRef = useRef<HTMLElement>(null);
  const part1Ref = useRef<HTMLDivElement>(null); // The Blueprint (Sticky)
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: part1Progress } = useScroll({
    target: part1Ref,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(part1Progress, "change", (latest) => {
    if (latest < 0.25) setActiveIndex(0);
    else if (latest < 0.5) setActiveIndex(1);
    else if (latest < 0.75) setActiveIndex(2);
    else setActiveIndex(3);
  });

  const handleNavClick = (idx: number) => {
    if (!part1Ref.current) return;
    const absoluteTop = part1Ref.current.getBoundingClientRect().top + window.scrollY;
    const targetScroll = absoluteTop + (idx * window.innerHeight);
    
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
  };

  // Background Opacity Crossfades mapped to the new sequence:
  // 0-50%: Blueprint (Vision Celestial) - Since Blueprint takes 400vh out of the ~600vh total
  // 50-80%: Approach / Stats (Crisis Abstract) - 100vh
  // 80-100%: Resolution (Cellular Charge) - 100vh
  const visionOpacity = useTransform(scrollYProgress, [0, 0.4, 0.55], [0.6, 0.6, 0]);
  const crisisOpacity = useTransform(scrollYProgress, [0.4, 0.55, 0.8, 0.9], [0, 0.6, 0.6, 0]);
  const cellularOpacity = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 0.5, 0.5]);

  return (
    <section ref={containerRef} id="why" className="relative w-full bg-primary text-background">
      
      {/* STICKY BACKGROUND CONTAINER */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        
        {/* Layer 1: Vision (Blueprint) */}
        <motion.div style={{ opacity: visionOpacity }} className="absolute inset-0">
          <Image 
            src="/images/vision-celestial.png"
            alt="Celestial Wellness Vision"
            fill
            className="object-cover mix-blend-screen"
            sizes="100vw"
            priority
          />
        </motion.div>

        {/* Layer 2: Crisis (Approach/Stats) */}
        <motion.div style={{ opacity: crisisOpacity }} className="absolute inset-0">
          <Image 
            src="/images/crisis-abstract.png"
            alt="Modern Health Crisis"
            fill
            className="object-cover mix-blend-screen"
            sizes="100vw"
          />
        </motion.div>

        {/* Layer 3: Cellular Charge (Resolution) */}
        <motion.div style={{ opacity: cellularOpacity }} className="absolute inset-0">
          <Image 
            src="/images/cellular-charge.png"
            alt="Cellular Lifeforce"
            fill
            className="object-cover mix-blend-screen"
            sizes="100vw"
          />
        </motion.div>

        {/* Base dark overlay to ensure text is always readable */}
        <div className="absolute inset-0 bg-primary/70 z-10 pointer-events-none" />
      </div>

      {/* FOREGROUND SCROLLING CONTENT */}
      <div className="relative z-20 -mt-[100vh] w-full">
        
        {/* MAIN INTRO: Why HOL */}
        <div className="w-full flex flex-col items-center justify-center pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-center max-w-4xl mx-auto flex flex-col items-center"
          >
            <h2 className="font-heading text-5xl font-semibold leading-[1.15] text-white mb-4 drop-shadow-sm">
              Why Harmony of Life ?
            </h2>
            <p className="text-lg font-heading font-medium text-white/90 drop-shadow-sm">
              To Stop the rise of lifestyle disorders in India.
            </p>
          </motion.div>
        </div>

        {/* PART 1: The Blueprint (Split-Screen Sticky Scroll) */}
        <div ref={part1Ref} className="relative w-full h-[400vh]">
          <div className="sticky top-0 h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            
            <div className="w-full max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 h-full items-center">
              
              {/* Left Column: Headings & Navigation */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                
                {/* Tenets List */}
                <div className="flex flex-col space-y-6 lg:space-y-10">
                  {blueprintData.map((block, idx) => (
                    <div 
                      key={idx} 
                      className="relative flex items-center cursor-pointer group"
                      onClick={() => handleNavClick(idx)}
                    >
                      {activeIndex === idx && (
                        <motion.div 
                          layoutId="active-indicator"
                          className="absolute left-0 w-2 h-2 rounded-full bg-accent shadow-sm" 
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <h2 
                        className={`font-heading text-4xl sm:text-5xl font-semibold transition-all duration-700 drop-shadow-sm group-hover:text-white/40 ${
                          activeIndex === idx ? "text-accent translate-x-6 group-hover:text-accent" : "text-white/20"
                        }`}
                      >
                        {block.title}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Active Content Container */}
              <div className="lg:col-span-7 relative h-[300px] sm:h-[400px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="absolute inset-0 rounded-[16px] shadow-2xl shadow-black/40 overflow-hidden flex flex-col justify-center border border-white/10"
                  >
                    {/* Background Image for the Card */}
                    <div className="absolute inset-0 z-0">
                      <Image 
                        src={blueprintData[activeIndex].image}
                        alt={blueprintData[activeIndex].title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Dark overlay to ensure text readability */}
                      <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
                    </div>

                    {/* Faint Background Number */}
                    <div className="absolute -right-4 -bottom-6 text-[12rem] sm:text-[16rem] font-heading font-bold text-white/[0.06] select-none pointer-events-none leading-none z-10">
                      0{activeIndex + 1}
                    </div>
                    
                    <p className="font-heading text-4xl leading-snug font-medium text-white drop-shadow-sm relative z-20 px-8 sm:px-12">
                      {blueprintData[activeIndex].content}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>

        {/* PART 2: The Approach (Crisis Stats Bento Grid) */}
        <div className="min-h-screen w-full flex flex-col items-center justify-center py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-360 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-center mb-16 lg:mb-24"
            >
              <h3 className="font-heading text-5xl font-semibold leading-[1.1] text-white mb-6 drop-shadow-sm">
                Approach
              </h3>
              <div className="w-24 h-1 bg-accent rounded-full mx-auto shadow-sm" />
            </motion.div>

            {/* Asymmetrical Bento Grid Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6 w-full">
              
              {/* Card 1 (Diabetic) - Massive Feature */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="md:col-span-2 lg:col-span-2 lg:row-span-2 border border-white/10 p-10 sm:p-14 rounded-[16px] shadow-2xl shadow-black/40 flex flex-col justify-end relative overflow-hidden group min-h-[350px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image src="/images/bento-diabetic.png" alt="Diabetic statistics" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-primary/80 mix-blend-multiply group-hover:bg-primary/60 transition-colors duration-500" />
                </div>
                
                {/* Background Watermark */}
                <div className="absolute -top-12 -right-4 text-[14rem] font-heading font-bold text-white/[0.04] select-none pointer-events-none leading-none group-hover:text-white/[0.08] transition-colors duration-700 z-10">
                  1:4
                </div>
                <div className="relative z-20">
                  <span className="block text-7xl sm:text-8xl font-heading font-bold text-accent mb-6 drop-shadow-sm transition-transform duration-500 group-hover:translate-x-2">1 in 4</span>
                  <span className="block text-lg font-medium text-white/90 leading-snug drop-shadow-sm max-w-xs transition-transform duration-500 group-hover:translate-x-2">People are diabetic or prediabetic.</span>
                </div>
              </motion.div>

              {/* Card 2 (Obese) - Wide Feature */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="md:col-span-2 lg:col-span-2 lg:row-span-1 border border-white/10 p-8 sm:p-10 rounded-[16px] shadow-2xl shadow-black/40 flex flex-col sm:flex-row sm:items-center justify-between relative overflow-hidden group min-h-[200px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image src="/images/bento-obese.png" alt="Obesity statistics" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-primary/80 mix-blend-multiply group-hover:bg-primary/60 transition-colors duration-500" />
                </div>
                
                <div className="absolute inset-0 bg-linear-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                <span className="block text-6xl font-heading font-bold text-white mb-4 sm:mb-0 drop-shadow-sm relative z-20">1 in 4</span>
                <span className="block text-lg font-medium text-white/90 leading-snug drop-shadow-sm sm:text-right max-w-[200px] relative z-20">People are obese.</span>
              </motion.div>

              {/* Card 3 (ED) - Square */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="md:col-span-1 lg:col-span-1 lg:row-span-1 border border-white/10 p-8 rounded-[16px] shadow-2xl shadow-black/40 flex flex-col items-center text-center justify-center relative overflow-hidden group min-h-[200px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image src="/images/bento-ed.png" alt="Erectile Dysfunction statistics" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 25vw" />
                  <div className="absolute inset-0 bg-primary/80 mix-blend-multiply group-hover:bg-primary/60 transition-colors duration-500" />
                </div>
                
                <span className="block text-5xl font-heading font-bold text-white mb-4 drop-shadow-sm transition-transform duration-500 group-hover:scale-110 relative z-20">40%</span>
                <span className="block text-lg font-medium text-white/90 leading-snug drop-shadow-sm relative z-20">Men over 40 have Erectile dysfunction.</span>
              </motion.div>

              {/* Card 4 (Alcohol) - Square */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="md:col-span-1 lg:col-span-1 lg:row-span-1 border border-white/10 p-8 rounded-[16px] shadow-2xl shadow-black/40 flex flex-col items-center text-center justify-center relative overflow-hidden group min-h-[200px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image src="/images/bento-alcohol.png" alt="Alcohol consumption statistics" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 25vw" />
                  <div className="absolute inset-0 bg-primary/80 mix-blend-multiply group-hover:bg-primary/60 transition-colors duration-500" />
                </div>
                
                <span className="block text-5xl font-heading font-bold text-white mb-4 drop-shadow-sm transition-transform duration-500 group-hover:scale-110 relative z-20">2x</span>
                <span className="block text-lg font-medium text-white/90 leading-snug drop-shadow-sm relative z-20">Alcohol consumption doubled since the 2000s.</span>
              </motion.div>

            </div>
          </div>
        </div>

        {/* PART 3: The Resolution */}
        <div className="min-h-screen w-full flex items-center justify-center py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 bg-background rounded-[16px] overflow-hidden shadow-2xl shadow-black/80 border border-white/20 relative"
          >
            {/* Subtle inner shadow for depth */}
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(20,43,35,0.05)] pointer-events-none z-20" />
            
            {/* Image Side */}
            <div className="relative h-[300px] lg:h-auto w-full">
              <Image 
                src="/images/root-cause.png" 
                alt="Root Cause"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Editorial Text Side */}
            <div className="p-8 sm:p-12 lg:p-20 flex flex-col justify-center relative z-10">
              <p className="font-semibold text-secondary tracking-widest uppercase text-sm mb-6">
                The Resolution
              </p>
              
              <h3 className="font-heading text-4xl sm:text-5xl font-semibold text-primary leading-[1.15] mb-8">
                Addressing the <span className="italic text-accent">root cause</span> of the root cause.
              </h3>
              
              <div className="space-y-6">
                <p className="text-lg text-primary/80 leading-relaxed font-medium border-l-2 border-accent pl-6">
                  Harmony of Life is built entirely on this fundamental concept.
                </p>
                
                <p className="text-lg text-primary font-medium leading-relaxed">
                  All these modern healthcare challenges will be resolved by increasing your <strong className="font-semibold text-accent italic">Lifeforce</strong> and <strong className="font-semibold text-accent italic">Cellular Charge</strong>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
