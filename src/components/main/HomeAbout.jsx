import React, { useState } from "react";
import ButtonComponents from "../buttons/ButtonComponents";
import { Link } from "react-router-dom";
import Titleh2 from "@/components/Titleh2";
import CurriculumModal from "@/components/CurriculumModal";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  React.useEffect(() => {
    AOS.init({
      duration: 800, // Duración de la animación
      once: true, // Animar cada vez que scrolleas
      offset: 100,
      disable: function () {
        return window.innerWidth < 768;
      },
    });
  }, []);
  return (
    <section class="max-w-[1300px] m-auto pt-8 sm:pt-10 md:pt-30 px-4 relative">
      <div class="flex justify-center items-center flex-col w-full md:w-96 text-white m-auto text-center">
        <Titleh2 className="mb-4 md:mb-5 lg:mb-6">Sobre mí</Titleh2>
        <p class="font-secondary font-normal text-sm md:text-lg mb-3 md:mb-5">
          Soy desarrollador web y diseñador UX/UI con experiencia en crear
          soluciones digitales escalables, combinando código limpio, interfaces
          intuitivas y accesibilidad. Mi enfoque se centra en optimizar la
          experiencia del usuario y transformar ideas en productos digitales
          eficientes para emprendimientos y empresas emergentes.
        </p>
        <div className="flex gap-4">
          <Link
            to="/about"
            className=""
            // data-aos="fade-left"
            // data-aos-delay="100"
          >
            <ButtonComponents>Ver más</ButtonComponents>
          </Link>
          <ButtonComponents onClick={() => setIsModalOpen(true)}>
            Currículum
          </ButtonComponents>
        </div>
      </div>

      {/* Modal del Currículum */}
      <CurriculumModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

export default About;
