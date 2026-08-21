"use client";

import { Atom, User, Leaf, Users } from "lucide-react";

const valueProps = [
  {
    icon: Atom,
    title: "SCIENCE BACKED",
    desc: "Solutions rooted in modern research",
  },
  {
    icon: User,
    title: "PERSONALISED",
    desc: "Guidance tailored to your unique needs",
  },
  {
    icon: Leaf,
    title: "HOLISTIC APPROACH",
    desc: "Body, mind, lifestyle & environment",
  },
  {
    icon: Users,
    title: "COMMUNITY DRIVEN",
    desc: "A supportive community walking with you",
  },
];

export function ValuePropsBanner() {
  // Duplicate array 4 times for a completely seamless, gapless infinite loop
  const marqueeItems = [...valueProps, ...valueProps, ...valueProps, ...valueProps];

  return (
    <section className="relative w-full bg-background border-y border-accent/20 py-4.5 sm:py-5 overflow-hidden z-20 shadow-xs select-none">
      {/* Left and Right Gradient Fades for Smooth Infinite Edge Masking */}
      <div className="absolute left-0 inset-y-0 w-16 sm:w-28 lg:w-40 bg-linear-to-r from-background via-background/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 sm:w-28 lg:w-40 bg-linear-to-l from-background via-background/90 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track Container */}
      <div className="flex w-full overflow-hidden">
        <div className="flex items-center shrink-0 animate-marquee-loop hover:[animation-play-state:paused] cursor-default py-1">
          {marqueeItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.title}-${idx}`}
                className="flex items-center gap-3.5 sm:gap-4 shrink-0 px-5 sm:px-8 group"
              >
                {/* Gold Line-Art Icon Container */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shrink-0 shadow-xs group-hover:scale-110 group-hover:bg-accent/20 group-hover:border-accent group-hover:shadow-[0_0_12px_rgba(183,135,54,0.25)] transition-all duration-300">
                  <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[1.75]" />
                </div>

                {/* Text Block */}
                <div className="flex flex-col text-left">
                  <span className="font-sans font-semibold text-[11px] sm:text-xs tracking-[0.14em] text-primary uppercase leading-tight mb-0.5 group-hover:text-accent transition-colors duration-200 whitespace-nowrap">
                    {item.title}
                  </span>
                  <span className="font-sans text-[12px] sm:text-[13px] text-primary/75 leading-snug font-normal whitespace-nowrap">
                    {item.desc}
                  </span>
                </div>

                {/* Divider between marquee items */}
                <div className="h-6 w-px bg-accent/25 ml-5 sm:ml-8" />
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee-loop {
          display: flex;
          width: max-content;
          animation: marquee 60s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}


