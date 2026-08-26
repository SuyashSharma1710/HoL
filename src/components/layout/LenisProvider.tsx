"use client";

import { useEffect, ReactNode } from "react";

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    let lenisInstance: InstanceType<typeof import("lenis").default> | null = null;
    let rafId: number;

    const init = async () => {
      const Lenis = (await import("lenis")).default;
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        touchMultiplier: 2,
      });

      function raf(time: number) {
        lenisInstance?.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    };

    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(() => {
          init();
        });
      } else {
        setTimeout(init, 200);
      }
    }

    // Global interception of anchor links for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (!anchor) return;
      
      const href = anchor.getAttribute("href");
      
      if (href && href.startsWith("#") && href !== "#") {
        e.preventDefault();
        lenisInstance?.scrollTo(href, { offset: -100 }); 
      }
    };

    document.documentElement.addEventListener("click", handleAnchorClick);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenisInstance?.destroy();
      document.documentElement.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
}

