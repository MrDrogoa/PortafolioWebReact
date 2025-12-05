import React from "react";
import HeroLinks from "./hero/HeroLinks";
import HeroContent from "./hero/HeroContent";
import HeroIcons from "./hero/HeroIcons";

function HeroComponents() {
  return (
    <section className="max-w-[1300px] m-auto relative md:pt-32 lg:pt-44">
      <HeroIcons />
      <HeroLinks />
      <HeroContent className="flex flex-col items-center justify-center" />
    </section>
  );
}

export default HeroComponents;
