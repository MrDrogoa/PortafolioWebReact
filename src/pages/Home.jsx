import React from "react";
import HeroComponents from "../components/HeroComponents";
import MainComponents from "../components/MainComponents";

function Home() {
  // poner contenido de la pagina de inicio que no sea el header ni el footer
  return (
    <>
      <HeroComponents />
      <MainComponents />
    </>
  );
}

export default Home;
