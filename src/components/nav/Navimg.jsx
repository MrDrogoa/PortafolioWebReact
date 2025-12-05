import React from "react";
import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

function Navimg() {
  return (
    <div>
      {/* Logo */}
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
    </div>
  );
}

export default Navimg;
