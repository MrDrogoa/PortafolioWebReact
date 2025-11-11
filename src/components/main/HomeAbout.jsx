import React from "react";
import ButtonComponents from "../buttons/ButtonComponents";
import { Link } from "react-router-dom";
import Titleh2 from "../Titleh2";

function About() {
  return (
    <section class="max-w-[1300px] m-auto pt-8 sm:pt-10 md:pt-30 px-4">
      <div class="flex justify-center items-center flex-col w-72 md:w-96 text-white m-auto text-center">
        <Titleh2 className="mb-4 md:mb-5 lg:mb-6">Sobre mí</Titleh2>
        <p class="font-secondary font-normal md:text-lg mb-3 md:mb-5">
          Soy desarrollador web y diseñador UX/UI con experiencia en crear
          soluciones digitales escalables, combinando código limpio, interfaces
          intuitivas y accesibilidad. Mi enfoque se centra en optimizar la
          experiencia del usuario y transformar ideas en productos digitales
          eficientes para emprendimientos y empresas emergentes.
        </p>
        <Link to="/about" className="flex justify-center">
          <ButtonComponents>Ver más</ButtonComponents>
        </Link>
      </div>
    </section>
  );
}

export default About;
