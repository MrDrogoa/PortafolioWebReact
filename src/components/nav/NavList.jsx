import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, CloseIcon, ChevronDownIcon } from "@/components/icons/Icons";

// Componente principal de enlaces del navbar (escritorio + móvil).
function NavList() {
  // Arreglo base de navegación; cada objeto define ruta y etiqueta visible.
  const items = [
    // Enlace directo al inicio.
    { to: "/", label: "Inicio" },
    // Enlace directo a la sección de experiencia.
    { to: "/experience", label: "Experiencia" },
    // Enlace directo a la sección sobre mí.
    { to: "/about", label: "Sobre mí" },
    // Ítem con submenú (dropdown) para categorías de proyectos.
    {
      to: "/projects",
      label: "Proyectos",
      hasDropdown: true,
      dropdownItems: [
        // Subruta de proyectos UX/UI.
        {
          to: "/diseno-centrado-en-el-usuario",
          label: "Diseño UX UI",
        },
        // Subruta de proyectos Front End.
        {
          to: "/desarrollo-front-end",
          label: "Front End",
        },
        // Subruta de proyectos con frameworks.
        {
          to: "/implementacion-de-frameworks",
          label: "Frameworks",
        },
      ],
    },
    // Enlace directo a contacto.
    { to: "/contact", label: "Contacto" },
  ];

  return (
    <>
      {/* Menú horizontal visible solo desde lg hacia arriba. */}
      <ul className="hidden lg:flex justify-center items-center gap-8 text-sm md:text-base font-primary font-medium nav-mode-text">
        {/* Recorremos los ítems para construir cada opción de navegación. */}
        {items.map((item) => (
          <li
            key={item.to}
            className="relative group lg:hover:bg-transparent hover:bg-[#FF6F61] lg:p-0 p-2 rounded transition-colors"
          >
            {/* Link principal de cada ítem. */}
            <Link
              to={item.to}
              className="lg:hover:!text-[#FF6F61] hover:text-white transition-colors flex items-center gap-1 w-full lg:w-auto relative nav-mode-text"
            >
              {/* Texto visible del ítem. */}
              {item.label}
              {/* Flecha solo cuando el ítem tiene dropdown. */}
              {item.hasDropdown && (
                <ChevronDownIcon className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
              )}
              {/* Línea animada solo en enlaces simples (sin dropdown). */}
              {!item.hasDropdown && (
                <span className="absolute left-0 bottom-[-3px] w-0 h-0.5 bg-[#FF6F61] group-hover:w-full transition-all duration-300"></span>
              )}
            </Link>

            {/* Dropdown de escritorio para el ítem de proyectos. */}
            {item.hasDropdown && (
              <ul className="absolute top-full left-0 mt-1 border-3 min-w-[200px] rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-[-10px] group-hover:translate-y-0 transition-all duration-300 ease-in-out z-50 nav-mode-list">
                {/* Renderizamos cada subopción del dropdown. */}
                {item.dropdownItems.map((dropItem) => (
                  <li
                    key={dropItem.to}
                    className="hover:bg-transparent rounded transition-colors"
                  >
                    {/* Link de cada subcategoría. */}
                    <Link
                      to={dropItem.to}
                      className="block px-4 py-2 hover:!text-[#FF6F61] transition-colors rounded nav-mode-text"
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

      {/* En móvil se delega el render al componente MobileMenu. */}
      <div className="lg:hidden relative">
        <MobileMenu items={items} />
      </div>
    </>
  );
}
// Menú móvil con apertura/cierre y submenú controlado por estado.
function MobileMenu({ items }) {
  // Controla si el panel móvil está abierto.
  const [open, setOpen] = useState(false);
  // Guarda qué dropdown interno está abierto (o null si ninguno).
  const [openDropdown, setOpenDropdown] = useState(null);
  // Referencia al contenedor para detectar clic fuera.
  const menuRef = useRef(null);

  // Cierra el menú al hacer clic fuera del contenedor.
  useEffect(() => {
    // Handler global de mousedown para comparar con menuRef.
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Cierra panel principal.
        setOpen(false);
        // Reinicia submenú activo.
        setOpenDropdown(null);
      }
    };

    // Solo se suscribe cuando el menú está abierto.
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Limpieza del listener al cerrar o desmontar.
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Cierra el menú cuando el usuario hace scroll para evitar solapamientos.
  useEffect(() => {
    // Handler de scroll global.
    const handleScroll = () => {
      if (open) {
        // Cierra panel principal.
        setOpen(false);
        // Reinicia submenú activo.
        setOpenDropdown(null);
      }
    };

    // Solo se suscribe si está abierto.
    if (open) {
      window.addEventListener("scroll", handleScroll);
    }

    // Limpieza del listener al cerrar o desmontar.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    // Wrapper referenciado para detectar clic fuera.
    <div ref={menuRef}>
      {/* Botón hamburguesa / cerrar. */}
      <button
        // Alterna estado de apertura del panel móvil.
        onClick={() => setOpen((s) => !s)}
        // Atributo de accesibilidad para indicar estado expandido.
        aria-expanded={open}
        className="p-2"
        // Etiqueta accesible dinámica para lectores de pantalla.
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        {/* Si está abierto, muestra ícono de cierre. */}
        {open ? (
          <CloseIcon className="w-7 h-7 cursor-pointer transition-transform duration-300 nav-mode-text" />
        ) : (
          // Si está cerrado, muestra ícono de menú.
          <MenuIcon className="w-7 h-7 cursor-pointer transition-transform duration-300 nav-mode-text" />
        )}
      </button>

      {/* Panel desplegable móvil con animación de opacidad + desplazamiento. */}
      <div
        className={`fixed left-0 right-0 top-[3.5rem] md:top-[4rem] w-full nav-mode-list border-t-3 border-b-3 max-h-96 overflow-auto z-50 transition-all duration-300 ease-in-out ${
          // Estado visual abierto/cerrado del panel.
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {/* Lista vertical de opciones para móvil. */}
        <ul className="flex flex-col gap-2 p-4">
          {/* Recorremos ítems para construir cada opción móvil. */}
          {items.map((item) => (
            <li key={item.to}>
              {/* Si tiene dropdown, renderiza botón expandible + sublista. */}
              {item.hasDropdown ? (
                <>
                  <button
                    // Abre/cierra el submenú del ítem actual.
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.to ? null : item.to)
                    }
                    className="flex items-center justify-between w-full px-4 py-2 text-sm md:text-base lg:hover:bg-white/10 rounded nav-mode-text"
                  >
                    {/* Link principal del ítem con dropdown. */}
                    <Link className="nav-mode-text" to={item.to}>
                      {item.label}
                    </Link>
                    {/* Flecha que rota al expandir ese dropdown. */}
                    <ChevronDownIcon
                      className={`w-3 h-3 transition-transform duration-300 ${
                        openDropdown === item.to ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {/* Submenú visible solo cuando coincide con openDropdown. */}
                  {openDropdown === item.to && (
                    <ul className="ml-4 mt-2 space-y-1 border-3 rounded-md p-2 nav-mode-list">
                      {/* Opciones internas del submenú. */}
                      {item.dropdownItems.map((dropItem) => (
                        <li key={dropItem.to}>
                          <Link
                            to={dropItem.to}
                            onClick={() => {
                              // Cierra todo al seleccionar una subopción.
                              setOpen(false);
                              setOpenDropdown(null);
                            }}
                            className="block px-4 py-2 text-sm hover:text-[#FF6F61] transition-colors rounded nav-mode-text"
                          >
                            {dropItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                // Ítem simple sin dropdown.
                <Link
                  to={item.to}
                  // Cierra el panel al navegar.
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm md:text-base lg:hover:bg-white/10 rounded nav-mode-text"
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
