"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Info, Sparkles, Heart, Activity, Apple, MessageCircle, MenuIcon, ChevronDown } from "lucide-react";

const Facebook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Youtube = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Always show navbar when at the very top
    if (latest <= 50) {
      setHidden(false);
      return;
    }

    // Hide when scrolling down past 100px
    if (latest > previous && latest > 100) {
      setHidden(true);
    } 
    // Show when scrolling up
    else if (latest < previous) {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-primary/5"
    >
      <div className="max-w-360 mx-auto px-4 lg:px-8 h-24 flex items-center justify-between">
        
        {/* Left Navigation (Desktop Only) */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold tracking-wide">
          <Link href="#about" className="hover:text-secondary transition-colors">About us</Link>
          <Link href="#lifeforce" className="hover:text-secondary transition-colors">Lifeforce</Link>
          <Link href="#living-young" className="hover:text-secondary transition-colors">Living young</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-secondary transition-colors outline-none cursor-pointer group">
              Explore 
              <ChevronDown className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 bg-background/95 backdrop-blur-xl border border-primary/10 p-2 shadow-xl shadow-primary/5">
              <DropdownMenuItem className="cursor-pointer rounded-md text-sm font-medium">
                <Link href="#reversal" className="w-full h-full block py-1">Root cause reversal</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded-md text-sm font-medium mt-1">
                <Link href="#pillars" className="w-full h-full block py-1">12 Pillars</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded-md text-sm font-medium mt-1">
                <Link href="#gut-reset" className="w-full h-full block py-1">Gut reset</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded-md text-sm font-medium mt-1">
                <Link href="#authority" className="w-full h-full block py-1">Dr. Rastogi</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded-md text-sm font-medium mt-1">
                <Link href="#community" className="w-full h-full block py-1">Community</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded-md text-sm font-medium mt-1">
                <Link href="#testimonials" className="w-full h-full block py-1">Testimonials</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded-md text-sm font-medium mt-1">
                <Link href="#cta" className="w-full h-full block py-1">Contact us</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Center Logo (Desktop) / Left Logo (Mobile) */}
        <div className="xl:absolute xl:left-1/2 xl:-translate-x-1/2 shrink-0">
          <Link href="/" className="flex items-center gap-2 lg:gap-3 group">
            
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

            <span className="font-heading text-xl sm:text-2xl lg:text-3xl tracking-tight text-primary mt-1 relative z-10 drop-shadow-sm">
              Harmony of life
            </span>
          </Link>
        </div>

        {/* Right Action (Socials + CTA) */}
        <div className="flex items-center gap-4 xl:gap-6">
          
          {/* Social Icons (Hidden below xl) */}
          <div className="hidden xl:flex items-center gap-4 text-primary">
            <Link aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61591808093320" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-transform hover:scale-110">
              <span className="sr-only">Facebook</span>
              <Facebook className="w-5 h-5" />
            </Link>
            <Link aria-label="Instagram" href="https://www.instagram.com/harmonyoflife_official/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-transform hover:scale-110">
              <span className="sr-only">Instagram</span>
              <Instagram className="w-5 h-5" />
            </Link>
            <Link aria-label="YouTube" href="https://www.youtube.com/@Harmonyoflife-01" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-transform hover:scale-110">
              <span className="sr-only">YouTube</span>
              <Youtube className="w-5 h-5" />
            </Link>
            <Link aria-label="LinkedIn" href="https://www.linkedin.com/in/harmony-of-life-0-59ba5a413/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-transform hover:scale-110">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>

          {/* WhatsApp CTA */}
          <div className="hidden xl:block">
            <Link 
              href="https://wa.me/918800828863" 
              target="_blank" 
              rel="noopener noreferrer"
              className={buttonVariants({ className: "bg-green-600 hover:bg-green-700 text-white rounded-full px-6 font-medium shadow-lg shadow-green-900/20" })}
            >
              Connect on WhatsApp
            </Link>
          </div>

          {/* Mobile Menu (Sheet) */}
          <div className="xl:hidden flex items-center">
            <Sheet>
              <SheetTrigger aria-label="Open mobile menu" className="p-2 -mr-2 cursor-pointer rounded-full hover:bg-primary/5 active:bg-primary/10 transition-colors outline-none flex items-center justify-center text-primary">
                <MenuIcon className="w-7 h-7" strokeWidth={1.5} />
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-112.5 bg-background/95 backdrop-blur-xl border-l border-primary/10 p-6 sm:p-8 overflow-y-auto flex flex-col">
                <SheetHeader>
                  <SheetTitle className="text-left mb-6">
                    <div className="flex items-center gap-2 group w-fit">
                      <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        {/* Strong White Radial Glow */}
                        <div className="absolute inset-0 scale-[1.7] bg-white blur-lg rounded-full -z-10 group-hover:scale-[1.9] transition-transform duration-300"></div>
                        <Image 
                          src="/logo.svg" 
                          alt="Harmony of Life Logo" 
                          width={48} 
                          height={48} 
                          className="w-10 h-10 animate-[spin_20s_linear_infinite] relative z-10"
                        />
                      </div>
                      <span className="font-heading text-xl sm:text-2xl tracking-tight text-primary mt-1 relative z-10 drop-shadow-sm">
                        Harmony of life
                      </span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4">
                  <Link href="#about" className="flex items-center gap-3 text-lg font-medium hover:text-secondary transition-colors group">
                    <Info className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    About us
                  </Link>
                  <Link href="#lifeforce" className="flex items-center gap-3 text-lg font-medium hover:text-secondary transition-colors group">
                    <Sparkles className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    Lifeforce
                  </Link>
                  <Link href="#living-young" className="flex items-center gap-3 text-lg font-medium hover:text-secondary transition-colors group">
                    <Heart className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    Living young
                  </Link>
                  <Link href="#reversal" className="flex items-center gap-3 text-lg font-medium hover:text-secondary transition-colors group leading-tight max-w-sm">
                    <Activity className="w-5 h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    Root cause reversal
                  </Link>
                  <Link href="#pillars" className="flex items-center gap-3 text-lg font-medium hover:text-secondary transition-colors group">
                    <Sparkles className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    12 Pillars
                  </Link>
                  <Link href="#gut-reset" className="flex items-center gap-3 text-lg font-medium hover:text-secondary transition-colors group">
                    <Apple className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    Gut reset
                  </Link>
                  <Link href="#authority" className="flex items-center gap-3 text-lg font-medium hover:text-secondary transition-colors group">
                    <Info className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    Dr. Rastogi
                  </Link>
                  <Link href="#community" className="flex items-center gap-3 text-lg font-medium hover:text-secondary transition-colors group">
                    <MessageCircle className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    Community
                  </Link>
                  <Link href="#testimonials" className="flex items-center gap-3 text-lg font-medium hover:text-secondary transition-colors group">
                    <Heart className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    Testimonials
                  </Link>
                  <Link href="#cta" className="flex items-center gap-3 text-lg font-medium hover:text-secondary transition-colors group">
                    <MessageCircle className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    Contact us
                  </Link>
                </div>
                
                <div className="mt-auto pt-8">
                  {/* Mobile Socials */}
                  <div className="border-t border-primary/10 pt-6 flex justify-center gap-6 text-primary">
                    <Link aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61591808093320" target="_blank" rel="noopener noreferrer"><span className="sr-only">Facebook</span><Facebook className="w-5 h-5" /></Link>
                    <Link aria-label="Instagram" href="https://www.instagram.com/harmonyoflife_official/?hl=en" target="_blank" rel="noopener noreferrer"><span className="sr-only">Instagram</span><Instagram className="w-5 h-5" /></Link>
                    <Link aria-label="YouTube" href="https://www.youtube.com/@Harmonyoflife-01" target="_blank" rel="noopener noreferrer"><span className="sr-only">YouTube</span><Youtube className="w-5 h-5" /></Link>
                    <Link aria-label="LinkedIn" href="https://www.linkedin.com/in/harmony-of-life-0-59ba5a413/" target="_blank" rel="noopener noreferrer"><span className="sr-only">LinkedIn</span><Linkedin className="w-5 h-5" /></Link>
                  </div>
                  
                  {/* Mobile WhatsApp CTA */}
                  <div className="mt-6">
                    <Link 
                      href="https://wa.me/918800828863" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={buttonVariants({ className: "w-full bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-5 text-base font-medium shadow-lg shadow-green-900/20 flex items-center justify-center gap-2" })}
                    >
                      <MessageCircle className="w-5 h-5" />
                      Connect on WhatsApp
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
