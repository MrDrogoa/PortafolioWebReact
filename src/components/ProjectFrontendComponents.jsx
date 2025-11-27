import React from "react";
import TitleSection from "@/components/TitleSection";
import CardsFrontend from "@/components/main/CardsFrontend";

function ProjectFrontendComponents() {
  return (
    <section className="max-w-[1300px] m-auto px-4">
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
