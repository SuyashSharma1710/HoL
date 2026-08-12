"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const blueprintData = [
  { title: "Our Aim", content: "To empower people with the right knowledge about their health and help prevent the growing lifestyle disorder in India.", image: "/images/our-aim.png" },
  { title: "Our Vision", content: "To make a world where people create happy healthier lives.", image: "/images/our-vision.png" },
  { title: "Our Mission", content: "To create a trusted science-backed ecosystem that delivers personalized health solutions.", image: "/images/our-mission.png" },
  { title: "Our Objective", content: "To train wellness relationship managers on the tenets of optimal health.", image: "/images/our-objective.png" }
];

export function WhySection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background Opacity Crossfades mapped to the new sequence:
  // 0-50%: Blueprint (Vision Celestial) - Since Blueprint takes 400vh out of the ~600vh total
  // 50-80%: Approach / Stats (Crisis Abstract) - 100vh
  // 80-100%: Resolution (Cellular Charge) - 100vh
  const visionOpacity = useTransform(scrollYProgress, [0, 0.4, 0.55], [0.6, 0.6, 0]);
  const crisisOpacity = useTransform(scrollYProgress, [0.4, 0.55, 0.8, 0.9], [0, 0.6, 0.6, 0]);
  const cellularOpacity = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 0.5, 0.5]);

  // Parallax for the background layers
  // Since the background container is 'sticky' (doesn't scroll), we move the image UP ("10%" to "-10%") 
  // to simulate it scrolling up slowly, in the same direction as the content.
  const bgY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={containerRef} id="why" className="relative w-full bg-background text-primary">
      
      {/* STICKY BACKGROUND CONTAINER */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        
        {/* Layer 1: Vision (Blueprint) */}
        <motion.div style={{ opacity: visionOpacity, y: bgY }} className="absolute inset-0 h-[120%] top-[-10%] origin-center">
          <Image 
            src="/images/vision-celestial.png"
            alt="Celestial Wellness Vision"
            fill
            className="object-cover mix-blend-screen scale-105"
            sizes="100vw"
            priority
          />
        </motion.div>

        {/* Layer 2: Crisis (Approach/Stats) */}
        <motion.div style={{ opacity: crisisOpacity, y: bgY }} className="absolute inset-0 h-[120%] top-[-10%] origin-center">
          <Image 
            src="/images/crisis-abstract.png"
            alt="Modern Health Crisis"
            fill
            className="object-cover mix-blend-screen scale-105"
            sizes="100vw"
          />
        </motion.div>

        {/* Layer 3: Cellular Charge (Resolution) */}
        <motion.div style={{ opacity: cellularOpacity, y: bgY }} className="absolute inset-0 h-[120%] top-[-10%] origin-center">
          <Image 
            src="/images/cellular-charge.png"
            alt="Cellular Lifeforce"
            fill
            className="object-cover mix-blend-screen scale-105"
            sizes="100vw"
          />
        </motion.div>

        {/* Base dark overlay to ensure text is always readable */}
        <div className="absolute inset-0 bg-background/85 z-10 pointer-events-none" />
      </div>

      {/* FOREGROUND SCROLLING CONTENT */}
      <div className="relative z-20 mt-[-100vh] w-full">
        
        {/* MAIN INTRO: Why HOL */}
        <div className="w-full flex flex-col items-center justify-center pt-32 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-center max-w-4xl mx-auto flex flex-col items-center"
          >
            <h2 className="font-heading text-5xl font-semibold leading-[1.15] text-primary mb-4 drop-shadow-sm">
              Why Harmony of Life ?
            </h2>
            <p className="text-lg font-heading font-medium text-primary/90 drop-shadow-sm">
              To Stop the rise of lifestyle disorders in India.
            </p>
          </motion.div>
        </div>

        {/* PART 1: The Blueprint (Hover Expanding Cards) */}
        <div className="w-full flex flex-col items-center pt-12 pb-32 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl mx-auto lg:h-[60vh] lg:min-h-[300px] flex flex-col lg:flex-row gap-4 lg:gap-6">
            {blueprintData.map((item, idx) => (
              <div 
                key={idx}
                className="group relative flex-1 lg:hover:flex-[1.5] transition-all duration-700 ease-in-out lg:h-full aspect-square lg:aspect-auto rounded-[16px] overflow-hidden cursor-pointer shadow-xl shadow-primary/10 border border-primary/10"
              >
                {/* Background Image */}
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-1000 lg:group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
                
                {/* Dark gradient at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 lg:group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Number Watermark */}
                <div className="absolute -right-4 -top-6 text-[8rem] font-heading font-bold text-white/5 select-none pointer-events-none leading-none z-10 transition-colors duration-700 lg:group-hover:text-white/10">
                  0{idx + 1}
                </div>

                {/* Content Container */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end z-20">
                  <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-white drop-shadow-lg mb-2 lg:mb-4 whitespace-nowrap">
                    {item.title}
                  </h2>
                  
                  {/* Slide up content via grid transition on desktop, always visible on mobile */}
                  <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 lg:group-hover:delay-300 delay-0 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-base sm:text-lg font-medium text-white/90 leading-snug drop-shadow-md pb-2">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: The Approach (Crisis Stats Bento Grid) */}
        <div className="w-full flex flex-col items-center pb-24 sm:pb-16 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-360 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-center mb-12"
            >
              <h3 className="font-heading text-5xl font-semibold leading-[1.1] text-primary drop-shadow-sm">
                Approach
              </h3>
            </motion.div>

            {/* Asymmetrical Bento Grid Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6 w-full">
              
              {/* Card 1 (Diabetic) - Massive Feature */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="md:col-span-2 lg:col-span-2 lg:row-span-2 border border-primary/10 p-10 sm:p-14 rounded-[16px] shadow-2xl shadow-primary/10 flex flex-col justify-end relative overflow-hidden group min-h-87.5"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image src="/images/bento-diabetic-indian.png" alt="Diabetic statistics" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                
                {/* Dark spot for text readability */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.7)_0%,transparent_70%)] z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-80" />
                
                {/* Background Watermark */}
                <div className="absolute -top-12 -right-4 text-[14rem] font-heading font-bold text-white/10 select-none pointer-events-none leading-none group-hover:text-white/15 transition-colors duration-700 z-10">
                  1:4
                </div>
                <div className="relative z-20">
                  <span className="block text-7xl sm:text-8xl font-heading font-bold text-white mb-6 drop-shadow-lg transition-transform duration-500 group-hover:translate-x-2">1 in 4</span>
                  <span className="block text-lg font-medium text-white/95 leading-snug drop-shadow-lg max-w-xs transition-transform duration-500 group-hover:translate-x-2">People are diabetic or prediabetic.</span>
                </div>
              </motion.div>

              {/* Card 2 (Obese) - Wide Feature */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="md:col-span-2 lg:col-span-2 lg:row-span-1 border border-primary/10 p-8 sm:p-10 rounded-[16px] shadow-2xl shadow-primary/10 flex flex-col sm:flex-row sm:items-center justify-between relative overflow-hidden group min-h-50"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image src="/images/bento-obese-indian.png" alt="Obesity statistics" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                
                {/* Dark spot for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-80" />
                
                <span className="block text-6xl font-heading font-bold text-white mb-4 sm:mb-0 drop-shadow-lg relative z-20">1 in 4</span>
                <span className="block text-lg font-medium text-white/95 leading-snug drop-shadow-lg sm:text-right max-w-50 relative z-20">People are obese.</span>
              </motion.div>

              {/* Card 3 (ED) - Square */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="md:col-span-1 lg:col-span-1 lg:row-span-1 border border-primary/10 p-8 rounded-[16px] shadow-2xl shadow-primary/10 flex flex-col items-center text-center justify-center relative overflow-hidden group min-h-50"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image src="/images/bento-ed-indian.png" alt="Erectile Dysfunction statistics" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 25vw" />
                </div>
                
                {/* Dark spot for text readability */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.6)_0%,transparent_75%)] z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-80" />
                
                <span className="block text-5xl font-heading font-bold text-white mb-4 drop-shadow-lg transition-transform duration-500 group-hover:scale-110 relative z-20">40%</span>
                <span className="block text-lg font-medium text-white/95 leading-snug drop-shadow-lg relative z-20">Men over 40 have Erectile dysfunction.</span>
              </motion.div>

              {/* Card 4 (Alcohol) - Square */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="md:col-span-1 lg:col-span-1 lg:row-span-1 border border-primary/10 p-8 rounded-[16px] shadow-2xl shadow-primary/10 flex flex-col items-center text-center justify-center relative overflow-hidden group min-h-50"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image src="/images/bento-alcohol-indian.png" alt="Alcohol consumption statistics" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 25vw" />
                </div>
                
                {/* Dark spot for text readability */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.6)_0%,transparent_75%)] z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-80" />
                
                <span className="block text-5xl font-heading font-bold text-white mb-4 drop-shadow-lg transition-transform duration-500 group-hover:scale-110 relative z-20">2x</span>
                <span className="block text-lg font-medium text-white/95 leading-snug drop-shadow-lg relative z-20">Alcohol consumption doubled since the 2000s.</span>
              </motion.div>

            </div>
          </div>
        </div>

        {/* PART 3: The Resolution */}
        <div className="min-h-screen w-full flex items-center justify-center py-24 sm:pb-32 sm:pt-16 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 bg-background rounded-[16px] overflow-hidden shadow-2xl shadow-primary/10 border border-primary/20 relative"
          >
            {/* Subtle inner shadow for depth */}
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(20,43,35,0.05)] pointer-events-none z-20" />
            
            {/* Image Side */}
            <div className="relative h-75 lg:h-auto w-full">
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
