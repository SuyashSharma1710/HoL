"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Authority", href: "#authority" },
  { name: "Root Cause", href: "#root-cause" },
  { name: "Pillars", href: "#pillars" },
  { name: "Solution", href: "#solution" },
  { name: "Join", href: "#community" },
];

export default function Navbar() {
    const lenis = useLenis();
    const navRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Refs for the "light" positions so we can animate them imperatively
    const spotlightX = useRef(0);
    const ambienceX = useRef(0);

    // Ensure the initial active state aligns the spotlight
    useEffect(() => {
        if (!navRef.current) return;
        const nav = navRef.current;
        const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);
        if (activeItem) {
            const navRect = nav.getBoundingClientRect();
            const itemRect = activeItem.getBoundingClientRect();
            const targetX = itemRect.left - navRect.left + itemRect.width / 2;
            spotlightX.current = targetX;
            ambienceX.current = targetX;
            if (bgRef.current) {
                bgRef.current.style.setProperty("--spotlight-x", `${targetX}px`);
                bgRef.current.style.setProperty("--ambience-x", `${targetX}px`);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Handle mouse movement for the spotlight
    useEffect(() => {
        if (!navRef.current || !bgRef.current) return;
        const nav = navRef.current;
        const bg = bgRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = nav.getBoundingClientRect();
            const x = e.clientX - rect.left;
            if (e.clientX >= rect.left && e.clientX <= rect.right && 
                e.clientY >= rect.top && e.clientY <= rect.bottom) {
                bg.style.setProperty("--spotlight-x", `${x}px`);
                bg.style.setProperty("--spotlight-opacity", "1");
            } else {
                bg.style.setProperty("--spotlight-opacity", "0");
            }
        };

        const handleMouseLeave = () => {
            bg.style.setProperty("--spotlight-opacity", "0");
            
            const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);
            if (activeItem) {
                const navRect = nav.getBoundingClientRect();
                const itemRect = activeItem.getBoundingClientRect();
                const targetX = itemRect.left - navRect.left + itemRect.width / 2;

                animate(spotlightX.current, targetX, {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    onUpdate: (v) => {
                        spotlightX.current = v;
                        if (bgRef.current) {
                            bgRef.current.style.setProperty("--spotlight-x", `${v}px`);
                        }
                    }
                });
            }
        };

        nav.addEventListener("mousemove", handleMouseMove);
        nav.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            nav.removeEventListener("mousemove", handleMouseMove);
            nav.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [activeIndex]);

    // Handle the "Ambience" (Active Item) Movement
    useEffect(() => {
        if (!navRef.current || !bgRef.current) return;
        const nav = navRef.current;
        const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);

        if (activeItem) {
            const navRect = nav.getBoundingClientRect();
            const itemRect = activeItem.getBoundingClientRect();
            const targetX = itemRect.left - navRect.left + itemRect.width / 2;

            animate(ambienceX.current, targetX, {
                type: "spring",
                stiffness: 200,
                damping: 20,
                onUpdate: (v) => {
                    ambienceX.current = v;
                    if (bgRef.current) {
                        bgRef.current.style.setProperty("--ambience-x", `${v}px`);
                    }
                },
            });
        }
    }, [activeIndex]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = links.findIndex(
                            (link) => link.href.substring(1) === entry.target.id
                        );
                        if (index !== -1) setActiveIndex(index);
                    }
                });
            },
            {
                rootMargin: "-50% 0px -50% 0px", // Triggers when the section hits the middle of the screen
            }
        );

        const observedIds = new Set<string>();

        const observeElements = () => {
            links.forEach((link) => {
                const id = link.href.substring(1);
                if (!observedIds.has(id)) {
                    const element = document.getElementById(id);
                    if (element) {
                        observer.observe(element);
                        observedIds.add(id);
                    }
                }
            });
        };

        observeElements();
        
        // Since sections are dynamically imported, check periodically until all are observed
        const intervalId = setInterval(() => {
            if (observedIds.size === links.length) {
                clearInterval(intervalId);
            } else {
                observeElements();
            }
        }, 500);

        return () => {
            clearInterval(intervalId);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* Background Layer: z-40 frosted glass (Smart Blending Sibling 1) */}
            <div 
                ref={bgRef}
                className="fixed top-6 right-6 z-40 pointer-events-none flex items-center px-4 md:px-6 py-2 backdrop-blur-xl bg-white/70 border border-black/10 shadow-lg rounded-full overflow-hidden transition-all duration-300"
                style={{
                    "--spotlight-color": "rgba(0, 0, 0, 0.1)",
                    "--ambience-color": "rgba(0, 0, 0, 0.25)"
                } as React.CSSProperties}
            >
                {/* Invisible content to ensure identical sizing to the content layer */}
                <ul className="flex items-center gap-4 md:gap-8 opacity-0">
                    {links.map((link) => (
                        <li key={link.name} className="relative list-none">
                            <div className="px-4 py-2 text-sm md:text-lg">
                                {link.name}
                            </div>
                        </li>
                    ))}
                </ul>

                {/* 1. The Moving Spotlight (Follows Mouse) */}
                <div
                    className="pointer-events-none absolute bottom-0 left-0 w-full h-full z-1 transition-opacity duration-300"
                    style={{
                        opacity: "var(--spotlight-opacity, 0)",
                        background: `
                          radial-gradient(
                            120px circle at var(--spotlight-x) 100%, 
                            var(--spotlight-color) 0%, 
                            transparent 50%
                          )
                        `
                    }}
                />

                {/* 2. The Active State Ambience (Stays on Active) */}
                <div
                    className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-2"
                    style={{
                        background: `
                          radial-gradient(
                            60px circle at var(--ambience-x) 0%, 
                            var(--ambience-color) 0%, 
                            transparent 100%
                          )
                        `
                    }}
                />
            </div>

            {/* Content Layer: z-50 (Smart Blending Sibling 2) */}
            <nav 
                ref={navRef}
                className="fixed top-6 right-6 z-50 flex items-center px-4 md:px-6 py-2 rounded-full text-black transition-colors duration-300"
            >
                <ul className="flex items-center gap-4 md:gap-8">
                    {links.map((link, idx) => (
                        <li key={link.name} className="relative list-none">
                            <Link
                                href={link.href}
                                data-index={idx}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveIndex(idx);
                                    if (lenis) {
                                        lenis.scrollTo(link.href);
                                    } else {
                                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className={cn(
                                    "relative z-10 px-4 py-2 text-sm md:text-lg transition-opacity block",
                                    activeIndex === idx ? "opacity-100" : "opacity-50 hover:opacity-100"
                                )}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
