import React from "react";
import HeroSection from "./(sections)/HeroSection";
import Choose from "./(sections)/Choose";
import Stats from "./(sections)/Stats";
import MissionVision from "./(sections)/MissionVision";
import ApproachAndValues from "./(sections)/ApproachAndValues";
import GlobalAndProblems from "./(sections)/GlobalAndProblems";
import HomeForm from "../(homepage)/HomeForm";
export default function Page() {
  return (
    <>
      <HeroSection />
      <Choose />
      <MissionVision />
      <Stats />
      <ApproachAndValues />
      <GlobalAndProblems />
      <HomeForm />
    </>
  );
}
