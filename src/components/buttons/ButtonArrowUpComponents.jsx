import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@/components/icons/Icons";
import "@/css/ModeLight/mainhome/MainModeLight.css";

function ButtonArrowUpComponents() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`lg:hover:-translate-y-2 px-2 md:px-3 py-2 rounded-full transition-all duration-300 ease-in-out fixed bottom-5 md:bottom-12 right-6 md:right-8 lg:right-12 cursor-pointer z-50 arrows-up ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-16 pointer-events-none"
      }`}
      aria-label="Volver arriba"
    >
      <ArrowUpIcon className="text-lg md:text-xl lg:text-2xl icon-up" />
    </button>
  );
}

export default ButtonArrowUpComponents;
