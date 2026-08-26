import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Building2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Harmony of Life",
  description: "Comprehensive Privacy Policy for Harmony of Life and Quest Concepts Private Limited.",
};

export default function PrivacyPolicy() {
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Legal &amp; Privacy Governance</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
            Privacy Policy
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
              Introduction &amp; Scope
            </h2>
            <p>
              Welcome to <strong>Harmony of Life</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us,&rdquo; or the &ldquo;Company&rdquo;), an initiative operated by <strong>Quest Concepts Private Limited</strong>, registered in New Delhi, India. We are dedicated to respecting your personal privacy and protecting the confidentiality of your personal and health-interest data.
            </p>
            <p>
              This Privacy Policy explains comprehensively how we collect, store, use, share, and protect your information when you visit our website, submit lead intake forms, engage with our 3 core pathways (<em>Products</em>, <em>Knowledge</em>, <em>Income Opportunity</em>), or communicate with us via WhatsApp and telephone.
            </p>
            <p>
              By accessing our platform or providing personal information, you acknowledge that you have read, understood, and consented to the practices described in this Privacy Policy in compliance with the <strong>Digital Personal Data Protection Act, 2023 (India)</strong>, Information Technology Act, 2000, and international data protection standards including the GDPR.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-6 border-t border-primary/10">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-primary flex items-center gap-2.5">
              <span className="font-mono text-base font-bold text-accent">02.</span>
              The Data We Collect
            </h2>
            <p>We may collect and process several categories of personal data, including but not limited to:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-secondary/10 border border-secondary/20">
                <h3 className="font-heading font-semibold text-base text-primary mb-1">A. Contact &amp; Identity Data</h3>
                <p className="text-xs sm:text-sm text-primary/75">
                  Full name, WhatsApp contact number, geographic city/state, and preferred communication preferences.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-secondary/10 border border-secondary/20">
                <h3 className="font-heading font-semibold text-base text-primary mb-1">B. Pathway &amp; Interest Data</h3>
                <p className="text-xs sm:text-sm text-primary/75">
                  Specific focus areas selected across Products (detox, longevity, vitality), Knowledge programs (masterclasses, 12 pillars), or Income Opportunity (WRM / Coach).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-secondary/10 border border-secondary/20">
                <h3 className="font-heading font-semibold text-base text-primary mb-1">C. Technical &amp; Device Data</h3>
                <p className="text-xs sm:text-sm text-primary/75">
                  IP address, browser type and version, device identifier, operating system, time zone settings, referral URLs, and browsing behavior.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-secondary/10 border border-secondary/20">
                <h3 className="font-heading font-semibold text-base text-primary mb-1">D. Communication Records</h3>
                <p className="text-xs sm:text-sm text-primary/75">
                  Transcripts and messages sent via WhatsApp, inquiry forms, customer support notes, or feedback surveys.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-6 border-t border-primary/10">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-primary flex items-center gap-2.5">
              <span className="font-mono text-base font-bold text-accent">03.</span>
              How We Use Your Personal Data
            </h2>
            <p>We process your personal information strictly for legitimate, declared business purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-primary/80">
              <li><strong>Lead Fulfillment &amp; Support:</strong> Connecting you directly with dedicated wellness relationship managers or educational mentors via WhatsApp/phone.</li>
              <li><strong>Program &amp; Product Guidance:</strong> Providing relevant information regarding cellular vitality kits, educational workshops, and holistic wellness guidance.</li>
              <li><strong>Career &amp; Opportunity Processing:</strong> Reviewing and responding to applications for Wellness Relationship Managers, Community Partners, and Coaches.</li>
              <li><strong>Community Updates:</strong> Sharing insights on longevity, cellular voltage, and mitochondria health via WhatsApp broadcast channels and sanctuary announcements.</li>
              <li><strong>Platform Optimization:</strong> Improving website speed, responsive layout fidelity, interactive features, and user security.</li>
              <li><strong>Legal Compliance:</strong> Satisfying regulatory reporting, statutory tax obligations, and defending legitimate legal interests.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-6 border-t border-primary/10">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-primary flex items-center gap-2.5">
              <span className="font-mono text-base font-bold text-accent">04.</span>
              Data Storage, Infrastructure &amp; Security
            </h2>
            <p>
              We implement industry-standard organizational and technical security measures (including TLS 1.3 encryption in transit and AES-256 encryption at rest) to safeguard your data against accidental loss, unauthorized access, alteration, or disclosure.
            </p>
            <p>
              Our lead transmission pipeline connects directly through Google Cloud / Google Workspace enterprise infrastructure and verified WhatsApp Business API servers. Access to collected spreadsheets is strictly restricted on a need-to-know basis to authorized personnel bound by formal non-disclosure agreements.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-6 border-t border-primary/10">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-primary flex items-center gap-2.5">
              <span className="font-mono text-base font-bold text-accent">05.</span>
              Third-Party Disclosures &amp; Zero-Sale Policy
            </h2>
            <div className="p-4 rounded-2xl bg-accent/10 border border-accent/30 text-primary">
              <p className="font-semibold text-sm">
                🛡️ Zero-Sale Guarantee: We do not sell, rent, or trade your personal or health-inquiry data to data brokers, advertisers, or third parties under any circumstances.
              </p>
            </div>
            <p>
              We may share necessary data only with trusted technology infrastructure partners (e.g., secure hosting providers, cloud storage, SMS/WhatsApp delivery gateways) who are contractually required to process data exclusively on our instructions and maintain rigorous privacy safeguards.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pt-6 border-t border-primary/10">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-primary flex items-center gap-2.5">
              <span className="font-mono text-base font-bold text-accent">06.</span>
              Your Privacy Rights
            </h2>
            <p>Depending on your jurisdiction, you have robust rights concerning your personal data:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-primary/80">
              <li><strong>Right to Access:</strong> Request a summary or copy of the personal data we hold about you.</li>
              <li><strong>Right to Correction:</strong> Request prompt correction of inaccurate or incomplete personal records.</li>
              <li><strong>Right to Erasure:</strong> Request the deletion or removal of your personal information from our databases.</li>
              <li><strong>Right to Withdraw Consent:</strong> Opt-out of community communications or broadcast messages at any time.</li>
              <li><strong>Right to Grievance Redressal:</strong> Submit inquiries or grievances to our designated administration.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 pt-6 border-t border-primary/10">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-primary flex items-center gap-2.5">
              <span className="font-mono text-base font-bold text-accent">07.</span>
              Contact Information &amp; Grievance Redressal
            </h2>
            <p>
              For questions regarding this Privacy Policy or to exercise any of your data protection rights, please contact our administrative office:
            </p>
            <div className="p-5 rounded-2xl bg-background/80 border border-accent/30 space-y-2 text-xs sm:text-sm">
              <p className="font-bold text-primary flex items-center gap-2">
                <Building2 className="w-4 h-4 text-accent" />
                Quest Concepts Private Limited (Harmony of Life)
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
