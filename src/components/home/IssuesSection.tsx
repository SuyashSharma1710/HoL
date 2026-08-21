"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, ChevronLeft, ChevronRight } from "lucide-react";

const issuesData = [
  {
    stat: "1 in 4",
    title: "Diabetic or Prediabetic",
    description: "People in India are currently living with diabetes or prediabetes, driving systemic metabolic fatigue.",
    tag: "Metabolic Crisis",
  },
  {
    stat: "1 in 4",
    title: "Obese or Overweight",
    description: "People are clinically obese, creating chronic cellular inflammation and reducing biological energy output.",
    tag: "Weight & Vitality",
  },
  {
    stat: "40%",
    title: "Erectile Dysfunction",
    description: "Men over 40 experience vascular and hormonal decline affecting vitality, cellular voltage, and healthspan.",
    tag: "Vascular & Hormonal Decline",
  },
  {
    stat: "2x",
    title: "Alcohol Consumption",
    description: "Alcohol consumption has doubled since the 2000s, drastically elevating cellular toxicity and liver burden.",
    tag: "Toxic Exposure",
  },
];

const AUTOPLAY_INTERVAL = 4500; // 4.5s per crisis stat

export function IssuesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextIssue = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % issuesData.length);
  }, []);

  const prevIssue = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + issuesData.length) % issuesData.length);
  }, []);

  const goToIssue = useCallback((idx: number) => {
    setCurrentIndex(idx);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextIssue, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [nextIssue, currentIndex]);

  return (
    <section 
      id="issues" 
      className="relative w-full min-h-[90vh] lg:min-h-screen py-24 sm:py-32 flex flex-col items-center justify-center bg-background overflow-hidden select-none"
    >
      {/* Background Image (4-Quadrant Crisis Montage) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/issuesbg.jpeg"
          alt="Modern Lifestyle Health Crisis in India"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft edge blends */}
        <div className="absolute inset-0 bg-background/10 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-32 sm:h-48 lg:h-56 bg-linear-to-b from-background via-background/60 to-transparent pointer-events-none z-1" />
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-48 lg:h-56 bg-linear-to-t from-background via-background/60 to-transparent pointer-events-none z-1" />
      </div>

      {/* Center Dynamic Content Display */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="w-full flex flex-col items-center justify-center min-h-80 sm:min-h-96">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 22, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -22, scale: 0.96 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col items-center justify-center w-full"
            >
              {/* Category Eyebrow Pill Badge (Design.md §3) */}
              {/* <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-xs mb-3 sm:mb-4 shadow-xs">
                <AlertCircle className="w-3.5 h-3.5 text-accent" />
                <span className="font-sans font-semibold text-[11px] sm:text-xs tracking-[0.2em] uppercase text-primary">
                  {issuesData[currentIndex].tag}
                </span>
              </div> */}

              {/* Big Impact Stat */}
              <span className="block font-sans text-7xl sm:text-8xl md:text-9xl font-bold text-primary tracking-tight leading-none mb-2 sm:mb-3 drop-shadow-sm">
                {issuesData[currentIndex].stat}
              </span>

              {/* Issue Title (Cormorant Garamond) */}
              <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-primary mb-3 leading-tight drop-shadow-xs">
                {issuesData[currentIndex].title}
              </h3>

              {/* Amber-Gold Divider Bar (Design.md §3) */}
              <div className="w-12 h-0.5 bg-accent/80 rounded-full mx-auto mb-4 sm:mb-5 shadow-[0_0_8px_rgba(183,135,54,0.3)]" />

              {/* Issue Description */}
              <p className="font-sans text-base sm:text-lg lg:text-xl text-primary/85 max-w-xl leading-[1.7] font-normal drop-shadow-xs">
                {issuesData[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Integrated Navigation & Progress Bar Pill (Design.md §4 & §5) */}
        <div className="mt-8 sm:mt-12 flex items-center gap-2 bg-background/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-accent/35 shadow-xl shadow-primary/5">
          {/* Previous Arrow */}
          <button
            onClick={prevIssue}
            aria-label="Previous issue stat"
            className="p-1 sm:p-1.5 text-primary/75 hover:text-primary hover:bg-primary/10 rounded-full transition-all active:scale-90 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* 4 Progress Indicators */}
          <div className="flex items-center gap-1.5 sm:gap-2 px-1">
            {issuesData.map((issue, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={issue.title}
                  onClick={() => goToIssue(idx)}
                  aria-label={`Go to ${issue.title}`}
                  className={`relative h-1.5 sm:h-2 rounded-full transition-all duration-500 overflow-hidden cursor-pointer ${
                    isActive ? "w-8 sm:w-14 bg-primary/20" : "w-2 sm:w-2.5 bg-primary/25 hover:bg-primary/45"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      key={`issue-prog-${currentIndex}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: AUTOPLAY_INTERVAL / 1000,
                        ease: "linear",
                      }}
                      className="h-full bg-accent rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextIssue}
            aria-label="Next issue stat"
            className="p-1 sm:p-1.5 text-primary/75 hover:text-primary hover:bg-primary/10 rounded-full transition-all active:scale-90 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

