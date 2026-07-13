---
name: Celestial Wellness
colors:
  surface: "#EAE0D1"
  surface-dim: "#DCD1BF"
  surface-bright: "#F5EFE6"
  surface-container-lowest: "#FFFFFF"
  surface-container-low: "#F1EBE0"
  surface-container: "#EAE0D1"
  surface-container-high: "#DCD1BF"
  surface-container-highest: "#CDBC9F"
  on-surface: "#101D18"
  on-surface-variant: "#344B43"
  inverse-surface: "#101D18"
  inverse-on-surface: "#EAE0D1"
  outline: "#6B7D6A"
  outline-variant: "#8BA58B"
  surface-tint: "#6B7D6A"
  primary: "#6B7D6A"
  on-primary: "#101D18"
  primary-container: "#2B443C"
  on-primary-container: "#F5EFE6"
  inverse-primary: "#6B7D6A"
  secondary: "#B5995E"
  on-secondary: "#101D18"
  secondary-container: "#DBC184"
  on-secondary-container: "#4A3B18"
  tertiary: "#EAE0D1"
  on-tertiary: "#101D18"
  tertiary-container: "#8BA58B"
  on-tertiary-container: "#101D18"
  error: "#ffb4ab"
  on-error: "#690005"
  error-container: "#93000a"
  on-error-container: "#ffdad6"
  primary-fixed: "#6B7D6A"
  primary-fixed-dim: "#2B443C"
  on-primary-fixed: "#101D18"
  on-primary-fixed-variant: "#DCD1BF"
  secondary-fixed: "#B5995E"
  secondary-fixed-dim: "#DBC184"
  on-secondary-fixed: "#101D18"
  on-secondary-fixed-variant: "#4A3B18"
  tertiary-fixed: "#EAE0D1"
  tertiary-fixed-dim: "#8BA58B"
  on-tertiary-fixed: "#101D18"
  on-tertiary-fixed-variant: "#101D18"
  background: "#EAE0D1"
  on-background: "#101D18"
  surface-variant: "#DCD1BF"
typography:
  display:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: -0.02em
  heading:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: "600"
    lineHeight: "1.2"
  body:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.6"
  caption:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "500"
    lineHeight: "1.4"
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max: 1280px
---

## Brand & Style

This design system centers on a "Celestial Wellness" identity—a sanctuary for digital rejuvenation that balances the mystical with the organic. The aesthetic is rooted in **Minimalism** with **Glassmorphism** accents, prioritizing vast negative space and a sense of "digital breathing room."

The target audience seeks tranquility, premium health insights, and spiritual alignment. The UI should evoke a sense of calm authority, mystery, and grounding. Visuals are ethereal yet structured, using soft light play and natural botanical tones to create a high-end, meditative atmosphere.

## Colors

The palette transitions to an organic, earth-toned "Light Mode" inspired by a sunlit sanctuary, heavily utilizing the primary brand logo colors.

- **Background (Light Cream - `#EAE0D1`):** The base surface color. It provides a soft, warm foundation for the entire site.
- **Foreground (Neutral - `#101D18`):** Used for primary text, active states, and full-bleed dark sections to create stark, beautiful contrast.
- **Primary (Sage Green - `#6B7D6A`):** Used for soft primary accents and structural elements.
- **Secondary (Warm Gold - `#B5995E`):** Reserved for highlights, celestial accents, buttons, and high-importance interactive elements.
- **Tertiary (Cream - `#EAE0D1`):** Maps to the background for seamless blending or low-contrast containers.

Color mapping follows a hierarchical "Surface-Container" model where the light cream forms the base, and neutral dark green is used for text and distinct section blocks.

## Typography

The design system utilizes **Bricolage Grotesque** for expressive, impactful headings and **Inter** for clean, highly-legible body paragraphs.

- **Display (48px / `text-5xl`):** Bricolage Grotesque brings a quirky, sophisticated character. Used for hero text and major section titles.
- **Heading (32px / `text-4xl`):** Bricolage Grotesque. Used for standard section headings and emphasized block text.
- **Body (18px / `text-lg`):** Inter provides maximum legibility for paragraphs. The default size for all paragraph content and card descriptions.
- **Caption (14px / `text-sm`):** Inter. Used for metadata, small labels, uppercase kickers, and utility text.

Text should primarily be rendered in the Neutral (`#101D18`) color to maintain a sharp, high-contrast relationship with the light cream surfaces.

## Layout & Spacing

The layout philosophy uses a strict **8px Grid** to create a mathematical, rhythmic sanctuary feel.

- **Grid System:** A base unit of 8px governs all spacing, margins, padding, and gaps.
- **Allowed Spacing Steps:** 
  - `xs`: 8px (Tailwind `2`)
  - `sm`: 16px (Tailwind `4`)
  - `md`: 24px (Tailwind `6`)
  - `lg`: 32px (Tailwind `8`)
  - `xl`: 48px (Tailwind `12`)
- **Components:** Card paddings default to 24px. Buttons are exactly 48px tall (`h-12`) with 8px (`gap-2`) internal spacing. Gaps between related title/description blocks should be 16px.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and **Tonal Layers** rather than heavy shadows.

- **Surface Layers:** The background is the warm Light Cream. Elevated containers use a slightly darker version of cream or a semi-transparent Deep Forest with a `20px` backdrop blur.
- **Glows:** Subtle, large-radius ambient glows in Gold or Sage are used behind key cards.
- **Outlines:** Instead of heavy shadows, use 1px "ghost borders" (low-opacity Deep Forest) to define component edges on light backgrounds.

## Shapes

The shape language is **Rounded**, reflecting organic forms found in nature (leaves, stones).

- Base components (Buttons, Inputs) use a `0.5rem` radius.
- Large containers and cards use `rounded-xl` (`1.5rem`) to soften the interface and make it feel more approachable and "human."
- Decorative elements may use asymmetrical rounding to mimic the leaf-like petals seen in the brand mark.

## Components

- **Buttons:** Primary buttons use Sage Green with Neutral text, or Gold for high-emphasis actions.
- **Cards:** Use a semi-transparent dark base on light backgrounds for stark contrast, or a slightly darker cream with a `1px` stroke. Backdrop blur is applied to cards overlaying imagery.
- **Input Fields:** Bottom-border only or fully enclosed with `rounded-md`. The focus state triggers a soft Gold glow and an increase in border opacity.
- **Chips/Labels:** Small, pill-shaped elements for a subtle, sophisticated tag system.
- **Interactive States:** Hovering over elements should produce a gentle "shimmer" or a slight increase in the intensity of the Gold accent colors.

## Smart Text & Glassmorphism Navigation

- **Glassmorphism Layers:** Floating global UI elements (Navbar, Footer, AudioController) must use a split-layer React Fragment architecture.
- **Background Layer:** A fixed z-40 container providing the frosted glass (`backdrop-blur-3xl bg-primary/10 border border-primary/20 rounded-full shadow-2xl`). This uses the primary Deep Forest tint so it is beautifully visible against the light cream background.
- **Content Layer:** A sibling fixed z-50 container utilizing `mix-blend-difference text-white`.
- **Smart Blending Principle:** The `mix-blend-difference` layer must NOT be nested inside the glass stacking context. It must remain a direct sibling fixed to the root to properly invert against the page background.
