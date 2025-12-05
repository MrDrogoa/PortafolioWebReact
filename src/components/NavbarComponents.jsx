import React from "react";
import Navimg from "./nav/Navimg";
import NavList from "./nav/NavList";

function NavbarComponents() {
  return (
    // Navbar container
    <nav className="font-primary">
      <section className="max-w-[1300px] mx-auto flex items-center justify-between px-4 py-6">
        {/* Logo */}
        <Navimg />
        {/* Navigation Links */}
        <div className="flex-1 flex justify-end lg:justify-center">
          <NavList />
        </div>
      </section>
    </nav>
  );
}

export default NavbarComponents;
