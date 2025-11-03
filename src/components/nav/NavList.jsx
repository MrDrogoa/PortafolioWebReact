import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "../icons/Icons";

function NavList() {
  // Navigation items
  const items = [
    { to: "/", label: "Inicio" },
    { to: "/experience", label: "Experiencia" },
    { to: "/about", label: "Sobre mí" },
    { to: "/projects", label: "Proyectos" },
    { to: "/contact", label: "Contacto" },
  ];

  return (
    <>
      {/* Desktop / large */}
      <ul className="hidden lg:flex justify-center items-center gap-8 text-sm md:text-base font-primary font-medium text-white">
        {items.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile: dropdown  (md and below) */}
      <div className="lg:hidden relative">
        <MobileMenu items={items} />
      </div>
    </>
  );
}
// Mobile menu component
function MobileMenu({ items }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        className="p-2"
        aria-label="Abrir menú"
      >
        <MenuIcon className="w-7 h-7 text-white" />
      </button>

      {open && (
        <div className="fixed left-0 right-0 top-20 w-screen bg-[#202023] border-t-2 border-[#FF6F61] h-64 md:h-72 overflow-auto z-20">
          <ul className="flex flex-col gap-2 p-4">
            {items.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm md:text-base text-white hover:bg-gray-800"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavList;
