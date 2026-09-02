"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cookie, 
  ShieldCheck, 
  SlidersHorizontal, 
  Check, 
  X, 
  ChevronRight, 
  Activity, 
  Target, 
  Lock 
} from "lucide-react";
import Link from "next/link";

// Local storage key with schema version
const CONSENT_STORAGE_KEY = "hol_cookie_consent_v1";

export interface CookiePreferences {
  essential: boolean; // Always true
  analytics: boolean; // GA4, Clarity, Performance
  marketing: boolean; // Meta Pixel, Google Ads
  timestamp: string;
}

// Declare gtag on window for TypeScript
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const emptySubscribe = () => () => {};

/**
 * Broadcasts Google Consent Mode v2 signals and updates window dataLayer
 */
function updateGoogleConsentMode(preferences: CookiePreferences) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  }

  // Google Consent Mode v2 4 primary parameters
  const consentArgs = {
    analytics_storage: preferences.analytics ? "granted" : "denied",
    ad_storage: preferences.marketing ? "granted" : "denied",
    ad_user_data: preferences.marketing ? "granted" : "denied",
    ad_personalization: preferences.marketing ? "granted" : "denied",
  };

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", consentArgs);
  } else {
    gtag("consent", "update", consentArgs);
  }

  // Dispatch custom window event for other scripts to react
  window.dispatchEvent(
    new CustomEvent("cookie-consent-updated", {
      detail: preferences,
    })
  );
}

function getStoredConsent(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const item = localStorage.getItem(CONSENT_STORAGE_KEY);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
}

