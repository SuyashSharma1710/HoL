import Navbar from "@/components/ui/Navbar";
import AudioController from "@/components/ui/AudioController";
import Footer from "@/components/ui/Footer";
import Logo from "@/components/ui/Logo";

import dynamic from 'next/dynamic';
import Hero from "@/components/sections/Hero";

// Lazy load below-the-fold components
const Authority = dynamic(() => import("@/components/sections/Authority"), { ssr: true });
const RootCause = dynamic(() => import("@/components/sections/RootCause"), { ssr: true });
const Pillars = dynamic(() => import("@/components/sections/Pillars"), { ssr: true });
const Solution = dynamic(() => import("@/components/sections/Solution"), { ssr: true });
const CommunityIntake = dynamic(() => import("@/components/sections/CommunityIntake"), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen bg-background w-full flex flex-col selection:bg-secondary/30 selection:text-primary relative">
      <Logo />
      <Navbar />
      <AudioController />
      
      <Hero />
      <Authority />
      <RootCause />
      <Pillars />
      <Solution />
      <CommunityIntake />
   

      <Footer />
    </main>
  );
}
