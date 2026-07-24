"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Global interception of anchor links for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Traverse up to find the closest anchor tag
      const anchor = target.closest("a");
      
      if (!anchor) return;
      
      const href = anchor.getAttribute("href");
      
      // If it's an internal hash link
      if (href && href.startsWith("#") && href !== "#") {
        e.preventDefault();
        // Scroll to target with an offset for the fixed navbar (approx 100px)
        lenis.scrollTo(href, { offset: -100 }); 
      }
    };

    document.documentElement.addEventListener("click", handleAnchorClick);

    return () => {
      lenis.destroy();
      document.documentElement.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
}
