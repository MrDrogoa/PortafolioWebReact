import React from "react";
import { Link } from "react-router-dom";
import Libros from "@/assets/img/disenouxui/libros.webp";
import Pet from "@/assets/img/disenouxui/pet-card.webp";
import Womad from "@/assets/img/disenouxui/womad-card.webp";
import { FigmaIcon } from "@/components/icons/Icons";

function Cards() {
  const cardData = [
    {
      id: 1,
      title: "Proyectos Libros",
      description:
        "En las primeras etapas de nuestro trabajo con el brief y el benchmark, llevamos...",
      image: Libros,
      path: "/diseno-centrado-en-el-usuario/proyecto-libros",
      icon: [{ Icon: FigmaIcon, color: "text-white" }],
    },
    {
      id: 2,
      title: "Petmatch - Diseño",
      description:
        "En el trabajo desarrollamos una solución para combatir el abandono de perros...",
      image: Pet,
      path: "/diseno-centrado-en-el-usuario/petmatch-diseno",
      icon: [{ Icon: FigmaIcon, color: "text-white" }],
    },
    {
      id: 3,
      title: "Womad - Rediseño",
      description:
        "En este proyecto pude conocer mas a fondo las metodologias que se usan...",
      image: Womad,
      path: "/diseno-centrado-en-el-usuario/womad-rediseno",
      icon: [{ Icon: FigmaIcon, color: "text-white" }],
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
