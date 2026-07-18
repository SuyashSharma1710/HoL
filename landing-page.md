# Blueprint: Harmony of Life Landing Page

## Architecture Overview

- **Core Stack:** Next.js (App Router), TypeScript, Tailwind CSS.

- **UI Architecture:** Shadcn UI, extreme glassmorphism (`backdrop-blur-md`).

- **Animation Engine:** GSAP (ScrollTrigger), Framer Motion (interactions), React Three Fiber (WebGL rendering).

## Section 1: The Hero (Biological Dissolve)

| Attribute  | Specification                                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Design** | 100vh full-screen. Pure black background. Central glowing 3D human silhouette. 3 floating glassmorphic cards overlapping the model. |

|
| **Tech/Libs** | React Three Fiber (R3F), WebGL custom noise shader.

|
| **Mechanics** | Scroll-triggered organic dissolve of the "toxic" outer mesh into golden particles to reveal a pure cellular energy core.

|
| **Primary Text** | "What if Detox isn't about weight... but about your LifeForce?"

|
| **Subtext** | "Your energy, healing & longevity start at the cellular level."

|
| **Card Text** | "Deep Detox" | "Higher Cellular Charge" | "Less Toxicity"

|

## Section 2: The Problem (Signal Slider)

| Attribute  | Specification                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------ |
| **Design** | Two-column grid. Left: Stack of minimalist floating cards. Right: Large interactive cell visual. |

|
| **Tech/Libs** | GSAP, Radix UI (Slider primitive), Framer Motion.

|
| **Mechanics** | Image comparison slider allowing the user to wipe away the "Toxic, Clogged" cell to reveal the "Clean, Optimal" cell. Left cards illuminate on scroll.

|
| **Primary Text** | "You don't feel tired by accident."

|
| **Card Text** | "Low energy" | "Brain fog" | "Bloating" | "Mood swings"

|
| **Subtext** | "These are not random. They are signals. When toxins build up, your body becomes inefficient."

|

## Section 3: Authority & Core Philosophy (Text Swap)

| Attribute  | Specification                                                                             |
| ---------- | ----------------------------------------------------------------------------------------- |
| **Design** | Pinned minimalist typography section. Horizontal flex row of 4 pill badges at the bottom. |

|
| **Tech/Libs** | GSAP ScrollTrigger.

|
| **Mechanics** | Background freezes. Text swaps sequentially using opacity and Y-axis translates based on scroll depth.

|
| **Scroll 1 Text** | "Presence of Lifeforce is Life."

|
| **Scroll 2 Text** | "Absence of Lifeforce is Death."

|
| **Scroll 3 Text** | "Blockages in Lifeforce cause Disease."

|
| **Attribution** | "- Dr. Ashutosh Rastogi"

|
| **Badge Text** | "ATP" | "Mitochondria" | "Magnesium" | "Zinc"

|

## Section 4: The 12 Pillars (Astral Chakra)

| Attribute  | Specification                                                                         |
| ---------- | ------------------------------------------------------------------------------------- |
| **Design** | Full-height X-ray biological column (spine). 12 orbiting nodes aligned to the Y-axis. |

|
| **Tech/Libs** | React Three Fiber (3D mapping), Framer Motion (Modals).

|
| **Mechanics** | Camera pans vertically down the spine on scroll. Hovering a node pauses rotation and opens a glassmorphic modal with text.

|
| **Primary Text** | "The Science & Art of Living Young. Foundational Pillars of Optimal Health."

|
| **Pillar 1** | "Gut Reset: Gut health influences immunity, energy, and mood."

|
| **Pillar 2** | "Deep Sleep: Deep sleep is when repair begins."

|
| **Pillar 3** | "Immunity: Strong immunity begins at the cellular level."

|
| **Pillar 4** | "Artery Cleanse: Healthy circulation supports oxygen and nutrient delivery."

|
| **Remaining Pillars** | (Map remaining titles: Regular Exercise and Yoga, Nature Connect, Social Connect, Balanced Nutrition, Deep Detox, Alkaline Chemistry, Cellular Vitality, Direct Charge).

|

## Section 5: The Transformation (Sticky Reveal)

| Attribute  | Specification                                                                    |
| ---------- | -------------------------------------------------------------------------------- |
| **Design** | 50/50 split screen. Left side pinned graphic. Right side scrolling text content. |

|
| **Tech/Libs** | GSAP ScrollTrigger, Anime.js (particle triggers).

|
| **Mechanics** | Scrolling the right column triggers visual state changes on the pinned left graphic (from red warning plate to glowing green harmonious state). |
| **Left Text** | "The Breakfast Gap in India. High in Calories, Low in Nutrients."

|
| **Right Text** | "Start small. Stay consistent. Transform from within." |
| **Floating Tags** | "Deep Detox" | "Artery Cleanse" | "Gut Reset" |

## Section 6: The Community Intake (CTA)

| Attribute  | Specification                                                                    |
| ---------- | -------------------------------------------------------------------------------- |
| **Design** | Full-width immersive glassmorphic focal point. Floating macOS-style dock footer. |

|
| **Tech/Libs** | Framer Motion (interactions), Shadcn UI.

|
| **Mechanics** | Entire viewport focuses on the community intake with a central glowing WhatsApp action. |
| **Primary Text** | "Start Detoxing at the Root. Not just symptoms... but your cells."

|
| **CTA Text** | "Join Harmony of Life to know how to increase lifeforce." |
| **Button Text** | "Connect on WhatsApp" |
| **Contact Text** | "Call or Whatsapp 8800828863"

|
