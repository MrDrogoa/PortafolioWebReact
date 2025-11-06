import React from "react";
import Signature from "./main/Signature";
import Carousel from "./main/Carousel";
import Experience from "./main/Experience";
import About from "./main/About";
import Cards from "./main/Cards";

function MainComponents() {
  return (
    <section>
      <Signature />
      <Carousel />
      <Experience />
      <About />
      <Cards />
    </section>
  );
}

export default MainComponents;
