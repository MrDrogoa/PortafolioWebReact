import React from "react";
import { Link } from "react-router-dom";
import Bootstrap from "@/assets/img/frontend/bootstrap.webp";
import Landings from "@/assets/img/frontend/landings.webp";
import PetFront from "@/assets/img/frontend/pet-front.webp";

import { HtmlIcon, CssIcon } from "@/components/icons/Icons";

function Cards() {
  const cardData = [
    {
      id: 1,
      title: "Proyectos Bootstrap",
      description:
        "Para este trabajo aprendimos los fundamentos de las librerías CSS...",
      image: Bootstrap,
      //   path: "/diseno-centrado-en-el-usuario",
      icon: [
        { Icon: HtmlIcon, color: "text-[#E44D26]" },
        { Icon: CssIcon, color: "text-[#1E3FDA]" },
      ],
    },
    {
      id: 2,
      title: "Landings",
      description:
        "En este proyecto, trabajamos directamente con código, aplicando conocimientos...",
      image: Landings,
      //   path: "/desarrollo-front-end",
      icon: [
        { Icon: HtmlIcon, color: "text-[#E44D26]" },
        { Icon: CssIcon, color: "text-[#1E3FDA]" },
      ],
    },
    {
      id: 3,
      title: "Petmatch - Front-End",
      description:
        "El proyecto consistió en replicar el trabajo del primer semestre, esta vez enfocándose...",
      image: PetFront,
      //   path: "/implementacion-de-frameworks",
      icon: [
        { Icon: HtmlIcon, color: "text-[#E44D26]" },
        { Icon: CssIcon, color: "text-[#1E3FDA]" },
      ],
    },
  ];
  return (
    <section>
      <div className="flex flex-col md:flex-row flex-wrap justify-center px-5 w-full gap-5">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="card flex flex-col border-2 border-white overflow-hidden rounded-md max-w-xs lg:max-w-sm m-auto md:m-0"
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
