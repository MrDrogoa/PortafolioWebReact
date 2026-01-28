import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, CloseIcon, ChevronDownIcon } from "@/components/icons/Icons";

function NavList() {
  // Navigation items
  const items = [
    { to: "/", label: "Inicio" },
    { to: "/experience", label: "Experiencia" },
    { to: "/about", label: "Sobre mí" },
    {
      to: "/projects",
      label: "Proyectos",
      hasDropdown: true,
      dropdownItems: [
        {
          to: "/diseno-centrado-en-el-usuario",
          label: "Diseño UX UI",
        },
        {
          to: "/desarrollo-front-end",
          label: "Front End",
        },
        {
          to: "/implementacion-de-frameworks",
          label: "Frameworks",
        },
      ],
    },
    { to: "/contact", label: "Contacto" },
  ];

  return (
    <>
      {/* Desktop / large */}
      <ul className="hidden lg:flex justify-center items-center gap-8 text-sm md:text-base font-primary font-medium text-white">
        {items.map((item) => (
          <li
            key={item.to}
            className="relative group lg:hover:bg-transparent hover:bg-[#FF6F61] lg:p-0 p-2 rounded transition-colors"
          >
            <Link
              to={item.to}
              className="lg:hover:text-[#FF6F61] hover:text-white transition-colors flex items-center gap-1 w-full lg:w-auto relative"
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDownIcon className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
              )}
              {!item.hasDropdown && (
                <span className="absolute left-0 bottom-[-3px] w-0 h-0.5 bg-[#FF6F61] group-hover:w-full transition-all duration-300"></span>
              )}
            </Link>

            {/* Dropdown Desktop */}
            {item.hasDropdown && (
              <ul className="absolute top-full left-0 mt-1 bg-[#202023] border-2 border-white min-w-[200px] rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300 ease-in-out z-50">
                {item.dropdownItems.map((dropItem) => (
                  <li
                    key={dropItem.to}
                    className="hover:bg-transparent rounded transition-colors"
                  >
                    <Link
                      to={dropItem.to}
                      className="block px-4 py-2 text-white hover:text-[#FF6F61] transition-colors rounded"
                    >
                      {dropItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
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
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuRef = useRef(null);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
        setOpenDropdown(null);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        setOpen(false);
        setOpenDropdown(null);
      }
    };

    if (open) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <div ref={menuRef}>
      <button
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        className="p-2"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        {open ? (
          <CloseIcon className="w-7 h-7 text-white cursor-pointer transition-transform duration-300" />
        ) : (
          <MenuIcon className="w-7 h-7 text-white cursor-pointer transition-transform duration-300" />
        )}
      </button>

      {/* Mobile dropdown menu with slide animation */}
      <div
        className={`fixed left-0 right-0 top-[5.5rem] w-full bg-[#202023] border-t-2 border-b-2 border-[#FF6F61] max-h-96 overflow-auto z-50 transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-2 p-4">
          {items.map((item) => (
            <li key={item.to}>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.to ? null : item.to)
                    }
                    className="flex items-center justify-between w-full px-4 py-2 text-sm md:text-base text-white hover:bg-gray-800 rounded"
                  >
                    <Link to={item.to}>{item.label}</Link>
                    <ChevronDownIcon
                      className={`w-3 h-3 transition-transform duration-300 ${
                        openDropdown === item.to ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.to && (
                    <ul className="ml-4 mt-2 space-y-1 bg-[#202023] border-2 border-white rounded-md p-2">
                      {item.dropdownItems.map((dropItem) => (
                        <li key={dropItem.to}>
                          <Link
                            to={dropItem.to}
                            onClick={() => {
                              setOpen(false);
                              setOpenDropdown(null);
                            }}
                            className="block px-4 py-2 text-sm text-white hover:text-[#FF6F61] transition-colors rounded"
                          >
                            {dropItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm md:text-base text-white hover:bg-gray-800 rounded"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavList;
