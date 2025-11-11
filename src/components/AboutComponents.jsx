import React from "react";
import AboutImg from "@/components/main/AboutImg";
import TitleSection from "@/components/TitleSection";
import AboutContent from "@/components/main/AboutContent";

function AboutComponents() {
  return (
    <section className="max-w-[1300px] m-auto  px-4">
      <div className="mb-6 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
        <TitleSection>
          YO <span className="text-[#FF6F61]">SOY</span> DANIEL
          <span className="text-[#FF6F61]">.</span>
        </TitleSection>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-center gap-8 px-5">
        <AboutImg />
        <AboutContent />
      </div>
    </section>
  );
}

export default AboutComponents;
