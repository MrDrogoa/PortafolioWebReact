import React from "react";
import TitleSection from "@/components/TitleSection";
import CardsUxUi from "@/components/main/CardsUxUi";

function ProjectUxUiComponents() {
  return (
    <section className="max-w-[1300px] m-auto px-4">
      <div className="mb-6 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
        <TitleSection>
          Proyectos UX UI
          <span className="text-[#FF6F61]">.</span>
        </TitleSection>
      </div>
      <CardsUxUi />
    </section>
  );
}

export default ProjectUxUiComponents;
