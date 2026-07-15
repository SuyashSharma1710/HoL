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
  title: "Harmony of Life | Celestial Wellness",
  description: "A sanctuary for digital rejuvenation, deep cellular detox, and restoring your Lifeforce through holistic celestial wellness.",
  keywords: ["Celestial Wellness", "Lifeforce", "Deep Detox", "Holistic Health", "Cellular Repair", "Harmony of Life"],
  openGraph: {
    title: "Harmony of Life",
    description: "A sanctuary for digital rejuvenation and cellular detox.",
    type: "website",
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
      </body>
    </html>
  );
}