export function CookieConsent() {
  const isClient = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [isVisible, setIsVisible] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  // Preference state
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  // Initialize and apply consent on client
  useEffect(() => {
    const existing = getStoredConsent();
    if (existing) {
      updateGoogleConsentMode(existing);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for global open event (e.g. from footer "Cookie Preferences" link)
  useEffect(() => {
    const handleOpenSettings = () => {
      const existing = getStoredConsent();
      if (existing) {
        setAnalyticsEnabled(existing.analytics);
        setMarketingEnabled(existing.marketing);
      }
      setIsVisible(true);
      setIsPreferencesOpen(true);
    };

    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => window.removeEventListener("open-cookie-settings", handleOpenSettings);
  }, []);

  // Save preferences helper
  const saveConsent = useCallback((prefs: CookiePreferences) => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(prefs));
    } catch (err) {
      console.warn("Could not save cookie preferences to localStorage:", err);
    }
    updateGoogleConsentMode(prefs);
    setIsVisible(false);
    setIsPreferencesOpen(false);
  }, []);

  // Accept All Action
  const handleAcceptAll = () => {
    const prefs: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    setAnalyticsEnabled(true);
    setMarketingEnabled(true);
    saveConsent(prefs);
  };

  // Essential Only Action
  const handleRejectNonEssential = () => {
    const prefs: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    setAnalyticsEnabled(false);
    setMarketingEnabled(false);
    saveConsent(prefs);
  };

  // Custom Selection Save
  const handleSaveCustomPreferences = () => {
    const prefs: CookiePreferences = {
      essential: true,
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
      timestamp: new Date().toISOString(),
    };
    saveConsent(prefs);
  };

  if (!isClient) return null;

  return (
    <>
      {/* Floating Revocation Trigger Pill (Visible when banner is closed) */}
      {!isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsVisible(true);
            setIsPreferencesOpen(true);
          }}
          className="fixed bottom-4 left-4 z-40 p-2.5 bg-white/85 hover:bg-white text-primary/75 hover:text-accent border border-accent/25 rounded-full shadow-lg backdrop-blur-md transition-all duration-200 cursor-pointer flex items-center gap-2 group"
          title="Manage Cookie Preferences"
          aria-label="Manage Cookie Preferences"
        >
          <Cookie className="w-4 h-4 text-accent group-hover:rotate-12 transition-transform" />
          <span className="text-[11px] font-semibold tracking-wider uppercase pr-1 hidden sm:inline-block">
            Cookies
          </span>
        </motion.button>
      )}

      {/* Main Cookie Consent Banner / Preferences Modal */}
      <AnimatePresence>
        {isVisible && (
          <div className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-6 pointer-events-none flex justify-center sm:justify-start">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="pointer-events-auto w-full max-w-xl bg-[#fbf8f2]/95 text-primary rounded-3xl p-5 sm:p-6 shadow-2xl border border-accent/30 backdrop-blur-xl overflow-hidden relative"
            >
              {/* Subtle ambient luxury gold glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-radial from-accent/20 to-transparent blur-2xl pointer-events-none -z-10" />

              {!isPreferencesOpen ? (
                /* Compact Banner View */
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shrink-0">
                        <ShieldCheck className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-heading text-lg font-bold text-primary leading-tight">
                          Sanctuary Privacy &amp; Cookies
                        </h4>
                        <p className="text-[11px] font-semibold text-accent uppercase tracking-wider">
                          DPDP &amp; Google Consent Mode v2
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsVisible(false)}
                      className="p-1 rounded-full text-primary/50 hover:text-primary transition-colors cursor-pointer"
                      aria-label="Dismiss cookie notice"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="font-sans text-xs sm:text-[13px] text-primary/75 leading-relaxed">
                    We use cookies and digital session storage to optimize website performance, measure traffic insights (GA4), and personalize your wellness journey. You can customize your preferences anytime.
                  </p>

                  {/* Action Buttons: Accept All, Essential Only, Customize */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <button
                      onClick={handleAcceptAll}
                      className="flex-1 min-w-[120px] px-4 py-2.5 bg-accent hover:bg-[#a6782e] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md shadow-accent/20 hover:shadow-accent/30 transition-all cursor-pointer text-center"
                    >
                      Accept All
                    </button>

                    <button
                      onClick={handleRejectNonEssential}
                      className="flex-1 min-w-[120px] px-4 py-2.5 bg-white hover:bg-primary/5 text-primary border border-primary/20 font-semibold text-xs sm:text-sm rounded-xl transition-all cursor-pointer text-center"
                    >
                      Essential Only
                    </button>

                    <button
                      onClick={() => setIsPreferencesOpen(true)}
                      className="px-3.5 py-2.5 bg-primary/5 hover:bg-primary/10 text-primary/80 hover:text-primary font-semibold text-xs sm:text-sm rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Preferences</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-primary/60 pt-1 border-t border-primary/10">
                    <Link 
                      href="/cookies" 
                      className="hover:text-accent underline transition-colors flex items-center gap-1"
                    >
                      Read Cookie Policy <ChevronRight className="w-3 h-3" />
                    </Link>
                    <span>Quest Concepts Pvt. Ltd.</span>
                  </div>
                </div>
              ) : (
                /* Granular Preferences Drawer */
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-primary/10">
                    <div className="flex items-center gap-2">
                      <SlidersHorizontal className="w-4 h-4 text-accent" />
                      <h4 className="font-heading text-lg font-bold text-primary">
                        Cookie Preferences
                      </h4>
                    </div>
                    <button
                      onClick={() => setIsPreferencesOpen(false)}
                      className="text-xs font-semibold text-accent hover:underline cursor-pointer flex items-center gap-1"
                    >
                      &larr; Back
                    </button>
                  </div>

                  {/* 3 Categories: Essential, Analytics, Marketing */}
                  <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
                    {/* 1. Essential */}
                    <div className="p-3 bg-white/70 border border-primary/10 rounded-2xl flex items-start justify-between gap-3">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <Lock className="w-3.5 h-3.5 text-accent" />
                          <span className="font-semibold text-xs sm:text-sm text-primary">
                            Strictly Necessary
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold uppercase">
                            Always Active
                          </span>
                        </div>
                        <p className="text-[11px] text-primary/70 leading-snug">
                          Required for security, smooth page transitions, form processing, and remembering your modal interactions.
                        </p>
                      </div>
                      <div className="p-1 rounded-lg bg-primary/10 text-primary/50 shrink-0">
                        <Check className="w-4 h-4 text-emerald-700" />
                      </div>
                    </div>

                    {/* 2. Analytics */}
                    <div className="p-3 bg-white/70 border border-primary/10 rounded-2xl flex items-start justify-between gap-3">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-accent" />
                          <span className="font-semibold text-xs sm:text-sm text-primary">
                            Analytics &amp; Performance
                          </span>
                        </div>
                        <p className="text-[11px] text-primary/70 leading-snug">
                          Helps us understand sanctuary traffic patterns and site speed via Google Analytics (GA4) and Clarity without personal profiling.
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                        <input
                          type="checkbox"
                          checked={analyticsEnabled}
                          onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-300 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent"></div>
                      </label>
                    </div>

                    {/* 3. Marketing */}
                    <div className="p-3 bg-white/70 border border-primary/10 rounded-2xl flex items-start justify-between gap-3">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <Target className="w-3.5 h-3.5 text-accent" />
                          <span className="font-semibold text-xs sm:text-sm text-primary">
                            Marketing &amp; Targeting
                          </span>
                        </div>
                        <p className="text-[11px] text-primary/70 leading-snug">
                          Allows measurement of educational outreach and campaign attribution via Meta Pixel and Google Ads.
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                        <input
                          type="checkbox"
                          checked={marketingEnabled}
                          onChange={(e) => setMarketingEnabled(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-300 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent"></div>
                      </label>
                    </div>
                  </div>

                  {/* Save Custom Buttons */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={handleSaveCustomPreferences}
                      className="flex-1 px-4 py-2.5 bg-accent hover:bg-[#a6782e] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md shadow-accent/20 transition-all cursor-pointer text-center"
                    >
                      Save Preferences
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-4 py-2.5 bg-white hover:bg-primary/5 text-primary border border-primary/20 font-semibold text-xs sm:text-sm rounded-xl transition-all cursor-pointer text-center"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
