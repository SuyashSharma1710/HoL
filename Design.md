---
name: Celestial Wellness
colors:
  primary: "#142b23"
  secondary: "#607860"
  accent: "#b78736"
  background: "#e9e0cf"
  glow: "#ffd875"
typography:
  display:
    fontFamily: Cormorant Garamond
    fontSize: clamp(36px, 5.5vw, 64px)
    fontWeight: "600"
  displayItalic:
    fontFamily: Cormorant Garamond
    fontSize: clamp(32px, 5vw, 56px)
    fontWeight: "500"
    fontStyle: italic
  eyebrow:
    fontFamily: Inter
    fontSize: clamp(11px, 1.2vw, 13px)
    fontWeight: "600"
    letterSpacing: "0.2em"
    textTransform: uppercase
  heading:
    fontFamily: Cormorant Garamond
    fontSize: clamp(24px, 4vw, 36px)
    fontWeight: "500"
  body:
    fontFamily: Inter
    fontSize: clamp(15px, 1.8vw, 18px)
    fontWeight: "400"
    lineHeight: "1.7"
  annotation:
    fontFamily: Inter
    fontSize: clamp(12px, 1.4vw, 14px)
    fontWeight: "500"
rounded:
  sm: 8px
  lg: 16px
  full: 9999px
spacing:
  8: 8px
  16: 16px
  24: 24px
  32: 32px
  48: 48px
  64: 64px
containers:
  heroMax: 1440px # max-w-360
  standard: 1280px # max-w-7xl
  focus: 1024px # max-w-5xl
  narrow: 896px # max-w-4xl
edgePadding:
  mobile: 16px # px-4 (< 640px)
  tablet: 32px # sm:px-8 (640px - 1024px)
  desktop: 48px # lg:px-12 (1024px - 1280px)
  ultraWide: 64px # xl:px-16 (> 1280px)
---

# Design System: Celestial Wellness & Science of Living Young

This design system defines the visual language and interactive standards for the **Harmony of Life** platform. Inspired by the harmony between clinical cellular biology and ethereal Vedic longevity science, the aesthetic merges majestic Himalayan sunrise warmth, botanical greens, and luminous bio-electric constellation graphics.

---

## 1. Brand Identity & Visual Atmosphere

- **Theme & Feeling:** Serene, scientific, majestic, rejuvenating, and deeply grounded in nature.
- **Lighting & Ambiance:** Luminous golden-hour dawn rays breaking across misty mountain peaks, illuminating human vitality through glowing golden bio-electric neural/cellular constellations.
- **Visual Tenets:**
  1. **Dual-Tone Editorial Typography:** Pairing authoritative deep forest green serif headings with fluid, warm gold italicized accents.
  2. **Bio-Electric Constellation Imagery:** Technical yet poetic network graphics with glowing nodes, radial halos, and delicate pointer annotations illustrating cellular charge.
  3. **Luminous Glassmorphism:** Translucent frosted overlays and pill-shaped interactive controls floating seamlessly over atmospheric landscape visuals.

---

## 2. Color Palette

The color system is focused on warm earth, sacred forest, and celestial golden light:

| Token | Hex Value | Semantic Role & Usage |
| :--- | :--- | :--- |
| **`Primary`** | `#142b23` | Deep Sacred Forest / Pine Black. Primary typography, high-contrast dark sections, and foundational text hierarchy. |
| **`Accent / Gold`** | `#b78736` | Radiant Amber Gold. Editorial italic highlights, solid pill CTAs, constellation nodes, accent divider bars, and annotation pointer dots. |
| **`Secondary / Sage`** | `#607860` | Muted Botanical Sage. Subtle borders, secondary accents, supporting icons, and frosted outline buttons. |
| **`Background`** | `#e9e0cf` | Soft Warm Cream / Earth Sand. Base canvas for light sections, creating a grounding, organic feel. |
| **`Celestial Glow`**| `#ffd875` | Luminous Solar Flare / Bio-Electric White-Gold. Radial glow effects, constellation vertex illumination, and focal halos. |
| **`Mist Gradient`** | `#ebf3ec` → `#f7f4ec` | Atmospheric Mountain Mist. Smooth transitions from morning sky to lush green valleys. |

---

## 3. Typography Hierarchy

The typographic scale combines classical editorial prestige with crisp, clinical modern sans-serif:

```
[DISPLAY HEADING]        Cormorant Garamond (600)   #142b23   "Harmony of Life,"
[DISPLAY ITALIC ACCENT]  Cormorant Garamond (500i)  #b78736   "The Science of Living Young."
        ─── (Gold Accent Line / Divider: 56px × 2.5px #b78736) ───
[EYEBROW / MISSION]      Inter (600, UPPERCASE)     #142b23   "INDIA'S FIRST PERSONALISED HEALTH & WELLNESS COMMUNITY"
[BODY / NARRATIVE]       Inter (400, Relaxed)       #142b23   "Rooted in science. Guided by nature. Focused on you..."
[ANNOTATIONS / NODES]    Inter (500)                #142b23   "• Increase Lifeforce" | "• Cellular Vitality"
```

### Typographic Specifications

1. **Display Primary (`clamp(36px, 5.5vw, 64px)`):**
   - Font: `Cormorant Garamond`, SemiBold (600).
   - Style: Upright, tight line-height (`leading-[1.06]`), deep primary forest green (`#142b23`).
2. **Display Accent / Italic (`clamp(32px, 5vw, 56px)`):**
   - Font: `Cormorant Garamond`, Medium Italic (500).
   - Style: Cursive elegance, golden amber tone (`#b78736`), rendered seamlessly on the subsequent line (`leading-[1.12]`).
