"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const issuesData = [
  {
    stat: "1 in 4",
    title: "Diabetic or Prediabetic",
    description: "People in India are currently living with diabetes or prediabetes.",
    tag: "Metabolic Crisis",
  },
  {
    stat: "1 in 4",
    title: "Obese or Overweight",
    description: "People are clinically obese, creating chronic inflammation and cellular impedance.",
    tag: "Weight & Vitality",
  },
  {
    stat: "40%",
    title: "Erectile Dysfunction",
    description: "Men over 40 experience vascular and hormonal decline affecting overall lifeforce.",
    tag: "Men's Health",
  },
  {
    stat: "2x",
    title: "Alcohol Consumption",
    description: "Alcohol consumption has doubled since the 2000s, drastically increasing cellular toxicity.",
    tag: "Toxic Exposure",
  },
];

export function IssuesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % issuesData.length);
    }, 3800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="issues" 
      className="relative w-full min-h-[90vh] lg:min-h-screen py-24 sm:py-32 flex flex-col items-center justify-center bg-background overflow-hidden"
    >
      {/* Background Image (4-Quadrant Crisis Montage) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/issuesbg.jpeg"
          alt="Modern Lifestyle Health Crisis"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft edge blends */}
        <div className="absolute inset-0 bg-background/10 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-32 sm:h-48 bg-linear-to-b from-background via-background/60 to-transparent pointer-events-none z-1" />
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-48 bg-linear-to-t from-background via-background/60 to-transparent pointer-events-none z-1" />
      </div>

      {/* Center Text Display */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="w-full flex flex-col items-center justify-center min-h-70 sm:min-h-80">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col items-center justify-center w-full"
            >
              {/* Category Subtitle */}
              <span className="block text-xs sm:text-sm font-semibold tracking-widest uppercase text-secondary mb-3 drop-shadow-xs">
                {issuesData[currentIndex].tag}
              </span>

              {/* Big Stat */}
              <span className="block text-7xl sm:text-8xl md:text-9xl font-text font-bold text-primary tracking-tight leading-none mb-3 sm:mb-4 drop-shadow-sm">
                {issuesData[currentIndex].stat}
              </span>

              {/* Issue Title */}
              <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-primary mb-3 sm:mb-4 leading-tight drop-shadow-xs">
                {issuesData[currentIndex].title}
              </h3>

              {/* Issue Description */}
              <p className="font-text text-base sm:text-lg lg:text-xl text-primary/85 max-w-xl leading-relaxed font-normal drop-shadow-xs">
                {issuesData[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
