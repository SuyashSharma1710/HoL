"use client";

import { motion } from "framer-motion";
import { ScrollDissolveReveal } from "@/components/canvas/ScrollDissolveReveal";
import { FlipFadeText } from "@/components/ui/FlipFadeText";

const floatingCards = [
  { text: "Deep Detox", delay: 0 },
  { text: "Higher Cellular Charge", delay: 1.5 },
  { text: "Less Toxicity", delay: 3 },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-background">
      <ScrollDissolveReveal
        imageFront="/images/A_minimalist_ethereal_backgrou_2-optimized.webp"
        imageBack="/images/A_3D_silhouette_of_a_human_bod_2-optimized.webp"
      />

      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center">
          {/* Hero Content */}
          <div className="text-center max-w-5xl px-4 mt-[-10vh]">
            <FlipFadeText
              text="What if Detox isn't about weight... but about your Lifeforce?"
              textClassName="text-4xl md:text-5xl font-heading font-bold tracking-[-0.02em] text-foreground normal-case"
            />
          </div>

          {/* Floating Cards */}
          <div className="absolute bottom-1/4 left-0 right-0 flex flex-wrap justify-center gap-4 md:gap-12 px-4">
            {floatingCards.map((card, index) => (
              <motion.div
                key={index}
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: card.delay,
                }}
                className="pointer-events-auto backdrop-blur-md bg-foreground/5 border border-foreground/10 rounded-2xl px-6 py-4 text-foreground font-sans text-sm md:text-lg font-normal shadow-sm"
              >
                {card.text}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
