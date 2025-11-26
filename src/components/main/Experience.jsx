import React from "react";
import Titleh2 from "../Titleh2";
import { ArrowRightIcon } from "../icons/Icons";
import { Link } from "react-router-dom";

function Experience() {
  const experienceData = [
    {
      title: "Diseño Centrado en el Usuario",
      projects: ["Womad", "Libros", "Petmatch"],
      paragraph:
        "Use metodologias de brief, benchmark, mapa de contenidos y otros para definir ideas sobre los requerimientos del usuario.",
      path: "/diseno-centrado-en-el-usuario",
    },
    {
      title: "Desarrollo Front-End",
      projects: ["Restaurante", "Landings", "FrontPet"],
      paragraph:
        "Desarrollo de interfaces web utilizando HTML, CSS y JavaScript, asegurando una experiencia de usuario fluida y atractiva.",
      path: "/desarrollo-front-end",
    },
    {
      title: "Implementación de Frameworks",
      projects: ["Habitissimo", "Spotify", "Firma"],
      paragraph:
        "Proyectos programados con js, php, mysql y el cms de wordpress. Iniciando asi con el manejo de Api y BD.",
      path: "/implementacion-de-frameworks",
    },
  ];
  return (
    <section className="max-w-[1300px] m-auto pt-8 sm:pt-10 md:pt-30 px-4">
      <Titleh2 className="mb-8 md:mb-16">Mi Experiencia</Titleh2>
      {/* card-container */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center px-5 w-full">
        {experienceData.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col border-2 border-white  px-3 py-6 sm:px-4 md:py-8 md:px-6 lg:py-10 lg:px-8 gap-3 max-w-sm m-auto md:m-0"
          >
            <h3 className="font-primary text-white text-lg sm:text-xl md:text-2xl font-semibold">
              {experience.title}
            </h3>
            <div className="flex flex-wrap gap-2 font-secondary text-[#FF6F61] font-medium text-xs sm:text-sm">
              {experience.projects.map((project, index) => (
                <React.Fragment key={index}>
                  <p className="font-secondary">{project}</p>
                  {index < experience.projects.length - 1 && <span>-</span>}
                </React.Fragment>
              ))}
            </div>
            <p className="font-secondary text-white font-normal text-sm md:text-lg">
              {experience.paragraph}
            </p>
            <div className="flex justify-end"></div>
            <Link
              to={experience.path}
              className="text-white flex justify-end mt-auto"
            >
              <ArrowRightIcon className="text-2xl hover:text-[#FF6F61] transition-colors" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
