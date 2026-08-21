# Project Memory Log (Changelog & Rationale)

This document tracks all significant architectural changes, file creations, and library modifications made to the Harmony of Life project. It serves as a continuous record of **what** was done and **why** it was done.

---

### [Initial Setup & Architecture Clean-up]

**1. Streamlined `Design.md`**

- **What:** Reduced the massive color palette to just 4 core colors (`#e9e0cf`, `#142b23`, `#607860`, `#b69c5f`). Restricted typography to 2 fonts (Cormorant Garamond, Inter) with fluid `clamp()` sizing. Restricted spacing to 8px multiples and border radii to 8px/16px.
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

_(Append new actions below this line as the project progresses)_

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

**42. Unified Navigation Architecture**

- **What:** Injected all 10 core landing page section links into the desktop and mobile `Navbar.tsx` (using the 'Explore' dropdown for overflow), as well as the global `Footer.tsx` nav list.
- **Why:** To provide the user with complete, instant access to any part of the journey (Pillars, Dr. Rastogi, Testimonials, Contact) from anywhere on the page, fully utilizing the new Lenis smooth scroll system.

**43. Synchronized Social Media Links**

- **What:** Updated the social media icons and URL targets in `CTASection.tsx` (Connect Section) to use `lucide-react` icons (replacing inline SVG code) and point to the actual Harmony of Life social profiles.
- **Why:** To ensure brand consistency, clean up unused code, and ensure all "Connect with the tribe" links correctly route users to active external social channels instead of dead `#` anchors.

**44. Fixed Footer Content Overflow Clipping**

- **What:** Increased the parallax footer height on desktop from `90vh` to `100dvh` (full screen) and significantly reduced the vertical padding (`space-y-4` -> `space-y-2`) between the 10 navigation links in the 'Explore', 'Connect', and 'Legal' columns.
- **Why:** The addition of 4 new navigation links pushed the total vertical height of the content beyond the strict `90vh` clip-path bounds, causing the bottom copyright text and the massive "HARMONY OF LIFE" typography to get clipped out of view. Shrinking the gaps and expanding the height restores the layout perfectly.

**45. Fixed Button Accessibility Audit (A11y)**

- **What:** Added descriptive `aria-label="Previous slide"` and `aria-label="Next slide"` attributes to the icon-only navigation buttons within the `InhibitorsSection.tsx` Swiper carousel.
- **Why:** Screen readers rely on discernible text to explain interactive elements. Icon-only buttons without `aria-label`s fail accessibility audits because visually impaired users don't know what the buttons do.

**46. Google Sheets Webhook Integration**

- **What:** Injected the live Google Apps Script Web App URL into `CTASection.tsx`, effectively activating the Leads form and Newsletter form submissions.
- **Why:** To enable seamless backend data collection by routing incoming web leads and newsletter emails directly to the client's Google Sheets using a `no-cors` POST request.

**47. Refactored Webhook Payload Construction**

- **What:** Swapped `new FormData()` for `new URLSearchParams()` across both lead generation forms in `CTASection.tsx`, and fixed a casing typo to exactly match the `"Emails"` column header.
- **Why:** To force the `application/x-www-form-urlencoded` content type, which Google Apps Script parses far more reliably via `e.parameter` when dealing with restricted `no-cors` browser headers.

**48. Optimized Form Submission UX**

- **What:** Reordered the execution flow in the Leads form `handleSubmit` so that the WhatsApp redirect happens instantly, and converted the Google Sheets fetch into a non-blocking background task.
- **Why:** Waiting on a `no-cors` fetch request to resolve can introduce artificial latency and block the UI. Firing the redirect first guarantees an instant, snappy user experience while data routes silently in the background.

**49. Form Submission Success Modal**

- **What:** Implemented a full-screen, animated "Thank You" modal overlay in `CTASection.tsx` that triggers immediately upon form submission.
- **Why:** To provide clear visual feedback to the user while the system `await`s the Google Sheets webhook request, before ultimately redirecting them to WhatsApp.

**50. Webhook Troubleshooting & Error Diagnosis**

- **What:** Discovered a `401 Unauthorized` error returning from the Google Apps Script Web App during `POST` testing via the terminal.
- **Why:** Provided explicit instructions to change the Google Apps Script deployment permissions to "Execute as: Me" and "Who has access: Anyone" to allow the `no-cors` browser requests to succeed without authentication.

**51. Refactored CTA Form Success Modals**

- **What:** Replaced the native `alert()` on the newsletter subscription form with the premium glassmorphic `AnimatePresence` modal. Converted the boolean `showThankYou` state into a unified `thankYouType` state (`"contact" | "newsletter"`) to dynamically render different success messages and loading states.
- **Why:** To provide a consistent, ultra-premium user experience across all conversion points on the landing page, avoiding jarring native browser popups.

**52. Fixed Modal Viewport Positioning**

- **What:** Changed the thank you overlay positioning in `CTASection.tsx` from `absolute inset-0` to `fixed inset-0`.
- **Why:** Because the parent section is `relative`, absolute positioning trapped the modal inside the section. `fixed` positioning ensures the modal perfectly centers on the user's screen viewport, regardless of scroll position.

**53. Optimized Hero Animation Performance**

- **What:** Fixed severe scroll jitter in `WelcomeSection.tsx` by applying `will-change-transform` and `transform-gpu` to the heavy CSS blurred radial gradient blobs.
- **Why:** To offload the expensive pixel-level `mix-blend-mode` and `blur` calculations to the GPU, restoring a butter-smooth 60fps framerate.

**54. Created Interactive Lifeforce Chart**

- **What:** Designed and built `LifeforceChart.tsx`, a custom React component using pure SVG and Framer Motion.
- **Why:** To perfectly replicate a provided static line chart ("Lifeforce & Cellular Charge Over Age") into an engaging, animated web asset without bloating the app with heavy chart libraries (like Chart.js or Recharts). Included a Catmull-Rom bezier curve function for perfectly smooth lines.

**55. Integrated & Styled Lifeforce Chart**

- **What:** Replaced the static image in `HealthspanSection.tsx` with the new `LifeforceChart` component. Styled the chart's SVG elements (stroke, fill) and text strictly to the `Design.md` theme (`#b69c5f` Accent Gold for natural decline, and `#607860` Secondary Sage Green for healthy intervention).
- **Why:** To ensure the data visualization feels perfectly native to the Celestial Wellness brand aesthetic, blending seamlessly into the glassmorphic background container.

