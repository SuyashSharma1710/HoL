"use client";

import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const }
  },
};

export function PhilosophySection() {
  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-secondary text-background overflow-hidden">
      
      {/* Animated Abstract Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/2 -left-1/4 w-full h-full bg-primary/40 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.4, 1], x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/4 -right-1/4 w-[120%] h-[120%] bg-accent/15 rounded-full blur-[150px] mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="space-y-8 text-base sm:text-lg text-background/90 font-sans leading-relaxed text-center"
        >
          <motion.p variants={itemVariants} className="text-2xl sm:text-3xl text-background font-medium mb-12">
            We don&apos;t believe in one-size-fits-all wellness.
          </motion.p>
          <motion.p variants={itemVariants}>
            We believe every person is unique, which is why Harmony of Life provides a personalized approach designed to help you build sustainable habits that support your body&apos;s natural ability to produce energy, adapt, recover, and thrive.
          </motion.p>
          <motion.p variants={itemVariants}>
            Because when your <span className="italic text-accent font-semibold">Cellular Charge</span> is supported, your cells are better equipped to communicate, generate energy, and perform their essential functions. And when your cells function at their best, your <span className="italic text-accent font-semibold">Lifeforce</span> can flourish.
          </motion.p>
          <motion.div variants={itemVariants} className="pt-10 space-y-4">
            <p className="font-semibold text-background text-2xl sm:text-3xl">This is more than a wellness platform.</p>
            <p className="font-semibold text-background text-xl sm:text-2xl">It is a movement dedicated to helping people create a healthier, more energetic, and more vibrant life from the cellular level upward.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
