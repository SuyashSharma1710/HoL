import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
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


export const metadata: Metadata = {
  metadataBase: new URL('https://theharmonyoflife.com'),
  title: "Harmony of Life | Elevate Your Cellular Charge & Lifeforce",
  description: "Restore your health at the cellular level. Harmony of Life provides personalized holistic protocols to increase Cellular Charge and elevate your Lifeforce.",
  keywords: ["Celestial Wellness", "Lifeforce", "Deep Detox", "Holistic Health", "Cellular Repair", "Harmony of Life"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Harmony of Life",
    description: "A sanctuary for digital rejuvenation and cellular detox.",
    type: "website",
    url: "https://theharmonyoflife.com",
    siteName: "Harmony of Life"
  },
  icons: {
    icon: "/logo.svg",
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
      <body className="flex flex-col bg-background text-on-background pt-24" suppressHydrationWarning>
        <Loader />
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>

        {/* Structured Data (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
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
              },
              {
                "@context": "https://schema.org",
                "@type": "HealthAndBeautyBusiness",
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
                "description": "Restore your health at the cellular level. Harmony of Life provides personalized holistic protocols to increase Cellular Charge and elevate your Lifeforce.",
                "priceRange": "₹₹"
              }
            ])
          }}
        />
      </body>
    </html>
  );
}
