import { Hero } from "@/components/home/Hero";
import { HealthspanSection } from "@/components/home/HealthspanSection";
import { ElectricSection } from "@/components/home/ElectricSection";
import { InhibitorsSection } from "@/components/home/InhibitorsSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { GutResetSection } from "@/components/home/GutResetSection";
import { CommunitySection } from "@/components/home/CommunitySection";

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
