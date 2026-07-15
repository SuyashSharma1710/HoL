"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useLenis } from "lenis/react";

export default function Logo() {
  const lenis = useLenis();
  const { scrollY } = useScroll();
  
  const handleScrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  
  // Smoothly fade out opacity between 0 and 100px of scroll
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const x = useTransform(scrollY, [0, 100], [0, -10]);
  
  // Completely collapse all spacing so the container shrinks to a perfect circle
  const maxWidth = useTransform(scrollY, [0, 100], ["300px", "0px"]);
  const marginLeft = useTransform(scrollY, [0, 100], ["12px", "0px"]);
  const paddingRight = useTransform(scrollY, [0, 100], ["16px", "0px"]);
  
  // Safely remove it from layout once it's fully invisible
  const display = useTransform(scrollY, (y) => (y >= 100 ? "none" : "flex"));

  return (
    <div 
      className="fixed top-6 left-6 z-50 pointer-events-auto flex items-center cursor-pointer h-[60px] md:h-[68px]"
      onClick={handleScrollToTop}
    >
      <div className="absolute inset-0 bg-white/95 border border-black/10 rounded-full pointer-events-none shadow-lg transition-all duration-300" style={{ transform: "translateZ(0)" }} />
      
      <div className="relative flex items-center px-3 md:px-4 w-full h-full">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-10 h-10 md:w-12 md:h-12 shrink-0 items-center justify-center cursor-pointer opacity-80 hover:opacity-100 transition-opacity relative z-10"
        >
          <Image 
            src="/logo.svg" 
            alt="Harmony of Life Logo" 
            width={48}
            height={48}
            className="w-full h-full object-contain" 
          />
        </motion.div>

        <motion.div 
          style={{ opacity, maxWidth, x, marginLeft, paddingRight, display }}
          className="overflow-hidden whitespace-nowrap items-center text-black origin-left"
        >
          <span className="font-sans text-sm font-medium tracking-[0.05em] uppercase">
            Harmony of Life
          </span>
        </motion.div>
      </div>
    </div>
  );
}
