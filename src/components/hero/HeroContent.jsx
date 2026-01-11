import React from "react";
import { Link } from "react-router-dom";
import ButtonComponents from "@/components/buttons/ButtonComponents";
import AOS from "aos";
import "aos/dist/aos.css";

function HeroContent() {
  React.useEffect(() => {
    AOS.init({
      duration: 800, // Duración de la animación
      once: false, // Animar cada vez que scrolleas
      offset: 100,
    });
  }, []);

  return (
    <section>
      <div className="flex flex-col items-center justify-center w-3/5 m-auto md:w-auto">
        <h1
          className="uppercase font-primary text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-center z-10 mb-4 md:mb-5 lg:mb-6"
          data-aos="flip-up"
          data-aos-delay="100"
        >
          Daniel <span className="text-[#FF6F61] ">R</span>osales
        </h1>
        <p className="font-secondary text-white font-semibold text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-center z-10">
          Diseñador UX UI & desarrollador Front-End
        </p>
        <Link to="/projects" className="flex justify-center">
          <ButtonComponents>Ver más</ButtonComponents>
        </Link>
      </div>
    </section>
  );
}

export default HeroContent;
