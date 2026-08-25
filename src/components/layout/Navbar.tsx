"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { 
  Sparkles, 
  MenuIcon, 
  ChevronDown, 
  ArrowUpRight,
  Sun,
  Leaf,
  UserCheck,
  Quote,
  Send,
  Compass,
  Zap,
  MessageCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
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

const Facebook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Youtube = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const navItems = [
  { 
    href: "#why-hol", 
    label: "Why Harmony", 
    desc: "The cellular vitality standard",
    icon: Sparkles 
  },
  { 
    href: "#philosophy", 
    label: "Our Philosophy", 
    desc: "Ancient wisdom meets cellular biology",
    icon: Leaf 
  },
  { 
    href: "#cellular-world", 
    label: "Cellular Health", 
    desc: "Understanding biological voltage",
    icon: Zap 
  },
  { 
    href: "#pillars", 
    label: "12 Pillars of Life", 
    desc: "Holistic longevity framework",
    icon: Sun 
  },
  { 
    href: "#authority", 
    label: "Our Founder", 
    desc: "Dr. Ashutosh Rastogi, Ph.D.",
    icon: UserCheck 
  },
  { 
    href: "#testimonials", 
    label: "Transformations", 
    desc: "Real member stories & vitality",
    icon: Quote 
  },
  { 
    href: "#next-step", 
    label: "Your Next Step", 
    desc: "Products, Knowledge, Opportunity",
    icon: Compass 
  },
  { 
    href: "#cta", 
    label: "Connect on WhatsApp", 
    desc: "Direct sanctuary desk & inquiries",
    icon: Send 
  },
];

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Helper to ensure anchor links route back to the homepage if we're on a different page
  const getHref = (hash: string) => pathname === "/" ? hash : `/${hash}`;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Determine if we've scrolled past the top threshold
    if (latest > 24) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Always show navbar when at the very top
    if (latest <= 60) {
      setHidden(false);
      return;
    }

    // Hide when scrolling down past 120px
    if (latest > previous && latest > 120) {
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
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out",
        scrolled 
          ? "bg-background/90 backdrop-blur-xl border-b border-primary/10 shadow-xs shadow-primary/5 py-0" 
          : "bg-transparent py-1 sm:py-2"
      )}
    >
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Left Navigation (Desktop) */}
        <nav className="hidden xl:flex items-center gap-1.5 text-sm font-medium">
          <Link 
            href={getHref("#why-hol")} 
            className="px-3.5 py-2 rounded-full text-primary/80 hover:text-primary hover:bg-primary/5 active:bg-primary/10 transition-all duration-200"
          >
            Why Harmony
          </Link>
          <Link 
            href={getHref("#philosophy")} 
            className="px-3.5 py-2 rounded-full text-primary/80 hover:text-primary hover:bg-primary/5 active:bg-primary/10 transition-all duration-200"
          >
            Philosophy
          </Link>
          <Link 
            href={getHref("#pillars")} 
            className="px-3.5 py-2 rounded-full text-primary/80 hover:text-primary hover:bg-primary/5 active:bg-primary/10 transition-all duration-200"
          >
            12 Pillars
          </Link>
          
          <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
            <DropdownMenuTrigger className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-primary/80 hover:text-primary hover:bg-primary/5 transition-all duration-200 outline-none cursor-pointer group">
              <span>Explore</span>
              <ChevronDown className={cn(
                "w-3.5 h-3.5 opacity-60 transition-transform duration-300 ease-out group-hover:opacity-100",
                dropdownOpen ? "rotate-180 text-accent" : ""
              )} />
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="start" 
              sideOffset={10}
              className="w-80 bg-background/95 backdrop-blur-2xl border border-accent/25 p-2 rounded-2xl shadow-2xl shadow-primary/15 animate-in fade-in-0 zoom-in-95 duration-200"
            >
              {/* Dropdown Header */}
              <div className="px-3 pt-2 pb-2 mb-1 border-b border-primary/10 flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.18em] text-primary/60 uppercase">
                  Sanctuary Navigation
                </span>
                <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
              </div>

              {/* Navigation Items */}
              {navItems.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <DropdownMenuItem 
                    key={item.href} 
                    className="cursor-pointer rounded-xl text-primary/90 hover:text-primary hover:bg-primary/5 focus:bg-primary/5 transition-all duration-200 my-0.5 p-0 outline-none group"
                  >
                    <Link 
                      href={getHref(item.href)} 
                      onClick={() => setDropdownOpen(false)}
                      className="w-full flex items-center gap-3 py-2 px-2.5"
                    >
                      {/* Icon Badge */}
                      <div className="w-9 h-9 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-secondary group-hover:text-accent group-hover:bg-accent/15 group-hover:border-accent/40 group-hover:scale-105 transition-all duration-300 shrink-0 shadow-xs">
                        <ItemIcon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-semibold text-primary group-hover:text-primary transition-colors leading-snug">
                          {item.label}
                        </div>
                        <div className="text-[11px] text-primary/55 group-hover:text-primary/75 transition-colors font-normal truncate">
                          {item.desc}
                        </div>
                      </div>

                      {/* Arrow */}
                      <ArrowUpRight className="w-4 h-4 text-primary/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Center Logo */}
        <div className="xl:absolute xl:left-1/2 xl:-translate-x-1/2 shrink-0">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group py-1">
            <div className="relative flex items-center justify-center">
              {/* Refined Ambient Glow */}
              <div className="absolute inset-0 scale-[1.6] bg-accent/20 blur-md rounded-full -z-10 group-hover:scale-[1.8] group-hover:bg-accent/30 transition-all duration-500" />
              <div className="absolute inset-0 scale-[1.3] bg-white blur-sm rounded-full -z-10" />
              
              <Image 
                src="/logo.svg" 
                alt="Harmony of Life Logo" 
                width={48} 
                height={48} 
                className="w-9 h-9 sm:w-11 sm:h-11 animate-[spin_25s_linear_infinite] relative z-10 drop-shadow-xs transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <span className="font-heading text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-primary relative z-10 transition-colors duration-300 group-hover:text-primary">
              Harmony of Life
            </span>
          </Link>
        </div>

        {/* Right Action (Socials + WhatsApp CTA) */}
        <div className="flex items-center gap-4 sm:gap-6">
          
          {/* Social Icons (Desktop) */}
          <div className="hidden xl:flex items-center gap-3 text-primary/70">
            {[
              { href: "https://www.instagram.com/harmonyoflife_official/?hl=en", label: "Instagram", Icon: Instagram },
              { href: "https://www.youtube.com/@Harmonyoflife-01", label: "YouTube", Icon: Youtube },
              { href: "https://www.linkedin.com/in/harmony-of-life-0-59ba5a413/", label: "LinkedIn", Icon: Linkedin },
              { href: "https://www.facebook.com/profile.php?id=61591808093320", label: "Facebook", Icon: Facebook },
            ].map(({ href, label, Icon }) => (
              <Link 
                key={label}
                aria-label={label} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full hover:bg-primary/5 hover:text-accent active:scale-95 transition-all duration-200"
              >
                <span className="sr-only">{label}</span>
                <Icon className="w-4.5 h-4.5" />
              </Link>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="hidden xl:block">
            <Link 
              href="https://wa.me/918800828863" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/95 text-background font-medium text-sm px-5 py-2.5 rounded-full border border-accent/40 hover:border-accent shadow-sm hover:shadow-md hover:shadow-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
            >
              <MessageCircle className="w-4 h-4 text-accent transition-transform duration-300 group-hover:scale-110" />
              <span>Connect on WhatsApp</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger (Sheet) */}
          <div className="xl:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger 
                aria-label="Open mobile menu" 
                className="p-2.5 -mr-2 cursor-pointer rounded-full text-primary hover:bg-primary/5 active:bg-primary/10 transition-colors outline-none flex items-center justify-center"
              >
                <MenuIcon className="w-6 h-6" strokeWidth={1.75} />
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-105 bg-background/98 backdrop-blur-2xl border-l border-primary/10 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
                <div>
                  <SheetHeader>
                    <SheetTitle className="text-left mb-8">
                      <div className="flex items-center gap-2.5 group w-fit">
                        <div className="relative flex items-center justify-center">
                          <div className="absolute inset-0 scale-[1.6] bg-accent/20 blur-md rounded-full -z-10" />
                          <Image 
                            src="/logo.svg" 
                            alt="Harmony of Life Logo" 
                            width={40} 
                            height={40} 
                            className="w-9 h-9 animate-[spin_25s_linear_infinite] relative z-10"
                          />
                        </div>
                        <span className="font-heading text-2xl tracking-tight text-primary font-medium">
                          Harmony of Life
                        </span>
                      </div>
                    </SheetTitle>
                  </SheetHeader>

                  {/* Navigation Links */}
                  <div className="flex flex-col space-y-1">
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link 
                          key={item.href}
                          href={getHref(item.href)} 
                          onClick={() => setIsOpen(false)} 
                          className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-primary/85 hover:text-primary hover:bg-primary/5 active:bg-primary/10 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="w-4.5 h-4.5 text-secondary group-hover:text-accent transition-colors" />
                            <span>{item.label}</span>
                          </div>
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-accent transition-opacity" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
                
                {/* Footer Drawer Info */}
                <div className="pt-8 mt-6 border-t border-primary/10 space-y-6">
                  {/* Social Links */}
                  <div className="flex justify-center gap-4 text-primary/70">
                    {[
                      { href: "https://www.instagram.com/harmonyoflife_official/?hl=en", label: "Instagram", Icon: Instagram },
                      { href: "https://www.youtube.com/@Harmonyoflife-01", label: "YouTube", Icon: Youtube },
                      { href: "https://www.linkedin.com/in/harmony-of-life-0-59ba5a413/", label: "LinkedIn", Icon: Linkedin },
                      { href: "https://www.facebook.com/profile.php?id=61591808093320", label: "Facebook", Icon: Facebook },
                    ].map(({ href, label, Icon }) => (
                      <Link 
                        key={label}
                        aria-label={label} 
                        href={href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-primary/5 hover:bg-primary/10 hover:text-accent transition-colors"
                      >
                        <span className="sr-only">{label}</span>
                        <Icon className="w-4.5 h-4.5" />
                      </Link>
                    ))}
                  </div>
                  
                  {/* Mobile WhatsApp Button */}
                  <Link 
                    href="https://wa.me/918800828863" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-primary hover:bg-primary/95 text-background rounded-full px-6 py-3.5 text-base font-medium border border-accent/40 shadow-md shadow-primary/10 flex items-center justify-center gap-2.5 transition-transform active:scale-[0.98]"
                  >
                    <MessageCircle className="w-5 h-5 text-accent" />
                    <span>Connect on WhatsApp</span>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
