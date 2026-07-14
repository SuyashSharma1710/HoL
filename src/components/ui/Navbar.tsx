"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const links = [
  { name: "Authority", href: "#authority" },
  { name: "Root Cause", href: "#root-cause" },
  { name: "Pillars", href: "#pillars" },
  { name: "Solution", href: "#solution" },
  { name: "Join", href: "#community" },
];

const LeafMenuIcon = () => (
  <div className="flex flex-col gap-[5px] items-center justify-center w-8 h-8 hover:scale-105 transition-transform cursor-pointer">
    <div className="w-6 h-[5px] bg-[#6B7D6A] rounded-[100%_0%_100%_0%]" />
    <div className="w-6 h-[5px] bg-[#B5995E] rounded-[100%_0%_100%_0%] rotate-180" />
    <div className="w-6 h-[5px] bg-[#2B443C] rounded-[100%_0%_100%_0%]" />
  </div>
);

export default function Navbar() {
    const lenis = useLenis();
    const navRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [sheetOpen, setSheetOpen] = useState(false);

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

    const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string, idx: number) => {
        e.preventDefault();
        setActiveIndex(idx);
        setSheetOpen(false); // Close the mobile sheet
        
        // Slight delay to allow the sheet to close smoothly before intense scroll animations
        setTimeout(() => {
            if (lenis) {
                lenis.scrollTo(href);
            } else {
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
            }
        }, 150);
    };

    return (
        <>
            {/* Background Layer: z-40 frosted glass (Smart Blending Sibling 1) */}
            <div 
                ref={bgRef}
                className="fixed top-6 right-6 z-40 pointer-events-none flex items-center px-4 h-[60px] md:h-[68px] backdrop-blur-xl bg-white/70 border border-black/10 shadow-lg rounded-full overflow-hidden transition-all duration-300"
                style={{
                    "--spotlight-color": "rgba(0, 0, 0, 0.1)",
                    "--ambience-color": "rgba(0, 0, 0, 0.25)"
                } as React.CSSProperties}
            >
                {/* Invisible desktop content to ensure identical sizing to the content layer */}
                <ul className="hidden md:flex items-center gap-8 opacity-0">
                    {links.map((link) => (
                        <li key={link.name} className="relative list-none flex items-center h-full">
                            <div className="px-4 text-lg">
                                {link.name}
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Invisible mobile content sizing */}
                <div className="flex md:hidden opacity-0 p-1">
                    <div className="w-8 h-8" />
                </div>

                {/* 1. The Moving Spotlight (Follows Mouse) - Desktop only */}
                <div
                    className="hidden md:block pointer-events-none absolute bottom-0 left-0 w-full h-full z-1 transition-opacity duration-300"
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

                {/* 2. The Active State Ambience (Stays on Active) - Desktop only */}
                <div
                    className="hidden md:block pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-2"
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
                className="fixed top-6 right-6 z-50 flex items-center px-4 h-[60px] md:h-[68px] rounded-full text-black transition-colors duration-300"
            >
                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 h-full">
                    {links.map((link, idx) => (
                        <li key={link.name} className="relative list-none flex items-center h-full">
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
                                    "relative z-10 px-4 text-lg transition-opacity flex items-center h-full font-medium",
                                    activeIndex === idx ? "opacity-100" : "opacity-50 hover:opacity-100"
                                )}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu */}
                <div className="flex md:hidden p-1">
                    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                        <SheetTrigger aria-label="Open menu">
                            <LeafMenuIcon />
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background text-foreground border-foreground/10 flex flex-col items-center justify-center gap-8 w-[80vw]">
                            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                            
                            <ul className="flex flex-col items-center gap-8 text-3xl font-bricolage">
                                {links.map((link, idx) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            onClick={(e) => handleMobileLinkClick(e, link.href, idx)}
                                            className={cn(
                                                "transition-colors block",
                                                activeIndex === idx ? "text-secondary font-bold" : "text-foreground hover:text-secondary/80"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </>
    );
}
