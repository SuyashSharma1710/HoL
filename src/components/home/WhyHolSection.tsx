"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    title: "Our Aim",
    description: "to empower people with the science backed knowledge about their health so that they live young.",
  },
  {
    title: "Our Vision",
    description: "To create a world where people live happy, healthier lives without the fear of having lifestyle disorders .",
  },
  {
    title: "Our Mission",
    description: "To create a trusted science-backed ecosystem that delivers personalized health solutions.",
  },
  {
    title: "Our Objective",
    description: "To train wellness realtionship managers on the tenets of cellular health .",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function WhyHolSection() {
  return (
    <section 
      id="why-hol" 
      className="relative w-full py-20 sm:py-28 lg:py-32 flex items-center justify-center bg-background overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/whybg.jpeg"
          alt="Harmony of Life Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Subtle base overlay for balanced contrast */}
        <div className="absolute inset-0 bg-background/10 pointer-events-none" />
      </div>

      {/* Top Left Leaf Decoration */}
      <motion.div 
        initial={{ opacity: 0, y: -30, x: -20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="absolute -top-30 -left-10 z-20 pointer-events-none w-50 aspect-[480/960]"
      >
        <motion.div
          animate={{
            rotate: [0, 2.5, -1.5, 2, 0],
            y: [0, -6, 2, -4, 0],
            x: [0, 4, -2, 3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "top left" }}
          className="relative w-full h-full"
        >
          <Image 
            src="/images/topleft.png" 
            alt="Decorative palm leaf"
            fill
            className="object-contain object-top-left"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Bottom Left Leaf Decoration */}
      <motion.div 
        initial={{ opacity: 0, y: 30, x: -20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="absolute -bottom-50 -left-10 z-20 pointer-events-none w-50 aspect-[370/960]"
      >
        <motion.div
          animate={{
            rotate: [0, -2, 1.5, -1.5, 0],
            y: [0, 5, -2, 4, 0],
            x: [0, -3, 2, -2, 0],
          }}
          transition={{
            duration: 9.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "bottom left" }}
          className="relative w-full h-full"
        >
          <Image 
            src="/images/bottomleftleaf.png" 
            alt="Decorative green foliage"
            fill
            className="object-contain object-bottom-left"
          />
        </motion.div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Heading */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 flex flex-col justify-center text-left"
          >
            <span className="block font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-primary mb-2 sm:mb-3 drop-shadow-xs tracking-tight">
              Why
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-primary tracking-tight leading-[1.1] drop-shadow-xs">
              Harmony of Life ?
            </h2>
          </motion.div>

          {/* Right Column: 2x2 Cards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6"
          >
            {cards.map((card) => (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="relative overflow-hidden rounded-2xl bg-white/80 sm:rounded-3xl p-6 sm:p-8 lg:p-8 xl:p-10 shadow-lg shadow-primary/5 border border-white/70 backdrop-blur-xs flex flex-col justify-start min-h-56 sm:min-h-64 lg:min-h-70 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group"
              >
                {/* Card Background Image */}
                <Image
                  src="/images/cardbg.png"
                  alt=""
                  fill
                  className="object-cover object-center -z-10 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Card Content */}
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium text-primary leading-tight mb-3 sm:mb-4">
                  {card.title}
                </h3>
                <p className="font-text text-sm sm:text-base text-primary/85 leading-relaxed font-normal">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
