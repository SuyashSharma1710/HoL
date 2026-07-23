# Project Rules for AI Agents

These rules are strictly enforced for the Harmony of Life project. Any agent working on this codebase MUST abide by these guidelines without exception.

## 1. Mandatory Reading
- **Before writing any code or proposing layouts**, you MUST read:
  1. `Design.md` (Contains the strict design system)
  2. `instructions.md` (Contains the tech stack, mechanics, and sitemap architecture)

## 2. Design System Strictness
- **Colors:** You are restricted to the 4 core colors: `#e9e0cf` (Background), `#142b23` (Primary/Text), `#607860` (Secondary/Sage), and `#b69c5f` (Accent/Gold). Do not invent new colors or use standard Tailwind colors (e.g., `red-500`, `blue-500`).
- **Typography:** 
  - `Noto Serif` for all Headings and Display text.
  - `Inter` for all Body and Caption text.
  - Rely exclusively on the clamped text sizes defined in `globals.css` (`text-sm`, `text-base`, `text-lg`, `text-4xl`, `text-5xl`).
- **Spacing:** Use ONLY multiples of 8px (Tailwind classes `p-2`, `p-4`, `p-6`, `p-8`, `p-12`).
- **Borders & Shapes:** Use ONLY `8px` (`rounded-sm`/`md`) or `16px` (`rounded-lg`/`xl`/`2xl`).

## 3. Tech Stack & Dependencies
- **Framework:** Next.js (App Router, TypeScript).
- **Styling:** Tailwind CSS v4.
- **Animations:** 
  - Use **Framer Motion** as the primary tool for UI interactions, hover states, and standard scroll-reveals.
  - Use **GSAP (ScrollTrigger)** *only* for highly complex scroll storytelling (e.g., sticky scrolling, horizontal pins).
  - Do NOT use `animejs` or `tw-animate-css` (they have been intentionally removed).
- **Icons:** Use `lucide-react`.

## 4. Code Architecture & Performance
- **Minimalism:** Keep the `src` folder clean. Only add what is necessary.
- **Dynamic Imports:** Any heavy components utilizing React Three Fiber (R3F) or extensive GSAP timelines MUST be loaded via Next.js `next/dynamic` to prevent blocking the initial page load.
- **Client vs Server:** Default to React Server Components. Only add `"use client"` when necessary for state, hooks, or animations (Framer Motion / GSAP).

## 5. File Management
- Do not create scratch files or test files in the primary `src` directory. Keep the folder structure clean and matching a fresh, professional Next.js installation.
