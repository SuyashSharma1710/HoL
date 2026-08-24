import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";

const ValuePropsBanner = dynamic(() => import("@/components/home/ValuePropsBanner").then(mod => mod.ValuePropsBanner));
const AgingSlidesSection = dynamic(() => import("@/components/home/AgingSlidesSection").then(mod => mod.AgingSlidesSection));
const WhyHolSection = dynamic(() => import("@/components/home/WhyHolSection").then(mod => mod.WhyHolSection));
const PhilosophySection = dynamic(() => import("@/components/home/PhilosophySection").then(mod => mod.PhilosophySection));
const CellularWorldSection = dynamic(() => import("@/components/home/CellularWorldSection").then(mod => mod.CellularWorldSection));
const PillarsSection = dynamic(() => import("@/components/home/PillarsSection").then(mod => mod.PillarsSection));
const AuthoritySection = dynamic(() => import("@/components/home/AuthoritySection").then(mod => mod.AuthoritySection));
const TestimonialsSection = dynamic(() => import("@/components/home/TestimonialsSection").then(mod => mod.TestimonialsSection));
const NextStepSection = dynamic(() => import("@/components/home/NextStepSection").then(mod => mod.NextStepSection));
const CTASection = dynamic(() => import("@/components/home/CTASection").then(mod => mod.CTASection));

export default function Home() {
  return (
    <main className="min-h-dvh bg-background w-full flex flex-col">
      <Hero />
      <ValuePropsBanner />
      <AgingSlidesSection />
      <WhyHolSection />
      <PhilosophySection />
      <CellularWorldSection />
      <PillarsSection />
      <AuthoritySection />
      <TestimonialsSection />
      <NextStepSection />
      <CTASection />
    </main>
  );
}
