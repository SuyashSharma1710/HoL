---
name: Celestial Wellness
colors:
  primary: "#142b23"
  secondary: "#607860"
  accent: "#b69c5f"
  background: "#e9e0cf"
typography:
  display:
    fontFamily: Cormorant Garamond
    fontSize: clamp(32px, 5vw, 48px)
    fontWeight: "600"
  heading:
    fontFamily: Cormorant Garamond
    fontSize: clamp(24px, 4vw, 32px)
    fontWeight: "500"
  body:
    fontFamily: Inter
    fontSize: clamp(16px, 2vw, 18px)
    fontWeight: "400"
  caption:
    fontFamily: Inter
    fontSize: clamp(12px, 1.5vw, 14px)
    fontWeight: "500"
rounded:
  sm: 8px
  lg: 16px
spacing:
  8: 8px
  16: 16px
  24: 24px
  32: 32px
  48: 48px
---

## Brand & Style

This design system centers on a "Celestial Wellness" identity—a sanctuary for digital rejuvenation that balances the mystical with the organic. The aesthetic is rooted in **Minimalism** with **Glassmorphism** accents, prioritizing vast negative space and a sense of "digital breathing room."

The target audience seeks tranquility, premium health insights, and spiritual alignment. The UI should evoke a sense of calm authority, mystery, and grounding. Visuals are ethereal yet structured, using soft light play and natural botanical tones to create a high-end, meditative atmosphere.

## Colors

The palette is exceptionally focused and minimal, relying on 4 major colors (and their accent shades) to prevent visual clutter and maintain a serene, high-end feel:

- **Background (`#e9e0cf`):** A warm, soft cream. The base surface color that provides a grounding foundation for the entire site.
- **Primary (`#142b23`):** A deep, dark green. Used for primary text, active states, and full-bleed dark sections to create stark, beautiful contrast.
- **Secondary (`#607860`):** A muted sage green. Used for soft primary accents, borders, and structural elements.
- **Accent (`#b69c5f`):** A warm gold. Reserved for highlights, celestial accents, buttons, and high-importance interactive elements.

## Typography

The typography system is streamlined to just two fonts and four responsive sizes, utilizing `clamp()` for fluid scaling across devices.

- **Display (`clamp(32px, 5vw, 48px)`):** Cormorant Garamond (600 weight). Used for hero text and major section titles. Brings a sophisticated, timeless character.
- **Heading (`clamp(24px, 4vw, 32px)`):** Cormorant Garamond (500 weight). Used for standard section headings and emphasized block text.
- **Body (`clamp(16px, 2vw, 18px)`):** Inter (400 weight). Provides maximum legibility for paragraphs. Default size for all paragraph content.
- **Caption (`clamp(12px, 1.5vw, 14px)`):** Inter (500 weight). Used for metadata, small labels, and utility text.

## Layout & Spacing

The layout philosophy uses a strict **8px Grid** to create a mathematical, rhythmic sanctuary feel. 

- **Grid System:** A base unit of 8px governs all spacing, margins, padding, and gaps.
- **Allowed Spacing Steps:** 
  - `8px`
  - `16px`
  - `24px`
  - `32px`
  - `48px`

## Shapes & Borders

The shape language is simple and structured, utilizing only two border radius values to maintain consistency:

- **8px:** Used for smaller components like buttons, chips, and inputs.
- **16px:** Used for larger containers, cards, and prominent layout elements.

## Components & Effects

- **Glassmorphism Layers:** Floating global UI elements use a frosted glass effect with the primary or background colors.
- **Buttons:** Primary buttons use Dark Green or Accent Gold.
- **Cards:** Use appropriate spacing and 16px border radius to soften the interface.
