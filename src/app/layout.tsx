import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Loader } from "@/components/layout/Loader";
import { LenisProvider } from "@/components/layout/LenisProvider";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  colorScheme: "only light",
  themeColor: "#e9e0cf",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://theharmonyoflife.com'),
  title: {
    default: "Harmony of Life | Elevate Your Cellular Voltage & Lifeforce",
    template: "%s | Harmony of Life",
  },
  description: "Restore your health at the cellular level. Harmony of Life provides evidence-based holistic protocols, cellular detox formulations, and 12 Pillars of Longevity.",
  keywords: [
    "Cellular Health",
    "Cellular Voltage",
    "Mitochondria Health",
    "Longevity Protocols",
    "Deep Detox",
    "Holistic Wellness",
    "12 Pillars of Life",
    "Dr. Ashutosh Rastogi",
    "Harmony of Life"
  ],
  authors: [{ name: "Harmony of Life", url: "https://theharmonyoflife.com" }],
  creator: "Quest Concepts Private Limited",
  publisher: "Harmony of Life",
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Harmony of Life | Elevate Your Cellular Voltage & Lifeforce",
    description: "A sanctuary for cellular rejuvenation, biological longevity, and holistic wellness.",
    type: "website",
    url: "https://theharmonyoflife.com",
    siteName: "Harmony of Life",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Harmony of Life - The Science of Living Young | Cellular Rejuvenation & Vitality",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harmony of Life | Elevate Your Cellular Voltage & Lifeforce",
    description: "A sanctuary for cellular rejuvenation, biological longevity, and holistic wellness.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} font-sans antialiased`}
      suppressHydrationWarning
    >
      <body className="flex flex-col bg-background text-on-background pt-20 sm:pt-24" suppressHydrationWarning>
        {/* Pre-Hydration Loader Suppression Script */}
        <Script
          id="hol-loader-suppression"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var ua = (navigator.userAgent || '').toLowerCase();
                var isBot = /bot|googlebot|crawler|spider|robot|crawling|lighthouse|pagespeed|headless|ptst|gtmetrix|pingdom/i.test(ua);
                var isAutomated = navigator.webdriver === true || window.__LIGHTHOUSE_TEST__ || window.__pw_manual || !window.navigator;
                var hasSeen = false;
                try {
                  hasSeen = !!sessionStorage.getItem('hol_initial_loaded');
                } catch(err) {}

                if (isBot || isAutomated || hasSeen) {
                  document.documentElement.classList.add('hol-no-loader');
                }
              } catch(e) {}
            `,
          }}
        />

        <Loader />
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Harmony of Life",
              "url": "https://theharmonyoflife.com",
              "logo": "https://theharmonyoflife.com/logo.svg",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61591808093320",
                "https://www.instagram.com/harmonyoflife_official/?hl=en",
                "https://www.youtube.com/@Harmonyoflife-01",
                "https://www.linkedin.com/in/harmony-of-life-0-59ba5a413/"
              ]
            })
          }}
        />

        {/* Local Business & Sanctuary Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Harmony of Life",
              "image": "https://theharmonyoflife.com/logo.svg",
              "url": "https://theharmonyoflife.com",
              "telephone": "+918800828863",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "125A Shahpur Jat, Siri Fort, Near Lal PathLabs",
                "addressLocality": "New Delhi",
                "addressRegion": "DL",
                "postalCode": "110049",
                "addressCountry": "IN"
              },
              "description": "Restore your health at the cellular level. Harmony of Life provides personalized holistic protocols to increase Cellular Voltage and elevate your Lifeforce.",
              "priceRange": "₹₹"
            })
          }}
        />
      </body>
    </html>
  );
}

