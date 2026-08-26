import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Scale, AlertTriangle, Building2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Harmony of Life",
  description: "Comprehensive Terms of Service and Disclaimers for Harmony of Life and Quest Concepts Private Limited.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background pb-16 pt-0 sm:pb-24 sm:pt-0 px-4 sm:px-6 lg:px-8 text-primary selection:bg-accent/20">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-semibold text-primary/75 hover:text-primary transition-all duration-200 bg-white/70 hover:bg-white border border-accent/30 backdrop-blur-md px-4 py-2 rounded-full mb-10 group shadow-xs cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-accent group-hover:-translate-x-1 transition-transform" />
          Back to Sanctuary
        </Link>
        
        {/* Header Block */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 font-sans font-semibold text-xs tracking-[0.2em] text-accent uppercase bg-accent/10 border border-accent/25 px-3 py-1 rounded-full mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>Terms of Service &amp; Governance</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
            Terms of Service
          </h1>
          <div className="w-14 h-[2.5px] bg-accent my-4 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-primary/75 font-medium">
            Effective &amp; Last Updated: August 2026 &bull; Quest Concepts Private Limited
          </p>
        </div>

        {/* Content Container */}
        <div className="bg-white/85 backdrop-blur-xl p-8 sm:p-12 lg:p-14 rounded-3xl border border-white/90 shadow-xl space-y-10 text-primary/85 leading-relaxed font-sans text-sm sm:text-base">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-primary flex items-center gap-2.5">
              <span className="font-mono text-base font-bold text-accent">01.</span>
              Agreement to Terms
            </h2>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and <strong>Quest Concepts Private Limited</strong> (&ldquo;Company,&rdquo; &ldquo;Harmony of Life,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), governing your access to and use of the website <code>theharmonyoflife.com</code>, all related landing pages, lead channels, community portals, educational materials, and product purchase pathways.
            </p>
            <p>
              By accessing, browsing, submitting inquiries, or purchasing products through our platform, you explicitly agree to be bound by these Terms and our Privacy Policy. If you do not agree with any part of these Terms, you must discontinue your use of the platform immediately.
            </p>
          </section>

          {/* Section 2: CRITICAL MEDICAL DISCLAIMER */}
          <section className="space-y-4 pt-6 border-t border-primary/10">
            <div className="p-5 sm:p-6 rounded-2xl bg-accent/15 border-2 border-accent/40 space-y-3">
              <div className="flex items-center gap-2 text-primary font-heading font-bold text-lg sm:text-xl">
                <AlertTriangle className="w-5 h-5 text-accent shrink-0" />
                <span>02. Health, Longevity &amp; Medical Disclaimer</span>
              </div>
              <p className="text-xs sm:text-sm text-primary/90 leading-relaxed font-medium">
                <strong>Important Notice:</strong> Harmony of Life and its founder, Dr. Ashutosh Rastogi (Ph.D. Doctorate in Life Sciences &amp; Visionary Wellness Educator), provide scientific education, lifestyle guidance, and nutritional/cellular wellness principles. 
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-primary/80">
                <li>Content, programs, products, and consultations are <strong>not a substitute for professional medical advice, diagnosis, or clinical treatment</strong>.</li>
                <li>Neither the Company nor its representatives practice clinical medicine or prescribe pharmaceutical treatments.</li>
                <li>Never disregard professional clinical advice or delay seeking it because of something you have read on this website.</li>
                <li>Always consult your licensed physician or primary healthcare specialist before undertaking dietary resets, heavy metal detoxification, or lifestyle changes, particularly if you are pregnant, nursing, or managing pre-existing chronic conditions.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-6 border-t border-primary/10">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-primary flex items-center gap-2.5">
              <span className="font-mono text-base font-bold text-accent">03.</span>
              The 3 Pathway Offerings
            </h2>
            <p>
              Harmony of Life organizes its offerings across 3 dedicated pathways. Use of each pathway is subject to specific terms:
            </p>
            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-2xl bg-secondary/10 border border-secondary/20">
                <h3 className="font-heading font-semibold text-base text-primary">A. Products Pathway</h3>
                <p className="text-xs sm:text-sm text-primary/75">
                  Nutritional supplements, cellular detox formulations, and wellness kits are subject to availability. Descriptions and specifications represent holistic wellness guidance backed by nutritional standards.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-secondary/10 border border-secondary/20">
                <h3 className="font-heading font-semibold text-base text-primary">B. Knowledge Pathway</h3>
                <p className="text-xs sm:text-sm text-primary/75">
                  Educational courses, masterclasses, and digital materials on the 12 Pillars of Longevity and bio-energetics are licensed for personal, non-commercial study only.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-secondary/10 border border-secondary/20">
                <h3 className="font-heading font-semibold text-base text-primary">C. Income Opportunity Pathway</h3>
                <p className="text-xs sm:text-sm text-primary/75">
                  Individuals applying to become Wellness Relationship Managers (WRMs) or Community Partners act as independent contractors. No guaranteed income or earnings claims are made; success depends on individual leadership, community development, and effort.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-6 border-t border-primary/10">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-primary flex items-center gap-2.5">
              <span className="font-mono text-base font-bold text-accent">04.</span>
              Intellectual Property Rights
            </h2>
            <p>
              All trademarks, trade names, logos, design layouts, graphics, text, photographic assets, video content, and intellectual assets (including the <em>12 Pillars of Life</em> framework and <em>Harmony of Life</em> brand identity) are the exclusive intellectual property of Quest Concepts Private Limited.
            </p>
            <p>
              You are granted a limited, revocable, non-exclusive, non-transferable license for personal, non-commercial viewing only. You must not copy, reproduce, republish, decompile, reverse-engineer, or commercially exploit any material without prior written consent from Quest Concepts Private Limited.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-6 border-t border-primary/10">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-primary flex items-center gap-2.5">
              <span className="font-mono text-base font-bold text-accent">05.</span>
              User Conduct &amp; Prohibited Uses
            </h2>
            <p>When interacting with our platform, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-primary/80">
              <li>Submit false, fraudulent, or impersonated personal or contact details.</li>
              <li>Make unauthorized, unverified clinical or therapeutic claims on behalf of Harmony of Life.</li>
              <li>Deploy bots, scrapers, data-mining tools, or automated submission scripts.</li>
              <li>Attempt to compromise the security, integrity, or hosting servers of the platform.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pt-6 border-t border-primary/10">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-primary flex items-center gap-2.5">
              <span className="font-mono text-base font-bold text-accent">06.</span>
              Limitation of Liability &amp; Indemnity
            </h2>
            <p>
              To the maximum extent permitted by applicable Indian law, Quest Concepts Private Limited, its directors, employees, affiliates, and representatives shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your access to or inability to use our platform or products.
            </p>
            <p>
              You agree to defend, indemnify, and hold harmless Quest Concepts Private Limited and its officers from and against any claims, liabilities, damages, and expenses arising out of your violation of these Terms or misuse of our educational resources.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pt-6 border-t border-primary/10">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-primary flex items-center gap-2.5">
              <span className="font-mono text-base font-bold text-accent">07.</span>
              Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the <strong>laws of the Republic of India</strong>. Any disputes, claims, or controversies arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the competent courts located in <strong>New Delhi, India</strong>.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 pt-6 border-t border-primary/10">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-primary flex items-center gap-2.5">
              <span className="font-mono text-base font-bold text-accent">08.</span>
              Official Inquiries
            </h2>
            <p>
              For legal notices or questions regarding these Terms, please contact our administrative team:
            </p>
            <div className="p-5 rounded-2xl bg-background/80 border border-accent/30 space-y-2 text-xs sm:text-sm">
              <p className="font-bold text-primary flex items-center gap-2">
                <Building2 className="w-4 h-4 text-accent" />
                Quest Concepts Private Limited
              </p>
              <p className="text-primary/75">
                Address: 125A Shahpur Jat, Siri Fort, Near Lal PathLabs, New Delhi, 110049, India
              </p>
              <p className="text-primary/75 flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                Helpline &amp; WhatsApp: +91 880 082 8863
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
