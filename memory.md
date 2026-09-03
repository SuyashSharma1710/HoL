# Harmony of Life — Project Memory & Architecture Log

This document preserves the core architectural decisions, data contracts, and design systems for the **Harmony of Life** platform (Quest Concepts Private Limited). It serves as the definitive reference for ongoing development and AI pair programming.

---

## 1. Design System & Aesthetics (`Design.md`)

* **Color Palette (Celestial Luxury):**
  * **Deep Forest Obsidian:** `#142b23` (primary dark, headings, footer background)
  * **Celestial Cream / Alabaster:** `#e9e0cf` / `#fbf8f2` (primary light, background, cards)
  * **Imperial Amber Gold:** `#ffd875` / `#b78736` / `#c8963e` (accents, highlights, glows)
  * **Botanical Sage:** `#607860` / `#4a634a` (secondary badges, subtle borders)
* **Typography:**
  * **Headings:** `Cormorant Garamond` (`--font-cormorant-garamond`), italic accents, fluid `clamp()` scale.
  * **Body & UI:** `Inter` (`--font-inter`), uppercase letter-spaced subheadings (`tracking-[0.2em]`).
* **Motion & Effects:**
  * **Framer Motion:** Spring-damped entrances, staggered reveals, smooth layout transitions.
  * **Lenis:** Smooth momentum scrolling via `<LenisProvider>`.
  * **Atmosphere:** Glassmorphic cards (`backdrop-blur-xl`), subtle radial glow backdrops, edge shine reflections.

---

## 2. Business Details & External Integrations

* **Legal Entity:** Quest Concepts Private Limited
* **Physical Sanctuary:** 125A Shahpur Jat, Siri Fort, Near Lal PathLabs, New Delhi, 110049
* **Sanctuary Phone / WhatsApp:** `+91 880 082 8863` (`918800828863`)
* **Live Webhook Endpoint:**
  `https://script.google.com/macros/s/AKfycbzuY67g9zupwshXnrtnisfZoqJKjgzNs2TnmgRDmSbJ0IXVn3UAT0VDEaBPXgvTzwV7/exec`
* **Official Products Store:** `https://thenatureleaf.com`
* **Official WhatsApp Community Groups:**
  * **Knowledge / Community:** `https://chat.whatsapp.com/IVCU2cnDYzn0sA4GbTKbeL?s=cl&p=a&mlu=4&ilr=4`
  * **Income Opportunity / Partners:** `https://chat.whatsapp.com/Gmiln8btowxLqv51OvA7lx?s=cl&p=a&mlu=4&ilr=4`

---

## 3. Lead Intake & Multi-Pathway Architecture (`CTASection.tsx`)

### Universal Base Fields (Present Across All Pathways)
1. **`name`** (Full Name) — *Required*
2. **`phone`** (WhatsApp Number) — *Required*, strict 10-digit validation, `+91` prefix, auto-strips leading `0`/`91`, blocks repeated dummy sequences.
3. **`email`** (Email ID) — *Required*, RFC 5322 validation with domain typo correction (`@gmial.com` $\rightarrow$ `@gmail.com`).
4. **`city`** (City) — *Required*, blur validation.
5. **`referral`** (Referral Name if any) — *Optional*.

