import React from "react";
import Logo from "@/assets/images/logo.svg";
import logolight from "@/assets/images/logoLight.svg";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/useTheme";

// Componente del logo en navbar con variante por tema.
function Navimg() {
  // Obtiene el tema actual desde el contexto global.
  const { theme } = useTheme();
  // Selecciona el logo claro u oscuro según el tema activo.
  const logoSrc = theme === "light" ? logolight : Logo;

  return (
    <div>
      {/* Link al home al hacer clic en el logo. */}
      <Link to="/">
        {/* Imagen del logo con tamaño responsive. */}
        <img src={logoSrc} alt="Logo" className="w-15 md:w-full" />
      </Link>
    </div>
  );
}

export default Navimg;
