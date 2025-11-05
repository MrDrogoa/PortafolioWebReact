import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaReact,
  FaVuejs,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaDatabase,
  FaNode,
  FaWordpress,
  FaGitAlt,
  FaFire,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { BiLogoTailwindCss, BiLogoFigma } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";

// Exporta los iconos directamente como componentes re-exportados.
// No definimos tamaño o color por defecto aquí para que cada componente
// que los importe pueda pasar `size`, `className`, `color`, etc.

export const GithubIcon = (props) => <FaGithub {...props} />;
export const InstagramIcon = (props) => <FaInstagram {...props} />;
export const LinkedinIcon = (props) => <FaLinkedin {...props} />;
export const WhatsappIcon = (props) => <FaWhatsapp {...props} />;
export const MenuIcon = (props) => <HiMenuAlt3 {...props} />;
export const ReactIcon = (props) => <FaReact {...props} />;
export const VueIcon = (props) => <FaVuejs {...props} />;
export const TailwindIcon = (props) => <BiLogoTailwindCss {...props} />;
export const BootstrapIcon = (props) => <FaBootstrap {...props} />;
export const FigmaIcon = (props) => <BiLogoFigma {...props} />;
export const CssIcon = (props) => <FaCss3Alt {...props} />;
export const HtmlIcon = (props) => <FaHtml5 {...props} />;
export const MysqlIcon = (props) => <TbBrandMysql {...props} />;
export const JavascriptIcon = (props) => <RiJavascriptFill {...props} />;
export const PhpIcon = (props) => <SiPhp {...props} />;
export const DatabaseIcon = (props) => <FaDatabase {...props} />;
export const NodeIcon = (props) => <FaNode {...props} />;
export const WordpressIcon = (props) => <FaWordpress {...props} />;
export const GitIcon = (props) => <FaGitAlt {...props} />;
export const FireIcon = (props) => <FaFire {...props} />;
export const ArrowRightIcon = (props) => <FaArrowRight {...props} />;
export const ArrowLeftIcon = (props) => <FaArrowLeft {...props} />;

export default {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
  MenuIcon,
  ReactIcon,
  VueIcon,
  TailwindIcon,
  BootstrapIcon,
  FigmaIcon,
  CssIcon,
  HtmlIcon,
  MysqlIcon,
  JavascriptIcon,
  PhpIcon,
  DatabaseIcon,
  NodeIcon,
  WordpressIcon,
  GitIcon,
  FireIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
};
