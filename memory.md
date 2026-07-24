# Project Memory Log (Changelog & Rationale)

This document tracks all significant architectural changes, file creations, and library modifications made to the Harmony of Life project. It serves as a continuous record of **what** was done and **why** it was done.

---

### [Initial Setup & Architecture Clean-up]

**1. Streamlined `Design.md`**
- **What:** Reduced the massive color palette to just 4 core colors (`#e9e0cf`, `#142b23`, `#607860`, `#b69c5f`). Restricted typography to 2 fonts (Noto Serif, Inter) with fluid `clamp()` sizing. Restricted spacing to 8px multiples and border radii to 8px/16px.
- **Why:** To eliminate visual clutter, enforce a premium, cohesive, minimalist aesthetic, and ensure strict consistency across the UI.

**2. Updated `globals.css`**
- **What:** Replaced the legacy Tailwind configuration with a clean `@theme inline` v4 setup matching the 4-color palette. Removed the `.dark` class, `--stripe-color`, and unused `@keyframes` (`aurora-bg`, `blob`, `flip-char`).
- **Why:** To ensure the codebase perfectly aligns with the new simplified design system and to remove unnecessary CSS weight for a completely fresh start.

**3. Purged Legacy Code from `src/`**
- **What:** Deleted `src/components`, `src/hooks`, and `src/lib`.
- **Why:** To return the project to a pristine, fresh Next.js installation state, ensuring no legacy or conflicting code interferes with the new architecture.

**4. Restored SEO Basics**
- **What:** Brought back `robots.ts` and `sitemap.ts` in `src/app/`.
- **Why:** To maintain standard Next.js SEO best practices while keeping the rest of the application fresh.

**5. Cleaned Dependencies (`package.json`)**
- **What:** Uninstalled `animejs` and `tw-animate-css`. Removed the `tw-animate-css` import from `globals.css`.
- **Why:** To prevent overlapping toolsets and reduce bundle size. Framer Motion (for UI) and GSAP (for complex scroll) are sufficient; keeping 4 animation libraries is redundant and harmful to performance.

**6. Overhauled `instructions.md`**
- **What:** Completely rewrote the instructions to map directly to the 8-section layout provided in `harmony-of-life/content.md` and `sitemap.md`. Added a critical rule at the top enforcing that `Design.md` must be read first.
- **Why:** The old instructions were disconnected from the actual content strategy. This aligns the technical execution with the marketing copy.

**7. Created `rules.md`**
- **What:** Created a central file outlining unbreakable rules for any AI agent or developer touching the code (mandatory reading, design strictness, tech stack limits, and file management).
- **Why:** To prevent "context drift" in the future, ensuring agents don't accidentally import wrong colors, unused libraries, or break the directory structure.

---
*(Append new actions below this line as the project progresses)*

**8. Linked Knowledge Files via Agent Rules**
- **What:** Created `.agents/AGENTS.md` to define a workspace-level system rule. 
- **Why:** To guarantee that any AI agent operating in this repository automatically reads `rules.md`, `Design.md`, `instructions.md`, and `memory.md` prior to taking action, ensuring context is never lost.

**9. Established Scalable Directory Architecture**
- **What:** Generated a robust folder structure within `src/` (`components/ui`, `components/layout`, `components/sections`, `components/3d`, `lib/`, `hooks/`, `types/`, `assets/`).
- **Why:** To maintain strict separation of concerns for a single-page site. `ui` holds generic reusable parts, `layout` for global shells, `sections` for specific landing page blocks, and `3d` isolates complex R3F components.

**10. Initialized Shadcn UI & Utilities**
- **What:** Created `lib/utils.ts` and installed essential Shadcn components (`button`, `dropdown-menu`, `sheet`, `card`, `accordion`, `dialog`, `separator`, `input`).
- **Why:** To rapidly build robust, accessible UI elements that automatically inherit our strict design system tokens from `globals.css` (specifically the 4-color palette and 16px radius).

**11. Built Global Navbar Layout**
- **What:** Created `src/components/layout/Navbar.tsx` and injected it into the root `layout.tsx`. Integrated Framer Motion for entrance animations, and utilized Shadcn `<Button>` and `<DropdownMenu>`.
- **Why:** To establish the sticky, glassmorphic global navigation shell matching the provided mockup, keeping to the project's minimalist aesthetic.

