# Harmony of Life - Landing Page Architecture & Instructions

## 1. Global Tech Stack & Performance Architecture

- **Framework:** Next.js (App Router, TypeScript).

- **Styling:** Tailwind CSS + Shadcn UI.

- **Aesthetic:** Extreme glassmorphism (`backdrop-blur-md`, `bg-white/5`, `border-white/10`).

- **Scroll Management:** Lenis for smooth scrolling (wrap the layout in a Lenis provider).

- **GSAP (ScrollTrigger):** Used strictly for DOM-based pinning, horizontal scrolls, and text swapping.

- **Framer Motion:** Used for micro-interactions (hover states, 3D card tilts, modal popovers).

- **React Three Fiber (R3F) / WebGL:** Used exclusively for the heavy 3D particle dissolves and the Astral Chakra system to offload rendering to the GPU and protect the main thread.

- **Performance Mandate:** Any section utilizing R3F or heavy GSAP timelines MUST be dynamically imported (`next/dynamic`) to prevent blocking the initial page load.

## 2. Global UI Elements

- **Floating Navbar:** Tab-sliding pill mechanism for active states.

- **Audio Controller:** Fixed bottom-right or top-right. An active dot-matrix visualizer representing simulated audio levels. Toggles a soothing ambient audio track.

- **Interactive Dock Footer:** Mac-OS style floating dock housing minimalist SVG icons for social links and WhatsApp CTA.

## 3. Section-by-Section Build Instructions

### Section 1: The Hero (Biological Dissolve)

- **Layout:** 100vh, pure black background.

- **Typography:** Large gradient text ("What if Detox isn't about weight... but about your LifeForce?").

- **Mechanics (R3F):** Render a 3D human silhouette. As the user scrolls, trigger a WebGL noise shader that organically dissolves the "toxic" outer shell into golden particles, revealing a glowing, pure cellular energy core. Do not attempt this with DOM clipping masks.

### Section 2: Authority & Core Philosophy (Text Swap)

- **Layout:** Pinned section (GSAP ScrollTrigger).

- **Mechanics:** Freeze the background. As the user scrolls, swap Dr. Ashutosh Rastogi's quote sequentially using opacity and Y-axis translates: 1. "Presence of Lifeforce is Life." 2. "Absence of Lifeforce is Death." 3. "Blockages in Lifeforce cause Disease."

- **Bottom Anchor:** A horizontal flex row of 4 glassmorphic pill badges (ATP, Mitochondria, Magnesium, Zinc).

### Section 3: The Root Cause (Scattered to Ordered)

- **Concept:** "1970 vs 2025" and "When Toxins Build Up".

- **Mechanics (GSAP):** On initial mount, render glass cards (diet, stress, soil depletion images) scattered chaotically across the screen at random rotations.

- **Scroll Action:** As the user hits the trigger point, GSAP dramatically vacuums the scattered cards out of the viewport or organizes them instantly into a clean, rigid grid.

### Section 4: The 12 Pillars (Astral Chakra System)

- **Concept:** The Science & Art of Living Young.

- **Layout:** Full-height section.

- **Mechanics (R3F + GSAP):** Render an X-ray biological column (spine/torso). Map the 12 pillars as orbiting nodes aligned to the Y-axis (acting as chakras).

- **Scroll Action:** Tie the camera pan to the scroll position so the user travels vertically down the spine. Hovering an orbiting node pauses the rotation and triggers a Framer Motion glassmorphic modal revealing the pillar's text (e.g., Gut Reset, Deep Sleep).

### Section 5: The Transformation (Sticky Reveal)

- **Layout:** 50/50 split screen (Sticky Scroll).

- **Left Column (Pinned):** "The Breakfast Gap". High-res 3D plate graphic (red warning accents).

- **Right Column (Scrolling):** Scrolls through the biological fixes (Deep Detox, Artery Cleanse, Gut Reset).
- **Mechanics (Anime.js / GSAP):** As the right column scrolls, trigger targeted particle bursts or color shifts on the pinned graphic on the left, transforming it from the "Gap" state to a glowing green harmonious state.

### Section 6: The Community Intake (CTA)

- **Layout:** Full-width immersive glassmorphic focal point.
- **Mechanics (Framer Motion):** Center-aligned glassmorphic lead-gen UI utilizing hover state floating effects.
- **CTA Box:** A large, glowing WhatsApp integration button pointing to the offline community onboarding channel.
