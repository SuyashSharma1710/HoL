"use client";

import React, { useLayoutEffect, useRef, useCallback, type ReactNode } from "react";

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = "" }) => (
  <div className="scroll-stack-wrapper relative w-full perspective-[1000px]">
    <div
      className={`scroll-stack-card relative w-full rounded-[40px] shadow-2xl origin-top will-change-transform ${itemClassName}`.trim()}
      style={{
        backfaceVisibility: "hidden",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.05,
  itemStackDistance = 20,
  stackPosition = "15%",
  scaleEndPosition = "5%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 2,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const wrappersRef = useRef<HTMLElement[]>([]);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map<number, { scale: number; rotation: number; blur: number }>());
  const originalTopsRef = useRef<number[]>([]);
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  const getElementOffset = useCallback((element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    return rect.top + window.scrollY;
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;
    isUpdatingRef.current = true;

    const scrollTop = window.scrollY;
    const containerHeight = window.innerHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    wrappersRef.current.forEach((wrapper, i) => {
      const card = cardsRef.current[i];
      if (!wrapper || !card) return;

      const initialTop = originalTopsRef.current[i] || 0;
      
      const triggerStart = initialTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = initialTop - scaleEndPositionPx;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < wrappersRef.current.length; j++) {
          const jInitialTop = originalTopsRef.current[j] || 0;
          const jTriggerStart = jInitialTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }
        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      const newTransform = {
        scale,
        rotation,
        blur,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        const transform = `translate3d(0, 0, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : "";

        card.style.transform = transform;
        card.style.filter = filter;
        
        // Slightly fade out covered cards
        if (newTransform.blur > 0) {
           card.style.opacity = Math.max(0.3, 1 - (newTransform.blur * 0.15)).toString();
        } else {
           card.style.opacity = "1";
        }

        lastTransformsRef.current.set(i, newTransform);
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    calculateProgress,
    parsePercentage,
    getElementOffset,
  ]);

  const calculateOriginalTops = useCallback(() => {
    const wrappers = wrappersRef.current;
    
    // Disable sticky temporarily to get accurate document flow offsets
    wrappers.forEach(w => w.style.position = "static");
    
    originalTopsRef.current = wrappers.map(w => w.getBoundingClientRect().top + window.scrollY);
    
    // Re-enable sticky pinning
    wrappers.forEach((w, i) => {
      w.style.position = "sticky";
      w.style.top = `calc(${stackPosition} + ${itemStackDistance * i}px)`;
    });
  }, [stackPosition, itemStackDistance]);

  useLayoutEffect(() => {
    const wrappers = Array.from(document.querySelectorAll(".scroll-stack-wrapper")) as HTMLElement[];
    wrappersRef.current = wrappers;
    
    const cards = Array.from(document.querySelectorAll(".scroll-stack-card")) as HTMLElement[];
    cardsRef.current = cards;

    wrappers.forEach((wrapper, i) => {
      if (i < wrappers.length - 1) {
        wrapper.style.marginBottom = `${itemDistance}px`;
      }
    });

    calculateOriginalTops();
    window.addEventListener("resize", calculateOriginalTops);

    cards.forEach((card) => {
      card.style.willChange = "transform, filter";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      card.style.transform = "translateZ(0)";
    });

    const currentTransforms = lastTransformsRef.current;
    
    const loop = () => {
      updateCardTransforms();
      animationFrameRef.current = requestAnimationFrame(loop);
    };
    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", calculateOriginalTops);
      cardsRef.current = [];
      currentTransforms.clear();
      isUpdatingRef.current = false;
    };
  }, [itemDistance, updateCardTransforms]);

  return (
    <div className={`relative w-full ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner w-full">
        {children}
        {/* Massive runway to keep the final card sticky while the 400vh parent finishes */}
        <div className="scroll-stack-end w-full h-[150vh]" />
      </div>
    </div>
  );
};
