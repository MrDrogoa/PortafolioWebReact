import React from "react";
import Signature from "@/components/main/Signature";
import Carousel from "@/components/main/Carousel";
import Experience from "@/components/main/Experience";
import HomeAbout from "@/components/main/HomeAbout";
import Cards from "@/components/main/Cards";
import Titleh2 from "@/components/Titleh2";
import ButtonComponents from "@/components/buttons/ButtonComponents";
import { Link } from "react-router-dom";
import Cap from "@/assets/img/Captura.png";

function MainComponents() {
  return (
    <section className="max-w-[1300px] m-auto px-4 relative">
      <div className="relative z-30">
        <Signature />
        <Carousel />
        <Experience />
        <HomeAbout />
      </div>

      {/* Decorative background image with shadow */}
      <div className="hidden xl:block xl:absolute -right-15 -translate-x-1/4 top-[1470px] z-0 pointer-events-none">
        {/* Shadow layer */}
        <div className="absolute inset-0 bg-[#202023] blur-[100px] opacity-10 scale-110"></div>
        {/* Image */}
        <img src={Cap} alt="Cap" className="relative opacity-20 w-[450px]" />
      </div>

      <div className="pt-8 sm:pt-10 md:pt-30 relative z-30">
        <Titleh2 className="mb-8 md:mb-16">Proyectos</Titleh2>
        <Cards />
        <div className="flex items-center justify-center mt-3 md:mt-5">
          <Link to="/projects">
            <ButtonComponents>Ver más</ButtonComponents>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MainComponents;
