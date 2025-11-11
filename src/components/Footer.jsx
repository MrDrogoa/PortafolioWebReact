import React from "react";
import Logo from "@/assets/images/logo.svg";
import { CopyrightIcon, CircleIcon } from "@/components/icons/Icons";
import Button2Components from "@/components/buttons/Button2Components";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/icons/Icons";
import { Link } from "react-router-dom";

function Footer() {
  const linkWhatsapp = [
    {
      Icon: WhatsappIcon,
      href: "https://wa.me/+56962857073",
      label: "WhatsApp",
    },
  ];
  const links = [
    {
      Icon: GithubIcon,
      href: "https://github.com/MrDrogoa",
      label: "Github",
    },
    {
      Icon: InstagramIcon,
      href: "https://www.instagram.com/j.daniel.01/",
      label: "Instagram",
    },
    {
      Icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/daniel-rosales-1b737a1a9/",
      label: "LinkedIn",
    },
    {
      Icon: WhatsappIcon,
      href: "https://wa.me/+56962857073",
      label: "WhatsApp",
    },
  ];
  return (
    <footer className="border-t-2 border-white mt-8 sm:mt-10 md:mt-30 px-6 lg:px-4">
      <section className="max-w-[1300px] m-auto md:px-5 pb-14 md:pb-10 pt-16">
        <div className="flex flex-col justify-center items-center md:items-stretch md:flex-row md:justify-between gap-6 md:gap-0">
          <div className="card-footer-1">
            <a href="">
              <img
                src={Logo}
                alt="logo"
                className="w-24 md:w-32 m-auto md:m-0"
              />
            </a>
            <p className="font-secondary text-white font-medium md:text-lg lg:text-xl w-40 md:w-52 text-center md:text-start py-2 md:py-4">
              ¡Creemos Juntos Tu Presencia Digital!
            </p>
            <div className="text-center md:text-start ">
              {linkWhatsapp.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Button2Components>Contáctame</Button2Components>
                </a>
              ))}
            </div>
          </div>

          <div className="flex md:flex-row gap-10 sm:gap-15 md:gap-20">
            <div className="card-footer-2">
              <h3 className="font-primary text-white text-lg sm:text-xl md:text-2xl font-semibold text-center md:text-start">
                Redes
              </h3>
              <div className="flex text-white mt-2 md:mt-4 gap-2 md:gap-4">
                {links.map(({ Icon, href, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="bg-white rounded-md p-1 flex items-center justify-center lg:hover:bg-[#FF6F61] transition-colors duration-300 focus-visible:ring-2"
                  >
                    <Icon className="text-2xl text-[#202023]" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col md:block card-footer-3">
              <h3 className="font-primary text-white text-lg sm:text-xl md:text-2xl font-semibold text-center md:text-start">
                Contacto
              </h3>
              <Link
                to="/contact"
                className="text-center md:text-start text-white mt-2 md:mt-4 lg:hover:text-[#ff6e61e5] text-sm md:text-base font-primary transition-colors"
              >
                mensaje
              </Link>
            </div>
          </div>
        </div>

        <span className="flex items-center gap-2 justify-center text-white pt-6 font-medium">
          <CopyrightIcon />
          Copyright 2025
          <CircleIcon className="fa-solid fa-circle text-[#FF6F61] text-[7px]" />
          Daniel Rosales
        </span>
      </section>
    </footer>
  );
}

export default Footer;
