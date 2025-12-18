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
  FaCopyright,
  FaCircle,
  FaCode,
  FaChevronDown,
  FaTrello,
  FaFirefoxBrowser,
  FaBook,
  FaCpanel,
} from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  BiLogoTailwindCss,
  BiLogoFigma,
  BiLogoVisualStudio,
} from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { FaFileExcel, FaFileWord } from "react-icons/fa6";
import { SiPhp, SiAdobexd, SiScrollreveal, SiPostman } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { IoExtensionPuzzle } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { MdOutlineAnimation } from "react-icons/md";

// Exporta los iconos directamente como componentes re-exportados.
// No definimos tamaño o color por defecto aquí para que cada componente
// que los importe pueda pasar `size`, `className`, `color`, etc.

export const GithubIcon = (props) => <FaGithub {...props} />;
export const InstagramIcon = (props) => <FaInstagram {...props} />;
export const LinkedinIcon = (props) => <FaLinkedin {...props} />;
export const WhatsappIcon = (props) => <FaWhatsapp {...props} />;
export const MenuIcon = (props) => <HiMenuAlt3 {...props} />;
export const CloseIcon = (props) => <AiOutlineClose {...props} />;
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
export const CopyrightIcon = (props) => <FaCopyright {...props} />;
export const CircleIcon = (props) => <FaCircle {...props} />;
export const CodeIcon = (props) => <FaCode {...props} />;
export const ChevronDownIcon = (props) => <FaChevronDown {...props} />;
export const TrelloIcon = (props) => <FaTrello {...props} />;
export const WordIcon = (props) => <FaFileWord {...props} />;
export const ExcelIcon = (props) => <FaFileExcel {...props} />;
export const AdobeXdIcon = (props) => <SiAdobexd {...props} />;
export const VisualStudioIcon = (props) => <BiLogoVisualStudio {...props} />;
export const GoogleIcon = (props) => <FcGoogle {...props} />;
export const FireFoxIcon = (props) => <FaFirefoxBrowser {...props} />;
export const IoExtensionPuzzleIcon = (props) => (
  <IoExtensionPuzzle {...props} />
);
export const BookIcon = (props) => <FaBook {...props} />;
export const JqueryIcon = (props) => <DiJqueryLogo {...props} />;
export const AnimationIcon = (props) => <MdOutlineAnimation {...props} />;
export const ScrollRevealIcon = (props) => <SiScrollreveal {...props} />;
export const PostmanIcon = (props) => <SiPostman {...props} />;
export const CpanelIcon = (props) => <FaCpanel {...props} />;

// Exporta todos los iconos juntos como un objeto por defecto

export default {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
  MenuIcon,
  CloseIcon,
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
  CopyrightIcon,
  CircleIcon,
  CodeIcon,
  ChevronDownIcon,
  TrelloIcon,
  WordIcon,
  ExcelIcon,
  AdobeXdIcon,
  VisualStudioIcon,
  GoogleIcon,
  FireFoxIcon,
  IoExtensionPuzzleIcon,
  BookIcon,
  JqueryIcon,
  AnimationIcon,
  ScrollRevealIcon,
  PostmanIcon,
  CpanelIcon,
};
