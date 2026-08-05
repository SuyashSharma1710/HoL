"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LifeforceChart } from "@/components/ui/LifeforceChart";

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

export function HealthspanSection() {
  return (
    <section id="about" className="relative w-full py-24 sm:py-32 lg:py-40 bg-background overflow-hidden">
      {/* Subtle background glow to add a mystical feel */}
      <div className="absolute top-0 left-1/4 w-full h-125 bg-secondary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Centered Heading */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-4xl mx-auto mb-20 sm:mb-28"
        >
          <motion.h3 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl text-accent italic font-semibold mb-6">
            Harmony of Life
          </motion.h3>
          <motion.h4 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl text-primary font-medium leading-relaxed italic">
            Powering Cellular Charge. Elevating Lifeforce. Inspiring Lifelong Wellness.
          </motion.h4>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col space-y-8"
          >
            <motion.div variants={itemVariants}>
              <p className="font-semibold text-secondary tracking-widest uppercase text-sm mb-4">
                Healthspan
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary font-semibold leading-[1.15]">
                You are living longer but are you living healthier?
              </h2>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-primary/70 font-medium text-lg leading-relaxed max-w-xl">
              Modern medicine has extended your years but it has not filled those years with vitality. True wealth is a body that serves you until the very last day.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="relative">
                {/* Minimalist vertical line indicator */}
                <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-primary/10 rounded-full" />
                <div className="pl-6">
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-primary mb-2">Lifespan</h3>
                  <p className="text-primary/70 font-medium leading-relaxed text-sm">
                    The total number of years you are alive
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-accent/40 rounded-full" />
                <div className="pl-6">
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-primary mb-2">Healthspan</h3>
                  <p className="text-primary/70 font-medium leading-relaxed text-sm">
                    The years you live in peak physical and mental vigor
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-8">
              <Link 
                href="#lifeforce"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-primary text-background hover:bg-primary/90 rounded-sm px-12 py-6 font-medium text-base transition-transform hover:scale-105 shadow-lg shadow-primary/10"
                )}
              >
                Discover
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Chart Container */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full mx-auto lg:mx-0 lg:col-span-1 flex items-center justify-center"
          >
            <LifeforceChart />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
