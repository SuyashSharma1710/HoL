import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Cookie, Building2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Harmony of Life",
  description: "Comprehensive Cookie Policy for Harmony of Life and Quest Concepts Private Limited.",
};

export default function CookiePolicy() {
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
            <Cookie className="w-3.5 h-3.5" />
            <span>Digital Tracking Governance</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
            Cookie Policy
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
              What Are Cookies &amp; Tracking Technologies?
            </h2>
            <p>
              This Cookie Policy explains how <strong>Quest Concepts Private Limited</strong> (&ldquo;Harmony of Life,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) uses cookies, pixel tags, web beacons, and local storage technologies when you visit our website <code>theharmonyoflife.com</code>.
            </p>
            <p>
              Cookies are small alphanumeric text files placed on your computer, smartphone, or mobile device by websites you visit. They are widely used to facilitate basic website operations, elevate security, improve navigation responsiveness, and provide aggregated analytics to site operators.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-6 border-t border-primary/10">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-primary flex items-center gap-2.5">
              <span className="font-mono text-base font-bold text-accent">02.</span>
              Categories of Cookies We Use
            </h2>
            <p>We deploy four main classifications of digital cookies across our platform:</p>
            
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-secondary/10 border border-secondary/20">
                <h3 className="font-heading font-semibold text-base text-primary mb-1">
                  1. Strictly Necessary (Essential) Cookies
                </h3>
                <p className="text-xs sm:text-sm text-primary/75">
                  These cookies are vital for the core operation of our website, enabling user navigation, security protocols, form validation, and token authentication. The website cannot function correctly without these cookies, and they cannot be switched off in our systems.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-secondary/10 border border-secondary/20">
                <h3 className="font-heading font-semibold text-base text-primary mb-1">
                  2. Performance &amp; Analytics Cookies
                </h3>
                <p className="text-xs sm:text-sm text-primary/75">
                  These cookies allow us to count page visits, monitor traffic sources, measure load times, and analyze how users interact with our 12 Pillars and pathway sections. All information collected is aggregated and anonymized.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-secondary/10 border border-secondary/20">
                <h3 className="font-heading font-semibold text-base text-primary mb-1">
                  3. Functional &amp; Preference Cookies
                </h3>
                <p className="text-xs sm:text-sm text-primary/75">
                  These cookies remember choices you make (such as preferred pathway selections, audio/visual playback states, and newsletter subscription modal dismissals) to deliver a seamless, personalized experience.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-secondary/10 border border-secondary/20">
                <h3 className="font-heading font-semibold text-base text-primary mb-1">
                  4. Marketing &amp; Conversion Attribution Pixels
                </h3>
                <p className="text-xs sm:text-sm text-primary/75">
                  Used in conjunction with verified social channels (Meta, YouTube, LinkedIn) and WhatsApp conversion tracking to evaluate the effectiveness of educational campaigns and community awareness programs.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-6 border-t border-primary/10">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-primary flex items-center gap-2.5">
              <span className="font-mono text-base font-bold text-accent">03.</span>
              Third-Party Services &amp; Cookies
            </h2>
            <p>
              In certain sections of our sanctuary, third-party services may place cookies on your device. These include:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-primary/80">
              <li><strong>Google Workspace &amp; Analytics:</strong> For secure webhook intake processing and performance diagnostics.</li>
              <li><strong>WhatsApp Business API:</strong> To maintain secure redirection and pre-filled inquiry formatting.</li>
              <li><strong>Video &amp; Multimedia Hosting:</strong> Embedded media players providing optimal buffering and resolution.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-6 border-t border-primary/10">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-primary flex items-center gap-2.5">
              <span className="font-mono text-base font-bold text-accent">04.</span>
              How You Can Manage &amp; Disable Cookies
            </h2>
            <p>
              You possess the right to decide whether to accept or reject non-essential cookies. You can manage or modify your browser settings to block or delete cookies:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-primary/80">
              <li><strong>Google Chrome:</strong> Settings $\rightarrow$ Privacy and Security $\rightarrow$ Cookies and other site data.</li>
              <li><strong>Apple Safari:</strong> Preferences $\rightarrow$ Privacy $\rightarrow$ Block all cookies.</li>
              <li><strong>Mozilla Firefox:</strong> Options $\rightarrow$ Privacy &amp; Security $\rightarrow$ Cookies and Site Data.</li>
              <li><strong>Microsoft Edge:</strong> Settings $\rightarrow$ Site permissions $\rightarrow$ Cookies and site data.</li>
            </ul>
            <p className="text-xs sm:text-sm text-primary/70 italic pt-1">
              Please note that disabling certain cookies may impact interactive functionality, such as automated pathway tab selection or form submission states.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-6 border-t border-primary/10">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-primary flex items-center gap-2.5">
              <span className="font-mono text-base font-bold text-accent">05.</span>
              Contact Us Regarding Cookies
            </h2>
            <p>
              If you have any questions or concerns regarding our use of cookies and tracking technologies, please contact our technical administration:
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
