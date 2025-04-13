import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { GameModes } from "@/components/home/GameModes";
import { LeaderboardSection } from "@/components/home/LeaderboardSection";
import { QuestionSection } from "@/components/home/QuestionSection";

const Index = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center">
      <div className="flex w-full flex-col overflow-hidden items-center px-2.5 py-6 max-md:max-w-full" style={{ background: "linear-gradient(0deg, #45BAD8 0%, #45BAD8 100%)" }}>
        <Header />
        <HeroSection />
      </div>

      <GameModes />

      <LeaderboardSection />

      <QuestionSection />

      <Footer />
    </div>
  );
};

export default Index;
