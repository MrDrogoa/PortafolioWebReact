import React from "react";
import TitleSection from "@/components/TitleSection";
import Timeline from "@/components/main/experience/Timeline.jsx";

function ExperienceComponents() {
  return (
    <section className="px-4 lg:px-0">
      <TitleSection>Experiencia</TitleSection>
      <p className="font-secondary text-white font-medium mt-4 md:mt-5 lg:mt-6 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] m-auto text-center md:text-lg">
        Desde que inicié mis estudios en desarrollo web descubrí un interés
        profundo por el diseño y la construcción de sitios. Ese entusiasmo me
        llevó a explorar cada detalle relacionado con la experiencia visual y la
        interacción del usuario, buscando siempre comprender cómo los elementos
        gráficos, la estructura y la accesibilidad pueden transformar una
        plataforma digital. A partir de ese momento, he dedicado mi aprendizaje
        y práctica a perfeccionar la creación de interfaces atractivas,
        funcionales y pensadas para mejorar la experiencia de quienes las
        utilizan.
      </p>
      <Timeline />
    </section>
  );
}

export default ExperienceComponents;
