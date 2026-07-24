"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollStack, ScrollStackItem } from "@/components/ui/scroll-stack";

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

const cards = [
  {
    title: "Mitochondrial revival",
    description: "Your mitochondria are the power plants of your cells. We give them the raw materials to produce clean, abundant energy again.",
    image: "/images/healthspan-vitality.png"
  },
  {
    title: "Deep detoxification",
    description: "We go beyond juice cleanses. This is a systematic removal of heavy metals and metabolic waste blocking your charge.",
    image: "/images/inhibitor-toxins.png"
  },
  {
    title: "Personalized path",
    description: "No two bodies are the same. Your protocol adapts to your specific voltage deficits and health history.",
    image: "/images/inhibitor-sleep.png"
  },
  {
    title: "Measurable results",
    description: "Track your biological age, not just your weight. Watch your energy, skin, and mental clarity transform week by week.",
    image: "/images/cellular-voltage.png"
  }
];

export function LivingYoungSection() {
  return (
    <section id="living-young" className="relative w-full bg-primary py-24 sm:py-32 text-background">
      <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24 relative">
          
          {/* Left Side - Sticky Content */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center pb-12 lg:pb-0">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col space-y-8"
            >
              <motion.div variants={itemVariants}>
                <p className="font-semibold text-accent tracking-widest uppercase text-sm mb-4">
                  Program
                </p>
                <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-background font-semibold leading-[1.15]">
                  Reverse your biological age with living young
                </h2>
              </motion.div>
              
              <motion.p variants={itemVariants} className="text-background/80 font-medium text-lg leading-relaxed max-w-xl">
                This is a precise protocol to decrease your biological age. We target the mitochondria and flush the toxins that drain your lifeforce.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-8">
                <Link 
                  href="#cta"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-accent text-accent hover:bg-accent hover:text-primary rounded-sm px-10 py-6 font-medium text-base transition-all bg-transparent"
                  )}
                >
                  Start
                </Link>
                <Link 
                  href="#lifeforce"
                  className="group flex items-center gap-2 text-background font-semibold hover:text-accent transition-colors px-4 py-2"
                >
                  Science 
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Scrolling & Stacking Cards */}
          <div className="w-full lg:w-1/2 relative min-h-[300vh] lg:min-h-[400vh] pb-[20vh]">
            <ScrollStack
              itemDistance={120}
              itemStackDistance={30}
              baseScale={0.85}
              itemScale={0.05}
              blurAmount={2}
              stackPosition="10%"
            >
              {cards.map((card) => (
                <ScrollStackItem 
                  key={card.title} 
                  itemClassName="bg-secondary border border-white/10 p-6 sm:p-8 flex flex-col group"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-background/5 mb-6 sm:mb-8 border border-white/5 shrink-0">
                    <Image 
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  {/* Card Content */}
                  <h3 className="font-heading text-3xl font-semibold mb-4 text-background group-hover:text-accent transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-background/70 font-medium text-lg leading-relaxed max-w-lg line-clamp-3">
                    {card.description}
                  </p>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>

        </div>
      </div>
    </section>
  );
}
