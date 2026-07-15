"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface AuroraHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The main title text to display with the glass displacement effect. */
  title?: string;
  /** Whether to show the toggle switch for background modes. */
  showSwitch?: boolean;
}

export function AuroraHero({
  title = "An awesome title",
  className,
  ...props
}: AuroraHeroProps) {

  // Safely URL-encoded SVG string for the fluted glass effect
  const filterImageHref = "data:image/svg+xml," + encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' color-interpolation-filters='sRGB'>
      <g>
        <rect width='1' height='1' fill='black' />
        <rect width='1' height='1' fill='url(#red)' style='mix-blend-mode:screen' />
        <rect width='1' height='1' fill='url(#green)' style='mix-blend-mode:screen' />
        <rect width='1' height='1' fill='url(#yellow)' style='mix-blend-mode:screen' />
      </g>
      <defs>
        <radialGradient id='yellow' cx='0' cy='0' r='1' >
          <stop stop-color='yellow' />
          <stop stop-color='yellow' offset='1' stop-opacity='0' />
        </radialGradient>
        <radialGradient id='green' cx='1' cy='0' r='1' >
          <stop stop-color='green' />
          <stop stop-color='green' offset='1' stop-opacity='0' />
        </radialGradient>
        <radialGradient id='red' cx='0' cy='1' r='1' >
          <stop stop-color='red' />
          <stop stop-color='red' offset='1' stop-opacity='0' />
        </radialGradient>
      </defs>
    </svg>
  `);

  return (
    <section
      className={cn("aurora-hero-wrapper w-full min-h-[400px] h-[500px] sm:h-[600px] relative overflow-hidden", className)}
      {...props}
    >
      <style>{`
        .aurora-hero-wrapper {
          --stripe-color: #EAE0D1;
          --bg-filter: blur(17px) opacity(70%) saturate(130%) contrast(1.1);
          background: transparent;
          font-family: Inter, sans-serif;
          isolation: isolate;
        }
        :is(.dark) .aurora-hero-wrapper {
          --stripe-color: #101D18;
          --bg-filter: blur(17px) opacity(70%) saturate(130%) contrast(1.1);
          filter: none;
        }
        @keyframes smoothBg {
          from { background-position: 50% 50%, 50% 50%; }
          to { background-position: 350% 50%, 350% 50%; }
        }
        .aurora-hero-bg {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          --stripes: repeating-linear-gradient(
            100deg, 
            var(--stripe-color) 0%, 
            var(--stripe-color) 7%, 
            transparent 10%, 
            transparent 12%, 
            var(--stripe-color) 16%
          );
          --rainbow: repeating-linear-gradient(
            100deg, 
            #2B443C 10%, /* Dark Forest (Top Left Petal) */
            #B5995E 15%, /* Warm Gold (Top Right Petal) */
            #6B7D6A 20%, /* Sage Green (Bottom Right Petal) */
            #D4C5A9 25%, /* Pale Gold (Bottom Left Petal) */
            #2B443C 30%  /* Dark Forest */
          );
          background-image: var(--stripes), var(--rainbow);
          background-size: 300%, 200%;
          background-position: 50% 50%, 50% 50%;
          filter: var(--bg-filter) url(#fluted);
          mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);
        }
        .aurora-hero-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: var(--stripes), var(--rainbow);
          background-size: 200%, 100%;
          animation: smoothBg 60s linear infinite;
          mix-blend-mode: overlay;
        }
        .aurora-content {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: flex;
          place-content: center;
          place-items: center;
          flex-flow: column;
          gap: 4.5%;
          text-align: center;
          z-index: 10;
        }
        .h1-scalingSize {
          font-size: calc(1rem - -5vw);
          position: relative;
          isolation: isolate;
          font-weight: 700;
        }
        .h1-scalingSize::first-letter {
          font-size: 300%;
        }
        .h1-scalingSize::before {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          background: white;
          text-shadow: 0 0 1px #ffffff;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-color: white;
          -webkit-mask: linear-gradient(#000 0 0) luminance;
          mask: linear-gradient(#000 0 0) luminance, alpha;
          backdrop-filter: blur(19px) brightness(12.5);
          -webkit-text-stroke: 1px white;
          display: flex;
          margin: auto;
          z-index: 1;
          pointer-events: none;
        }
      `}</style>

      <div className="aurora-hero-bg"></div>

      {title && (
        <div className="aurora-content">
          <h2 className="h1-scalingSize" data-text={title}>{title}</h2>
        </div>
      )}

      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        colorInterpolationFilters="sRGB"
        style={{ position: "absolute", opacity: 0, height: 0, width: 0, pointerEvents: "none" }}
        aria-hidden="true"
        focusable="false"
      >
        <filter id="fluted" primitiveUnits="objectBoundingBox">
          <feImage
            x="0"
            y="0"
            result="image_0"
            crossOrigin="anonymous"
            href={filterImageHref}
            preserveAspectRatio="none"
            width=".03"
            height="1"
          />
          <feTile in="image_0" result="tile_0" />
          <feGaussianBlur stdDeviation=".0001" edgeMode="none" in="tile_0" result="bar_smoothness" x="0" y="0" />
          <feDisplacementMap scale=".08" xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="bar_smoothness" result="displacement_0" />
        </filter>
      </svg>
    </section>
  );
}

export default AuroraHero;
