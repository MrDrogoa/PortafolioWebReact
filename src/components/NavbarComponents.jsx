import React from "react";
import Navimg from "@/components/nav/Navimg";
import NavList from "@/components/nav/NavList";
import ButtonModeComponents from "@/components/buttons/ButtonModeComponents";
import "@/css/ModeLight/navbar/NavbarModeLight.css";

// Componente contenedor de la barra de navegación principal.
function NavbarComponents() {
  return (
    // Elemento semántico nav con estilos globales de tipografía y tema.
    <nav className="font-primary theme-navbar nav-mode-border md:shadow px-4 xl:px-0">
      {/* Contenedor centrado con ancho máximo y distribución horizontal. */}
      <section className="max-w-[1300px] mx-auto flex items-center justify-between py-3 md:py-4 lg:py-5">
        {/* Bloque del logo (izquierda). */}
        <Navimg />
        {/* Bloque de navegación (centro en desktop, alineado a la derecha en móvil). */}
        <div className="flex-1 flex justify-end lg:justify-center">
          <NavList />
        </div>
        {/* Botón para alternar modo claro/oscuro (derecha). */}
        <ButtonModeComponents />
      </section>
    </nav>
  );
}

export default NavbarComponents;
