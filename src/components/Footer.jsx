import React from "react";
import Logo from "../assets/images/logo.svg";
import { CopyrightIcon, CircleIcon } from "./icons/Icons";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t-2 border-white mt-8 sm:mt-10 md:mt-30 px-4">
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
            <p className="font-secondary text-white font-medium md:text-lg lg:text-xl w-40 md:w-52 text-center md:text-start">
              ¡Creemos Juntos Tu Presencia Digital!
            </p>
            <div className="text-center md:text-start">
              <a
                href="mailto:picisdaniel2016@gmail.com"
                className="font-secondary py-2 px-5 bg-[#FF6F61] hover:bg-[#ff776a] text-[#202023] font-semibold rounded-lg hover:-translate-y-2 hover:shadow-lg will-change-transform transition-transform duration-300 ease-in-out mt-4 inline-block"
              >
                Correo
              </a>
            </div>
          </div>

          <div className="flex md:flex-row gap-20">
            <div className="card-footer-2">
              <h3 className="font-primary text-white text-xl md:text-2xl font-semibold text-center md:text-start">
                Redes
              </h3>
              <div className="flex text-white gap-2"></div>
            </div>
            <div className="flex flex-col md:block card-footer-3">
              <h3 className="font-primary text-white text-xl md:text-2xl font-semibold text-center md:text-start">
                Contacto
              </h3>
              <a
                href=""
                className="text-center md:text-start text-white hover:text-[#ff6e61e5] font-primary transition-colors"
              >
                mensaje
              </a>
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
