import React from "react";
import Navimg from "./nav/Navimg";
import NavList from "./nav/NavList";
import ButtonModeComponents from "./buttons/ButtonModeComponents";

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
