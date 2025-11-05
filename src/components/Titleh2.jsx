import React from "react";

function Titleh2({ children, className = "" }) {
  return (
    <h2
      className={`font-primary text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center ${className}`}
    >
      {children}
    </h2>
  );
}

export default Titleh2;