**56. Tailwind CSS Code Quality Pass**

- **What:** Fixed all Tailwind IntelliSense warnings regarding non-canonical classes (e.g., `-top-[10%]` to `top-[-10%]`, `max-w-[600px]` to `max-w-150`) across `ElectricSection.tsx`, `PillarsSection.tsx`, and `WelcomeSection.tsx`.
- **Why:** To maintain strict adherence to Tailwind v4 standard utility classes and ensure the codebase remains completely free of warnings and lint errors.

**57. Copy Updates (Inhibitors Section)**

- **What:** Replaced the phrase "Dead food" with the clearer term "Processed food" in the `InhibitorsSection.tsx` content block.
- **Why:** To align the messaging with a more sophisticated, modern wellness tone while maintaining the impact of the "zero electrons" messaging.

**58. Comparative Mitochondria Visualization Generation**

- **What:** Generated three high-quality, realistic comparative 3D visualizations of mitochondria corresponding to the "Voltage", "Charge", and "Healing" tabs in `ElectricSection.tsx`. Copied these assets to `public/images` and updated the section's structure to reference them.
- **Why:** To elevate the visual storytelling of the "Science" section by replacing generic placeholders with bespoke, highly contextual images that illustrate cellular health (healthy vs diseased, single cell vs trillion-cell network, blocked energy vs flowing lifeforce).

**59. Interactive Inhibitors Modal (Deep Dive)**

- **What:** Upgraded the Inhibitors Swiper cards to be fully clickable, wrapping them in a semantic `<button>`. Implemented a premium, dark-mode split-pane modal overlay (utilizing Framer Motion `AnimatePresence`) that slides up upon click, displaying deep, clinical "detailedContent" for all 6 inhibitors alongside their respective images. Added `useEffect` body scroll-locking while the modal is open.
- **Why:** To allow users to explore the deep science behind Lifeforce Drainers without cluttering the main page UI, maintaining the elegant, minimalist aesthetic while offering rich educational value.

**60. Pillar Orbit Aesthetic Polish (Starbursts)**

- **What:** Applied a multi-layered "star-like" glow to the 12 orbital pillar icons using tight CSS drop-shadows and ambient radial blurs. Injected 4 physical starburst flare beams (horizontal, vertical, diagonal) absolute-positioned behind each icon, set to burst with bright golden light on hover and slowly spin alongside the orbit track.
- **Why:** To make the central 12-Pillar orbit diagram feel truly "alive" and electric, perfectly capturing the celestial wellness and cellular voltage aesthetic.

**61. Complete Generative Image Integration**

- **What:** Swapped out all remaining generic placeholder images across the site with custom, user-generated AI cinematic masterpieces.
  - Wired 12 detailed biological mechanism `.jpeg`s into the Pillars modal.
  - Wired a massive cinematic microbiome image into the Gut Reset section.
  - Wired a premium portrait into the Authority section.
  - Drafted custom `--ar 16:9` Midjourney prompts for the Community and Living Young scroll-stacks, and wired the 8 resulting widescreen images directly into the scrolling cards.
- **Why:** To finalize the visual narrative of the landing page, ensuring every single pixel perfectly reflects the high-fidelity, premium, dark celestial wellness design system.

**62. Global Routing & Link Audit**

- **What:** Conducted a comprehensive audit of every CTA button and text link across all 10 landing page sections. Corrected misaligned text (e.g., changing "Science" to "Program" in Healthspan) and fixed broken or illogical `href` anchor targets (e.g., pointing `#reversal` to `#inhibitors`, and `#community` to `#living-young` for the "Heal" button).
- **Why:** To guarantee a flawless, logical user journey where every button seamlessly transports the user (via Lenis smooth scroll) to the exact relevant narrative section, closing all navigation loops.

**63. Fixed Navbar Blur Artifact**