**12. Refined Navbar Layout & Conversion Strategy**
- **What:** Overhauled `Navbar.tsx` to include horizontal left navigation, centered SVG logo, and right-aligned social media links + WhatsApp CTA. On mobile, switched to a Hamburger menu using a Shadcn Sheet.
- **Why:** To make the header conversion-focused while ensuring a scalable, clean presentation on both desktop and mobile.

**13. Fixed Base-UI Hydration Errors**
- **What:** Removed `asChild` usage from Shadcn components (like `DropdownMenuTrigger` and `Button` acting as links) since the underlying `@base-ui` updates render elements natively. Applied `buttonVariants()` directly to Next.js `<Link>` components instead.
- **Why:** To eliminate React hydration mismatches and console errors caused by nested interactive elements (e.g., `<button>` inside `<button>`).

**14. Handled Brand Icons & Aesthetics**
- **What:** Implemented inline SVG paths for social icons (since `lucide-react` deprecated brand icons). Added a "living" rotating animation to the SVG logo and placed an intense, dynamic white radial glow behind it. Added 'Explore' dropdown to consolidate overflow links.
- **Why:** To maintain a lightweight bundle while giving the global navigation a highly premium, interactive, and organic feel, avoiding UI overlap on small desktops.

**15. Added Dynamic Scroll Interaction**
- **What:** Implemented scroll tracking via `framer-motion` (`useScroll` and `useMotionValueEvent`) so the header hides when scrolling down past 100px and smoothly reappears when scrolling up.
- **Why:** To maximize screen real estate when users are consuming content, while keeping navigation instantly accessible on upward scroll.

**16. Perfected Mobile Navigation Layout**
- **What:** Refined `Navbar.tsx` for mobile by hiding social links and moving the WhatsApp CTA entirely into the Shadcn `<Sheet>` hamburger menu. Replaced the generic hamburger button with a minimalist, ghost-styled, thin-stroke icon. Swapped the plain "Navigation" text in the menu header for the fully animated brandmark. Grouped elements into a compact layout to eliminate scrolling on small devices.
- **Why:** To prevent UI overlap on small screens and ensure the mobile experience feels just as premium, spacious, and deliberate as the desktop version.

**17. Implemented Hero Section**
- **What:** Created `Hero.tsx` and injected it into `page.tsx`. Generated and integrated an ultra-high-quality, abstract `hero-bg.png` representing cellular energy. Implemented staggered Framer Motion reveal animations for the main text, subtitle, and primary/secondary CTA buttons ("Start" and "Learn").
- **Why:** To create a breathtaking first impression that instantly communicates the brand's core message of "increasing cellular charge," matching the provided user wireframe perfectly while utilizing smooth, modern motion.

**18. Extracted Presentation Content**
- **What:** Transcribed and structured data from multiple attached presentation images into raw JSON format (`lifeforce_data.json` and `electric_body_data.json`) located in the `harmony-of-life/` directory.
- **Why:** To create a structured, programmatic data source of the educational content (slides on cellular voltage, mitochondria, healthspan, and lifeforce drainers) so it can be dynamically injected into the landing page UI without hardcoding text.

**19. Implemented Healthspan Section (Section 2)**
- **What:** Created `HealthspanSection.tsx` based on the user's skeleton mockup and injected it into `page.tsx`. Replaced the gray placeholder with a generated ethereal 3D visualization (`healthspan-vitality.png`). Applied glassmorphism, stagger animations, and the brand's core cream (`bg-background`) and green (`text-primary`) palette.
- **Why:** To translate the raw wireframe into a premium, interactive component that adheres to the "celestial wellness" aesthetic defined in `Design.md`.

**20. Implemented Electric Body Section (Section 3)**
- **What:** Created `ElectricSection.tsx` and injected it into `page.tsx`. Built a fully interactive Framer Motion tab system (Voltage, Charge, Healing) using the extracted JSON presentation data. Added a generated 3D bio-electric visualization (`cellular-voltage.png`) and set the section background to dark green (`bg-primary`) for high contrast against the previous section.
- **Why:** To build out the "Science" section of the landing page, ensuring it matches the premium aesthetic while providing a smooth, interactive experience for reading the complex presentation data.

