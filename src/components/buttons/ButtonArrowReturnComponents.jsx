import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@/components/icons/Icons";

function ButtonArrowReturnComponents() {
  const navigate = useNavigate();

  // Navigate to previous page
  const goBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={goBack}
      className="lg:hover:-translate-x-2 transition-all duration-300 ease-in-out cursor-pointer"
      aria-label="Volver atrás"
    >
      <ArrowLeftIcon className="text-white text-2xl" />
    </button>
  );
}

export default ButtonArrowReturnComponents;
