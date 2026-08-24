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
    <section id="welcome" className="relative w-full py-24 sm:py-32 bg-background text-primary overflow-hidden">
      {/* Animated Gradient Background */}
      

      {/* Abstract Logo Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top Left */}
        <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] max-w-200 max-h-200 opacity-[0.08]">
          <Image src="/logo.svg" alt="Harmony of Life decorative element" fill className="object-contain" />
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[90vw] h-[90vw] max-w-225 max-h-225 opacity-[0.08]">
          <Image src="/logo.svg" alt="Harmony of Life decorative element" fill className="object-contain" />
        </div>

        {/* Middle Right */}
        <div className="absolute top-[30%] right-[-20%] w-[60vw] h-[60vw] max-w-150 max-h-150 opacity-[0.08]">
          <Image src="/logo.svg" alt="Harmony of Life decorative element" fill className="object-contain" />
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-[10%] left-[-15%] w-[70vw] h-[70vw] max-w-175 max-h-175 opacity-[0.08]">
          <Image src="/logo.svg" alt="Harmony of Life decorative element" fill className="object-contain" />
        </div>
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
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-primary leading-[1.15] mb-6">
              Welcome to Harmony of Life
            </h2>
            <p className="text-lg leading-relaxed font-medium text-secondary italic">
              Increase Your Cellular Charge. Elevate Your Lifeforce. Transform Your Life.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Content (Text) */}
            <div className="flex flex-col space-y-12 order-2 lg:order-1">
              <motion.div variants={itemVariants} className="space-y-6 text-lg leading-relaxed font-medium text-primary/80 text-left">
                <p className="mb-8">
                  Every heartbeat, every breath, every thought, and every movement begins within your cells.
                </p>
                <p>
                  At <span className="italic text-secondary font-medium">Harmony of Life</span>, we believe that true health starts at the cellular level. Our philosophy is built around one fundamental principle: <span className="font-semibold italic text-primary">&quot;The healthier your cells, the greater your Cellular Charge, and the greater your Lifeforce.&quot;</span>
                </p>
                <p>
                  Our mission is to help individuals optimize their health by supporting healthy cellular function through personalized nutrition, holistic wellness practices, movement, breathing, restorative sleep, stress management, and lifestyle education.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-primary/5 border border-secondary/30 rounded-2xl p-8 sm:p-10 backdrop-blur-sm">
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold mb-4 leading-tight text-primary italic">Our Objective</h3>
                <ul className="space-y-4 text-lg font-medium text-primary/90">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span>Support healthy Cellular Charge.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span>Increase Lifeforce through healthy cellular function.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <span>Empower every individual with a personalized wellness journey.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
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
              className="relative w-full aspect-square lg:sticky lg:top-32 order-1 lg:order-2"
            >
              {/* Glassmorphic ethereal frame */}
              <div className="absolute inset-0 bg-secondary/10 backdrop-blur-3xl rounded-2xl transform rotate-2 scale-[1.02] transition-transform duration-700 hover:rotate-0 border border-secondary/20 shadow-2xl shadow-black/40" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-secondary/30 shadow-inner bg-black">
                <Image 
                  src="/images/astral-body-v2.webp"
                  alt="Astral cellular energy body"
                  fill
                  className="object-cover object-center scale-[1.01] hover:scale-105 transition-transform duration-1000 ease-out opacity-90"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
                />
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