**21. Implemented Inhibitors Section (Section 4) & Swiper Integration**
- **What:** Created `InhibitorsSection.tsx` and injected it into `page.tsx`. Initially built as a CSS grid based on the mockup, then refactored into a dynamic Swiper.js slider. Generated 4 new 3D ethereal visualizations (Toxins, Stress, Sleep, Nutrition) and added 2 more based on presentation data (Sedentary, Deficiency). Configured Swiper track padding (`pt-8!`) to allow hover-lift drop shadows without getting clipped by `overflow: hidden`.
- **Why:** To translate the "Lifeforce Drainers" wireframe into an interactive, horizontal scroll experience that fits perfectly on mobile and desktop without bloating vertical page length.

**22. Fixed Tooling & Linting Warnings**
- **What:** Resolved Next.js `<Image>` conflicts by removing `width/height` when `fill` was active. Fixed Framer Motion `ease` array TypeScript errors by adding `as const`. Refactored legacy Tailwind classes (like `w-[600px]`, `!pt-8`, `flex-grow`) to their canonical v4 equivalents (`w-150`, `pt-8!`, `grow`). Created `.vscode/settings.json` to tell the built-in linter to ignore Tailwind's `@theme` and `@apply` rules. Removed unused `Button` import in `Navbar.tsx`.
- **Why:** To keep the codebase completely free of warnings, errors, and red squiggles, ensuring the project adheres to strict, modern Next.js 15 + Tailwind v4 standards.

**23. Implemented 12 Pillars Section (Section 5)**
- **What:** Created `PillarsSection.tsx` and injected it into `page.tsx`. Built a complex mathematical CSS orbit animation using `Math.sin`/`Math.cos` where 12 nodes smoothly revolve around a static central core. Applied a counter-rotation to the nodes so text remains upright.
- **Why:** To translate the circular "12 Foundational Pillars" diagram into a highly engaging, interactive web component. Offloading the continuous rotation entirely to CSS animations (rather than JS loops) ensures 60fps performance without taxing the main thread.

**24. Fixed SSR Hydration Mismatch**
- **What:** Wrapped the trigonometric coordinate outputs (`Math.cos(angle) * radius`) in a `.toFixed(2)` rounding function.
- **Why:** To fix a Next.js client/server hydration mismatch caused by the Node.js server engine and the browser engine calculating deep floating-point precision on Math operations slightly differently.

**25. Enhanced Pillar Section Aesthetics & Modal**
- **What:** Darkened the section background to `bg-primary` (to maintain the alternating cream/dark-green section pattern) and inverted the component colors. Added a highly detailed, 8-pointed CSS solar flare/lens flare behind the central core. Added an interactive split-pane modal (using Framer Motion `AnimatePresence`) that pops up when a pillar is clicked, complete with Prev/Next navigation and dynamic image swapping.
- **Why:** To provide an ultra-premium, interactive way for users to explore the 12 pillars without having to scroll through 12 separate sections.

**26. Built Standalone Gut Reset Section (Section 6)**
- **What:** Created `GutResetSection.tsx` and injected it into `page.tsx` directly below the 12 Pillars section. Based the layout on a new user mockup featuring a 50/50 split (left image, right content) highlighting the gut as the "command center of charge."
- **Why:** The user clarified that Gut Reset needed to be a dedicated, highly prominent section rather than just an entry inside the 12 Pillars modal, reflecting its extreme importance to the brand's philosophy.

**27. Standardized UI Components**
- **What:** Refactored `GutResetSection.tsx` to strictly inherit the implementation details of `HealthspanSection.tsx`. This included importing the exact `containerVariants` and `itemVariants` for staggered Framer Motion loading, copying the ethereal glassmorphic rotated image frame, and matching the Shadcn `<Link>` button variants.
- **Why:** To maintain absolute design consistency across the landing page, ensuring different sections feel cohesive and built from the same design system.

**28. Implemented Apple-Style 3D Card Stacking (Community Section)**
- **What:** Replaced a heavy, Lenis-dependent JS scroll script with a highly optimized, native React `ScrollStack` component in `src/components/ui/scroll-stack.tsx`. 
- **How:** 
  - Eliminated severe trackpad jitter (layout thrashing) by replacing Javascript `translateY` calculation loops with native CSS `position: sticky` on invisible wrapper elements.
  - Retained a lightweight `requestAnimationFrame` loop strictly to calculate smooth 3D `scale`, `blur`, and `opacity` depth-of-field effects based on cached element offsets.
  - Adjusted cards to be highly responsive for smaller viewports by dropping hardcoded heights, moving to a sleek `16:9` aspect ratio, lowering the `stackPosition` to `10%`, and adding a massive `pb-[30vh]` scrolling runway to allow the final card to smoothly un-stick at the bottom of the document.
