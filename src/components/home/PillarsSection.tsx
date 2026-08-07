"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Salad, Sparkles, HeartPulse, FlaskConical, Dna, ShieldPlus, 
  Flame, Moon, Activity, ShieldCheck, Users, TreePine, 
  Zap, X, ChevronLeft, ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const pillars = [
  { name: "Balance Nutrition", icon: Salad, image: "/images/Balance-Nutrition.jpeg", description: "Fuel your cells with living, electron-rich foods that restore your biological battery and promote optimal vitality." },
  { name: "Deep Detox", icon: Sparkles, image: "/images/Deep-Detox.jpeg", description: "Purge heavy metals, chemical toxins, and stagnant energy to open the pathways for true cellular repair." },
  { name: "Artery Cleanse", icon: HeartPulse, image: "/images/Artery-Cleanse.jpeg", description: "Clear the highways of your cardiovascular system, ensuring oxygen and nutrients flow freely to every cell." },
  { name: "Alkaline Chemistry", icon: FlaskConical, image: "/images/Alkaline-Chemistry.jpeg", description: "Create an internal environment where disease cannot survive by balancing your body's pH levels." },
  { name: "Cellular Vitality", icon: Dna, image: "/images/Cellular-Vitality.jpeg", description: "Reignite your mitochondria to produce massive amounts of ATP, the pure energy currency of your body." },
  { name: "Gut Reset", icon: ShieldPlus, image: "/images/Gut-Reset.jpeg", description: "Restore your microbiome to properly absorb nutrients and eliminate systemic inflammation at the source." },
  { name: "Inflammation", icon: Flame, image: "/images/Inflammation.jpeg", description: "Extinguish the silent, smoldering fires inside your body that accelerate aging and drain your lifeforce." },
  { name: "Deep Sleep", icon: Moon, image: "/images/Deep-Sleep.jpeg", description: "Enter the profound restorative states of sleep where your brain cleanses itself and your body rebuilds." },
  { name: "Regular Exercise", icon: Activity, image: "/images/Regular-Exercise.jpeg", description: "Move your physical vessel to circulate lymph, build structural integrity, and force cellular adaptation." },
  { name: "Immunity", icon: ShieldCheck, image: "/images/Immunity.jpeg", description: "Build an impenetrable biological defense system capable of identifying and neutralizing modern threats." },
  { name: "Social Connect", icon: Users, image: "/images/Social-Connect.jpeg", description: "Harmonize your nervous system through deep, meaningful human connections and tribal belonging." },
  { name: "Nature Connect", icon: TreePine, image: "/images/Nature-Connect.jpeg", description: "Ground yourself to the Earth's natural magnetic field to discharge EMFs and absorb free electrons." },
];

