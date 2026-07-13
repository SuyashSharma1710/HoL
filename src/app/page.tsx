import Navbar from "@/components/ui/Navbar";
import AudioController from "@/components/ui/AudioController";
import Footer from "@/components/ui/Footer";
import Logo from "@/components/ui/Logo";

import Hero from "@/components/sections/Hero";
import Authority from "@/components/sections/Authority";
import RootCause from "@/components/sections/RootCause";
import Pillars from "@/components/sections/Pillars";
import Solution from "@/components/sections/Solution";
import CommunityIntake from "@/components/sections/CommunityIntake";

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
