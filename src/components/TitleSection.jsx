import React from "react";

function Titleh2({ children, className = "" }) {
  return (
    <h2
      className={`font-primary w-50 sm:w-full text-white text-3xl md:text-5xl lg:text-6xl font-extrabold text-center mt-6 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 m-auto${className}`}
    >
      {children}
    </h2>
  );
}

export default Titleh2;
