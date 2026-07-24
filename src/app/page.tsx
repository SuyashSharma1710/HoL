import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";

const HealthspanSection = dynamic(() => import("@/components/home/HealthspanSection").then(mod => mod.HealthspanSection));
const ElectricSection = dynamic(() => import("@/components/home/ElectricSection").then(mod => mod.ElectricSection));
const InhibitorsSection = dynamic(() => import("@/components/home/InhibitorsSection").then(mod => mod.InhibitorsSection));
const PillarsSection = dynamic(() => import("@/components/home/PillarsSection").then(mod => mod.PillarsSection));
const GutResetSection = dynamic(() => import("@/components/home/GutResetSection").then(mod => mod.GutResetSection));
const CommunitySection = dynamic(() => import("@/components/home/CommunitySection").then(mod => mod.CommunitySection));

export default function Home() {
  return (
    <main className="min-h-dvh bg-background w-full flex flex-col">
      <Hero />
      <HealthspanSection />
      <ElectricSection />
      <InhibitorsSection />
      <PillarsSection />
      <GutResetSection />
      <CommunitySection />
    </main>
  );
}
