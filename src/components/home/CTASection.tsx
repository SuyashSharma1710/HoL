"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Leaf,
  BookOpen,
  Users,
  Sparkles
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Official Verified Details
const WHATSAPP_NUMBER = "918800828863"; 
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzO07udJOg8RAJeCRkethljRnHq1Jg02osnKePp38KXwoREsbbs1WNcvUNWHmdzNcQ/exec"; 

export type PathwayType = "products" | "knowledge" | "opportunity";

const pathwaysInfo = {
  products: {
    title: "Products",
    subtitle: "Fuel Your Body. Elevate Your Life.",
    icon: Leaf,
    sheetName: "Products",
    interestLabel: "Product / Wellness Focus *",
    interestOptions: [
      "Cellular Detox & Voltage Booster",
      "Gut Reset & Microbiome Health",
      "Metabolic & Energy Optimization",
      "Immunity & Anti-Inflammation",
      "Longevity & Healthy Aging",
      "General Wellness Consultation"
    ],
    placeholderDescription: "Tell us about your health goals or specific product inquiries...",
    waDefault: "Hello! I am interested in Harmony of Life Products to elevate my cellular health."
  },
  knowledge: {
    title: "Knowledge",
    subtitle: "Empower Your Mind. Transform Your Health.",
    icon: BookOpen,
    sheetName: "Knowledge",
    interestLabel: "Learning & Program Interest *",
    interestOptions: [
      "Cellular Voltage & Biology Masterclass",
      "12 Pillars Longevity Protocol",
      "Gut Reset Education & Guidance",
      "Lifestyle Disorder Reversal Insights",
      "Meditation & Pranik Shakti Charging",
      "Personalized Wellness Consultation"
    ],
    placeholderDescription: "What areas of health and longevity science would you like to explore?",
    waDefault: "Hello! I want to explore Harmony of Life Knowledge and holistic wellness programs."
  },
  opportunity: {
    title: "Income Opportunity",
    subtitle: "Create Impact. Build Your Future.",
    icon: Users,
    sheetName: "Opportunity",
    interestLabel: "Role / Community Interest *",
    interestOptions: [
      "Wellness Relationship Manager (WRM)",
      "Community Ambassador / Partner",
      "Holistic Health Coach / Nutritionist",
      "Corporate / Group Wellness Advocate",
      "General Career Inquiry"
    ],
    placeholderDescription: "Tell us about your city, background, or why you want to build with us...",
    waDefault: "Hello! I am interested in joining Harmony of Life as a Wellness Relationship Manager / Partner."
  }
};

/**
 * Strict 10-Digit Mobile Number Validation Engine
 * - Accepts strictly 10 digits
 * - Must start with 6, 7, 8, or 9
 * - Rejects dummy repeating and sequential patterns
 */
interface PhoneValidationResult {
  isValid: boolean;
  errorMessage: string;
  formattedNumber: string;
  rawDigits: string;
}

function validate10DigitPhone(input: string): PhoneValidationResult {
  if (!input || !input.trim()) {
    return {
      isValid: false,
      errorMessage: "10-digit mobile number is required.",
      formattedNumber: "",
      rawDigits: ""
    };
  }

  // Extract pure digits
  let digitsOnly = input.replace(/\D/g, "");

  // If user pasted with leading 0 or +91, extract the 10-digit core
  if (digitsOnly.length === 11 && digitsOnly.startsWith("0")) {
    digitsOnly = digitsOnly.slice(1);
  } else if (digitsOnly.length === 12 && digitsOnly.startsWith("91")) {
    digitsOnly = digitsOnly.slice(2);
  }

  // Trim to 10 digits
  digitsOnly = digitsOnly.slice(0, 10);

  if (digitsOnly.length < 10) {
    return {
      isValid: false,
      errorMessage: `Please enter exactly 10 digits (${digitsOnly.length}/10).`,
      formattedNumber: digitsOnly,
      rawDigits: digitsOnly
    };
  }

  // Exactly 10 digits
  const firstDigit = digitsOnly[0];
  if (!["6", "7", "8", "9"].includes(firstDigit)) {
    return {
      isValid: false,
      errorMessage: "Mobile number must start with 6, 7, 8, or 9.",
      formattedNumber: digitsOnly,
      rawDigits: digitsOnly
    };
  }

  // Dummy checks: all repeating digits (e.g. 9999999999, 0000000000)
  const isRepeated = /^(\d)\1{9}$/.test(digitsOnly);
  const isSequential = digitsOnly === "1234567890" || digitsOnly === "0123456789" || digitsOnly === "9876543210";
  if (isRepeated || isSequential) {
    return {
      isValid: false,
      errorMessage: "Please enter a valid, active mobile number.",
      formattedNumber: digitsOnly,
      rawDigits: digitsOnly
    };
  }

  return {
    isValid: true,
    errorMessage: "",
    formattedNumber: "+91 " + digitsOnly.slice(0, 5) + " " + digitsOnly.slice(5),
    rawDigits: "91" + digitsOnly
  };
}

