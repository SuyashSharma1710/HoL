import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";

const WelcomeSection = dynamic(() => import("@/components/home/WelcomeSection").then(mod => mod.WelcomeSection));
const HealthspanSection = dynamic(() => import("@/components/home/HealthspanSection").then(mod => mod.HealthspanSection));
const ElectricSection = dynamic(() => import("@/components/home/ElectricSection").then(mod => mod.ElectricSection));
const InhibitorsSection = dynamic(() => import("@/components/home/InhibitorsSection").then(mod => mod.InhibitorsSection));
const PillarsSection = dynamic(() => import("@/components/home/PillarsSection").then(mod => mod.PillarsSection));
const GutResetSection = dynamic(() => import("@/components/home/GutResetSection").then(mod => mod.GutResetSection));
const CommunitySection = dynamic(() => import("@/components/home/CommunitySection").then(mod => mod.CommunitySection));
const AuthoritySection = dynamic(() => import("@/components/home/AuthoritySection").then(mod => mod.AuthoritySection));
const TestimonialsSection = dynamic(() => import("@/components/home/TestimonialsSection").then(mod => mod.TestimonialsSection));
const LivingYoungSection = dynamic(() => import("@/components/home/LivingYoungSection").then(mod => mod.LivingYoungSection));
const CTASection = dynamic(() => import("@/components/home/CTASection").then(mod => mod.CTASection));

export default function Home() {
  return (
    <main className="min-h-dvh bg-background w-full flex flex-col">
      <Hero />
      <WelcomeSection />
      <HealthspanSection />
      <ElectricSection />
      <InhibitorsSection />
      <PillarsSection />
      <GutResetSection />
      <AuthoritySection />
      <CommunitySection />
      <TestimonialsSection />
      <LivingYoungSection />
      <CTASection />
    </main>
  );
}
