import React from "react";
import "../css/ButtonComponents.css";

function ButtonComponents({ children, className = "", onClick = () => {} }) {
  // Base styles for the button with floating layered effect

  const base =
    "floating-button font-secondary py-2 px-5 bg-[#FFEA00] hover:bg-[#FFEE39] text-[#202023] font-bold rounded-lg will-change-transform cursor-pointer text-sm lg:text-base";

  return (
    // Button element i can use anywhere
    <button className={`${base} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonComponents;
