import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

// Exporta los iconos directamente como componentes re-exportados.
// No definimos tamaño o color por defecto aquí para que cada componente
// que los importe pueda pasar `size`, `className`, `color`, etc.

export const GithubIcon = (props) => <FaGithub {...props} />;
export const InstagramIcon = (props) => <FaInstagram {...props} />;
export const LinkedinIcon = (props) => <FaLinkedin {...props} />;
export const WhatsappIcon = (props) => <FaWhatsapp {...props} />;
export const MenuIcon = (props) => <HiMenuAlt3 {...props} />;

export default {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
  MenuIcon,
};
