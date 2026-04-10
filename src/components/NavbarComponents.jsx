import React from "react";
import Navimg from "@/components/nav/Navimg";
import NavList from "@/components/nav/NavList";
import ButtonModeComponents from "@/components/buttons/ButtonModeComponents";
import "@/css/ModeLight/navbar/NavbarModeLight.css";

function NavbarComponents() {
  return (
    // Navbar container
    <nav className="font-primary">
      <section className="max-w-[1300px] mx-auto flex items-center justify-between px-4 lg:px-0 py-6">
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
