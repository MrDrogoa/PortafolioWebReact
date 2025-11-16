import React from "react";
import Signature from "@/components/main/Signature";
import Carousel from "@/components/main/Carousel";
import Experience from "@/components/main/Experience";
import HomeAbout from "@/components/main/HomeAbout";
import Cards from "@/components/main/Cards";
import Titleh2 from "@/components/Titleh2";
import ButtonComponents from "@/components/buttons/ButtonComponents";
import { Link } from "react-router-dom";

function MainComponents() {
  return (
    <section className="max-w-[1300px] m-auto px-4">
      <Signature />
      <Carousel />
      <Experience />
      <HomeAbout />
      <div className="pt-8 sm:pt-10 md:pt-30">
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