### Pathway Routing & Action Matrix
| Pathway | Additional Fields | Post-Submit Action | Button Label |
| :--- | :--- | :--- | :--- |
| **Products** | Health Goals & Product Inquiries (`description`) | Logs to `Products` sheet & opens [**thenatureleaf.com**](https://www.thenatureleaf.com) | `Explore Products (The Nature Leaf)` |
| **Knowledge** | Learning Topic (`interest` dropdown: 6 Longevity options) + Notes (`description`) | Logs to `Knowledge` sheet & opens **WhatsApp Community Group** | `Enroll in WhatsApp Group (Knowledge)` |
| **Income Opportunity** | Role Interest (`interest` dropdown: 5 Career options) + Background (`background`) + Goals (`description`) | Logs to `Opportunity` sheet & opens **Direct 1-on-1 WhatsApp Sanctuary Desk** | `Connect on WhatsApp (Opportunity)` |

---

## 4. Google Apps Script Webhook Schema (`scripts/google-apps-script.js`)

The backend script handles `doPost(e)` and auto-creates/formats sheet tabs with `#e9e0cf` headers:
* **`Products` Tab:** `Timestamp`, `Full Name`, `Phone (WhatsApp)`, `Email ID`, `City`, `Referral Name`, `Additional Notes`
* **`Knowledge` Tab:** `Timestamp`, `Full Name`, `Phone (WhatsApp)`, `Email ID`, `City`, `Referral Name`, `Learning Topic / Interest`, `Additional Notes`
* **`Opportunity` Tab:** `Timestamp`, `Full Name`, `Phone (WhatsApp)`, `Email ID`, `City`, `Referral Name`, `Role / Focus`, `Professional Background`, `Additional Notes`
* **`Popup` Tab:** `Timestamp`, `Full Name`, `Phone (WhatsApp)`, `Email ID`, `City`, `Referral Name`
* **`Newsletter` Tab:** `Timestamp`, `Email Address`

---

## 5. Animated Lead Intake Popup (`LeadPopup.tsx`)

* **Fields:** 5 Universal Base Fields (`name`, `phone`, `email`, `city`, `referral`).
* **Motion & States:** Spring modal entrance, glassmorphic backdrop, light-sheen CTA button, celebratory checkmark success screen.
* **Triggers & Isolation:**
  * Auto-triggers on home page (`pathname === "/"`) after 9s engagement, upon 35% scroll, or top-edge exit intent (`clientY <= 15`).
  * Listens to global event `window.dispatchEvent(new CustomEvent("open-lead-popup"))`.
  * `sessionStorage` debounce (`hol_popup_interacted`) prevents repetitive popup loops.
  * Route-gated so it never interrupts visitors on legal policy pages (`/cookies`, `/privacy`, `/terms`).

---

## 6. Privacy & Cookie Governance (`CookieConsent.tsx`)

* **Google Consent Mode v2 Standards:**
  * Defaults `analytics_storage`, `ad_storage`, `ad_user_data`, and `ad_personalization` to `'denied'` in `layout.tsx` before tags load.
  * Dynamically fires `gtag('consent', 'update', ...)` and broadcasts `cookie-consent-updated` upon user grant.
* **Granular Categories:**
  * **Strictly Necessary:** Always active (session, security, UI state).
  * **Analytics & Performance:** Toggled for GA4 / Clarity / Hotjar.
  * **Marketing & Targeting:** Toggled for Meta Pixel / Google Ads.
* **Persistent Revocation Controls:**
  * Floating bottom-left icon pill that smoothly expands to `"COOKIES"` on hover.
  * Interactive **"Cookie Preferences"** link in `Footer.tsx` (Governance column) to reopen drawer anytime.
  * New tab isolation (`target="_blank"`) for the Cookie Policy link to prevent page resets.
  * Persistence via `localStorage` (`hol_cookie_consent_v1`).

---

## 7. Performance, SEO & Open Graph Infrastructure

* **WhatsApp Open Graph Image Fix:**
  * WhatsApp crawler requires raster `.jpg` / `.png` under 300KB (strictly rejects SVG).
  * Standard 1200×630 raster asset generated at [`public/og-image.jpg`](file:///c:/Users/priya/OneDrive/Desktop/cliqk%20Projects/HoL/public/og-image.jpg) (59.9 KB) and configured in `src/app/layout.tsx`.
* **Loader & Hydration:**
  * Zero-flicker loading screen in `Loader.tsx` suppressed on bot visits and subsequent session visits via `hol_initial_loaded`.
* **Static Build & SEO:**
  * Complete dynamic sitemap (`src/app/sitemap.ts`) and crawler directives (`src/app/robots.ts`).
  * 100% clean Next.js static builds (`npm run build`).

---

## 8. Analytics, Tracking & Ads Integration

* **Google Analytics 4 (GA4):**
  * **Measurement ID:** `G-5VK6ELV0Z1`
  * **Initialization (`src/app/layout.tsx`):** Loaded via `next/script` (`https://www.googletagmanager.com/gtag/js?id=G-5VK6ELV0Z1`) with `strategy="afterInteractive"`.
  * **Consent Mode v2 Controlled:** Integrates with baseline default `denied` states and automatically updates permissions when users interact with the cookie consent banner.
  * **Lead Event Dispatch:** Fires `gtag('event', 'generate_lead', ...)` on main intake form (`CTASection.tsx`) and popup modal (`LeadPopup.tsx`).
* **Meta (Facebook/Instagram) Pixel:**
  * **Pixel ID:** `1381321364170096`
  * **Initialization (`src/app/layout.tsx`):** Injected via `next/script` with `strategy="afterInteractive"` and a noscript `<img>` pixel fallback.
  * **Automatic PageView Tracking:** Fires `fbq('track', 'PageView')` on initial mount.
  * **Lead Conversion Attribution:**
    * **Main Form (`CTASection.tsx`):** Fires `fbq('track', 'Lead', { content_name: pathwayTitle, content_category: pathwayKey, currency: 'INR' })`.
    * **Popup Modal (`LeadPopup.tsx`):** Fires `fbq('track', 'Lead', { content_name: 'Sanctuary Access Lead (Popup)', currency: 'INR' })`.

---

## 9. Page & Component Sitemap

* **`src/app/page.tsx`**: Landing Page
  * `Hero.tsx` $\rightarrow$ `ValuePropsBanner.tsx` $\rightarrow$ `PhilosophySection.tsx` $\rightarrow$ `CellularWorldSection.tsx` $\rightarrow$ `WhyHolSection.tsx` $\rightarrow$ `PillarsSection.tsx` $\rightarrow$ `AgingSlidesSection.tsx` $\rightarrow$ `AuthoritySection.tsx` $\rightarrow$ `TestimonialsSection.tsx` $\rightarrow$ `NextStepSection.tsx` $\rightarrow$ `CTASection.tsx`
* **`src/app/layout.tsx`**: Root Shell (`Navbar`, `Footer`, `Loader`, `LenisProvider`, `LeadPopup`, `CookieConsent`)
* **Legal Subpages:**
  * `src/app/privacy/page.tsx` — Privacy Policy (DPDP & IT Act compliant)
  * `src/app/terms/page.tsx` — Terms of Service
  * `src/app/cookies/page.tsx` — Cookie & Tracking Governance Policy