- **Why:** To achieve a buttery smooth, premium stacking interaction without resorting to scroll-hijacking libraries that damage Next.js performance and native accessibility.

**29. Comprehensive Tailwind v4 & Typescript Linting Pass**
- **What:** Addressed all ESLint `any` type warnings and React `exhaustive-deps` hook issues. Migrated legacy bracket-notation Tailwind classes (e.g. `bg-gradient-to-r`, `blur-[40px]`, `w-[400px]`) across `PillarsSection.tsx` and `CommunitySection.tsx` to their modern Tailwind v4 canonical equivalents (e.g. `bg-linear-to-r`, `blur-2xl`, `w-100`).
- **Why:** To ensure strict adherence to standard styling guidelines and keep the codebase perfectly clean, future-proof, and lint-free.

**30. Fixed Navbar Accessibility Issues**
- **What:** Added `aria-label` attributes (and `sr-only` span text) to all social media icon `<Link>` elements in both the desktop and mobile views of `Navbar.tsx`.
- **Why:** To fix accessibility audit failures related to "Links must have discernible text" since the links previously only contained SVG icons without screen reader text.

**31. Optimized LCP Image Discovery**
- **What:** Explicitly added `fetchPriority="high"` to the `next/image` component for the background image in `Hero.tsx`.
- **Why:** To resolve a Lighthouse "LCP Unscored" audit. Even with the `priority` prop, explicitly defining the fetch priority ensures the browser initiates the request as early as possible.

**32. Deferred Render-Blocking Resources (Critical Path Optimization)**
- **What:** Refactored `page.tsx` to dynamically import all sections below the fold using `next/dynamic`.
- **Why:** To code-split heavy Javascript and stylesheets (like Swiper CSS) out of the initial load, dramatically reducing the maximum critical path latency for the first paint (Hero Section).

**33. Fixed ScrollStack Animation Truncation (Dynamic Calculation)**
- **What:** Increased the right-column container in `CommunitySection.tsx` to `min-h-[400vh]` and replaced the static spacer in `scroll-stack.tsx` with a dynamically calculated height (`wrappers.length * itemDistance + window.innerHeight`).
- **Why:** To provide the exact required physical runway for native `position: sticky` to function properly, preventing the final card from being forcefully ripped out of the viewport while remaining robust against future changes in card quantity or viewport height.

**34. Implemented TestimonialsSection & Custom Swiper Navigation**
- **What:** Created `TestimonialsSection.tsx` and refactored Swiper navigation in both `InhibitorsSection.tsx` and `TestimonialsSection.tsx` to use custom Tailwind-styled buttons with `lucide-react` icons (ChevronLeft/Right) bound via Swiper's `navigation={{prevEl, nextEl}}` API.
- **Why:** Bypasses Swiper's native CSS specificity issues and ensures the navigation buttons perfectly match the brand's aesthetic (white circular shadows over the slides) without messy `!important` CSS overrides.

**35. Resolved Codebase Linting Warnings**
- **What:** Performed a wide sweep to fix various ESLint and Tailwind IntelliSense warnings:
  - Escaped raw quotes (`&quot;`) in `TestimonialsSection.tsx`.
  - Resolved `flex` and `hidden` conflicting display classes in Swiper navigation buttons.
  - Replaced arbitrary Tailwind values with canonical utility classes (`stroke-[3]` -> `stroke-3`, `bottom-[-1px]` -> `-bottom-px`, `translate-y-[2.5rem]` -> `translate-y-10`, etc.) in `ElectricSection.tsx` and `sheet.tsx`.
  - Fixed exhaustive-deps hook warnings in `scroll-stack.tsx` by adding `calculateOriginalTops` to `useLayoutEffect` and removing `getElementOffset` from `useCallback`.
- **Why:** To maintain a strict zero-warning policy, ensuring the codebase remains perfectly clean, optimized, and easy to maintain.

