"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

export function WelcomeSection() {
  return (
    <section id="welcome" className="relative w-full py-24 sm:py-32 lg:py-40 bg-primary text-background overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-200 h-200 bg-secondary/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute w-150 h-150 bg-accent/10 rounded-full blur-[100px] mix-blend-screen"
        />
      </div>

      {/* Abstract Logo Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center z-0 opacity-[0.03]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="relative w-[150vw] h-[150vw] max-w-[2000px] max-h-[2000px] sm:w-[120vw] sm:h-[120vw]"
        >
          <Image 
            src="/logo.svg" 
            alt="Abstract Logo" 
            fill 
            className="object-contain"
          />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-16 sm:space-y-24"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-accent leading-[1.15]">
              Welcome to Harmony of Life
            </h2>
            <p className="text-2xl sm:text-3xl text-background/90 italic font-medium">
              Increase Your Cellular Charge. Elevate Your Lifeforce. Transform Your Life.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Content (Text) */}
            <div className="flex flex-col space-y-12">
              <motion.div variants={itemVariants} className="space-y-6 text-base sm:text-lg text-background/80 leading-relaxed font-sans text-left">
                <p className="font-medium text-lg sm:text-xl text-background/90 mb-8">
                  Every heartbeat, every breath, every thought, and every movement begins within your cells.
                </p>
                <p>
                  At <span className="italic text-accent font-medium">Harmony of Life</span>, we believe that true health starts at the cellular level. Our philosophy is built around one fundamental principle: <span className="font-semibold text-background">the healthier your cells, the greater your Cellular Charge, and the greater your Lifeforce.</span>
                </p>
                <p>
                  Our mission is to help individuals optimize their health by supporting healthy cellular function through personalized nutrition, holistic wellness practices, movement, breathing, restorative sleep, stress management, and lifestyle education.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-background/5 border border-secondary/30 rounded-2xl p-8 sm:p-10 backdrop-blur-sm">
                <h3 className="text-3xl text-accent mb-6 italic">Our Objective</h3>
                <ul className="space-y-4 text-base sm:text-lg text-background/90 font-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Support healthy Cellular Charge.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Increase Lifeforce through healthy cellular function.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Empower every individual with a personalized wellness journey.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Build a thriving community dedicated to lifelong vitality.</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Right Image Container (Sticky) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative w-full h-125 lg:h-175 lg:sticky lg:top-32"
            >
              {/* Glassmorphic ethereal frame */}
              <div className="absolute inset-0 bg-secondary/10 backdrop-blur-3xl rounded-2xl transform rotate-2 scale-[1.02] transition-transform duration-700 hover:rotate-0 border border-secondary/20 shadow-2xl shadow-black/40" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-secondary/30 shadow-inner bg-black">
                <Image 
                  src="/images/astral-body-optimized.webp"
                  alt="Astral cellular energy body"
                  fill
                  className="object-cover object-center scale-[1.01] hover:scale-105 transition-transform duration-1000 ease-out opacity-90"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>

          {/* Full Width Conclusion */}
          <motion.div variants={itemVariants} className="pt-8 sm:pt-12 space-y-8 text-base sm:text-lg text-background/80 font-sans leading-relaxed text-center max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl text-background/90 font-medium">We don&apos;t believe in one-size-fits-all wellness.</p>
            <p>We believe every person is unique, which is why Harmony of Life provides a personalized approach designed to help you build sustainable habits that support your body&apos;s natural ability to produce energy, adapt, recover, and thrive.</p>
            <p>Because when your <span className="italic text-accent font-medium">Cellular Charge</span> is supported, your cells are better equipped to communicate, generate energy, and perform their essential functions. And when your cells function at their best, your <span className="italic text-accent font-medium">Lifeforce</span> can flourish.</p>
            <div className="pt-6 space-y-3">
              <p className="font-semibold text-background text-xl sm:text-2xl">This is more than a wellness platform.</p>
              <p className="font-semibold text-background text-xl sm:text-2xl">It is a movement dedicated to helping people create a healthier, more energetic, and more vibrant life—from the cellular level upward.</p>
            </div>
          </motion.div>

          {/* Footer Statement */}
          <motion.div variants={itemVariants} className="pt-12 lg:pt-16 space-y-4 text-center max-w-4xl mx-auto">
            <h3 className="text-4xl sm:text-5xl text-accent italic font-semibold">Harmony of Life</h3>
            <h4 className="text-2xl sm:text-3xl text-background/90 italic font-medium leading-relaxed">
              Powering Cellular Charge. Elevating Lifeforce. Inspiring Lifelong Wellness.
            </h4>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
