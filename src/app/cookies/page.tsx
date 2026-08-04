import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Harmony of Life",
  description: "Cookie Policy for Harmony of Life.",
};

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 px-4 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors font-semibold mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <h1 className="font-heading text-4xl sm:text-5xl text-primary font-bold mb-6">Cookie Policy</h1>
        <p className="mb-8 font-medium text-primary/70">Last updated: August 2026</p>
        
        <div className="space-y-8 text-primary/80">
          <section>
            <h2 className="font-heading text-2xl sm:text-3xl text-primary font-semibold mb-4">1. What Are Cookies</h2>
            <p className="leading-relaxed">
              As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl sm:text-3xl text-primary font-semibold mb-4">2. How We Use Cookies</h2>
            <p className="leading-relaxed mb-4">
              We use cookies for a variety of reasons detailed below. Unfortunately, in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> We use cookies to remember your preferences and ensure the basic functionality of the website.</li>
              <li><strong>Analytics Cookies:</strong> We use cookies to understand how you interact with our website, which helps us improve the user experience.</li>
              <li><strong>Marketing Cookies:</strong> We use cookies to track conversions and properly attribute marketing efforts.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl sm:text-3xl text-primary font-semibold mb-4">3. Disabling Cookies</h2>
            <p className="leading-relaxed">
              You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Therefore, it is recommended that you do not disable cookies.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
