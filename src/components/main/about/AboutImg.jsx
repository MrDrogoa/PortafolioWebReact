import React from "react";

function AboutImg({ src, alt, isTransitioning }) {
  return (
    <div className="w-full md:w-1/2 relative overflow-hidden group h-80 md:h-auto">
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-500 lg:group-hover:scale-110 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Overlay animado en hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 lg:group-hover:opacity-60 transition-opacity duration-300"></div>
    </div>
  );
}

export default AboutImg;
