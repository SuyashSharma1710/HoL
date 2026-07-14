"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}
export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Background Sibling */}
      <div className="fixed bottom-6 right-6 z-40 pointer-events-none flex items-center justify-center">
        <div className="px-6 py-3 opacity-0 flex items-center gap-4">
          {/* Facebook dummy */}
          <div className="w-4 h-4" />
          {/* Instagram dummy */}
          <div className="w-4 h-4" />
          <div className="w-px h-4 mx-1" />
          
          <div className="flex items-center gap-2 font-bold">
            <div className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.2em] whitespace-nowrap">WhatsApp Us</span>
          </div>
        </div>
        <div className="absolute inset-0 backdrop-blur-xl bg-white/70 border border-black/10 rounded-full shadow-lg" />
      </div>

      {/* Content Sibling */}
      <div 
        ref={containerRef}
        className="fixed bottom-6 right-6 z-50 pointer-events-none flex items-center gap-4 px-6 py-3 text-black transition-colors duration-300"
      >
        <motion.a 
          href="https://www.facebook.com/profile.php?id=61591808093320"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4, scale: 1.15 }} 
          className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer pointer-events-auto flex items-center"
        >
          <FacebookIcon className="w-4 h-4" />
        </motion.a>
        <motion.a 
          href="https://www.instagram.com/harmonyoflife_official/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4, scale: 1.15 }} 
          className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer pointer-events-auto flex items-center"
        >
          <InstagramIcon className="w-4 h-4" />
        </motion.a>
        
        <div className="w-px h-4 bg-current opacity-40 mx-1" />
        
        <motion.a 
          href="https://wa.me/918800828863?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Harmony%20of%20Life."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4, scale: 1.05 }} 
          className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-all cursor-pointer font-bold pointer-events-auto"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-xs uppercase tracking-[0.2em] whitespace-nowrap">WhatsApp Us</span>
        </motion.a>
      </div>
    </>
  );
}
