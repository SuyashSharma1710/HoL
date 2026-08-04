import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Harmony of Life",
  description: "Terms of Service for Harmony of Life.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 px-4 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors font-semibold mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <h1 className="font-heading text-4xl sm:text-5xl text-primary font-bold mb-6">Terms of Service</h1>
        <p className="mb-8 font-medium text-primary/70">Last updated: August 2026</p>
        
        <div className="space-y-8 text-primary/80">
          <section>
            <h2 className="font-heading text-2xl sm:text-3xl text-primary font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="leading-relaxed">
              By accessing our website at theharmonyoflife.com, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl sm:text-3xl text-primary font-semibold mb-4">2. Use License</h2>
            <p className="leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Harmony of Life&apos;s website for personal, non-commercial transitory viewing only.
            </p>
            <p className="leading-relaxed">
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>Attempt to decompile or reverse engineer any software contained on Harmony of Life&apos;s website;</li>
              <li>Remove any copyright or other proprietary notations from the materials.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl sm:text-3xl text-primary font-semibold mb-4">3. Medical Disclaimer</h2>
            <p className="leading-relaxed">
              The content on this website is provided for educational and informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare provider regarding any health concerns or before starting any new wellness program.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
