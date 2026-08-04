import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Harmony of Life",
  description: "Privacy Policy for Harmony of Life.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 px-4 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors font-semibold mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <h1 className="font-heading text-4xl sm:text-5xl text-primary font-bold mb-6">Privacy Policy</h1>
        <p className="mb-8 font-medium text-primary/70">Last updated: August 2026</p>
        
        <div className="space-y-8 text-primary/80">
          <section>
            <h2 className="font-heading text-2xl sm:text-3xl text-primary font-semibold mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              Welcome to Harmony of Life. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl sm:text-3xl text-primary font-semibold mb-4">2. The Data We Collect About You</h2>
            <p className="leading-relaxed mb-4">
              Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl sm:text-3xl text-primary font-semibold mb-4">3. How We Use Your Personal Data</h2>
            <p className="leading-relaxed">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
