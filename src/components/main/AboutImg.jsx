import React from "react";
import AboutImage from "@/assets/img/about.jpg";

function AboutImg() {
  return (
    <img
      src={AboutImage}
      className="m-auto w-3/4 lg:w-2/5 border-4 border-[#FF6F61] rounded-md"
      alt="about image"
    />
  );
}

export default AboutImg;
