"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Target, Eye, Dna, GraduationCap } from "lucide-react";

interface WhyCard {
  id: string;
  badgeTitle: string;
  image: string;
  alt: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  titleColor: string;
  highlightColor: string;
  renderDescription: () => React.ReactNode;
}

const whyCards: WhyCard[] = [
  {
    id: "aim",
    badgeTitle: "Our Aim",
    image: "/images/our-aim.webp",
    alt: "Our Aim - Woman meditating outdoors surrounded by nature and nutrition",
    icon: Target,
    iconBg: "bg-[#548753] shadow-[#548753]/30",
    titleColor: "text-[#2e5d42]",
    highlightColor: "text-[#3f7c57]",
    renderDescription: () => (
      <>
        To empower people with the science backed knowledge about their health. so that they can{" "}
        <strong className="font-semibold text-[#3f7c57]">live young.</strong>
      </>
    ),
  },
  {
    id: "vision",
    badgeTitle: "Our Vision",
    image: "/images/our-vision.webp",
    alt: "Our Vision - Two hands holding green mossy globe in lush valley",
    icon: Eye,
    iconBg: "bg-[#2f79a8] shadow-[#2f79a8]/30",
    titleColor: "text-[#1d5276]",
    highlightColor: "text-[#266896]",
    renderDescription: () => (
      <>
        To create a world where people live{" "}
        <strong className="font-semibold text-[#266896]">happy, healthier</strong> lives without
        the fear of having lifestyle disorders.
      </>
    ),
  },
  {
    id: "mission",
    badgeTitle: "Our Mission",
    image: "/images/our-mission.webp",
    alt: "Our Mission - Sprouting plant in glass sphere surrounded by wellness nodes",
    icon: Dna,
    iconBg: "bg-[#277e74] shadow-[#277e74]/30",
    titleColor: "text-[#1c5d57]",
    highlightColor: "text-[#24796f]",
    renderDescription: () => (
      <>
        To create a science backed ecosystem where people get{" "}
        <strong className="font-semibold text-[#24796f]">personalised health</strong> solution for
        lifestyle disorder.
      </>
    ),
  },
  {
    id: "objective",
    badgeTitle: "Our Objective",
    image: "/images/our-objective.webp",
    alt: "Our Objective - Training wellness relationship managers in cellular health",
    icon: GraduationCap,
    iconBg: "bg-[#2b6ba1] shadow-[#2b6ba1]/30",
    titleColor: "text-[#1b436a]",
    highlightColor: "text-[#255e94]",
    renderDescription: () => (
      <>
        To train Wellness Relationship Managers on the tenets of{" "}
        <strong className="font-semibold text-[#255e94]">cellular health.</strong>
      </>
    ),
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function WhyHolSection() {
  return (
    <section 
      id="why-hol" 
      className="relative w-full py-20 sm:py-28 lg:py-32 flex flex-col items-center justify-center bg-background overflow-hidden"
    >
      {/* Background Image & Atmospheric Wash */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/images/why-hol-botanical-bg.webp"
          alt="Why Harmony of Life Botanical Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Soft edge blends */}
        <div className="absolute inset-x-0 top-0 h-32 sm:h-44 bg-linear-to-b from-background via-background/40 to-transparent pointer-events-none z-1" />
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-linear-to-t from-background via-background/40 to-transparent pointer-events-none z-1" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-360 mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium text-primary tracking-tight leading-[1.15] mb-3 sm:mb-4"
          >
            Why Harmony of Life ?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-sans text-base sm:text-lg lg:text-xl text-primary/80 font-normal leading-relaxed"
          >
            To Stop the rise of{" "}
            <span className="font-semibold text-[#2d5c43]">lifestyle disorders</span> in India.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7 items-stretch"
        >
          {whyCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative flex flex-col bg-white/75 backdrop-blur-md rounded-3xl overflow-hidden border border-white/90 shadow-lg shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-400 group"
              >
                {/* Top Image Frame */}
                <div className="relative w-full aspect-4/3 sm:aspect-square lg:aspect-4/3 overflow-hidden rounded-t-3xl bg-primary/5">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                </div>

                {/* Floating Round Icon Badge Overlapping Seam */}
                <div className="relative flex justify-center -mt-7 z-10">
                  <div className={`w-14 h-14 rounded-full ${card.iconBg} border-[2.5px] border-white flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 stroke-[1.85]" />
                  </div>
                </div>

                {/* Card Content Block */}
                <div className="p-6 pt-3.5 pb-8 flex flex-col items-center text-center flex-1 justify-between bg-linear-to-b from-white/95 to-white/80">
                  <h3 className={`font-heading text-2xl sm:text-[26px] font-semibold ${card.titleColor} leading-tight mb-2.5`}>
                    {card.badgeTitle}
                  </h3>

                  <p className="font-sans text-[13.5px] sm:text-[14px] text-primary/80 leading-relaxed font-normal">
                    {card.renderDescription()}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export const WhySection = WhyHolSection;
