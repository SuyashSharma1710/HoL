"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const slides = [
  {
    id: "slide-1",
    src: "/images/age1.jpeg",
    alt: "Aging is more than a number - Your everyday choices shape how you age",
    label: "Everyday Choices",
  },
  {
    id: "slide-2",
    src: "/images/age2.jpeg",
    alt: "Don't just add years, add life to them - Lifespan vs Healthspan",
    label: "Lifespan vs Healthspan",
  },
  {
    id: "slide-3",
    src: "/images/age3.jpeg",
    alt: "How you age starts with how you live - One body, one interconnected system",
    label: "Interconnected System",
  },
];

const AUTOPLAY_INTERVAL = 4000; // 6 seconds per slide

export function AgingSlidesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section 
      id="aging-philosophy"
      className="relative w-full aspect-2/1 bg-background overflow-hidden select-none group"
    >
      {/* Full-Screen Dissolving Slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slides[currentIndex].id}
          initial={{ opacity: 0, scale: 1.03 }} 
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[currentIndex].src}
            alt={slides[currentIndex].alt}
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Atmospheric Overlays & RTL Beige Gradient Wash */}
      
      {/* 1. Top beige gradient blend for seamless transition from previous section */}
      <div className="absolute inset-x-0 top-0 h-36 sm:h-48 lg:h-56 bg-linear-to-b from-background via-background/30 to-transparent pointer-events-none z-10" />

      {/* 2. RTL Beige Wash (Right to Left gradient overlay) */}
      {/* <div className="absolute inset-y-0 right-0 w-full sm:w-[60%] lg:w-[50%] bg-linear-to-l from-background/95 via-background/70 sm:via-background/45 to-transparent pointer-events-none z-10" /> */}

      {/* 3. Left soft edge blend */}
      {/* <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-linear-to-r from-background/80 via-background/40 to-transparent pointer-events-none z-10" /> */}

      {/* 4. Bottom beige gradient blend for seamless transition into next section */}
      <div className="absolute inset-x-0 bottom-0 h-36 sm:h-48 lg:h-56 bg-linear-to-t from-background via-background/60 to-transparent pointer-events-none z-10" />

      {/* Bottom Progress Bar & Integrated Navigation Pill */}
      <div className="absolute bottom-2.5 sm:bottom-5 md:bottom-8 inset-x-0 z-20 flex flex-col items-center pointer-events-auto">
        <div className="flex items-center gap-1.5 sm:gap-2.5 bg-background/90 backdrop-blur-md px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-accent/40 shadow-xl shadow-primary/10 select-none">
          {/* Previous Button (Left Side) */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="p-1 sm:p-1.5 text-primary/75 hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-200 active:scale-90 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>

          {/* Slide Progress Indicators */}
          <div className="flex items-center gap-1.5 sm:gap-2 px-1">
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${slide.label}`}
                  className={`relative h-1.5 sm:h-2 rounded-full transition-all duration-500 overflow-hidden cursor-pointer ${
                    isActive ? "w-8 sm:w-16 md:w-20 bg-primary/20" : "w-2 sm:w-3 bg-primary/25 hover:bg-primary/45"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      key={`progress-${currentIndex}-${isPaused}`}
                      initial={{ width: "0%" }}
                      animate={{ width: isPaused ? undefined : "100%" }}
                      transition={{
                        duration: isPaused ? 0 : AUTOPLAY_INTERVAL / 1000,
                        ease: "linear",
                      }}
                      className="h-full bg-accent rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Pause / Play Button */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
            className="p-1 sm:p-1.5 text-primary/75 hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-200 active:scale-90 cursor-pointer"
          >
            {isPaused ? (
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
            ) : (
              <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
            )}
          </button>

          {/* Next Button (Right Side) */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="p-1 sm:p-1.5 text-primary/75 hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-200 active:scale-90 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

