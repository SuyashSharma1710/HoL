"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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

export function AuthoritySection() {
  return (
    <section id="authority" className="relative w-full bg-background overflow-hidden min-h-200 flex items-center">
      
      {/* Full-width Image Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Desktop Image (Landscape) */}
        <Image 
          src="/images/drrastogilandscape.png"
          alt="Dr. Ashutosh Rastogi"
          fill
          className="hidden lg:block object-cover object-right "
          sizes="100vw"
          priority
        />
        {/* Mobile Image (Portrait) */}
        <Image 
          src="/images/drrastogiportraite.png"
          alt="Dr. Ashutosh Rastogi"
          fill
          className="block lg:hidden object-cover object-bottom opacity-100"
          sizes="100vw"
          priority
        />
        {/* Gradient overlays matching the bento grid effect */}
        {/* Desktop: fade from left to right */}
        <div className="hidden lg:block absolute inset-0 bg-linear-to-r from-background via-background/60 to-transparent z-10" />
        
        {/* Mobile: fade from top to bottom (so text is readable on top, image visible on bottom) */}
        <div className="lg:hidden absolute inset-0 bg-linear-to-b from-background via-background/60 to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-360 mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-95 sm:pt-32 sm:pb-112.5 lg:py-32">
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
                Authority
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-primary font-semibold leading-[1.15]">
                A doctor who believes the body can heal itself
              </h2>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-primary/70 font-medium text-lg leading-relaxed max-w-xl">
              Dr. Ashutosh Rastogi built Harmony of Life on a single truth. The body is a self-repairing machine when given the right voltage.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="relative">
                <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-primary/10 rounded-full" />
                <div className="pl-6">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2">His vision</h3>
                  <p className="text-primary/70 font-medium leading-relaxed text-sm">
                    To end the epidemic of chronic disease by treating the electrical cause, not just the chemical symptoms
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-accent/40 rounded-full" />
                <div className="pl-6">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-2">His background</h3>
                  <p className="text-primary/70 font-medium leading-relaxed text-sm">
                    Years of dedicated independent research merging the principles of cellular voltage with the ancient wisdom of holistic healing
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-8">
              <Link 
                href="#cta"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-primary text-background hover:bg-primary/90 rounded-sm px-10 py-6 font-medium text-base transition-all shadow-sm"
                )}
              >
                Book Consultation
              </Link>
              <Link 
                href="#living-young"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-primary text-primary hover:bg-primary hover:text-background rounded-sm px-8 py-6 font-medium text-base transition-all group flex items-center gap-2 bg-transparent"
                )}
              >
                View Program 
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-primary group-hover:text-background" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right column is left empty on desktop to show the background image */}
          <div className="hidden lg:block h-120" />
          
        </div>
      </div>
    </section>
  );
}
