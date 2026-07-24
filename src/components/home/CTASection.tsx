"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight,
  Loader2
} from "lucide-react";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Replace these with your actual details!
const WHATSAPP_NUMBER = "1234567890"; 
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwFGhgNti4NnOuZFpq-j4pUacV-j1_FL_2WHdXYVAiyLlNmYCQ7QURwj8GNTzI93ndf/exec"; 

const Facebook = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Instagram = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Youtube = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);

const Linkedin = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const }
  },
};

const socials = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/harmonyoflife_official/?hl=en" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@Harmonyoflife-01" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/harmony-of-life-0-59ba5a413/" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61591808093320" },
];

export function CTASection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    issue: "",
    description: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const payload = new URLSearchParams();
        payload.append("sheetName", "Emails"); // Routes data to the Emails tab
        payload.append("Emails", email);

        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          body: payload,
        });
        
        alert("Thanks for subscribing to our newsletter!");
        setEmail("");
      } catch (error) {
        console.error("Error subscribing:", error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Instantly redirect to WhatsApp for the best user experience
      const message = `Hello! My name is ${formData.name}.\n\n*Phone:* ${formData.number}\n*Primary Issue:* ${formData.issue}\n*Description:* ${formData.description}`;
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, "_blank");

      // 2. Send data to Google Sheets via Web App URL in the background without blocking
      const payload = new URLSearchParams();
      payload.append("sheetName", "Leads"); // Routes data to the Leads tab
      payload.append("name", formData.name);
      payload.append("phone", formData.number);
      payload.append("issue", formData.issue);
      payload.append("summary", formData.description);

      // Fire and forget (no await) to prevent any UI blocking
      fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: payload,
      }).catch(err => console.error("Sheets webhook failed:", err));

      // Reset form
      setFormData({ name: "", number: "", issue: "", description: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta" className="w-full bg-background py-24 sm:py-32 text-primary border-t border-primary/10">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left Column - Socials & Info */}
          <div className="flex flex-col space-y-12">
            <motion.div variants={itemVariants}>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] mb-6">
                Connect with the tribe
              </h2>
              <p className="text-primary/80 font-medium text-lg leading-relaxed max-w-xl">
                The first step is a conversation with an expert who understands your voltage and your unique health history. Reach out to us directly or connect through our social channels.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4 border-t border-primary/10">
              <h3 className="font-semibold text-sm tracking-widest uppercase text-accent mb-6">
                Follow our journey
              </h3>
              <div className="flex flex-wrap gap-4">
                {socials.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    className="w-14 h-14 rounded-sm border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-background hover:border-primary transition-all duration-300 group"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-10 border-t border-primary/10">
              <h3 className="font-semibold text-sm tracking-widest uppercase text-accent mb-4">
                Join our newsletter
              </h3>
              <p className="text-primary/70 text-sm mb-6 max-w-md">
                Get weekly insights on longevity, cellular voltage, and optimizing your healthspan.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="relative max-w-md">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-5 py-4 bg-white/50 border border-primary/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all pr-14"
                />
                <button 
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-background rounded-sm flex items-center justify-center hover:bg-primary/90 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div variants={itemVariants} className="bg-white p-8 sm:p-10 lg:p-12 rounded-lg shadow-sm border border-primary/5">
            <h3 className="font-heading text-2xl font-bold mb-8">Start your journey</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-primary/80">Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Eg. Jane Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="number" className="text-sm font-semibold text-primary/80">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="number"
                    name="number"
                    required
                    value={formData.number}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="+91 Your Phone Number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="issue" className="text-sm font-semibold text-primary/80">Primary Issue *</label>
                <select 
                  id="issue"
                  name="issue"
                  required
                  value={formData.issue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all appearance-none"
                >
                  <option value="" disabled>Select an issue...</option>
                  <option value="Fatigue / Low Energy">Fatigue / Low Energy</option>
                  <option value="Detoxification">Detoxification / Heavy Metals</option>
                  <option value="Longevity / Aging">Longevity & Biological Aging</option>
                  <option value="Chronic Condition">Chronic Condition</option>
                  <option value="General Health Optimization">General Health Optimization</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-semibold text-primary/80">Short Description</label>
                <textarea 
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Tell us a little bit about what you're experiencing..."
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full bg-primary text-background hover:bg-primary/90 font-semibold text-base py-6 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  <>
                    Connect on WhatsApp
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}