**36. Implemented CTASection (WhatsApp & Sheets Integration)**
- **What:** Built a custom Contact & Socials section (`CTASection.tsx`) that replaces the old Kit section. The form dynamically redirects users to a pre-filled WhatsApp message (`wa.me`) and simultaneously fires a POST request to a Google Apps Script Webhook (for Google Sheets logging). Integrated a newsletter subscription field.
- **Why:** Provides a seamless, highly functional contact pipeline without requiring a complex backend database.

**37. Global Parallax Footer & UI Polish**
- **What:** Designed a premium, interactive `Footer.tsx` utilizing a CSS `clip-path` parallax "curtain reveal" effect. Integrated edge-to-edge massive typography powered by a custom `ShinyText` framer-motion component. Implemented a custom theme-compliant scrollbar in `globals.css` and enforced strict `Design.md` shape compliance (8px and 16px border radii) across the CTA section.
- **Why:** To cap off the user journey with a high-end, cinematic sign-off that perfectly aligns with the Celestial Wellness design tokens.

**38. Implemented Falling Leaves Animation (`FallingLeaves.tsx`)**
- **What:** Designed a highly performant, infinite-looping leaf shower that correctly overlays the opaque parallax footer layer by utilizing a high z-index and explicit coordinate math (`calc(100% - size)`). Enforced React purity by pre-calculating random variables inside `useEffect` and removed hover interactions for a purely decorative effect.
- **Why:** To add an organic, subtle, and on-brand visual flourish (using actual logo petal shapes and colors) that enriches the footer aesthetic without distracting from the typography or causing hydration mismatches.

**39. Comprehensive Responsive UI Overhaul**
- **What:** Executed a massive pass on responsive behaviors across the landing page:
  - Fixed horizontal chopping in `CTASection.tsx` on small devices.
  - Enabled `centeredSlides={true}` in `InhibitorsSection.tsx` Swiper to properly frame active content.
  - Removed redundant padding on Swiper wrappers and standardized pagination spacing (`pt-8! pb-12!`) across all carousels.
  - Refactored `PillarsSection.tsx` orbit math to use responsive CSS variables (`--orbit-radius`) instead of hardcoded JS, allowing the 12 pillars to scale perfectly inside mobile viewports without overlapping. Also increased the radius slightly to give the center core more breathing room.
  - Added a body scroll lock (`useEffect` on `overflow: hidden`) when the Pillar modal is open to prevent background scrolling on mobile.
  - Enabled 3-second `Autoplay` on Inhibitors and Testimonials carousels and modified CSS to ensure navigation arrows always remain visible on touch devices.
  - Generated and integrated 4 high-quality Indian audience portraits for the Testimonial cards.
  - Fixed mobile scrolling bugs in `Footer.tsx` by disabling the fixed 85vh height limit (`h-auto` and `relative` positioning) on small screens, which successfully removed redundant internal scrollbars while retaining the parallax reveal on large desktop viewports.
- **Why:** To guarantee that the highly interactive, complex desktop layouts (3D orbital menus, fixed parallax footers, and Swiper carousels) gracefully degrade into flawless, native-feeling experiences on small touch screens.

**40. Global Navigation & Anchor Routing System**
- **What:** Injected semantic `id` tags (`#about`, `#lifeforce`, `#community`, etc.) onto the root `<section>` wrappers of all 10 core landing page components to match the `<Navbar />` routes. Refactored all localized CTA buttons (e.g. "Start", "Learn", "Meet", "Heal") inside individual sections to point to logical destinations within the newly anchored flow instead of dead links.
- **Why:** To stitch the standalone components into a cohesive single-page application journey, allowing the global header navigation and inter-section buttons to smoothly transport users through the narrative using Lenis.

**41. Implemented Lenis Smooth Scrolling & Anchor Interception**
- **What:** Installed `@studio-freight/lenis` and created a global client-side `LenisProvider.tsx`. Wrapped the entire application layout in this provider to instantiate a buttery-smooth `requestAnimationFrame` scroll loop. Added a global click event listener to intercept all `<a>` anchor tags pointing to `#` IDs.
- **Why:** To replace the harsh, instant native browser jumping with elegant, eased smooth-scrolling when clicking the Navbar links or section CTA buttons. Added a `-100px` offset so that the destination sections don't get covered by the fixed sticky navbar upon arrival.
