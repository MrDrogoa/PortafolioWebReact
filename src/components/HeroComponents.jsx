import React from "react";
import HeroLinks from "./hero/HeroLinks";
import HeroContent from "./hero/HeroContent";

function HeroComponents() {
  return (
    <section className="max-w-[1200px] mx-auto md:pt-32 lg:pt-44">
      <HeroLinks />
      <HeroContent className="flex flex-col items-center justify-center" />
    </section>
  );
}

export default HeroComponents;
