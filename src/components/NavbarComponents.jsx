import React from "react";
import Navimg from "@/components/nav/Navimg";
import NavList from "@/components/nav/NavList";
import ButtonModeComponents from "@/components/buttons/ButtonModeComponents";
import "@/css/ModeLight/navbar/NavbarModeLight.css";

function NavbarComponents() {
  return (
    // Navbar container
    <nav className="font-primary theme-navbar nav-mode-border md:shadow px-4 xl:px-0">
      <section className="max-w-[1300px] mx-auto flex items-center justify-between py-6 pb-3 md:mb-0">
        {/* Logo */}
        <Navimg />
        {/* Navigation Links */}
        <div className="flex-1 flex justify-end lg:justify-center">
          <NavList />
        </div>
        <ButtonModeComponents />
      </section>
    </nav>
  );
}

export default NavbarComponents;
