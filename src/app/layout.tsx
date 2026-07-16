import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/animations/SmoothScrollProvider";
import AnimatedFavicon from "@/components/animations/AnimatedFavicon";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://theharmonyoflife.com'),
  title: "Harmony of Life | Celestial Wellness",
  description: "A sanctuary for digital rejuvenation, deep cellular detox, and restoring your Lifeforce through holistic celestial wellness.",
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
      className={`${bricolage.variable} ${inter.variable} font-sans antialiased`}
      suppressHydrationWarning
    >
      <body className="flex flex-col bg-background text-on-background" suppressHydrationWarning>
        <AnimatedFavicon />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>

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
                "telephone": "8800828863",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Wellness Center",
                  "addressLocality": "New Delhi",
                  "addressRegion": "DL",
                  "postalCode": "110001",
                  "addressCountry": "IN"
                },
                "description": "A sanctuary for digital rejuvenation, deep cellular detox, and restoring your Lifeforce.",
                "priceRange": "$$"
              }
            ])
          }}
        />
      </body>
    </html>
  );
}