const Facebook = ({ className, strokeWidth = 1.75 }: { className?: string, strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Instagram = ({ className, strokeWidth = 1.75 }: { className?: string, strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Youtube = ({ className, strokeWidth = 1.75 }: { className?: string, strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);

const Linkedin = ({ className, strokeWidth = 1.75 }: { className?: string, strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const socials = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/harmonyoflife_official/?hl=en" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@Harmonyoflife-01" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/harmony-of-life-0-59ba5a413/" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61591808093320" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

export function CTASection() {
  const [selectedPathway, setSelectedPathway] = useState<PathwayType>("products");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [thankYouOpen, setThankYouOpen] = useState(false);
  
  // Form Data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "",
    cityOrBackground: "",
    description: ""
  });

  // Validation States
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [phoneValidation, setPhoneValidation] = useState<PhoneValidationResult>({
    isValid: false,
    errorMessage: "",
    formattedNumber: "",
    rawDigits: ""
  });

  // Listen to global pathway selection events from NextStepSection
  useEffect(() => {
    const handlePathwayEvent = (e: CustomEvent<PathwayType>) => {
      if (e.detail && ["products", "knowledge", "opportunity"].includes(e.detail)) {
        setSelectedPathway(e.detail);
      }
    };

    window.addEventListener("select-pathway" as unknown as keyof WindowEventMap, handlePathwayEvent as EventListener);
    return () => {
      window.removeEventListener("select-pathway" as unknown as keyof WindowEventMap, handlePathwayEvent as EventListener);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === "phone") {
      // Clean to digits only, max 10 characters
      let digits = value.replace(/\D/g, "");
      
      // Auto-strip leading 0 or 91 if pasted
      if (digits.length === 11 && digits.startsWith("0")) {
        digits = digits.slice(1);
      } else if (digits.length === 12 && digits.startsWith("91")) {
        digits = digits.slice(2);
      }
      
      digits = digits.slice(0, 10);
      
      const validation = validate10DigitPhone(digits);
      setPhoneValidation(validation);
      setFormData(prev => ({ ...prev, phone: digits }));
      return;
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneBlur = () => {
    setPhoneTouched(true);
    setPhoneValidation(validate10DigitPhone(formData.phone));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Strict 10-digit validation check
    setPhoneTouched(true);
    const validation = validate10DigitPhone(formData.phone);
    setPhoneValidation(validation);

    if (!validation.isValid) {
      const phoneInput = document.getElementById("phone");
      phoneInput?.focus();
      return;
    }

    setIsSubmitting(true);
    setThankYouOpen(true);

    const currentConfig = pathwaysInfo[selectedPathway];

    try {
      // 1. Send specific lead to Google Sheets via Web App URL
      const payload = new URLSearchParams();
      payload.append("sheetName", currentConfig.sheetName);
      payload.append("name", formData.name.trim());
      payload.append("phone", validation.formattedNumber || formData.phone);
      payload.append("interest", formData.interest || "General");
      payload.append("background", formData.cityOrBackground.trim() || "");
      payload.append("message", formData.description.trim() || "");

      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          body: payload,
        });
      } catch (err) {
        console.error("Sheets webhook failed:", err);
      }

      // 2. Redirect to WhatsApp with structured pathway message
      let message = `Hello Harmony of Life!\n\n*Name:* ${formData.name.trim()}\n*Phone:* ${validation.formattedNumber || formData.phone}\n*Pathway:* ${currentConfig.title}\n*Interest / Focus:* ${formData.interest || "General"}`;
      
      if (formData.cityOrBackground.trim()) {
        message += `\n*City / Background:* ${formData.cityOrBackground.trim()}`;
      }
      if (formData.description.trim()) {
        message += `\n*Notes:* ${formData.description.trim()}`;
      }

      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, "_blank");

      // Hold dialog open briefly
      setTimeout(() => {
        setThankYouOpen(false);
        setIsSubmitting(false);
        setPhoneTouched(false);
        setFormData({ name: "", phone: "", interest: "", cityOrBackground: "", description: "" });
      }, 1500);

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
      setThankYouOpen(false);
      setIsSubmitting(false);
    }
  };

  const activeConfig = pathwaysInfo[selectedPathway];

  return (
    <section 
      id="cta" 
      className="relative w-full bg-background py-20 sm:py-28 lg:py-32 text-primary overflow-hidden border-t border-primary/10"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-radial from-glow/15 via-accent/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-radial from-secondary/10 to-transparent blur-2xl pointer-events-none -z-10" />

      {/* Thank You Overlay Modal */}
      <AnimatePresence>
        {thankYouOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md px-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-accent/30 text-center max-w-md w-full flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary">Thank You!</h3>
              <p className="font-sans text-primary/75 text-sm sm:text-base mb-4 leading-relaxed">
                Your inquiry for <strong>{activeConfig.title}</strong> has been received. Connecting you directly to our WhatsApp desk...
              </p>
              <Loader2 className="w-6 h-6 animate-spin text-accent" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-360 mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 w-full relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-start"
        >
          {/* ========================================================= */}
          {/* LEFT COLUMN: Manifesto, Socials & Sanctuary Desk (Col 6)  */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col space-y-10">
            <motion.div variants={itemVariants}>
              {/* Tracked Eyebrow Pill */}
              <div className="mb-4">
                <span className="relative overflow-hidden inline-flex items-center gap-2 font-sans font-semibold text-[11px] sm:text-xs tracking-[0.2em] text-primary uppercase bg-background/80 border border-accent/40 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-xs">
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none"
                    animate={{ translateX: ["-120%", "220%"] }}
                    transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
                  />
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  <span>Connect &amp; Begin</span>
                </span>
              </div>

              {/* Dual-Tone Display Title */}
              <h2 className="tracking-tight leading-none mb-3">
                <span className="block font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary tracking-tight leading-[1.08]">
                  Choose Your Pathway,
                </span>
                <span className="block font-heading italic text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-accent leading-[1.12] mt-1 drop-shadow-xs">
                  Transform Your Life.
                </span>
              </h2>

              {/* Amber Gold Divider */}
              <div className="w-14 h-[2.5px] bg-accent my-4 rounded-full" />

              <div className="text-primary/80 font-normal text-sm sm:text-base md:text-lg leading-relaxed space-y-4 max-w-xl">
                <p>
                  Whether you are seeking <strong>pure cellular products</strong>, deeper <strong>holistic health knowledge</strong>, or an inspiring <strong>income opportunity</strong> as a Wellness Relationship Manager, we welcome you to our community.
                </p>
                <p className="font-medium text-accent">
                  ✨ One Mission. Three Paths. Infinite Possibilities.
                </p>
              </div>
            </motion.div>

            {/* Social Channels */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-primary/10">
              <p className="font-sans font-semibold text-primary text-xs tracking-[0.2em] uppercase mb-4">
                Follow Our Sanctuary
              </p>
              <div className="flex flex-wrap gap-3.5">
                {socials.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    className="w-12 h-12 rounded-full bg-white/70 border border-accent/30 flex items-center justify-center text-primary hover:bg-accent hover:text-white hover:border-accent hover:scale-105 active:scale-95 shadow-xs transition-all duration-300 group"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.75} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Direct WhatsApp Sanctuary Hotline */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-primary/10">
              <p className="font-sans font-semibold text-primary text-xs tracking-[0.2em] uppercase mb-2">
                Direct WhatsApp Hotline &amp; Community Desk
              </p>
              <p className="text-primary/75 text-xs sm:text-sm mb-4 max-w-md leading-relaxed">
                Connect with our dedicated wellness mentors directly on WhatsApp for guidance, community updates, and priority assistance.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I would like to connect with Harmony of Life.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white/80 hover:bg-white text-primary border border-accent/40 rounded-full font-sans font-semibold text-xs sm:text-sm shadow-xs hover:shadow-md hover:border-accent transition-all duration-300 group"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Chat with Sanctuary Desk (+91 880 082 8863)</span>
                <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: 3-Pathway Lead Intake Form (Col 6/7)        */}
          {/* ========================================================= */}
          <motion.div 
            variants={itemVariants} 
            className="lg:col-span-6 bg-white/85 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl border border-white/90 self-start lg:sticky lg:top-[max(2rem,calc(50vh-20rem))]"
          >
            {/* Pathway Selection Tabs */}
            <div className="mb-6">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary/70 mb-3 text-center sm:text-left">
                Select Your Desired Pathway:
              </p>
              <div className="grid grid-cols-3 gap-2 bg-background/60 p-1.5 rounded-2xl border border-accent/20">
                {(Object.keys(pathwaysInfo) as PathwayType[]).map((key) => {
                  const item = pathwaysInfo[key];
                  const Icon = item.icon;
                  const isSelected = selectedPathway === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => {
                        setSelectedPathway(key);
                        setFormData(prev => ({ ...prev, interest: "" }));
                      }}
                      className={cn(
                        "flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl font-sans text-xs font-semibold transition-all duration-300 cursor-pointer text-center",
                        isSelected 
                          ? "bg-accent text-white shadow-md shadow-accent/25 scale-[1.02]" 
                          : "text-primary/75 hover:text-primary hover:bg-white/60"
                      )}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="truncate">{item.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pathway Context Header */}
            <div className="mb-6 p-4 rounded-2xl bg-secondary/10 border border-secondary/20">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary">
                {activeConfig.title} Intake
              </h3>
              <p className="font-sans text-xs sm:text-sm text-secondary font-medium mt-0.5">
                {activeConfig.subtitle}
              </p>
            </div>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-primary/20 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent text-sm transition-all shadow-xs"
                    placeholder="Your Name"
                  />
                </div>
                
                {/* Phone Number - Strict 10 Digits */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                      Mobile Number *
                    </label>
                    {phoneTouched && formData.phone && (
                      <span className="text-[11px] font-medium flex items-center gap-1">
                        {phoneValidation.isValid ? (
                          <span className="text-emerald-700 flex items-center gap-0.5">
                            <CheckCircle2 className="w-3.5 h-3.5" /> 10 Digits
                          </span>
                        ) : (
                          <span className="text-red-600 flex items-center gap-0.5">
                            <AlertCircle className="w-3.5 h-3.5" /> {formData.phone.length}/10
                          </span>
                        )}
                      </span>
                    )}
                  </div>
                  
                  {/* Integrated +91 Prefix Input Box */}
                  <div className={cn(
                    "flex items-center bg-white border rounded-xl overflow-hidden text-sm transition-all shadow-xs focus-within:ring-2",
                    phoneTouched && !phoneValidation.isValid
                      ? "border-red-500 focus-within:ring-red-400/50 bg-red-50/20"
                      : phoneTouched && phoneValidation.isValid
                      ? "border-emerald-600 focus-within:ring-emerald-500/30"
                      : "border-primary/20 focus-within:ring-accent focus-within:border-transparent"
                  )}>
                    <span className="px-3 py-3 bg-background/80 text-primary/70 font-mono text-xs font-semibold border-r border-primary/10 select-none">
                      +91
                    </span>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      required
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handlePhoneBlur}
                      className="w-full px-3 py-3 bg-transparent text-sm focus:outline-hidden placeholder:text-primary/35 tracking-wider font-medium"
                      placeholder="9876543210"
                    />
                  </div>

                  {phoneTouched && !phoneValidation.isValid && phoneValidation.errorMessage && (
                    <motion.p 
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[11px] text-red-600 font-medium pl-1 leading-tight"
                    >
                      {phoneValidation.errorMessage}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Dynamic Interest Selection Dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="interest" className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                  {activeConfig.interestLabel}
                </label>
                <select 
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-primary/20 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent text-sm transition-all shadow-xs cursor-pointer"
                >
                  <option value="" disabled>Select option...</option>
                  {activeConfig.interestOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Optional Field for City / Background in Opportunity */}
              {selectedPathway === "opportunity" && (
                <div className="space-y-1.5">
                  <label htmlFor="cityOrBackground" className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                    Your City &amp; Professional Background
                  </label>
                  <input 
                    type="text" 
                    id="cityOrBackground"
                    name="cityOrBackground"
                    value={formData.cityOrBackground}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-primary/20 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent text-sm transition-all shadow-xs"
                    placeholder="e.g. New Delhi, Nutritionist / Entrepreneur"
                  />
                </div>
              )}

              {/* Description / Notes */}
              <div className="space-y-1.5">
                <label htmlFor="description" className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                  Additional Notes (Optional)
                </label>
                <textarea 
                  id="description"
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-primary/20 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent text-sm transition-all shadow-xs resize-none"
                  placeholder={activeConfig.placeholderDescription}
                />
              </div>

              {/* Submit CTA Button (Full Pill with Sheen) */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "relative overflow-hidden w-full bg-accent hover:bg-[#a6782e] text-white font-semibold text-sm sm:text-base py-6 rounded-full shadow-lg shadow-accent/25 hover:shadow-accent/40 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer mt-2"
                )}
              >
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/35 to-transparent skew-x-12 pointer-events-none"
                  animate={{
                    translateX: ["-120%", "220%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                />
                {isSubmitting ? (
                  <span className="relative z-1 flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Recording &amp; Connecting...
                  </span>
                ) : (
                  <span className="relative z-1 flex items-center gap-2">
                    Connect on WhatsApp ({activeConfig.title})
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </button>
            </form>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}
