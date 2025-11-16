import React from "react";
import { Link } from "react-router-dom";
import Diseno from "@/assets/img/diseno-usuario.jpg";
import Frontend from "@/assets/img/desarrollo-frontend.jpg";
import Frameworks from "@/assets/img/implementacion-frameworks.jpg";
import {
  FigmaIcon,
  HtmlIcon,
  JavascriptIcon,
  PhpIcon,
  WordpressIcon,
  CssIcon,
  DatabaseIcon,
} from "../icons/Icons";

function Cards() {
  const cardData = [
    {
      id: 1,
      title: "Diseño Centrado en el Usuario",
      description:
        "metodología que prioriza las necesidades y expectativas del usuario...",
      image: Diseno,
      path: "/diseno-centrado-en-el-usuario",
      icon: [{ Icon: FigmaIcon, color: "text-white" }],
    },
    {
      id: 2,
      title: "Desarrollo Front-End",
      description:
        "Se enfoca en la creación y diseño de la interfaz visual de un sitio o aplicación...",
      image: Frontend,
      path: "/desarrollo-front-end",
      icon: [
        { Icon: HtmlIcon, color: "text-[#E44D26]" },
        { Icon: CssIcon, color: "text-[#1E3FDA]" },
      ],
    },
    {
      id: 3,
      title: "Implementación de Frameworks",
      description:
        "Consiste en integrar estructuras predefinidas de desarrollo...",
      image: Frameworks,
      path: "/implementacion-de-frameworks",
      icon: [
        { Icon: PhpIcon, color: "text-[#8800FF]" },
        { Icon: JavascriptIcon, color: "text-[#EFD81D]" },
        { Icon: DatabaseIcon, color: "text-[#FFFFFF]" },
        { Icon: WordpressIcon, color: "text-[#FFFFFF]" },
      ],
    },
  ];
  return (
    <section>
      <div className="flex flex-col md:flex-row flex-wrap justify-center px-5 w-full gap-5">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="card flex flex-col border-2 border-white rounded-md max-w-xs lg:max-w-sm m-auto md:m-0"
          >
            <Link to={card.path} className="group overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="object-cover transition-transform duration-500 lg:group-hover:scale-110 "
              />
            </Link>

            <div className="px-6 pb-6 pt-5 flex flex-col">
              <Link
                to={card.path}
                className="hover:text-[#ce4c40] font-primary text-[#FF6F61] font-semibold md:text-lg transition-colors"
              >
                {card.title}
              </Link>

              <p className="font-secondary font-normal text-sm md:text-base text-white pb-2">
                {card.description}
              </p>

              <div className="flex justify-end mt-auto">
                {card.icon.map((ic, index) => {
                  const IconComp = ic.Icon;
                  return (
                    <Link to={card.path}>
                      <IconComp
                        key={index}
                        className={`${ic.color} text-2xl lg:text-3xl ml-2`}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;
