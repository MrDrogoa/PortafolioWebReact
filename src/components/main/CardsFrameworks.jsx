import React from "react";
import { Link } from "react-router-dom";
import Firma from "@/assets/img/frameworks/firma-card.webp";
import Habitissimo from "@/assets/img/frameworks/habitissimo-card.webp";
import Spotify from "@/assets/img/frameworks/spotify-card.webp";
import {
  JavascriptIcon,
  PhpIcon,
  WordpressIcon,
  DatabaseIcon,
} from "@/components/icons/Icons";

function Cards() {
  const cardData = [
    {
      id: 1,
      title: "Firma del Restaurador",
      description:
        "Este desafío fue especialmente complejo porque implicó trabajar...",
      image: Firma,
      path: "/implementacion-de-frameworks/proyecto-firma",
      icon: [
        { Icon: PhpIcon, color: "text-[#8800FF]" },
        { Icon: JavascriptIcon, color: "text-[#EFD81D]" },
        { Icon: DatabaseIcon, color: "text-[#FFFFFF]" },
        { Icon: WordpressIcon, color: "text-[#FFFFFF]" },
      ],
    },
    {
      id: 2,
      title: "Habitissimo",
      description:
        "Tuvimos que rediseñar y mejorar un sitio web existente para este semestre...",
      image: Habitissimo,
      path: "/implementacion-de-frameworks/proyecto-habitissimo",
      icon: [
        { Icon: PhpIcon, color: "text-[#8800FF]" },
        { Icon: JavascriptIcon, color: "text-[#EFD81D]" },
        { Icon: DatabaseIcon, color: "text-[#FFFFFF]" },
        { Icon: WordpressIcon, color: "text-[#FFFFFF]" },
      ],
    },
    {
      id: 3,
      title: "Spotify Clone",
      description:
        "En este desafío, trabajé con la API de WordPress para desarrollar un proyecto...",
      image: Spotify,
      path: "/implementacion-de-frameworks/proyecto-spotify",
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
                    <Link to={card.path} key={index}>
                      <IconComp
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
