"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-150 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/new-hero-bg.jpeg"
          alt="Harmony of Life Hero Background"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
        />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl tracking-tight leading-tight mb-6"
        >
          Increase your cellular charge <br className="hidden sm:block" /> and transform your life
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl max-w-2xl text-white/90 font-medium mb-10 leading-relaxed"
        >
          Every heartbeat and breath begins within your cells. Support healthy cellular function to flourish.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <Link 
            href="#welcome" 
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-background text-primary hover:bg-background/90 font-semibold px-10 py-6 text-lg rounded-sm min-w-40 shadow-lg shadow-black/20"
            )}
          >
            Start
          </Link>
          <Link 
            href="#lifeforce" 
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-white text-white hover:bg-white hover:text-white font-semibold px-10 py-6 text-lg rounded-sm bg-transparent min-w-40"
            )}
          >
            Learn
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
