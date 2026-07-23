# Harmony of Life - Landing Page Architecture & Instructions

> [!IMPORTANT]
> **CRITICAL RULE:** You MUST read `Design.md` before taking any actions or writing any code. It contains the strict design system, color palette, typography scale, and layout guidelines that govern this entire project.

## 1. Global Tech Stack & Performance Architecture

- **Framework:** Next.js (App Router, TypeScript).
- **Styling:** Tailwind CSS + Shadcn UI.
- **Aesthetic:** Clean, minimalist glassmorphism matching the 4-color palette in `Design.md`.
- **Scroll Management:** Lenis for smooth scrolling (wrap the layout in a Lenis provider).
- **Framer Motion:** Primary library for all UI animations, micro-interactions, hover states, and standard scroll-reveals.
- **GSAP (ScrollTrigger):** Reserved strictly for complex timeline sequencing, horizontal scroll sections, and advanced pinning.
- **React Three Fiber (R3F) / WebGL:** Used for heavy 3D elements (e.g., biological visualizations) to offload rendering to the GPU.
- **Performance Mandate:** Any section utilizing R3F or heavy GSAP timelines MUST be dynamically imported (`next/dynamic`).

## 2. Global UI Elements

- **Floating Navbar:** Minimalist navigation adhering to the typography scale in `Design.md`.
- **Interactive Footer:** Clean footer housing social links, community access, and contact details.

## 3. Landing Page Structure (Based on Content Outline)

### Section 1: Welcome to Harmony of Life (Hero)
- **Content:** "Live Young. Increase Your Cellular Charge. Elevate Your Lifeforce." True health starts at the cellular level.
- **Mechanics:** High-impact typography (`text-5xl`), elegant fade-ins and staggered text using Framer Motion. 

### Section 2: Why Harmony of Life Exists
- **Content:** Healthspan vs Lifespan. The concept of "Living Young" by increasing cellular charge internally and externally (Meditation/Dhyan).
- **Mechanics:** Clean grid layout, possibly using split text reveals on scroll.

### Section 3: Cellular Charge (The Graph)
- **Content:** "You are Electric". Explaining cellular voltage and the 3.5 Trillion Volts of Pranik Shakti.
- **Mechanics (GSAP/Framer Motion):** An interactive data visualization or animated line graph showing the decline of Lifeforce and Cellular Charge over age. The graph must animate its drawing path as the user scrolls into view.

### Section 4: What Reduces Lifeforce? (The Transformation)
- **Content:** Modern lifestyle exposures, cellular inhibitors. "Cell with Toxins" vs "Detoxed Cell".
- **Mechanics (GSAP Sticky Scroll):** 50/50 split-screen layout. Pinned visual on the left (e.g., a 3D cell visualization). As the user scrolls the text on the right, the pinned visual transitions from a dark/toxic state to a glowing/detoxed state.

### Section 5: The 12 Foundational Pillars
- **Content:** Balance Nutrition, Deep Detox, Artery Cleanse, Alkaline Chemistry, Cellular Vitality, Gut Reset, Inflammation, Deep Sleep, Exercise/Yoga, Immunity, Social Connect, Nature Connect. Plus Meditation/Dhyan.
- **Mechanics (R3F + GSAP):** Highly interactive horizontal scroll section or a 3D rotating column (like a spine). Hovering over a pillar pauses movement and triggers a Framer Motion glassmorphic modal revealing details.

### Section 6: Meet Dr. Rastogi
- **Content:** Introduction and professional background.
- **Mechanics:** Elegant portrait integration with a soft glow or glassmorphic bio card.

### Section 7: Harmony Community & Living Young
- **Content:** WhatsApp Support, Nutritionists, Events, Testimonials, and Program Specifics.
- **Mechanics:** A masonry grid of testimonials and program features with floating hover effects.

### Section 8: Call to Action (CTA)
- **Content:** Final conversion step to join the community.
- **Mechanics:** Immersive glassmorphic focal point with a large, glowing button pointing to the offline/WhatsApp community channel.
