import React from "react";
import { Link } from "react-router-dom";
import ButtonComponents from "../ButtonComponents";

function HeroContent() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h1 className="uppercase font-primary text-white text-5xl md:text-6xl lg:text-8xl font-extrabold text-center">
          Daniel <span className="text-[#FF6F61] ">R</span>osales
        </h1>
        <p className="font-secondary text-white font-semibold text-lg sm:text-xl md:text-2xl lg:pb-8 pb-4 text-center">
          Diseñador UX UI & desarrollador Front-End
        </p>
        <Link to="/about" className="flex justify-center">
          <ButtonComponents>Ver más</ButtonComponents>
        </Link>
      </div>
    </section>
  );
}

export default HeroContent;
