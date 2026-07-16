"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useRef } from "react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
    </svg>
  );
}
export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
      <footer 
        ref={containerRef}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center gap-3 md:gap-4 px-4 md:px-6 h-[40px] md:h-[48px] text-black transition-colors duration-300"
      >
        <div className="absolute inset-0 backdrop-blur-xl bg-white/70 border border-black/10 rounded-full shadow-lg -z-10 pointer-events-none" />
        
        {/* Visible SEO Contact Info */}
        <div className="hidden lg:flex flex-col text-[10px] uppercase tracking-widest opacity-60 leading-[1.1] font-semibold">
          <span>+91 88008 28863</span>
          <span>New Delhi, IN</span>
        </div>
        
        <div className="hidden lg:block w-px h-6 bg-black/20 mx-1" />
        
        <motion.a 
          href="https://www.facebook.com/profile.php?id=61591808093320"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Harmony of Life on Facebook"
          whileHover={{ y: -4, scale: 1.15 }} 
          className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer flex items-center"
        >
          <FacebookIcon className="w-4 h-4" />
        </motion.a>
        
        <motion.a 
          href="https://www.instagram.com/harmonyoflife_official/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Harmony of Life on Instagram"
          whileHover={{ y: -4, scale: 1.15 }} 
          className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer flex items-center"
        >
          <InstagramIcon className="w-4 h-4" />
        </motion.a>

        <motion.a 
          href="https://www.youtube.com/@Harmonyoflife-01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Harmony of Life on YouTube"
          whileHover={{ y: -4, scale: 1.15 }} 
          className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer flex items-center"
        >
          <YouTubeIcon className="w-4 h-4" />
        </motion.a>
        
        <div className="w-px h-6 bg-black/20 mx-1" />
        
        <motion.a 
          href="https://wa.me/918800828863?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Harmony%20of%20Life."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4, scale: 1.05 }} 
          className="flex items-center gap-1.5 md:gap-2 opacity-70 hover:opacity-100 transition-all cursor-pointer font-bold"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] whitespace-nowrap">WhatsApp Us</span>
          <span className="sm:hidden text-xs uppercase tracking-widest whitespace-nowrap">WA</span>
        </motion.a>
      </footer>
  );
}
