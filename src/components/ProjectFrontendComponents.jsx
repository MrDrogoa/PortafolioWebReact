import React from "react";
import TitleSection from "@/components/TitleSection";
import CardsFrontend from "@/components/main/CardsFrontend";
import ButtonArrowReturnComponents from "@/components/buttons/ButtonArrowReturnComponents";
import "@/css/ModeLight/mainhome/MainModeLight.css";

function ProjectFrontendComponents() {
  return (
    <section className="max-w-[1300px] m-auto px-4 lg:px-0 theme-text">
      <ButtonArrowReturnComponents />
      <div className="mb-6 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
        <TitleSection>
          Proyectos Frontend
          <span className="text-[#FF6F61]">.</span>
        </TitleSection>
      </div>
      <CardsFrontend />
    </section>
  );
}

export default ProjectFrontendComponents;
