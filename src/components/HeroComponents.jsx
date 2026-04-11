import React from "react";
import HeroLinks from "@/components/hero/HeroLinks";
import HeroContent from "@/components/hero/HeroContent";
import HeroIcons from "@/components/hero/HeroIcons";
import "@/css/ModeLight/hero/HeroModeLight.css";

function HeroComponents() {
  return (
    <section className="hero-mode max-w-[1300px] m-auto relative px-4 md:pt-32 lg:pt-44">
      <HeroIcons />
      <HeroLinks />
      <HeroContent className="flex flex-col items-center justify-center" />
    </section>
  );
}

export default HeroComponents;
