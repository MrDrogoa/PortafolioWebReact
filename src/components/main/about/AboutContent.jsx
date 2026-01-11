import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons/Icons";

function AboutContent({
  title,
  designation,
  descripcion2,
  descripcion3,
  current,
  total,
  onNext,
  onPrev,
  onDotClick,
}) {
  return (
    <div className="w-full md:w-1/2 flex flex-col items-center p-8 md:p-10">
      {/* Título */}
      <div>
        <h3 className="font-primary text-white text-center lg:text-start text-lg md:text-2xl font-light mb-4 lg:mb-8 italic leading-relaxed">
          "{title}"
        </h3>
      </div>

      {/* Información del autor */}
      <div className="mb-4 md:mb-8 w-full text-center">
        <p className="text-[#FF6F61] text-sm font-medium font-secondary">
          {designation}
        </p>
      </div>

      {/* Descripción adicional */}
      {descripcion2 && (
        <div className="mb-6 w-full">
          <p className="text-gray-300 text-sm leading-relaxed font-secondary font-normal text-center lg:text-start">
            {descripcion2}
          </p>
        </div>
      )}

      {descripcion3 && (
        <div className="mb-4 md:mb-8 w-full">
          <p className="text-gray-300 text-sm leading-relaxed font-secondary font-normal text-center lg:text-start">
            {descripcion3}
          </p>
        </div>
      )}

      {/* Indicadores de progreso */}
      <div className="flex gap-2 mb-8">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`transition-all duration-300 h-1.5 rounded-full ${
              index === current
                ? "bg-[#FF6F61] w-2"
                : "bg-gray-600 w-2 hover:bg-gray-500"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Botones de navegación */}
      <div className="flex items-center gap-6">
        <button
          onClick={onPrev}
          className="navigation-button flex justify-center items-center rounded-full p-2 bg-white text-[#202023] cursor-pointer transition-colors lg:hover:bg-[#FF6F61] lg:hover:text-[#202023] duration-300 "
          aria-label="Previous testimonial"
        >
          <ArrowLeftIcon size={24} />
        </button>
        <p className="text-gray-400 text-sm font-medium">
          {current + 1} de {total}
        </p>
        <button
          onClick={onNext}
          className="navigation-button flex justify-center items-center rounded-full p-2 bg-white text-[#202023] cursor-pointer transition-colors lg:hover:bg-[#FF6F61] lg:hover:text-[#202023] duration-300 "
          aria-label="Next testimonial"
        >
          <ArrowRightIcon size={24} />
        </button>
      </div>
    </div>
  );
}

export default AboutContent;
