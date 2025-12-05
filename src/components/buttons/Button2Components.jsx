import React from "react";
import "@/css/ButtonComponents.css";

function ButtonComponents({ children, className = "", onClick = () => {} }) {
  // Base styles for the button with floating layered effect

  const base =
    "floating-button-1 font-secondary py-2 px-5 bg-[#FF6F61] hover:bg-[#ff776a] text-[#202023] font-bold rounded-lg will-change-transform cursor-pointer text-sm lg:text-base";

  return (
    // Button element i can use anywhere
    <button className={`${base} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonComponents;
