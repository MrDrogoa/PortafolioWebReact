import React, { useEffect } from "react";
import { IoClose, IoDownload } from "react-icons/io5";
import pdf from "@/assets/images/curriculum-Frontend.pdf";

// Modal para visualizar y descargar el CV en PDF.
function CurriculumModal({ isOpen, onClose }) {
  // Efecto para bloquear el scroll del body cuando el modal está abierto.
  useEffect(() => {
    // Si el modal se abre, se desactiva el scroll del documento.
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      // Si se cierra, se restaura scroll normal.
      document.body.style.overflow = "unset";
    }

    // Limpieza al desmontar para asegurar que el scroll siempre se restaure.
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Efecto para permitir cerrar el modal con la tecla Escape.
  useEffect(() => {
    // Handler global del teclado.
    const handleEsc = (e) => {
      // Cierra solo cuando se presiona Escape y el modal está abierto.
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    // Suscribe el evento de teclado.
    window.addEventListener("keydown", handleEsc);
    // Limpieza del listener al desmontar o al cambiar dependencias.
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Si no está abierto, no renderiza nada.
  if (!isOpen) return null;

  // Cierra el modal solo cuando se hace clic en el overlay (fondo), no en el contenido.
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Descarga el PDF creando un enlace temporal en memoria.
  const handleDownload = () => {
    // Crea elemento anchor para forzar descarga.
    const link = document.createElement("a");
    // URL del archivo PDF importado por Vite.
    link.href = pdf;
    // Nombre sugerido del archivo al descargar.
    link.download = "Daniel_Rosales_CV.pdf";
    // Ejecuta el clic programáticamente.
    link.click();
  };

  return (
    <div
      // Overlay fijo de pantalla completa por encima del contenido principal.
      className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/70 animate-fadeIn"
      // Clic en overlay para cerrar modal.
      onClick={handleOverlayClick}
    >
      {/* Contenedor principal del modal con animación de entrada. */}
      <div
        // Tamaño del modal con límite de altura para no invadir la navbar.
        className="relative w-full max-w-4xl max-h-[calc(100vh-10rem)] theme-surface theme-text rounded-xl shadow-2xl flex flex-col animate-zoomIn"
        // Evita que el clic interno burbujee al overlay.
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera con título y acciones del modal. */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b theme-border">
          {/* Título visible del documento. */}
          <h2 className="font-primary font-bold text-lg sm:text-xl md:text-2xl theme-text">
            Currículum Vitae
          </h2>

          {/* Grupo de botones de acción. */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Botón para descargar el PDF. */}
            <button
              // Ejecuta la descarga del archivo.
              onClick={handleDownload}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#FFEA00] hover:bg-[#FFEE39] text-[#202023] font-secondary font-bold rounded-lg transition-all duration-200 hover:scale-105 text-sm sm:text-base"
              title="Descargar CV"
            >
              {/* Ícono de descarga. */}
              <IoDownload className="w-4 h-4 sm:w-5 sm:h-5" />
              {/* Texto del botón oculto en tamaños pequeños. */}
              <span className="hidden sm:inline">Descargar</span>
            </button>

            {/* Botón para cerrar modal. */}
            <button
              // Ejecuta cierre del modal.
              onClick={onClose}
              className="p-2 hover:bg-black/10 rounded-lg transition-colors duration-200 theme-text cursor-pointer"
              aria-label="Cerrar modal"
            >
              {/* Ícono de cierre. */}
              <IoClose className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Área scrollable que contiene la vista embebida del PDF. */}
        <div className="flex-1 overflow-auto p-4 sm:p-6">
          <iframe
            // Fuente del documento PDF.
            src={pdf}
            // Tamaño y apariencia del visor.
            className="w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] rounded-lg bg-white"
            // Título accesible del iframe.
            title="Curriculum Vitae - Daniel Rosales"
          />
        </div>
      </div>

      {/* Estilos locales de animación para entrada del overlay y modal. */}
      <style jsx>{`
        /* Animación del overlay de opacidad 0 a 1. */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Animación del modal con escala suave de entrada. */
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

        /* Clase utilitaria para ejecutar fadeIn. */
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        /* Clase utilitaria para ejecutar zoomIn. */
        .animate-zoomIn {
          animation: zoomIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default CurriculumModal;
