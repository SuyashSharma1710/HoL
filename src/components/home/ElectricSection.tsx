"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tabs = ["Voltage", "Charge", "Healing"];

const tabContent = {
  Voltage: {
    caption: "Voltage",
    title: "The body's electric potential is the spark of life",
    description: "A cell at 70 millivolts is a factory of pure energy and repair. When that voltage drops, the machinery of life grinds down and chronic disease takes hold.",
    image: "/images/mitochondria_voltage.png"
  },
  Charge: {
    caption: "Charge",
    title: "3.5 Trillion Volts of Bioelectric Potential",
    description: "When you multiply the vast number of cells in the human body by the electrical potential of each individual cell, the result is staggering. You are power iterated.",
    image: "/images/mitochondria_charge.png"
  },
  Healing: {
    caption: "Healing",
    title: "Restoring your lifeforce unblocks your healing",
    description: "Disease is not a permanent state; it is a signal of blocked energy. By changing your cellular environment, you can unblock your Lifeforce and restore vibrant health.",
    image: "/images/mitochondria_healing.png"
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const }
  },
};

export function ElectricSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const content = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section id="lifeforce" className="relative w-full bg-linear-to-b from-primary to-[#0d1c17] py-24 sm:py-32 overflow-hidden text-background">
      {/* Background glow effects */}
      <div className="absolute top-[-20%] right-[-10%] w-150 h-150 bg-secondary/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Static Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top Left */}
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-150 max-h-150 opacity-[0.08]">
          <Image src="/logo.svg" alt="Harmony of Life decorative element" fill className="object-contain" />
        </div>
        {/* Bottom Right */}
        <div className="absolute top-[40%] right-[-15%] w-[80vw] h-[80vw] max-w-200 max-h-200 opacity-[0.08]">
          <Image src="/logo.svg" alt="Harmony of Life decorative element" fill className="object-contain" />
        </div>
      </div>

      <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Top Header Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center mb-16"
        >
          <motion.p variants={itemVariants} className="font-semibold text-accent tracking-widest uppercase text-sm mb-4">
            Science
          </motion.p>
          <motion.h2 variants={itemVariants} className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.15] mb-6">
            You are electric
          </motion.h2>
          <motion.p variants={itemVariants} className="text-background/80 font-medium text-lg leading-relaxed mb-8">
            Your lifeforce is not a mystery. It is a measurable voltage that powers 50 trillion cells, each demanding a precise 70 millivolts to operate perfectly.
          </motion.p>

        </motion.div>

        {/* Tabs */}
        <div className="flex items-center gap-8 mb-16 border-b border-white/10 w-full justify-center max-w-xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "pb-4 text-lg font-medium transition-colors relative",
                activeTab === tab ? "text-accent" : "text-background/50 hover:text-background"
              )}
            >
              {tab}
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute -bottom-px left-0 right-0 h-0.5 bg-accent"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="w-full max-w-5xl mx-auto relative lg:min-h-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full"
            >
              
              {/* Text Side */}
              <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
                <h3 className="font-heading text-3xl sm:text-4xl font-semibold mb-6">
                  {content.title}
                </h3>
                <p className="text-white/90 font-medium text-lg leading-relaxed max-w-lg line-clamp-3">
                  {content.description}
                </p>
              </div>

              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative aspect-square max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-accent/5 rounded-3xl transform rotate-3 transition-transform duration-700 hover:rotate-0" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-primary shadow-2xl">
                  <Image 
                    src={content.image}
                    alt={content.title}
                    fill
                    className="object-cover object-center scale-[1.02] hover:scale-105 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
