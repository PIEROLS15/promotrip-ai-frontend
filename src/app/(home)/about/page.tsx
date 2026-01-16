"use client";

import { useState } from "react";

import Header from "@/components/home/layout/header";
import Footer from "@/components/home/layout/footer";

import HeroSection from "@/components/home/about/HeroSection";
import StatsGrid from "@/components/home/about/StatsGrid";
import MissionVision from "@/components/home/about/MissionVision";
import ValuesGrid from "@/components/home/about/ValuesGrid";
import TeamGrid from "@/components/home/about/TeamGrid";
import WhyChooseUs from "@/components/home/about/WhyChooseUs";

const About = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <HeroSection />
        <StatsGrid />
        <MissionVision />
        <ValuesGrid />
        <TeamGrid />
        <WhyChooseUs />
      </main>

    </div>
  );
};

export default About;