3. **Eyebrow Label (`clamp(11px, 1.2vw, 13px)`):**
   - Font: `Inter`, SemiBold (600).
   - Style: Uppercase, generous tracking (`letter-spacing: 0.2em` / `tracking-[0.2em]`), crisp dark forest text.
4. **Section Headings (`clamp(24px, 4vw, 36px)`):**
   - Font: `Cormorant Garamond`, Medium (500), used across body section titles.
5. **Body Copy (`clamp(15px, 1.8vw, 18px)`):**
   - Font: `Inter`, Regular (400), leading-relaxed (`leading-[1.7]`), high contrast dark green/charcoal.
6. **Technical Callout Annotations (`clamp(12px, 1.4vw, 14px)`):**
   - Font: `Inter`, Medium (500), paired with thin directional connector lines and glowing anchor nodes.

---

## 4. Shapes, Geometry & Spacing (Hero-Aligned System)

### Screen-Edge Horizontal Gutter Standard
All main page sections adhere to the exact horizontal responsive padding rhythm established by the Hero component:
- **Mobile (`< 640px`):** `px-4` (16px edge padding)
- **Tablet (`sm`, 640px–1024px):** `sm:px-8` (32px edge padding)
- **Desktop (`lg`, 1024px–1280px):** `lg:px-12` (48px edge padding)
- **Ultra-Wide (`xl`, `> 1280px`):** `xl:px-16` (64px edge padding)

### Layout Containers
- **Primary Hero / Full-Bleed Sections:** `max-w-360 mx-auto` (1440px max content width).
- **Standard Content Sections:** `max-w-7xl mx-auto` (1280px).
- **Focused Editorial Sections:** `max-w-5xl mx-auto` (1024px).
- **Data / Crisis Callout Cards:** `max-w-4xl mx-auto` (896px).

### Vertical Section Sizing & Rhythms
- **Hero Viewport:** `min-h-dvh lg:h-dvh -mt-24 pt-28 pb-16 lg:py-0` (includes 112px `pt-28` navbar offset on mobile/tablet and full-height centered layout on desktop).
- **Standard Flow Sections:** `py-20 sm:py-28 lg:py-32` (80px / 112px / 128px vertical padding).
- **Pinned Storytelling Sequences:** `sticky top-0 h-dvh` nested inside runway height (`h-[300vh]`, `h-[360vh]`).

### Grid & Component Gaps
- **Desktop Split Grid Gap:** `gap-8` (32px) in 12-column layouts (`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`).
- **Card Bento Grids:** `gap-4 sm:gap-6` (16px–24px).
- **Micro Gaps:** `gap-2` (8px), `gap-3.5` (14px) for pill items and icon badges.

### Border Radii
- **Full Pill (`rounded-full` / `9999px`):** Primary and secondary interactive action buttons, category chips, status tags, and floating callout badges.
- **Card Containers (`16px` / `rounded-2xl`):** Glassmorphic content cards, modal sheets, and bento modules.
- **Mega Shells (`24px` / `rounded-3xl`):** Major spotlight cards, modal dialogs, and feature containers.
- **Micro Radii (`8px` / `rounded-sm`):** Inputs, tooltips, and compact dialog elements.

### Spacing Scale (Strict 8px Rhythmic Grid)
- `8px` (`p-2`, `gap-2`)
- `16px` (`p-4`, `gap-4`)
- `24px` (`p-6`, `gap-6`)
- `32px` (`p-8`, `gap-8`)
- `48px` (`p-12`, `gap-12`)
- `64px` (`p-16`, `gap-16`)

---

## 5. UI Components & Key Patterns

### A. Dual Button Action Cluster
Hero and major conversion blocks feature a cohesive pair of full-pill buttons:
1. **Primary Solid CTA ("Join the Community"):**
   - Background: Solid warm amber-gold (`#b78736` / `bg-[#b78736]`).
   - Text: Crisp white (`text-white`), font-sans medium (`font-medium`), smooth hover lift with golden halo glow (`shadow-[0_8px_24px_rgba(183,135,54,0.3)]`).
   - Shape: `rounded-full`, generous padding (`px-8 py-3.5`).
2. **Secondary Outlined CTA ("Discover More"):**
   - Background: Translucent frosted cream/glass (`bg-[#e9e0cf]/30 backdrop-blur-md`).
   - Border: Delicate amber-gold / sage hairline border (`border border-[#b78736]/50`).
   - Text: Deep forest / amber tone (`text-[#142b23]`), smooth background fill transition on hover.
   - Shape: `rounded-full`, matching padding (`px-8 py-3.5`).

### B. Bio-Electric Constellation & Annotation Graphics
- **Visual Execution:** High-resolution cinematic photograph of a subject looking upward into morning sunlight, overlaid with a luminous golden sacred geometry / neural network mesh.
- **Interactive Technical Callouts:**
  - Hairline connector lines extending horizontally from the figure toward label text.
  - Glowing anchor dot (`w-2 h-2 rounded-full bg-[#ffd875] ring-2 ring-[#b78736]`).
  - Annotation labels:
    - *Increase Lifeforce*
    - *Improve Healthspan*
    - *Cellular Vitality*
    - *Personalised Wellness*
    - *Science Backed Solutions*

### C. Glassmorphic Surface Treatment
- Frosted overlays using `backdrop-blur-md` or `backdrop-blur-xl` combined with light tinted backgrounds (`bg-white/20` or `bg-background/80`).
- Subtle light borders (`border border-white/40` or `border-[#b78736]/20`) to catch ambient illumination.
