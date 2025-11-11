import React from "react";
import Signature from "@/components/main/Signature";
import Carousel from "@/components/main/Carousel";
import Experience from "@/components/main/Experience";
import HomeAbout from "@/components/main/HomeAbout";
import Cards from "@/components/main/Cards";

function MainComponents() {
  return (
    <section>
      <Signature />
      <Carousel />
      <Experience />
      <HomeAbout />
      <Cards />
    </section>
  );
}

export default MainComponents;
