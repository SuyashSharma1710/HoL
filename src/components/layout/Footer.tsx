"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { ArrowRight, Phone, MapPin, Sparkles, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { ShinyText } from "@/components/ui/shiny-text";
import { FallingLeaves } from "@/components/ui/falling-leaves";

const navLinks = [
  { name: "Why Harmony", href: "#why-hol" },
  { name: "Our Philosophy", href: "#philosophy" },
  { name: "Cellular Health", href: "#cellular-world" },
  { name: "12 Pillars of Life", href: "#pillars" },
  { name: "Our Founder", href: "#authority" },
  { name: "Transformations", href: "#testimonials" },
  { name: "Your Next Step", href: "#next-step" },
  { name: "Connect on WhatsApp", href: "#cta" },
];

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/harmonyoflife_official/?hl=en" },
  { name: "YouTube", href: "https://www.youtube.com/@Harmonyoflife-01" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/harmony-of-life-0-59ba5a413/" },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61591808093320" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
];

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const getHref = (hash: string) => pathname === "/" ? hash : `/${hash}`;
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Parallax reveal physics: gently ascends into view
  const y = useTransform(scrollYProgress, [0, 1], ["-18%", "0%"]);

  return (
    <footer 
      ref={containerRef} 
      className="relative w-full h-auto sm:h-dvh overflow-hidden bg-background"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <FallingLeaves />
      <motion.div 
        style={{ y }} 
        className="relative sm:fixed sm:bottom-0 sm:left-0 w-full h-auto sm:h-dvh bg-primary text-[#e9e0cf] flex flex-col justify-between pt-16 sm:pt-20 lg:pt-24 pb-2 sm:pb-4 px-4 sm:px-8 lg:px-12 xl:px-16"
      >
        
        {/* Main Content Container */}
        <div className="relative grow flex flex-col justify-between w-full max-w-360 mx-auto">
          
          {/* Top Grid Area */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 relative z-10">
          
            {/* Brand & Manifesto Column (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              
              {/* Logo Lockup */}
              <Link href="/" className="flex items-center gap-3.5 w-fit group">
                <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {/* Radial Celestial Glow */}
                  <div className="absolute inset-0 scale-[1.8] bg-white/20 blur-md rounded-full -z-10 group-hover:scale-[2.1] transition-transform duration-300" />
                  
                  <Image 
                    src="/logo.svg" 
                    alt="Harmony of Life Logo" 
                    width={48} 
                    height={48} 
                    className="w-10 h-10 lg:w-11 lg:h-11 animate-[spin_25s_linear_infinite] relative z-10"
                  />
                </div>
                <span className="font-heading text-2xl lg:text-3xl font-semibold tracking-tight text-[#e9e0cf]">
                  Harmony of Life
                </span>
              </Link>

              {/* Dual-Tone Manifesto Heading */}
              <div>
                <h3 className="font-heading text-xl sm:text-2xl lg:text-[1.75rem] font-medium leading-snug text-[#e9e0cf]">
                  Return to <span className="text-white font-semibold">Balance.</span> <br />
                  <span className="italic font-medium text-accent">Reclaim Your Voltage.</span>
                </h3>
                <div className="w-12 h-0.5 bg-accent rounded-full mt-3 mb-4" />
                <p className="text-[#e9e0cf]/75 font-sans font-normal text-xs sm:text-sm leading-relaxed max-w-md">
                  A sanctuary for cellular health and lifestyle transformation. Reconnect with your innate bio-energetic lifeforce and learn the timeless science of living young.
                </p>
              </div>

              {/* Social Channels Pill Badges */}
              <div className="pt-2 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-accent hover:text-white border border-accent/30 text-xs font-sans font-medium text-[#e9e0cf]/85 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xs"
                    aria-label={social.name}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Columns (7 Cols) */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
              
              {/* Column 1: Explore Pathways */}
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  <h4 className="font-sans font-semibold text-xs tracking-[0.2em] uppercase text-accent">
                    Explore
                  </h4>
                </div>
                <ul className="flex flex-col space-y-2.5">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={getHref(link.href)} 
                        className="text-[#e9e0cf]/75 hover:text-white transition-colors text-xs sm:text-sm font-medium flex items-center gap-1.5 group w-fit"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Connect & Sanctuary */}
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-accent" />
                  <h4 className="font-sans font-semibold text-xs tracking-[0.2em] uppercase text-accent">
                    Sanctuary
                  </h4>
                </div>
                <ul className="flex flex-col space-y-3">
                  <li>
                    <a 
                      href="tel:+918800828863" 
                      className="inline-flex items-center gap-2 text-[#e9e0cf] hover:text-accent transition-colors text-xs sm:text-sm font-semibold tracking-wide"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      +91 880 082 8863
                    </a>
                  </li>
                  <li className="flex items-start gap-2 text-[#e9e0cf]/70 text-xs leading-relaxed max-w-56 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <span>
                      Quest Concepts Private Limited<br/>
                      125A Shahpur Jat, Siri Fort<br/>
                      Near Lal PathLabs<br/>
                      New Delhi, 110049
                    </span>
                  </li>
                </ul>
              </div>

              {/* Column 3: Legal & Foundation */}
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                  <h4 className="font-sans font-semibold text-xs tracking-[0.2em] uppercase text-accent">
                    Governance
                  </h4>
                </div>
                <ul className="flex flex-col space-y-2.5">
                  {legalLinks.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-[#e9e0cf]/75 hover:text-white transition-colors text-xs sm:text-sm font-medium"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-[#e9e0cf]/50 leading-normal pt-2">
                  Wellness and educational guidance. Not intended as medical diagnosis or treatment.
                </p>
              </div>

            </div>
          </div>

          {/* Bottom Copyright & Longevity Tag */}
          <div className="mt-auto pt-10 sm:pt-14 flex flex-col items-center relative z-10">
            <div className="w-full flex flex-col sm:flex-row justify-between items-center border-t border-[#e9e0cf]/15 pt-4 pb-2 max-w-360 mx-auto gap-3">
              <span className="text-[#e9e0cf]/60 text-xs font-medium text-center sm:text-left">
                &copy; {new Date().getFullYear()} Harmony of Life. All rights reserved.
              </span>
              <span className="text-accent text-xs font-medium tracking-wider uppercase text-center sm:text-right">
                Designed for Lifeforce &amp; Longevity.
              </span>
            </div>
          </div>
        </div>
          
        {/* Edge-to-Edge Monumental Typography */}
        <div className="w-full shrink-0 flex justify-center items-end pointer-events-none select-none">
          <ShinyText 
            text="HARMONY OF LIFE"
            speed={4}
            className="font-heading font-bold whitespace-nowrap text-[11.5vw] tracking-tighter leading-[0.8] text-white/10"
          />
        </div>

      </motion.div>
    </footer>
  );
}
