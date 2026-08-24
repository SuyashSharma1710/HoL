"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle2, Pause, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

const testimonials = [
  {
    name: "Vikram Singh",
    role: "Harmony Community Member",
    tag: "Energy Reclaimed",
    text: "I am sixty-two and I move like I am forty. The brain fog lifted, the joint pain vanished, and my stamina is back. This is not a temporary supplement plan; it is a second life.",
    image: "/images/testi-1.png"
  },
  {
    name: "Ananya Sharma",
    role: "Living Young Participant",
    tag: "Inflammation Reversed",
    text: "My bloodwork stunned my doctor. For the first time in a decade, my inflammation markers dropped to normal. I finally understand what true cellular energy feels like.",
    image: "/images/testi-2.png"
  },
  {
    name: "Rajesh Patel",
    role: "Cellular Protocol Member",
    tag: "Metabolic Reset",
    text: "I stopped chasing symptoms and started charging my cells. The weight dropped naturally, my skin cleared, and I found a deep, grounded calm I never knew existed.",
    image: "/images/testi-3.png"
  },
  {
    name: "Priya Desai",
    role: "Wellness Community Member",
    tag: "Deep Vitality",
    text: "The holistic approach to cellular voltage completely transformed my relationship with health. I sleep deeply, think clearer, and feel a profound surge of lifeforce.",
    image: "/images/testi-4.png"
  },
  {
    name: "Amit Verma",
    role: "Harmony Community Member",
    tag: "Chronic Fatigue Overcome",
    text: "After struggling with chronic fatigue and mid-day crashes for years, this protocol restored my baseline lifeforce. The cellular science behind it is undeniable.",
    image: "/images/testi-1.png"
  },
  {
    name: "Sunita Rao",
    role: "Living Young Participant",
    tag: "Natural Healing",
    text: "I had tried countless diets and detoxes, but nothing addressed the electrical root cause like Harmony of Life. My body finally feels like it is effortlessly repairing itself.",
    image: "/images/testi-2.png"
  },
  {
    name: "Karan Mehta",
    role: "Foundation Member",
    tag: "Mobility & Joint Health",
    text: "Dr. Rastogi's vision is deeply inspiring. Treating the electrical balance instead of suppressing chemical symptoms has eliminated my persistent stiffness entirely.",
    image: "/images/testi-3.png"
  },
  {
    name: "Meera Reddy",
    role: "Harmony Community Member",
    tag: "Cellular Recharge",
    text: "Reconnecting with my cellular charge through the 12 pillars was the single best wellness decision of my life. The guidance and community support are unmatched.",
    image: "/images/testi-4.png"
  }
];

const AUTOPLAY_INTERVAL = 3500;

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const toggleAutoplay = () => {
    if (!swiperRef.current) return;
    if (isPaused) {
      swiperRef.current.autoplay.start();
      setIsPaused(false);
    } else {
      swiperRef.current.autoplay.stop();
      setIsPaused(true);
    }
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleGoTo = (idx: number) => {
    swiperRef.current?.slideToLoop(idx);
    setCurrentIndex(idx);
  };

  return (
    <section 
      id="testimonials" 
      className="relative w-full bg-background py-20 sm:py-28 lg:py-32 overflow-hidden text-primary"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-radial from-glow/15 via-accent/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-radial from-secondary/10 to-transparent blur-2xl pointer-events-none -z-10" />

      <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 flex flex-col items-center">
          
          {/* Eyebrow Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mb-4"
          >
            <span className="relative overflow-hidden inline-flex items-center gap-2 font-sans font-semibold text-[11px] sm:text-xs tracking-[0.2em] text-primary uppercase bg-background/80 border border-accent/40 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-xs">
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none"
                animate={{ translateX: ["-120%", "220%"] }}
                transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
              />
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Real Transformations</span>
            </span>
          </motion.div>

          {/* Dual-Tone Display Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="tracking-tight leading-none mb-3 text-center"
          >
            <span className="block font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary tracking-tight leading-[1.08]">
              Stories of Reclaimed
            </span>
            <span className="block font-heading italic text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-accent leading-[1.12] mt-1 drop-shadow-xs">
              Lifeforce &amp; Vitality.
            </span>
          </motion.h2>

          {/* Amber Gold Divider */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-14 h-[2.5px] bg-accent my-4 rounded-full"
          />

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-primary/80 font-normal text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed"
          >
            Real experiences from community members who restored their cellular voltage, elevated their energy, and revitalized their health from within.
          </motion.p>
        </div>

        {/* Swiper Slider Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full"
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            loop={true}
            autoplay={{ delay: AUTOPLAY_INTERVAL, disableOnInteraction: false }}
            slidesPerView={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setCurrentIndex(swiper.realIndex);
            }}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
            }}
            className="w-full px-2 sm:px-4 pt-4! pb-6!"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="relative flex flex-col h-full bg-white/80 backdrop-blur-xl rounded-2xl border border-white/90 p-7 sm:p-8 shadow-xs hover:shadow-xl hover:border-accent/40 hover:-translate-y-1 transition-all duration-400 group/card overflow-hidden">
                  
                  {/* Subtle Background Watermark Quote */}
                  <Quote className="w-16 h-16 text-accent/10 absolute top-4 right-4 pointer-events-none transition-transform duration-500 group-hover/card:scale-110 group-hover/card:text-accent/15" />

                  {/* Top Row: Stars + Category Pill */}
                  <div className="flex items-center justify-between gap-2 mb-5 relative z-1">
                    <div className="flex items-center gap-1 text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current drop-shadow-[0_1px_3px_rgba(183,135,54,0.3)]" />
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/25">
                      <CheckCircle2 className="w-3 h-3 text-accent" />
                      <span>{item.tag}</span>
                    </span>
                  </div>
                  
                  {/* Testimonial Quote Text */}
                  <p className="font-sans text-primary/85 font-normal text-sm sm:text-base leading-relaxed mb-8 grow relative z-1">
                    &ldquo;{item.text}&rdquo;
                  </p>
                  
                  {/* Author Lockup */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-primary/10 mt-auto relative z-1">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-accent/40 shadow-xs">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-heading font-semibold text-primary text-base sm:text-lg leading-tight">
                        {item.name}
                      </h3>
                      <p className="font-sans text-secondary text-xs font-medium tracking-wide mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom Progress Bar & Integrated Navigation Pill Controller (Matching AgingSlidesSection) */}
          <div className="mt-8 flex justify-center items-center pointer-events-auto">
            <div className="flex items-center gap-1.5 sm:gap-2.5 bg-background/95 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-accent/40 shadow-xl shadow-primary/10 select-none">
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="p-1 sm:p-1.5 text-primary/75 hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-200 active:scale-90 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              {/* Slide Progress Indicators */}
              <div className="flex items-center gap-1.5 sm:gap-2 px-1">
                {testimonials.map((item, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleGoTo(idx)}
                      aria-label={`Go to testimonial ${idx + 1}: ${item.name}`}
                      className={`relative h-1.5 sm:h-2 rounded-full transition-all duration-500 overflow-hidden cursor-pointer ${
                        isActive ? "w-6 sm:w-10 md:w-14 bg-primary/20" : "w-1.5 sm:w-2.5 bg-primary/25 hover:bg-primary/45"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          key={`testi-prog-${currentIndex}-${isPaused}`}
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
                onClick={toggleAutoplay}
                aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
                className="p-1 sm:p-1.5 text-primary/75 hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-200 active:scale-90 cursor-pointer"
              >
                {isPaused ? (
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                ) : (
                  <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                )}
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="p-1 sm:p-1.5 text-primary/75 hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-200 active:scale-90 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
