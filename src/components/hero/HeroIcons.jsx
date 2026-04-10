import React from "react";
// moon
import Moon from "@/assets/images/moon.svg";
// moon light
import MoonLight from "@/assets/images/moonlight.svg";
// music
import Music from "@/assets/images/music.svg";
// music light
import MusicLight from "@/assets/images/musiclight.svg";
// notebook
import Notebook from "@/assets/images/notebook.svg";
// notebook light
import NotebookLight from "@/assets/images/notebooklight.svg";
// sun
import Sun from "@/assets/images/sun.svg";
// sun light
import SunLight from "@/assets/images/sunlight.svg";
// code
import Code from "@/assets/images/code.svg";
// code light
import CodeLight from "@/assets/images/codelight.svg";
// airplane
import Airplane from "@/assets/images/airplane.svg";
// airplane light
import AirplaneLight from "@/assets/images/airplanelight.svg";
// bike
import Bike from "@/assets/images/bike.svg";
// bike light
import BikeLight from "@/assets/images/bikelight.svg";

import "@/css/Heroicons.css";

import { useTheme } from "@/context/useTheme";

function HeroIcons() {
  const { theme } = useTheme();
  const moonSrc = theme === "light" ? MoonLight : Moon;
  const musicSrc = theme === "light" ? MusicLight : Music;
  const notebookSrc = theme === "light" ? NotebookLight : Notebook;
  const sunSrc = theme === "light" ? SunLight : Sun;
  const codeSrc = theme === "light" ? CodeLight : Code;
  const airplaneSrc = theme === "light" ? AirplaneLight : Airplane;
  const bikeSrc = theme === "light" ? BikeLight : Bike;
  return (
    <div>
      <div className="absolute left-14 md:left-1/4 top-1 md:top-4 lg:top-10 z-10">
        <img
          src={moonSrc}
          alt="Moon Icon"
          className="w-28 md:w-48 lg:w-64 animate-pulse duration-100"
        />
      </div>
      <div className="absolute left-32 lg:left-40 top-24 lg:top-28 -z-10 md:z-0 md:block hidden">
        <img
          src={musicSrc}
          alt="Music Icon"
          className="w-10 lg:w-auto ease-in-out floating"
        />
      </div>
      <div className="absolute right-1/2 top-9 -z-10 md:z-0 md:block hidden">
        <img
          src={notebookSrc}
          alt="laptop"
          className="w-10 lg:w-auto ease-in-out floating-fast"
        />
      </div>
      <div className="absolute right-72 lg:right-96 top-24 -z-10 md:z-0 md:block hidden">
        <img
          src={bikeSrc}
          alt="bike"
          className="w-10 lg:w-auto ease-in-out floating-slower"
        />
      </div>
      <div className="absolute right-40 lg:right-52 top-10 lg:top-4 -z-10 md:z-0 md:block hidden">
        <img
          src={airplaneSrc}
          alt="airplane"
          className="w-10 lg:w-auto ease-in-out floating-fasting"
        />
      </div>
      <div className="absolute left-56 lg:left-72 top-64 lg:top-80 -z-10 md:z-0 md:block hidden">
        <img
          src={sunSrc}
          alt="sun"
          className="w-10 lg:w-auto ease-in-out floating-slow"
        />
      </div>
      <div className="absolute right-56 lg:right-64 -bottom-6 lg:bottom-1 -z-10 md:z-0 md:block hidden">
        <img
          src={codeSrc}
          alt="code"
          className="w-10 lg:w-auto ease-in-out floating-low"
        />
      </div>
    </div>
  );
}

export default HeroIcons;
