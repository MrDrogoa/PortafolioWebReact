import React, { useEffect } from "react";
import { IoClose, IoDownload } from "react-icons/io5";
import pdf from "@/assets/images/Daniel rosales.pdf";

function CurriculumModal({ isOpen, onClose }) {
  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Cerrar con tecla ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Daniel_Rosales_CV.pdf";
    link.click();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/70 animate-fadeIn"
      onClick={handleOverlayClick}
    >
      {/* Modal Container con animación zoom */}
      <div
        className="relative w-full max-w-[90%] max-h-[90vh] bg-[#202023] rounded-xl shadow-2xl flex flex-col animate-zoomIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del Modal */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-700">
          <h2 className="text-white font-primary font-bold text-lg sm:text-xl md:text-2xl">
            Currículum Vitae
          </h2>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Botón Descargar */}
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#FFEA00] hover:bg-[#FFEE39] text-[#202023] font-secondary font-bold rounded-lg transition-all duration-200 hover:scale-105 text-sm sm:text-base"
              title="Descargar CV"
            >
              <IoDownload className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Descargar</span>
            </button>

            {/* Botón Cerrar */}
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200 text-white cursor-pointer"
              aria-label="Cerrar modal"
            >
              <IoClose className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Contenedor del PDF */}
        <div className="flex-1 overflow-auto p-4 sm:p-6">
          <iframe
            src={pdf}
            className="w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] rounded-lg bg-white"
            title="Curriculum Vitae - Daniel Rosales"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-zoomIn {
          animation: zoomIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default CurriculumModal;