- **What:** Refactored `Navbar.tsx` scroll logic to render completely transparent (`bg-transparent` with no blur) when `scrollY < 20`, and only apply the glassmorphic `backdrop-blur-md bg-background/90` when scrolling down.
- **Why:** To eliminate a harsh 1px rendering artifact (caused by WebKit/Blink's handling of CSS `backdrop-filter`) that looked like a thin dark line slicing across the top of the Hero background image.

**64. Enhanced Lifeforce Chart Contrast**

- **What:** Replaced the translucent frosted-glass background (`bg-background/40 backdrop-blur-md`) of the `LifeforceChart.tsx` component with a crisp, solid `bg-white`.
- **Why:** To improve data legibility and make the SVG visualization pop distinctly against the softer surrounding background palette.

**65. Navbar Routing & Mobile UX Enhancements**

- **What:** Refactored the "About us" links in both the desktop and mobile navigation menus to point to `#welcome` instead of `#about`. Additionally, implemented a controlled `isOpen` state on the Shadcn `<Sheet>` mobile menu, binding an `onClick={() => setIsOpen(false)}` handler to all 10 mobile navigation links.
- **Why:** To ensure the user lands exactly at the start of the narrative introduction, and to guarantee that the mobile side-panel automatically collapses when a user selects a destination, providing a snappy, native app-like UX.

**66. Global Splash Screen Loader**

- **What:** Created and injected a new `<Loader />` component (`src/components/layout/Loader.tsx`) into the global `layout.tsx` wrapper.
- **Why:** To provide an elegant, full-screen celestial-themed entry experience. The loader temporarily locks scrolling and plays a 2-second initial sequence (spinning logo, fading text, and progress bar) before smoothly sliding out of view to reveal the landing page.

**67. Codebase Linting & Cleanup**

- **What:** Removed unused imports (e.g., `next/link` in `InhibitorsSection.tsx`) and refactored Tailwind CSS arbitrary values (`h-[1px]`, `h-[2px]`) to their canonical equivalents (`h-px`, `h-0.5`) across multiple components like `PillarsSection.tsx` and `Loader.tsx`.
- **Why:** To resolve ESLint and Tailwind IntelliSense warnings, ensuring a clean, strict, and maintainable codebase.

**68. Dedicated Legal Policy Pages**

- **What:** Created full, dedicated routing pages for `/privacy`, `/terms`, and `/cookies` containing standard boilerplate legal text, and updated the `Footer.tsx` links to point to these new routes.
- **Why:** To ensure strict compliance and proper SEO indexing. Dedicated URLs (unlike popups or modals) are the standard requirement for search engine bots (Googlebot) and compliance crawlers (e.g., Meta Pixel, Google Ads) to verify active policies.

**69. Cross-Page Navigation & Loader State Refactoring**

- **What:** Updated the `<Navbar />` and `<Footer />` routing logic to dynamically prepend a forward slash (`/`) to all hash links (e.g., `/#lifeforce`) when the user is not on the homepage. Additionally, refactored `<Loader />` to trigger on route changes (using `usePathname`) and resolved a React strict mode warning by deriving state during the render phase instead of using `setState` in a `useEffect`.
- **Why:** To ensure that navigation from policy pages back to homepage sections works seamlessly, and to guarantee that the loading splash screen elegantly covers all Next.js client-side route transitions without triggering performance-degrading cascading renders.

**70. Static Robots.txt Configuration**

- **What:** Replaced the dynamic Next.js App Router metadata route (`src/app/robots.ts`) with a rock-solid, static `public/robots.txt` file.
- **Why:** To resolve a Lighthouse crawler error where `robots.ts` was occasionally failing to serve or hanging on the Turbopack dev server, ensuring bots (like Googlebot) can reliably download the crawling directives.

**71. Lighthouse Accessibility & Contrast Fixes**

- **What:** Fixed heading hierarchy in `TestimonialsSection.tsx` (changed `<h4>` to `<h3>` for author names), added `aria-label`s to Swiper navigation buttons, and improved the contrast ratio of the description text in the scroll-stack cards across `CommunitySection`, `LivingYoungSection`, and `ElectricSection` (changing `text-background/70` to `text-white/90`).
- **Why:** To resolve strict Lighthouse accessibility warnings, ensuring perfect screen reader compatibility, proper semantic structure, and WCAG AA compliant text contrast.

**72. Hero Background LCP Optimization**

- **What:** Refactored the hero background image (`new-hero-bg.jpeg`) in `Hero.tsx` to use a Next.js static import instead of a string URL, and provided an explicit `sizes` property.
- **Why:** To eliminate a massive 1.7-second Resource Load Delay flagged by Lighthouse. Static imports allow the Next.js compiler to generate an instant blur placeholder and inject a highly-optimized `<link rel="preload">` tag into the document head, significantly improving the Largest Contentful Paint (LCP) metric, especially on mobile.

**73. ScrollStack Forced Layout Thrashing Fix**

- **What:** Refactored the `ScrollStack` component to eliminate forced synchronous layouts (layout thrashing) during initialization by replacing expensive DOM modifications (`position: static`) and measurements (`getBoundingClientRect`) with a non-destructive `offsetTop` calculation.
- **Why:** To resolve a severe 77ms layout calculation bottleneck flagged by Lighthouse. This ensures buttery-smooth initialization and scrolling across all sections utilizing the stacking cards (Community, Living Young, Electric).

**74. Responsive Image Sizing Optimization**

- **What:** Updated the `sizes` attribute for the "Astral cellular energy body" image in `WelcomeSection.tsx` from a generic `50vw` to a precisely capped `(max-width: 1280px) 50vw, 640px`.
- **Why:** To resolve a Lighthouse image delivery warning. By giving the Next.js `<Image>` component a strict upper bound, it prevents the downloading of unnecessarily massive images on ultra-wide monitors, saving significant bandwidth and reducing FCP/LCP.

**75. SEO Metadata & Keyword Consistency Optimization**

- **What:** Replaced the generic `<title>` and `<meta name="description">` tags in `layout.tsx` with meticulously crafted, keyword-dense copy (`Harmony of Life | Elevate Your Cellular Charge & Lifeforce` & `Restore your health at the cellular level. Harmony of Life provides personalized holistic protocols to increase Cellular Charge and elevate your Lifeforce.`).
- **Why:** To achieve perfect keyword consistency across Title, Meta Description, and Headings tags (hitting top keywords like "Cellular Charge", "Lifeforce", "Harmony of Life") and to hit the optimal character length limits (50-60 for titles, 120-160 for descriptions) for maximum search engine visibility.

**76. Decorative Image Accessibility & Alt Attributes**

- **What:** Located all 20 occurrences of the faint background watermark `<Image src="/logo.svg" />` across `WelcomeSection`, `PillarsSection`, and `ElectricSection` and replaced their empty `alt=""` attributes with a descriptive `alt="Harmony of Life decorative element"` tag.
- **Why:** While `alt=""` is acceptable for screen readers, strict SEO crawlers flag them as missing attributes. This provides branding context to search engines without breaking layout or accessibility.

**77. Local Business Schema & Contact Info Finalization**

- **What:** Injected the verified physical address (Quest Concepts Private Limited, New Delhi) into the JSON-LD schema in `layout.tsx` and simultaneously rendered it as visible text in the `Footer` Connect section alongside the E.164 formatted phone number (`+918800828863`). Additionally, split the `Organization` and `LocalBusiness` schemas into two separate `<script>` tags and used the generic `@type: "LocalBusiness"` string.
- **Why:** To satisfy Google's strict requirement that structured Local Business data accurately matches physically visible contact information on the webpage, ensuring the site ranks highly in local SEO search results without risking a penalty for hidden or dummy schema data. Furthermore, de-nesting the JSON arrays and using the generic schema type ensures compatibility with legacy automated SEO auditing tools.

**78. Layout Restructuring & Force Light Mode Config**

- **What:**
  1. Extracted the "Philosophy" block from the `WelcomeSection` into its own standalone `PhilosophySection.tsx` utilizing the `bg-secondary` theme color and animated glowing background orbs to distinctively break up the flow.
  2. Moved the "Harmony of Life" tagline from the Welcome section footer into the `HealthspanSection` as its main centered header.
  3. Streamlined CTAs across the site: Unified dual buttons in the Hero into a single "Explore" button, removed the secondary button in Healthspan leaving just "Discover", and completely removed the CTA from the Electric section.
  4. Added `color-scheme: only light` configuration to both `globals.css` `:root` and the Next.js `Viewport` export in `layout.tsx`.
- **Why:** Restructuring sections provided a more dramatic, paced scroll experience. Streamlining the CTAs reduces choice paralysis and focuses user navigation on the core flow. The strict color-scheme declarations prevent aggressive OS-level or browser "Auto Dark Mode" algorithms from automatically inverting the custom light beige/dark green color palettes.

**79. Button Polish & Codebase Linting**

- **What:** Upgraded the text-based "Pillars" link in the Electric section into a premium, glowing gold outlined button ("Discover Pillars") with scaling hover effects and `hover:text-white` contrast adjustments. Resolved ESLint `react/no-unescaped-entities` errors in `WelcomeSection.tsx` by properly escaping quotes, removed leftover unused imports in `ElectricSection` and `HealthspanSection`, and updated an arbitrary tailwind value (`max-w-[200px]`) to `max-w-50` in the Footer.
- **Why:** Elevating the CTA design enhances the premium feel and interactivity of the site. Addressing all linter and stylistic warnings ensures the codebase remains robust, warning-free, and adheres to strict React/Next.js best practices for production builds.

**80. Added Lifeforce & Cellular Discharge Banner**

- **What:** Integrated a highly contrasted, glassmorphic banner at the bottom of `HealthspanSection.tsx` to display key metrics on lifeforce: 3.5 Trillion Volts, 50 Trillion Cells, and 70 mV optimal charge.
- **Why:** To make the core scientific concepts regarding cellular discharge and lifeforce extremely prominent and easily scannable immediately after the Healthspan chart.

**81. Refactored Electric Section to Bento Grid Layout**

- **What:** Replaced the hidden tabbed interface in `ElectricSection.tsx` with a visually immersive Bento Grid layout. Displayed all core concepts (Charge, Discharge, Voltage, Healing) simultaneously using full-width images masked by smooth, gradual CSS gradient overlays (`bg-linear-to-r`, `bg-linear-to-t`) that fade seamlessly into the background without sudden cutoffs. Added a new dedicated "Cellular Discharge" card.
- **Why:** To massively increase the visual impact of the "You are electric" section, allowing users to instantaneously grasp the concepts of lifeforce, voltage, and cellular drain simply by scrolling.

**82. Polished Abstract Watermark Opacities**

- **What:** Standardized the opacity of the rotating decorative logo watermarks across sections. Specifically, updated `WelcomeSection.tsx` background elements from `opacity-10` to `opacity-[0.08]` to match the subtle aesthetic used in `ElectricSection.tsx`.
- **Why:** To ensure strict visual consistency and maintain the premium, subtle dark-mode aesthetic defined in the design system.

**83. Expanded Electric Section Bento Grid**

- **What:** Removed the restrictive `max-w-6xl` class from the bento grid container in `ElectricSection.tsx`, allowing the layout to naturally inherit and fill the parent `max-w-360` (1440px) width.
- **Why:** To perfectly align the width of the Electric section with the massive, immersive layout constraints of the other core sections (like Healthspan), maximizing screen real estate and visual impact.

**84. SEO Sitemap & Robots.txt Expansion**

- **What:** Updated the Next.js `sitemap.ts` to dynamically include the newly created `/privacy`, `/terms`, and `/cookies` dedicated legal routes with appropriate indexing priorities. Validated and standardized `public/robots.txt` to perfectly direct crawlers to the dynamically generated `sitemap.xml`.
- **Why:** To ensure search engine bots (like Googlebot) are explicitly instructed to crawl and index all compliance and legal pages, which is critical for ad platform verification and holistic site SEO.

**85. Generative Imagery Expansion & Layout Polish**

- **What:**
  1. Updated `GutResetSection.tsx` to conditionally render two bespoke generative microbiome images (landscape for desktop, portrait for mobile), matching the immersive layout strategy of the Authority section.
  2. Overhauled the `CTASection.tsx` to feature targeted recruitment copy for "Wellness Relationship Managers".
  3. Perfected the form card scroll-sticking logic in `CTASection.tsx` by abandoning static offsets in favor of dynamic viewport math (`top-[max(2rem,calc(50vh-17rem))]`), ensuring the form perfectly centers itself on the screen while scrolling regardless of display height, without breaking initial alignment.
  4. Swept the codebase to fix IDE linter warnings (replaced arbitrary `pb-[350px]` with canonical `pb-87.5` in GutReset, removed unused `cn` utility from ElectricSection).
     **86. Welcome Section Aesthetics Update**
- **What:** Swapped the animated gradient radial blobs in `WelcomeSection.tsx` for a custom green curtain pattern background (`green-colour-curtain-pattern-background-abstract-banner-multipurpose-design-optimized.webp`).
- **Why:** To test and iterate on the visual texture of the first major content block, aligning with the user's specific requested asset.

**87. Philosophy Section Visual Expansion**

- **What:** Injected two generative landscape images (`1st-optimized.webp` and `2nd-optimized.webp`) into `PhilosophySection.tsx` to break up the dense text blocks. Constrained their widths to `max-w-2xl` and locked the aspect ratio to `16:9` (`aspect-video`) to ensure they act as elegant inline frames rather than massive full-bleed blocks.
- **Why:** To improve narrative pacing and visual engagement, ensuring the "Science/Philosophy" content remains as visually premium as the rest of the site.

**88. Layout Spacing & Swiper Standardization**

- **What:** Fixed the Swiper centering bug on desktop in `InhibitorsSection.tsx` by turning off `centeredSlides` for larger breakpoints. Stacked the CTA buttons vertically on mobile inside `GutResetSection.tsx` and `AuthoritySection.tsx`. Synchronized the spacer height (`h-120`) across these sections for uniform scroll rhythm. Added missing `sizes` attributes to Next.js `Image` components in `TestimonialsSection.tsx` to clear browser warnings.
- **Why:** To ensure pixel-perfect responsive layouts on mobile devices and clear up any lingering warnings in the console, resulting in a cleaner user experience.

**89. Philosophy Section Awwwards-level Redesign**

- **What:** Completely overhauled `PhilosophySection.tsx` into a high-end, premium editorial layout featuring an asymmetrical 12-column grid, massive cinematic typography, and buttery-smooth Framer Motion parallax scrolling.
  - Flipped the color palette to `bg-background` (cream) and `text-primary` (dark green) to inject negative space and contrast.
  - Implemented a massive frosted glassmorphic card (`backdrop-blur-2xl`) overlapping the final image.
  - Meticulously synced the heading font sizes (`text-4xl sm:text-5xl md:text-6xl`), max-widths (`max-w-3xl`), and eyebrow margins (`mb-4`) to perfectly match the adjacent `PillarsSection.tsx`.
- **Why:** The user requested an "Awwwards-level" design upgrade for this specific section. The new layout breaks away from the generic centered-stack format and provides a cinematic, highly immersive narrative reading experience that remains strictly compliant with the `Design.md` aesthetic tokens.

**90. Welcome Section Light-Mode Inversion & Typography Polish**

- **What:** Refactored `WelcomeSection.tsx` from a dark theme (`bg-primary`) to a light cream theme (`bg-background`). Inverted all internal text classes (`text-primary`, `text-secondary`) to ensure optimal contrast. Stripped excess vertical padding (`lg:py-40` down to `py-24 sm:py-32`) and scaled down the subtitle text from `text-3xl` to a refined `text-lg leading-relaxed`.
- **Why:** To standardize vertical spacing globally (matching ElectricSection) and provide necessary visual relief (light mode) immediately following the dark Hero section.

**91. Pillar Section Global CTA Integration**

- **What:** Injected a primary "Start Your Journey" CTA button (`Link`) directly below the main header in `PillarsSection.tsx`. Additionally, integrated a full-width CTA button inside the detailed Pillar popup modal. Added an `onClick` handler to the modal CTA that automatically closes the popup (`setSelectedIndex(null)`) before executing the route.
- **Why:** To capture high-intent users immediately after they interact with the core framework. The auto-closing modal logic ensures the smooth Lenis scroll to the `#cta` section isn't visually blocked by the overlay.

**92. Pillars Section UI Restructuring**
- **What:** Relocated the "Direct charge, Meditation, Dhyan" glassmorphic pill badge from the bottom of the orbit container directly into the main section header. Conversely, shifted the main "Start Your Journey" CTA button from the top header down to the bottom callout space beneath the 12-pillar orbital diagram.
- **Why:** To create a cleaner visual hierarchy. Establishing the core philosophy in the header frames the interactive orbit, while placing the CTA at the bottom ensures it acts as the final logical conversion step after the user has engaged with the framework.

**93. Global Typography Standardization**
- **What:** Executed a codebase-wide sweep to strictly enforce the landing page typography tokens. Replaced non-semantic `<h3>` eyebrows with stylized `<p>` tags, injected missing `font-heading` classes on `<h2>` elements in `WelcomeSection.tsx`, and locked in the `md:text-6xl font-semibold` standard across the board.
- **Why:** To ensure a flawlessly uniform visual rhythm as the user scrolls, cementing a highly premium, cohesive brand aesthetic.

**94. Core Pill Starburst Flare**
- **What:** Injected a cinematic CSS starburst flare behind the "Direct charge, Meditation, Dhyan" pill badge in `PillarsSection.tsx`. This utilizes multiple overlapping linear-gradient lines (`rotate-0`, `rotate-90`, `rotate-35`) and a deep blurred hotspot, mirroring the central orbit core's aesthetic.
- **Why:** To instantly draw the user's eye to the central philosophy of the framework while maintaining the energetic, cosmic visual theme.

**95. Pillars & Gut Reset Image Generation Update**
- **What:** Generated new custom imagery and updated component references:
  1. **PillarsSection**: Updated "Deep Detox" to a text-free side-by-side comparison of a toxic vs healthy cell. Updated "Artery Cleanse" to a side-by-side comparison of a clogged vs clean artery.
  2. **GutResetSection**: Replaced previous images with a dedicated, text-free 3D medical illustration of a glowing human digestive system, tailored specifically for desktop (left-aligned) and mobile (bottom-aligned) viewports.
- **Why:** To enhance visual communication in the scientific sections, providing clear, high-quality bespoke medical illustrations that follow the celestial wellness design system without conflicting text overlays.

**96. Legal Pages Padding Adjustment**
- **What:** Removed the extra top padding (`pt-32`) from the `<main>` container in `privacy/page.tsx`, `terms/page.tsx`, and `cookies/page.tsx`.
- **Why:** To correct spacing issues at the top of the legal pages, ensuring the content is flush and positioned correctly relative to the global navigation header.

**97. Hero Section Typography & Grammar Polish**
- **What:** Fixed an unescaped single quote in `Hero.tsx` that causes JSX compilation/linting errors (changed `"World's"` to `"The world&apos;s"`). Corrected grammatical flow by adding "The" at the beginning, normalizing the capitalization of "personalized health", and changing "decision" to the plural "decisions".
- **Why:** To prevent React build errors related to unescaped entities in JSX and to ensure the landing page hero copy reads naturally and professionally.

**98. Complete Overhaul of WhySection (The Blueprint & Approach)**
- **What:**
  1. Restructured `WhySection.tsx` into a strict sequence (Intro -> Blueprint Sticky Scroll -> Approach Bento Grid -> Resolution) to exactly match marketing copy.
  2. Extracted "Why HOL" into a dedicated, standard-sized section heading.
  3. Replaced the simple 4-column Approach stats grid with an asymmetrical 4x2 creative Bento Grid.
  4. Generated and integrated 4 unique cinematic abstract images (`bento-diabetic.png`, `bento-obese.png`, `bento-ed.png`, `bento-alcohol.png`) as dark frosted backgrounds for the Bento cards.
  5. Enforced strict `Design.md` `text-lg` and `text-5xl` typography clamping across the section to resolve arbitrary Tailwind classes.
- **Why:** To massively elevate the visual impact of the Blueprint and Crisis Stats sections, ensuring they feel like a premium, interactive presentation while strictly adhering to the celestial wellness design system.

**99. Philosophy Section Simplification**
- **What:** Commented out the "Massive Opening Statement" and "Asymmetric Editorial Grid" in `PhilosophySection.tsx`, retaining only the cinematic closing statement (the large parallax background image with the floating frosted glass card).
- **Why:** To streamline the section and focus the user's attention entirely on the core "movement" message, while preserving the unused layout code for potential future use.

**100. Why Section Resolution Editorial Redesign**
- **What:** Redesigned the Resolution card at the end of `WhySection.tsx` from a simple bulleted list into a massive, wide split-panel editorial layout. 
  - Generated and integrated a new custom image (`root-cause.png`) for the left panel.
  - Replaced bullet points with large, premium serif typography (`font-heading`) and gold accents for the right panel.
- **Why:** To make the culmination of the "Why HOL" section feel like a high-end magazine spread, maximizing visual impact and adhering to the premium celestial wellness aesthetic.

**101. Tailwind Canonical Classes & Parallax Polish**
- **What:** 
  1. Resolved all Tailwind CSS Intellisense lint warnings in `WhySection.tsx` by replacing arbitrary spacing and opacity values (e.g., `min-h-[200px]`, `text-white/[0.06]`) with their canonical equivalents (`min-h-50`, `text-white/6`).
  2. Removed an unused `y1` variable from `PhilosophySection.tsx`.
  3. Upgraded the static sticky background images in `WhySection.tsx` with a slow, upward parallax scrolling effect (`useTransform` from `10%` to `-10%`) so they glide in the same direction as the content scroll.
- **Why:** To ensure strict compliance with Tailwind CSS v4 standards and to provide a smooth, cinematic visual experience as the user scrolls through the tall sticky sections.

**102. Light Theme Migration for WhySection**
- **What:** Replaced the dark background (`bg-primary`) and white text (`text-white`) with the lighter theme (`bg-background` and `text-primary`) across the remaining sections of `WhySection.tsx` (Bento Grid and Resolution panel) to adhere strictly to the celestial wellness palette defined in `Design.md`.
- **Why:** To ensure uniform aesthetic continuity across the landing page, avoiding overly harsh dark sections unless explicitly intended for impact (like the Hero).

**103. Literal Photographic Upgrades (Bento Grid)**
- **What:** Generated and swapped in literal, high-end cinematic photographs for the Bento grid cards (`bento-diabetic-literal.png`, etc.) instead of the previous abstract images. Removed full-card cream opacity washes in favor of targeted dark CSS radial/linear gradients placed explicitly behind the text elements. Reverted card text to white (`text-white`) with strong drop shadows.
- **Why:** The user required clear, grounded imagery that literally conveyed the health crises (Diabetic, Obese, ED, Alcohol) while ensuring text legibility was not compromised by the photography.

**104. Blueprint Interactive Hover Gallery Redesign**
- **What:** Completely deleted the complex `400vh` sticky-scroll logic for "The Blueprint" section in `WhySection.tsx`. Replaced it with a high-performance horizontal hover accordion gallery. The cards sit on an 80vh container, flexing out on hover (`flex-1` to `flex-[1.5]`) and sliding descriptive text up smoothly using CSS grid transitions (`grid-rows-[0fr]` to `grid-rows-[1fr]`). 
- **Why:** To massively reduce the scroll burden of the page while maintaining an engaging, interactive presentation for the Blueprint tenets.

**105. Spacing and Mobile Viewport Standardization**
- **What:** Scaled down extreme padding values (`pt-24/32` to `pt-12`) above the Blueprint gallery to conform with `Design.md`'s strict maximum 48px spacing rule. On mobile screens, removed the fixed height container constraint and applied `aspect-square` to individual Blueprint cards.
- **Why:** To fix excessive dead space on desktop and ensure the expanding gallery stacks neatly into beautifully legible square cards on mobile devices.

**106. Resolution Image Update**
- **What:** Replaced the abstract golden roots image (`root-cause.png`) with a new, bespoke cinematic photograph (`resolution-joyful.png`) featuring a vibrant Indian woman at sunrise in nature.
- **Why:** To literally and joyfully represent the concept of "increasing your Lifeforce and Cellular Charge", bringing a relatable human element to the closing statement rather than a purely abstract scientific visual.

**107. Lifeforce Sequence Section Image and Styling Updates**
- **What:** Changed image in Card 3 to `young-man-raising-hands-sunset-sky-after-training.jpg`. Applied `saturate-[1.5]` and `contrast-125` to boost image color.
- **Why:** User requested a bright, wide natural landscape image.
- **What:** Added a large, faint, slowly rotating `logo.svg` to the background of Card 1.
- **Why:** User requested an active abstract element after removing the moving text.

**108. Inhibitors Section Image Updates**
- **What:** Updated images for all slides (Toxins, Stress, Sleep, Nutrition, Movement, Deficiency) to point to new user-provided images.
- **Why:** User provided specific images matching the eyebrow headings.

**109. Updated Symmetrical Logo Asset**
- **What:** Updated `public/logo.svg` to a balanced, square 1:1 aspect ratio (`1507x1507` viewBox) with updated path coordinates and refined petal fills (`#C7C3B8`, `#8FAE9C`, `#E9DDC7`, `#5A7161`).
- **Why:** To ensure the brandmark is perfectly symmetrical and scales cleanly without distortion across all navigational headers, rotating background watermarks, and mobile menus.

**110. Archive Folder Exclusion in TypeScript Config**
- **What:** Added `"old-site-comp"` and `"harmony-of-life"` to the `exclude` array in `tsconfig.json`.
- **Why:** To prevent archived/legacy component backups from being caught in Next.js production type checks, ensuring clean and deterministic builds.

**111. Created Why Harmony of Life Section (`WhyHolSection.tsx`)**
- **What:** Built a dedicated `WhyHolSection.tsx` matching the user's mockup featuring:
  - Top-left palm leaf (`topleft.png`) and bottom-left leaf (`bottomleftleaf.png`) decorative entrance overlays with custom offset coordinates (`-top-30`, `-bottom-50`, `w-50`).
  - Full-bleed ambient background image (`whybg.jpeg`) with yogic cellular charging visual.
  - Left column typography displaying "Why Harmony of Life ?".
  - 2x2 grid of 4 cards (Our Aim, Our Vision, Our Mission, Our Objective) using the glowing `cardbg.png` background, `bg-white/80` backdrop blend, rounded corners, and Framer Motion stagger animations.
  - Integrated dynamically into `src/app/page.tsx`.
- **Why:** To provide an ultra-clean, elegant, and faithful visual section communicating the organization's foundational pillars and vision.

**112. Hero & Why Section Typography Refinements**
- **What:** Refined `Hero.tsx` heading to cleanly split "Welcome to" (`font-text`) and "Harmony of Life" (`font-heading`). Updated stat callout numbers in `WhySection.tsx` from `font-heading` to `font-text` for clean numeric clarity.
- **Why:** To ensure crisp font hierarchy and stylistic consistency across all primary landing page sections.

**113. Added Organic Sway Motion to Decorative Leaves (`WhyHolSection.tsx`)**
- **What:** Integrated continuous, organic Framer Motion breeze animations to the top-left palm leaf and bottom-left foliage overlays:
  - Top-left palm leaf: Positioned at `-top-30 -left-10` with gentle rotational drift (`rotate: [0, 2.5, -1.5, 2, 0]`, `y: [0, -6, 2, -4, 0]`, `x: [0, 4, -2, 3, 0]`) anchored at `transformOrigin: "top left"` across an 8-second easing cycle.
  - Bottom-left green foliage: Positioned at `-bottom-50 -left-10` with counter-balancing organic breeze sway (`rotate: [0, -2, 1.5, -1.5, 0]`, `y: [0, 5, -2, 4, 0]`, `x: [0, -3, 2, -2, 0]`) anchored at `transformOrigin: "bottom left"` across a 9.5-second easing cycle.
  - Updated "Our Aim" copy to: *"to empower people with the science backed knowledge about their health so that they live young."*
**114. Hero Background Asset Update**
- **What:** Updated the hero background image in `Hero.tsx` to `herobannerflaire.jpeg` (`public/images/herobannerflaire.jpeg`) with static blur optimization and high fetch priority.
- **Why:** To integrate the warm, vibrant Indian community vitality visual with golden sunlight flares as the main hero banner.

**116. Hero Scroll Indicator Integration**
- **What:** Replaced the primary CTA button in `Hero.tsx` with a centered, minimalist animated scroll indicator mouse pill (`border-2 border-white/90 rounded-full`) featuring a smooth looping inner dot animation and linking smoothly to `#why-hol`.
- **Why:** To match the user's design wireframe and provide an elegant, non-intrusive cue prompting users to scroll into the journey.

**117. Added Hero Header Top Beige Gradient**
- **What:** Injected a soft, top-down beige gradient (`bg-gradient-to-b from-background via-background/60 to-transparent h-48 sm:h-56 lg:h-64`) at the top of `Hero.tsx`.
- **Why:** To provide an ultra-clean, branded background backdrop behind the sticky global Navbar, maximizing legibility for navigation links and logo while smoothly blending into the sunny nature background image.

**118. Created Dedicated IssuesSection (`IssuesSection.tsx`)**
- **What:** Built a standalone component `IssuesSection.tsx` utilizing `issuesbg.jpeg` (4-quadrant photo montage covering Diabetes, Obesity, ED, and Alcohol).
  - Designed a centered, frosted glassmorphic card with automated 4-second looping cycling text (`AnimatePresence`) transitioning through the 4 health crises.
  - Added interactive pagination dots, hover-pause behavior, and left/right chevron navigation.
  - Streamlined `WhySection.tsx` to cleanly focus on "The Resolution" (Root cause reversal).
  - Integrated `IssuesSection` into `src/app/page.tsx`.
- **Why:** To translate the crisis stats into a high-impact, focused interactive carousel directly matching the dedicated background collage.

**119. IssuesSection Pure Text Cycling Refinement**
- **What:** Removed the frosted glass card container, borders, shadows, pagination dots, and navigation arrow buttons in `IssuesSection.tsx`.
- **Why:** To let the large typography cycle seamlessly directly on the open center area of the `issuesbg.jpeg` background montage without any UI container artifacts.

**120. WhyHolSection Bottom Gradient Merge**
- **What:** Added a soft bottom-up beige gradient (`bg-gradient-to-t from-background via-background/60 to-transparent h-36 sm:h-48 lg:h-64`) at the base of `WhyHolSection.tsx` and enhanced the top gradient in `IssuesSection.tsx`.
- **Why:** To eliminate the abrupt hard image edge and create a smooth, organic visual blend merging the two sections together.

**121. Merged The Resolution & 12 Pillars Framework (`PillarsSection.tsx`)**
- **What:** Merged the content from `WhySection.tsx` ("The Resolution - Addressing the root cause of the root cause" with `resolution-joyful.png` and "Direct charge, Meditation, Dhyan" glowing badge) directly into `PillarsSection.tsx` as Part 1, followed immediately by the 12 Foundational Pillars Solar Orbital System as Part 2.
  - Formatted both sections into a unified deep sacred forest green (`bg-primary` / `#142b23`) with glowing gold accents (`#b69c5f`) and celestial ambient watermarks.
  - Removed duplicate `<WhySection />` import from `src/app/page.tsx`.
- **Why:** To create a cohesive, uninterrupted narrative flow from root-cause thesis into the 12-pillar operational protocol with a unified aesthetic.

**122. Landing Page Section Sequence Flow Optimization (`page.tsx`)**
- **What:** Positioned `<PillarsSection />` directly following `<IssuesSection />` in `src/app/page.tsx` (`Hero` -> `WhyHolSection` -> `IssuesSection` -> `PillarsSection` -> `PhilosophySection` -> `LifeforceSequenceSection` ...).
- **Why:** To provide an immediate resolution and operational framework directly after presenting the lifestyle crisis statistics.

**123. Installed Taste-Skill Suite (`.agents/skills`)**
- **What:** Installed the full `Leonxlnx/taste-skill` v2 bundle into `.agents/skills/`, including `design-taste-frontend` (v2 core), `design-taste-frontend-v1`, `minimalist-ui`, `industrial-brutalist-ui`, `high-end-visual-design`, `redesign-existing-projects`, `brandkit`, `stitch-design-taste`, `gpt-taste`, `image-to-code`, `imagegen-frontend-web`, `imagegen-frontend-mobile`, and `full-output-enforcement`.
- **Why:** To equip the agent with the anti-slop frontend design taste protocol for intelligent brief inference, custom aesthetic selection, and production-grade UI design.

**124. Redesigned Hero & Navbar (`Hero.tsx` & `Navbar.tsx`)**
- **What:** Applied the `redesign-existing-projects` anti-slop audit to upgrade the global Navbar and Hero components:
  - **`Navbar.tsx`:** Replaced generic green buttons with deep forest green base (`bg-primary`) and gold accent borders (`border-accent/40`); added true glassmorphism (`backdrop-blur-xl bg-background/90 border-b border-primary/10`), animated chevron in Explore dropdown, smooth navigation link hover states, and unified mobile drawer styling.
  - **`Hero.tsx`:** Upgraded to modern `h-[100dvh]` to eliminate mobile Safari layout jumping; added an ethereal eyebrow badge ("Cellular Health & Longevity Sanctuary"), editorial display typography with `text-balance`, layered radial lighting/spotlight for high-contrast readability, and dual luxury CTA buttons ("Explore Journey" + "Discover Lifeforce").
- **Why:** To eliminate AI design slop and generic UI patterns, elevating the first visual fold into a breathtaking, cohesive Celestial Wellness luxury aesthetic.

**125. Design System Overhaul via Reference Image (`Design.md`)**
- **What:** Completely overhauled `Design.md` to reflect the provided hero reference design:
  - **Typography:** Codified the signature dual-tone lockup — Cormorant Garamond semi-bold primary heading (`"Harmony of Life,"`) paired with medium italic golden accent (`"The Science of Living Young."`), accompanied by tracked all-caps sans-serif eyebrow (`"INDIA'S FIRST PERSONALISED HEALTH & WELLNESS COMMUNITY"`) and relaxed narrative body copy.
  - **Color Tokens:** Calibrated the palette to feature radiant amber-gold (`#b78736`), celestial glow (`#ffd875`), deep pine forest (`#142b23`), muted sage (`#607860`), and grounding warm cream (`#e9e0cf`).
  - **Button Geometry:** Introduced the full-pill shape (`rounded-full` / `9999px`) for primary solid amber-gold CTAs and frosted outlined secondary buttons.
  - **Interactive Graphic Language:** Added detailed specifications for bio-electric constellation overlays and technical annotation callouts (`Increase Lifeforce`, `Improve Healthspan`, `Cellular Vitality`, `Personalised Wellness`, `Science Backed Solutions`).
- **Why:** To anchor the project's source of design truth to the new visual direction, guaranteeing strict design consistency across future section implementations.

**126. Hero Redesign & Generative Celestial Vitality Asset Integration (`Hero.tsx`)**
- **What:** Completely redesigned `Hero.tsx` to match the user's reference mockup:
  - **Generative Background Asset:** Generated a photorealistic widescreen Himalayan sunrise visual (`hero-vitality-banner.jpg`) featuring a serene woman in profile with glowing golden bio-electric constellation nodes, neural light rings, and expansive misty green mountain vistas.
  - **Left Editorial Layout:** Implemented the dual-tone Cormorant Garamond title (`"Harmony of Life,"` + `"The Science of Living Young."`), amber-gold accent divider bar, tracked uppercase mission eyebrow (`"INDIA'S FIRST PERSONALISED HEALTH & WELLNESS COMMUNITY"`), and fluid body narrative.
  - **Pill Button Cluster:** Implemented solid warm amber-gold `"Join the Community"` and frosted glassmorphic `"Discover More"` pill buttons with smooth hover physics.
  - **Interactive Bio-Electric Annotations:** Engineered 5 floating technical callouts with animated glowing nodes and connecting indicator lines anchored around the figure (`Increase Lifeforce`, `Improve Healthspan`, `Cellular Vitality`, `Personalised Wellness`, `Science Backed Solutions`), gracefully adapting to responsive pill badges on mobile.
- **Why:** To bring the landing page hero into 100% visual fidelity with the approved creative direction.

**127. Subtle Shining Shimmer Effects on Pill Elements (`Hero.tsx`)**
- **What:** Injected smooth, GPU-accelerated angled light sheen animations (`bg-linear-to-r skew-x-12`) across the primary solid gold CTA, secondary frosted outline button, desktop annotation callouts, and mobile tag badges.
- **Why:** To give all interactive pill controls an ethereal, living vitality glow matching the celestial wellness aesthetic without creating visual clutter.

**128. Elevated Navbar Dropdown Experience (`Navbar.tsx`)**
- **What:** Upgraded the "Explore" dropdown menu from plain text to a rich, luxury-tier card:
  - **Contextual Lucide Icons:** Added dedicated icons (`Zap`, `Sun`, `Leaf`, `UserCheck`, `Users`, `Quote`, `Send`) housed in glowing rounded-xl badge containers.
  - **Subtitles & Descriptions:** Added concise, informative one-line value descriptions beneath each section title (e.g. *"Addressing cellular discharge"*, *"Longevity & cellular framework"*, *"Microbiome charging protocols"*).
  - **Refined Aesthetics:** Added an "EXPLORE SANCTUARY" header with pulsing sparkle accent, glassmorphic backdrop blur, smooth arrow hover transitions, and synchronized mobile drawer navigation.
- **Why:** To create an engaging, intuitive, and high-converting exploration menu for site visitors.

**129. Created Value Proposition Trust Banner (`ValuePropsBanner.tsx`)**
- **What:** Built a dedicated 5-pillar trust/value proposition banner directly below the Hero section:
  - **5 Core Pillars:** *Science Backed*, *Personalised*, *Holistic Approach*, *Community Driven*, and *Sustainable Results*.
  - **Visual Treatment:** Circular amber-gold line-art icon badges (`Atom`, `User`, `Leaf`, `Users`, `ShieldCheck`), uppercase tracked headings, concise subheadings, delicate desktop vertical hairlines, and smooth Framer Motion stagger entrance.
  - **Page Integration:** Dynamically imported and injected into `src/app/page.tsx` right beneath `<Hero />`.
- **Why:** To bridge the Hero section and core narrative with strong, instant trust markers matching the reference design.

**130. Refactored Value Props into 4-Item Infinite Marquee (`ValuePropsBanner.tsx`)**
- **What:** Refactored the banner to display the 4 core pillars (*Science Backed*, *Personalised*, *Holistic Approach*, *Community Driven*) operating as a continuous, buttery-smooth infinite marquee.
  - **Smooth Infinite Loop:** Quad-duplicated track looping seamlessly at a relaxed, legible 55s tempo with zero visible seams or jumps.
  - **Edge Masking & Interactions:** Dual gradient side fades and instant hover-pause interaction (`hover:[animation-play-state:paused]`).
- **Why:** To keep the section dynamic, clean, and interactive while maintaining a relaxed reading rhythm.






