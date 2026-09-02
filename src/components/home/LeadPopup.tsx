"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Loader2, 
  ArrowRight, 
  ShieldCheck, 
  Leaf,
  HeartHandshake
} from "lucide-react";
import { cn } from "@/lib/utils";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzuY67g9zupwshXnrtnisfZoqJKjgzNs2TnmgRDmSbJ0IXVn3UAT0VDEaBPXgvTzwV7/exec";

// Common email typo dictionary for auto-suggestions
const COMMON_EMAIL_DOMAINS: Record<string, string> = {
  "gmial.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gamil.com": "gmail.com",
  "gmaill.com": "gmail.com",
  "yaho.com": "yahoo.com",
  "yahooo.com": "yahoo.com",
  "hotmial.com": "hotmail.com",
  "hotmai.com": "hotmail.com",
  "outlok.com": "outlook.com",
  "outloo.com": "outlook.com",
  "rediff.com": "rediffmail.com",
  "redifmail.com": "rediffmail.com",
};

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form Fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [referral, setReferral] = useState("");
  const [honeypot, setHoneypot] = useState("");

  // Validation States
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [cityTouched, setCityTouched] = useState(false);

  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSuggestion, setEmailSuggestion] = useState<string | null>(null);

  const popupCardRef = useRef<HTMLDivElement>(null);

  // Auto-trigger setup (Timeout / Scroll / Exit Intent / Custom Event)
  useEffect(() => {
    // Check if already dismissed or submitted in this session
    const hasInteracted = sessionStorage.getItem("hol_popup_interacted");
    if (hasInteracted) return;

    // 1. Timed trigger: Show after 9 seconds
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("hol_popup_interacted")) {
        setIsOpen(true);
      }
    }, 9000);

    // 2. Scroll trigger: Show when user scrolls past 35% of page
    const handleScroll = () => {
      if (sessionStorage.getItem("hol_popup_interacted")) return;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrolled = (window.scrollY / scrollHeight) * 100;
        if (scrolled >= 35) {
          setIsOpen(true);
        }
      }
    };

    // 3. Exit Intent trigger: Mouse moves towards top of viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (sessionStorage.getItem("hol_popup_interacted")) return;
      if (e.clientY <= 15) {
        setIsOpen(true);
      }
    };

    // 4. Custom Event trigger
    const handleCustomOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("open-lead-popup", handleCustomOpen);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("open-lead-popup", handleCustomOpen);
    };
  }, []);

  // Dismiss handler
  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hol_popup_interacted", "true");
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Phone validation
  const validatePhone = (raw: string) => {
    const cleaned = raw.replace(/\D/g, "");
    if (!cleaned) {
      return { isValid: false, message: "WhatsApp number is required." };
    }
    if (cleaned.length !== 10) {
      return { isValid: false, message: "Please enter a valid 10-digit mobile number." };
    }
    if (!/^[6-9]/.test(cleaned)) {
      return { isValid: false, message: "Indian mobile numbers must start with 6, 7, 8, or 9." };
    }
    if (/^(\d)\1{9}$/.test(cleaned)) {
      return { isValid: false, message: "Please enter a valid mobile number." };
    }
    return { isValid: true, message: "" };
  };

  // Email validation
  const validateEmail = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) {
      return { isValid: false, message: "Email ID is required.", suggestion: null };
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmed)) {
      return { isValid: false, message: "Please enter a valid email address.", suggestion: null };
    }

    const parts = trimmed.split("@");
    if (parts.length === 2) {
      const domain = parts[1].toLowerCase();
      if (COMMON_EMAIL_DOMAINS[domain]) {
        const suggested = `${parts[0]}@${COMMON_EMAIL_DOMAINS[domain]}`;
        return { isValid: false, message: `Did you mean ${suggested}?`, suggestion: suggested };
      }
    }

    return { isValid: true, message: "", suggestion: null };
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(val);
    if (phoneTouched) {
      const res = validatePhone(val);
      setPhoneError(res.message);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    if (emailTouched) {
      const res = validateEmail(val);
      setEmailError(res.message);
      setEmailSuggestion(res.suggestion);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot bot protection
    if (honeypot) return;

    setPhoneTouched(true);
    setEmailTouched(true);
    setCityTouched(true);

    const pVal = validatePhone(phone);
    const eVal = validateEmail(email);

    if (!name.trim()) return;
    if (!pVal.isValid) {
      setPhoneError(pVal.message);
      return;
    }
    if (!eVal.isValid) {
      setEmailError(eVal.message);
      setEmailSuggestion(eVal.suggestion);
      return;
    }
    if (!city.trim()) return;

    setIsSubmitting(true);

    try {
      const payload = new URLSearchParams();
      payload.append("sheetName", "Popup");
      payload.append("name", name.trim());
      payload.append("phone", phone.trim());
      payload.append("email", email.trim());
      payload.append("city", city.trim());
      payload.append("referral", referral.trim());

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          body: payload,
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
      } catch (err) {
        console.error("Popup Sheet webhook notice:", err);
      }

      setIsSubmitted(true);
      sessionStorage.setItem("hol_popup_interacted", "true");

      // Auto close after celebrating
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitting(false);
        setIsSubmitted(false);
      }, 2500);

    } catch (err) {
      console.error("Popup submission error:", err);
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
          {/* Glassmorphic backdrop with smooth fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#0c1c16]/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            ref={popupCardRef}
            initial={{ opacity: 0, scale: 0.88, y: 30, rotateX: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
            className="relative w-full max-w-lg bg-[#fbf8f2] text-primary rounded-3xl p-6 sm:p-8 shadow-2xl border border-accent/30 overflow-hidden z-10"
          >
            {/* Ambient gold corner highlights */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-radial from-accent/20 via-glow/10 to-transparent blur-2xl pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-radial from-secondary/15 to-transparent blur-xl pointer-events-none -z-10" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-primary/5 hover:bg-primary/10 text-primary/70 hover:text-primary transition-all duration-200 cursor-pointer z-20 group"
              aria-label="Close form"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Content Area */}
            {!isSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Header Badge & Title */}
                <div className="text-center mb-5">
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-semibold text-xs uppercase tracking-wider mb-2.5 shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
                    <span>Exclusive Sanctuary Access</span>
                  </motion.div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-primary leading-tight">
                    Begin Your Longevity Journey
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-primary/70 mt-1.5 max-w-sm mx-auto leading-relaxed">
                    Connect with our wellness sanctuary to unlock cellular vitality protocols &amp; personalized guidance.
                  </p>
                </div>

                {/* Form Elements */}
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Honeypot anti-spam */}
                  <input
                    type="text"
                    name="website_hol_check"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* 1. Name & 2. WhatsApp Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-primary/80">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 bg-white border border-primary/20 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent text-sm transition-all shadow-xs"
                      />
                    </div>

                    {/* WhatsApp No */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-primary/80">
                        WhatsApp No *
                      </label>
                      <div className={cn(
                        "flex items-center bg-white border rounded-xl overflow-hidden focus-within:ring-2 transition-all shadow-xs",
                        phoneTouched && phoneError
                          ? "border-red-500 focus-within:ring-red-400/50 bg-red-50/20"
                          : phoneTouched && !phoneError && phone.length === 10
                          ? "border-emerald-600 focus-within:ring-emerald-500/30"
                          : "border-primary/20 focus-within:ring-accent focus-within:border-transparent"
                      )}>
                        <span className="px-3 py-2.5 bg-primary/5 text-primary/70 text-xs font-semibold border-r border-primary/10">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          inputMode="numeric"
                          pattern="[0-9]*"
                          maxLength={10}
                          value={phone}
                          onChange={handlePhoneChange}
                          onBlur={() => {
                            setPhoneTouched(true);
                            const res = validatePhone(phone);
                            setPhoneError(res.message);
                          }}
                          placeholder="9876543210"
                          className="w-full px-3 py-2.5 bg-transparent text-sm focus:outline-hidden placeholder:text-primary/35 tracking-wider font-medium"
                        />
                      </div>
                      {phoneTouched && phoneError && (
                        <p className="text-[10px] text-red-600 font-medium pl-0.5 leading-tight">
                          {phoneError}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 3. Email id & 4. City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Email id */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-primary/80">
                        Email id *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={() => {
                          setEmailTouched(true);
                          const res = validateEmail(email);
                          setEmailError(res.message);
                          setEmailSuggestion(res.suggestion);
                        }}
                        placeholder="you@example.com"
                        className={cn(
                          "w-full px-3.5 py-2.5 bg-white border rounded-xl focus:outline-hidden focus:ring-2 text-sm transition-all shadow-xs",
                          emailTouched && emailError
                            ? "border-red-500 focus:ring-red-400/50 bg-red-50/20"
                            : emailTouched && !emailError && email
                            ? "border-emerald-600 focus:ring-emerald-500/30"
                            : "border-primary/20 focus:ring-accent focus:border-transparent"
                        )}
                      />
                      {emailTouched && emailError && (
                        <p className="text-[10px] text-red-600 font-medium pl-0.5 leading-tight">
                          {emailError}
                          {emailSuggestion && (
                            <button
                              type="button"
                              onClick={() => {
                                setEmail(emailSuggestion);
                                setEmailError("");
                                setEmailSuggestion(null);
                              }}
                              className="ml-1 underline font-bold cursor-pointer text-accent hover:text-accent/80"
                            >
                              Apply
                            </button>
                          )}
                        </p>
                      )}
                    </div>

                    {/* City */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-primary/80">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onBlur={() => setCityTouched(true)}
                        placeholder="e.g. New Delhi, Mumbai"
                        className={cn(
                          "w-full px-3.5 py-2.5 bg-white border rounded-xl focus:outline-hidden focus:ring-2 text-sm transition-all shadow-xs",
                          cityTouched && !city.trim()
                            ? "border-red-500 focus:ring-red-400/50"
                            : "border-primary/20 focus:ring-accent focus:border-transparent"
                        )}
                      />
                      {cityTouched && !city.trim() && (
                        <p className="text-[10px] text-red-600 font-medium pl-0.5 leading-tight">
                          City is required.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 5. Referral Name if any */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-primary/80">
                      Referral Name if any:
                    </label>
                    <input
                      type="text"
                      value={referral}
                      onChange={(e) => setReferral(e.target.value)}
                      placeholder="Referral name (Optional)"
                      className="w-full px-3.5 py-2.5 bg-white border border-primary/20 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-accent focus:border-transparent text-sm transition-all shadow-xs"
                    />
                  </div>

                  {/* Submit CTA */}
                  <motion.button
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="relative overflow-hidden w-full bg-accent hover:bg-[#a6782e] text-white font-semibold text-sm sm:text-base py-3.5 rounded-xl shadow-lg shadow-accent/25 hover:shadow-accent/40 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer mt-3"
                  >
                    {/* Animated light-streak reflection */}
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/35 to-transparent skew-x-12 pointer-events-none"
                      animate={{ translateX: ["-120%", "220%"] }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    />

                    {isSubmitting ? (
                      <span className="relative z-1 flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Recording Access...
                      </span>
                    ) : (
                      <span className="relative z-1 flex items-center gap-2">
                        Claim Your VIP Sanctuary Access
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </motion.button>

                  {/* Trust footer note */}
                  <div className="flex items-center justify-center gap-4 pt-1 text-[11px] text-primary/55 font-medium">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-accent" /> 100% Privacy Protected
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Leaf className="w-3.5 h-3.5 text-accent" /> Holistic Protocols
                    </span>
                  </div>
                </form>
              </motion.div>
            ) : (
              /* Success / Gratitude State */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center flex flex-col items-center justify-center gap-3"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="w-16 h-16 bg-accent/20 border border-accent/40 rounded-full flex items-center justify-center shadow-lg shadow-accent/20"
                >
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </motion.div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary mt-2">
                  Welcome to Harmony of Life!
                </h3>
                <p className="font-sans text-xs sm:text-sm text-primary/75 max-w-xs mx-auto leading-relaxed">
                  Your details have been registered in our sanctuary log. Our wellness advisors look forward to guiding your longevity transformation.
                </p>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-primary/60 text-xs font-semibold mt-2">
                  <HeartHandshake className="w-3.5 h-3.5 text-accent" />
                  <span>Sanctuary Lead Logged</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
