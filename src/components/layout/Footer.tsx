"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ShinyText } from "@/components/ui/shiny-text";

const navLinks = [
  { name: "About us", href: "/#about" },
  { name: "Lifeforce", href: "/#lifeforce" },
  { name: "Living young", href: "/#living-young" },
  { name: "Root cause reversal", href: "/#reversal" },
  { name: "Gut reset", href: "/#gut-reset" },
  { name: "Community", href: "/#community" },
];

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/harmonyoflife_official/?hl=en" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/harmony-of-life-0-59ba5a413/" },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61591808093320" },
  { name: "YouTube", href: "https://www.youtube.com/@Harmonyoflife-01" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Policy", href: "#" },
];

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Parallax effect: moves from Y: -20% to 0% as it scrolls into view
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  return (
    <footer 
      ref={containerRef} 
      className="relative w-full h-[85vh] sm:h-[90vh] overflow-hidden bg-background"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <motion.div 
        style={{ y }} 
        className="fixed bottom-0 left-0 w-full h-[85vh] sm:h-[90vh] bg-primary text-background flex flex-col justify-between pt-16 sm:pt-24 pb-8 px-4 sm:px-6 lg:px-8"
      >
        
        {/* Top Grid Area */}
        <div className="max-w-360 mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Manifesto Column (Takes up 5 columns on large screens) */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                {/* Strong White Radial Glow */}
                <div className="absolute inset-0 scale-[1.7] bg-white blur-lg rounded-full -z-10 group-hover:scale-[1.9] transition-transform duration-300"></div>
                
                <Image 
                  src="/logo.svg" 
                  alt="Harmony of Life Logo" 
                  width={48} 
                  height={48} 
                  className="w-10 h-10 lg:w-12 lg:h-12 animate-[spin_20s_linear_infinite] relative z-10"
                />
              </div>
              <span className="font-heading text-2xl lg:text-3xl tracking-tight text-background">
                Harmony of life
              </span>
            </Link>
            <p className="text-background/70 font-medium text-lg sm:text-xl leading-relaxed max-w-md">
              Return to balance. <br />
              Reclaim your voltage.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            
            {/* Explore */}
            <div className="flex flex-col space-y-6">
              <h4 className="font-semibold text-sm tracking-widest uppercase text-accent">Explore</h4>
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-background/70 hover:text-background transition-colors text-base font-medium flex items-center gap-2 group w-fit">
                      {link.name}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="flex flex-col space-y-6">
              <h4 className="font-semibold text-sm tracking-widest uppercase text-accent">Connect</h4>
              <ul className="flex flex-col space-y-4">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors text-base font-medium">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col space-y-6">
              <h4 className="font-semibold text-sm tracking-widest uppercase text-accent">Legal</h4>
              <ul className="flex flex-col space-y-4">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-background/70 hover:text-background transition-colors text-base font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Massive Typography & Copyright */}
        <div className="mt-auto pt-16 flex flex-col items-center">
          <div className="w-full flex flex-col sm:flex-row justify-between items-center border-b border-background/10 pb-4 mb-2 px-4 max-w-360 mx-auto gap-4">
            <span className="text-background/50 text-sm font-medium text-center sm:text-left">
              &copy; {new Date().getFullYear()} Harmony of Life. All rights reserved.
            </span>
            <span className="text-background/50 text-sm font-medium text-center sm:text-right">
              Designed for longevity.
            </span>
          </div>
          
          {/* Edge-to-Edge Typography */}
          <div className="w-full overflow-hidden flex justify-center items-end leading-none pointer-events-none select-none">
            <ShinyText 
              text="HARMONY OF LIFE"
              speed={4}
              className="font-heading font-bold whitespace-nowrap text-[10vw] tracking-tighter -mb-2 lg:-mb-4"
            />
          </div>
        </div>

      </motion.div>
    </footer>
  );
}
