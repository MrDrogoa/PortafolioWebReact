import React from "react";
import TitleSection from "@/components/TitleSection";
import Cards from "@/components/main/Cards";
import Titleh2 from "@/components/Titleh2";
import ProjectsDeveloper from "@/components/main/projects/ProjectsDeveloper";

function ProjectsComponents() {
  return (
    <section className="max-w-[1300px] m-auto px-4">
      <div className="mb-6 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
        <TitleSection>
          Proyectos
          <span className="text-[#FF6F61]">.</span>
        </TitleSection>
      </div>
      <Cards />
      <div className="pt-8 sm:pt-10 md:pt-30">
        <Titleh2>Desarrollemos ideas</Titleh2>
        <ProjectsDeveloper />
      </div>
    </section>
  );
}

export default ProjectsComponents;
