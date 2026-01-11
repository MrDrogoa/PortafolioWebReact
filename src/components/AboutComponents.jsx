import React from "react";
import TitleSection from "@/components/TitleSection";
import AboutCharacter from "@/components/main/about/AboutCharacter";
import AnimatedTestimonialsDemo from "@/components/main/about/AnimatedTestimonialsDemo";
import Carousel from "@/components/main/Carousel";
import ButtonArrowReturnComponents from "@/components/buttons/ButtonArrowReturnComponents";

function AboutComponents() {
  return (
    <section className="max-w-[1300px] m-auto px-4 lg:px-0">
      <ButtonArrowReturnComponents />
      <div className="mb-6 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
        <TitleSection>
          YO <span className="text-[#FF6F61]">SOY</span> DANIEL
          <span className="text-[#FF6F61]">.</span>
        </TitleSection>
      </div>

      <AnimatedTestimonialsDemo />
      <AboutCharacter />
      <Carousel />
    </section>
  );
}

export default AboutComponents;
