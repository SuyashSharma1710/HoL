"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If head script already marked this session as no-loader (Bot, Lighthouse, or already loaded)
    if (typeof document !== "undefined" && document.documentElement.classList.contains("hol-no-loader")) {
      setIsLoading(false);
      return;
    }

    try {
      const hasSeen = sessionStorage.getItem("hol_initial_loaded");
      if (hasSeen) {
        setIsLoading(false);
        return;
      }
      sessionStorage.setItem("hol_initial_loaded", "true");
    } catch {
      // Ignore sessionStorage exceptions in private mode
    }

    // First time real visitor: lock scroll during intro
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, 1100);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          id="hol-initial-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-background overflow-hidden"
        >
          {/* Logo container */}
          <div className="relative flex items-center justify-center mb-8">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              {/* Radial glow behind logo */}
              <div className="absolute inset-0 scale-[1.8] bg-white blur-xl rounded-full opacity-60 animate-pulse" />
              
              <Image 
                src="/logo.svg" 
                alt="Harmony of Life Logo" 
                width={90} 
                height={90} 
                priority
                className="w-20 h-20 sm:w-24 sm:h-24 animate-[spin_10s_linear_infinite] relative z-10"
              />
            </motion.div>
          </div>
          
          {/* Brand Name */}
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="font-heading text-3xl sm:text-4xl text-primary font-medium tracking-wide drop-shadow-xs"
            >
              Harmony of Life
            </motion.h2>
          </div>
          
          {/* Loading Progress Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="w-44 sm:w-48 h-0.5 bg-secondary/30 mt-7 rounded-full overflow-hidden relative"
          >
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
              className="absolute inset-0 w-1/2 bg-accent rounded-full shadow-[0_0_8px_rgba(183,135,54,0.8)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
