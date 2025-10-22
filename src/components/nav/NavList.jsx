import React from "react";
import { Link } from "react-router-dom";

function NavList() {
  // Navigation items
  const items = [
    { to: "/", label: "Inicio" },
    { to: "/experience", label: "Experiencia" },
    { to: "/about", label: "Sobre mi" },
    { to: "/projects", label: "Proyectos" },
    { to: "/contact", label: "Contacto" },
  ];

  return (
    // Navigation list
    <ul className="flex justify-center items-center gap-8 text-sm md:text-base font-primary font-medium text-white">
      {items.map((item) => (
        <li key={item.to}>
          <Link to={item.to} className="">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavList;