export function PillarsSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % pillars.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + pillars.length) % pillars.length);
    }
  };

  const selectedPillar = selectedIndex !== null ? pillars[selectedIndex] : null;

  return (
    <section id="pillars" className="relative w-full bg-primary py-24 sm:py-32 overflow-hidden text-background">
      {/* Internal CSS for the continuous counter-rotating animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-ccw {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .orbit-ring {
          animation: spin-cw 60s linear infinite;
        }
        .orbit-node {
          animation: spin-ccw 60s linear infinite;
        }
        .orbit-container:hover .orbit-ring,
        .orbit-container:hover .orbit-node {
          animation-play-state: paused;
        }
        .orbit-container { --orbit-radius: 155px; }
        @media (min-width: 640px) { .orbit-container { --orbit-radius: 240px; } }
        @media (min-width: 1024px) { .orbit-container { --orbit-radius: 340px; } }
      `}} />

      {/* Subtle Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-accent/5 via-primary to-primary pointer-events-none z-0" />

      {/* Static Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top Left */}
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-150 max-h-150 opacity-[0.08]">
          <Image src="/logo.svg" alt="Harmony of Life decorative element" fill className="object-contain" />
        </div>
        {/* Bottom Right */}
        <div className="absolute top-[40%] right-[-15%] w-[80vw] h-[80vw] max-w-200 max-h-200 opacity-[0.08]">
          <Image src="/logo.svg" alt="Harmony of Life decorative element" fill className="object-contain" />
        </div>
        {/* Top Right Small Cluster */}
        <div className="absolute top-[5%] right-[5%] w-[40vw] h-[40vw] max-w-100 max-h-100 opacity-[0.06]">
          <div className="absolute top-[10%] right-[30%] w-16 h-16"><Image src="/logo.svg" alt="Harmony of Life decorative element" fill className="object-contain rotate-12" /></div>
          <div className="absolute top-[30%] right-[10%] w-12 h-12"><Image src="/logo.svg" alt="Harmony of Life decorative element" fill className="object-contain -rotate-12" /></div>
          <div className="absolute top-[50%] right-[50%] w-20 h-20"><Image src="/logo.svg" alt="Harmony of Life decorative element" fill className="object-contain rotate-45" /></div>
          <div className="absolute top-[70%] right-[20%] w-14 h-14"><Image src="/logo.svg" alt="Harmony of Life decorative element" fill className="object-contain -rotate-90" /></div>
          <div className="absolute top-[20%] right-[70%] w-10 h-10"><Image src="/logo.svg" alt="Harmony of Life decorative element" fill className="object-contain -rotate-45" /></div>
          <div className="absolute top-[80%] right-[70%] w-8 h-8"><Image src="/logo.svg" alt="Harmony of Life decorative element" fill className="object-contain rotate-180" /></div>
        </div>
        {/* Bottom Left Small Cluster */}
        <div className="absolute bottom-[5%] left-[5%] w-[40vw] h-[40vw] max-w-100 max-h-100 opacity-[0.06]">
          <div className="absolute bottom-[15%] left-[20%] w-16 h-16"><Image src="/logo.svg" alt="Harmony of Life decorative element" fill className="object-contain -rotate-12" /></div>
          <div className="absolute bottom-[35%] left-[50%] w-12 h-12"><Image src="/logo.svg" alt="Harmony of Life decorative element" fill className="object-contain rotate-45" /></div>
          <div className="absolute bottom-[55%] left-[10%] w-20 h-20"><Image src="/logo.svg" alt="Harmony of Life decorative element" fill className="object-contain rotate-90" /></div>
          <div className="absolute bottom-[75%] left-[40%] w-14 h-14"><Image src="/logo.svg" alt="Harmony of Life decorative element" fill className="object-contain rotate-180" /></div>
          <div className="absolute bottom-[20%] left-[70%] w-10 h-10"><Image src="/logo.svg" alt="Harmony of Life decorative element" fill className="object-contain rotate-12" /></div>
          <div className="absolute bottom-[80%] left-[80%] w-8 h-8"><Image src="/logo.svg" alt="Harmony of Life decorative element" fill className="object-contain -rotate-45" /></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 flex flex-col items-center"
        >
          <p className="font-semibold text-accent tracking-widest uppercase text-sm mb-4">
            The Framework
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-background font-semibold leading-[1.15] mb-8">
            How we restore your cellular charge
          </h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-8 relative flex items-center justify-center group"
          >
            {/* Pill Starburst Beams & Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110">
              {/* Central Hotspot */}
              <div className="absolute w-[110%] h-[150%] rounded-full bg-accent/20 blur-xl" />
              
              {/* Flare Beams */}
              <div className="absolute w-[140%] h-[1.5px] bg-linear-to-r from-transparent via-accent/90 to-transparent blur-[1px] transform rotate-0" />
              <div className="absolute h-50 w-[1.5px] bg-linear-to-b from-transparent via-accent/90 to-transparent blur-[1px] transform rotate-0" />
              <div className="absolute w-[60%] h-0.5 bg-linear-to-r from-transparent via-accent/50 to-transparent blur-[2px] transform rotate-35" />
              <div className="absolute w-[60%] h-0.5 bg-linear-to-r from-transparent via-accent/50 to-transparent blur-[2px] transform -rotate-35" />
            </div>

            <div className="relative z-10 flex items-center gap-4 bg-primary/40 backdrop-blur-xl px-8 py-4 rounded-full border border-white/10 shadow-[0_0_30px_rgba(182,156,95,0.15)]">
              <Zap className="w-8 h-8 text-accent animate-pulse" />
              <p className="font-heading text-xl md:text-2xl font-semibold text-background tracking-wide">
                Direct charge, Meditation, Dhyan
              </p>
            </div>
          </motion.div>
          <p className="text-background/70 font-medium text-lg leading-relaxed">
            A holistic protocol designed to address the root electrical cause of disease, increasing your lifeforce one pillar at a time.
          </p>
        </motion.div>

        {/* Orbit Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] as const }}
          className="orbit-container relative w-full max-w-200 aspect-square flex items-center justify-center my-8 md:my-0"
        >
          
          {/* Sun-like Flare Effect */}
          <div className="absolute z-10 flex items-center justify-center pointer-events-none animate-pulse" style={{ animationDuration: '5s' }}>
            <div className="absolute w-48 h-48 rounded-full bg-white/80 blur-2xl z-10" />
            <div className="absolute w-100 h-100 rounded-full bg-accent/40 blur-[90px]" />
            <div className="absolute w-175 h-175 rounded-full bg-accent/10 blur-[120px]" />
            <div className="absolute w-225 h-1 bg-linear-to-r from-transparent via-accent/80 to-transparent blur-xs transform rotate-0" />
            <div className="absolute w-225 h-1 bg-linear-to-r from-transparent via-accent/80 to-transparent blur-xs transform rotate-90" />
            <div className="absolute w-225 h-2 bg-linear-to-r from-transparent via-accent/40 to-transparent blur-sm transform rotate-45" />
            <div className="absolute w-225 h-2 bg-linear-to-r from-transparent via-accent/40 to-transparent blur-sm transform -rotate-45" />
          </div>
          
          {/* Static Center Core */}
          <div className="absolute z-20 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-primary border border-secondary/30 shadow-2xl flex flex-col items-center justify-center p-4 sm:p-8 text-center pointer-events-auto">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl text-accent mb-1 sm:mb-2">12</h2>
            <h3 className="font-heading text-base sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 leading-tight text-background">
              Foundational Pillars of Optimal Health
            </h3>
            <div className="w-8 sm:w-12 h-1 bg-accent mb-2 sm:mb-4 rounded-full" />
            <p className="text-background/80 font-semibold text-[10px] sm:text-xs lg:text-sm uppercase tracking-widest hidden sm:block">
              The Science<br/>of Living Young
            </p>
          </div>

          {/* Rotating Ring */}
          <div className="absolute inset-0 rounded-full orbit-ring">
            
            {/* The 12 Pillars Nodes */}
            {pillars.map((pillar, index) => {
              const angle = (index / 12) * Math.PI * 2;
              const adjustedAngle = angle - Math.PI / 2;
              const cos = Math.cos(adjustedAngle).toFixed(4);
              const sin = Math.sin(adjustedAngle).toFixed(4);

              return (
                <div 
                  key={pillar.name}
                  className="absolute left-1/2 top-1/2 w-0 h-0"
                  style={{ transform: `translate(calc(var(--orbit-radius) * ${cos}), calc(var(--orbit-radius) * ${sin}))` }}
                >
                  <div 
                    onClick={() => setSelectedIndex(index)}
                    className="orbit-node absolute -left-10 -top-10 w-20 h-20 sm:-left-12 sm:-top-12 sm:w-24 sm:h-24 lg:-left-16 lg:-top-16 lg:w-32 lg:h-32 flex flex-col items-center justify-center gap-1 sm:gap-2 lg:gap-3 group cursor-pointer"
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Mini Star Flare Beams (Outside Glow) */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500">
                        <div className="absolute w-[250%] h-px bg-linear-to-r from-transparent via-accent/80 to-transparent blur-[1px] transform rotate-0" />
                        <div className="absolute w-[250%] h-px bg-linear-to-r from-transparent via-accent/80 to-transparent blur-[1px] transform rotate-90" />
                        <div className="absolute w-[180%] h-0.5 bg-linear-to-r from-transparent via-accent/40 to-transparent blur-[2px] transform rotate-45" />
                        <div className="absolute w-[180%] h-0.5 bg-linear-to-r from-transparent via-accent/40 to-transparent blur-[2px] transform -rotate-45" />
                      </div>

                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-primary border border-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(233,224,207,0.3)] group-hover:shadow-[0_0_25px_rgba(182,156,95,0.6)] group-hover:scale-110 group-hover:border-accent transition-all duration-300">
                        {/* Icon */}
                        <pillar.icon className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-background group-hover:text-accent transition-colors" />
                      </div>
                    </div>
                    <span className="text-[9px] sm:text-xs lg:text-sm font-semibold text-background/90 text-center leading-tight bg-primary/80 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/10 whitespace-nowrap">
                      {pillar.name}
                    </span>
                  </div>
                </div>
              );
            })}

          </div>
        </motion.div>

        {/* Bottom Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-16 sm:mt-24"
        >
          <Link 
            href="#cta"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-background text-primary hover:bg-background/90 rounded-[8px] px-12 py-6 font-medium text-base transition-transform hover:scale-105 shadow-lg shadow-black/20"
            )}
          >
            Start Your Wellness Journey
          </Link>
        </motion.div>

      </div>

      {/* Pillar Details Split Modal */}
      <AnimatePresence>
        {selectedPillar && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-full overflow-y-auto overflow-x-hidden bg-background shadow-2xl rounded-3xl flex flex-col md:flex-row"
            >
              {/* Close Button (Absolute to the whole modal) */}
              <button 
                onClick={() => setSelectedIndex(null)}
                className="absolute z-20 top-4 right-4 p-2 bg-white/50 backdrop-blur-md text-primary/70 hover:text-primary transition-colors rounded-full hover:bg-secondary/20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side - Full Image */}
              <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto md:min-h-125 bg-primary/5">
                <Image 
                  src={selectedPillar.image} 
                  alt={selectedPillar.name}
                  fill
                  className="object-cover object-center"
                />
                {/* Subtle overlay gradient so the image isn't too flat */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>

              {/* Right Side - Content & Navigation */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-8 text-accent shadow-inner">
                    <selectedPillar.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-6">
                    {selectedPillar.name}
                  </h3>
                  
                  <p className="text-primary/70 font-medium text-lg leading-relaxed mb-8">
                    {selectedPillar.description}
                  </p>
                  
                  <Link 
                    href="#cta"
                    onClick={() => setSelectedIndex(null)}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "bg-primary text-background hover:bg-primary/90 rounded-[8px] w-full font-medium text-base transition-transform hover:scale-[1.02] shadow-lg shadow-primary/10"
                    )}
                  >
                    Start Your Wellness Journey
                  </Link>
                </div>

                {/* Bottom Navigation */}
                <div className="flex items-center justify-between pt-8 border-t border-secondary/20 mt-auto">
                  <button 
                    onClick={handlePrev}
                    className="flex items-center gap-2 px-4 py-2 text-primary font-semibold hover:text-accent transition-colors group"
                  >
                    <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    Previous
                  </button>
                  
                  <span className="text-primary/40 font-medium text-sm">
                    {selectedIndex !== null ? selectedIndex + 1 : 0} / 12
                  </span>

                  <button 
                    onClick={handleNext}
                    className="flex items-center gap-2 px-4 py-2 text-primary font-semibold hover:text-accent transition-colors group"
                  >
                    Next
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
