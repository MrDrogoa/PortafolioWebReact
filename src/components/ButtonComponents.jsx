import React from "react";

function ButtonComponents({ children, className = "", onClick = () => {} }) {
  // Base styles for the button
  const base =
    "font-secondary py-2 px-5 bg-[#FFEA00] hover:bg-[#FFEE39] text-[#202023] font-bold rounded-lg hover:-translate-y-2 hover:shadow-lg will-change-transform transition-transform duration-300 ease-in-out cursor-pointer text-sm lg:text-base";
  return (
    // Button element i can use anywhere
    <button className={`${base} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonComponents;
