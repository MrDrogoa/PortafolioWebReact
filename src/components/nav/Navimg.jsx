import React from "react";
import Logo from "@/assets/images/logo.svg";
import logolight from "@/assets/images/logolight.svg";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/useTheme";

function Navimg() {
  const { theme } = useTheme();
  const logoSrc = theme === "light" ? logolight : Logo;

  return (
    <div>
      {/* Logo */}
      <Link to="/">
        <img src={logoSrc} alt="Logo" className="w-15 md:w-full" />
      </Link>
    </div>
  );
}

export default Navimg;
