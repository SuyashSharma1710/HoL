"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import heroBg from "../../../public/images/herobannerflaire.jpeg";

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
    <section className="relative w-full h-screen min-h-150 -mt-24 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Harmony of Life Hero Background"
          fill
          priority
          fetchPriority="high"
          placeholder="blur"
          sizes="100vw"
          quality={60}
          className="object-cover object-center"
        />
        {/* Top beige gradient to provide background for the header */}
        <div className="absolute inset-x-0 top-0 h-48 sm:h-56 lg:h-64 bg-gradient-to-b from-background via-background/60 to-transparent pointer-events-none z-1" />

        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
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
          className="max-w-4xl tracking-tight leading-tight mb-6"
        >
          <span className="block font-text text-2xl sm:text-3xl lg:text-4xl font-medium text-white/95 mb-2 sm:mb-3 drop-shadow-sm">
            Welcome to
          </span>
          <span className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white drop-shadow-sm">
            Harmony of Life
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl max-w-2xl text-white/90 mb-10 leading-relaxed"
        >
          The world&apos;s 1<sup>st</sup> personalized health community where you can make informed health decisions.
        </motion.p>
      </motion.div>

      {/* Bottom Centered Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <Link 
          href="#why-hol" 
          aria-label="Scroll to next section"
          className="block group"
        >
          <div className="w-6.5 sm:w-7 h-11 sm:h-12 rounded-full border-2 border-white/90 flex justify-center p-1.5 transition-all duration-300 group-hover:border-white group-hover:scale-105 shadow-md shadow-black/20">
            <motion.div
              animate={{
                y: [0, 18, 0],
                opacity: [1, 0.4, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-2.5 h-2.5 rounded-full bg-white shadow-xs"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
