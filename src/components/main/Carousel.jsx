import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import Titleh2 from "../Titleh2";
// icons
import {
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
} from "../icons/Icons";
import { defaultSplideOptions } from "../../utils/splideConfig";

function Carousel() {
  const splideRef = useRef(null);
  const splideInstance = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      // Inicializa Splide usando las opciones globales
      const splide = new Splide(splideRef.current, {
        ...defaultSplideOptions,
        arrows: false, // Desactivar flechas automáticas de Splide
      });

      splide.mount();
      splideInstance.current = splide; // Guardar instancia para usar en los botones

      // Cleanup al desmontar el componente
      return () => {
        splide.destroy();
      };
    }
  }, []);

  // Datos de ejemplo - reemplaza con tus propias herramientas/tecnologías
  const tools = [
    { name: "React", Icon: ReactIcon, color: "#61DAFB" }, // Componente de icono
    { name: "JavaScript", Icon: JavascriptIcon, color: "#EFD81D" }, // Componente de icono
    { name: "Tailwind CSS", Icon: TailwindIcon, color: "#00BCFF" }, // Componente de icono
    { name: "Node.js", Icon: NodeIcon, color: "#57A745" }, // Componente de icono
    { name: "Figma", Icon: FigmaIcon, color: "#FFF" }, // Componente de icono
    { name: "Git", Icon: GitIcon, color: "#F05133" }, // Componente de icono
    { name: "Firebase", Icon: FireIcon, color: "#DD2C00" }, // Componente de icono
    { name: "Vue.js", Icon: VueIcon, color: "#42b883" }, // Componente de icono
    { name: "Bootstrap", Icon: BootstrapIcon, color: "#7210F5" }, // Componente de icono
    { name: "CSS3", Icon: CssIcon, color: "#1E3FDA" }, // Componente de icono
    { name: "HTML5", Icon: HtmlIcon, color: "#E44D26" }, // Componente de icono
    { name: "MySQL", Icon: MysqlIcon, color: "#006089" }, // Componente de icono
    { name: "PHP", Icon: PhpIcon, color: "#8800FF" }, // Componente de icono
    { name: "Database", Icon: DatabaseIcon, color: "#FFF" }, // Componente de icono
    { name: "WordPress", Icon: WordpressIcon, color: "#FFF" }, // Componente de icono
  ];

  return (
    <section className="max-w-[1000px] m-auto pt-8 sm:pt-10 md:pt-30 px-4">
      <article>
        <Titleh2 className="mb-8 md:mb-16">Herramientas</Titleh2>

        {/* Splide Carousel */}
        <div ref={splideRef} className="splide relative">
          <div className="splide__track">
            <ul className="splide__list">
              {tools.map((tool, index) => (
                <li key={index} className="splide__slide">
                  <div className="h-full flex flex-col items-center justify-center">
                    <div className="mb-4">
                      <tool.Icon
                        className="w-10 h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 mx-auto"
                        style={{ color: tool.color }}
                      />
                    </div>
                    <p className="text-white font-primary text-lg font-semibold">
                      {tool.name}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Flechas de navegación personalizadas */}
          <button
            onClick={() => splideInstance.current?.go("<")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2"
            aria-label="Previous slide"
          >
            <ArrowLeftIcon className="text-xl md:text-2xl xl:text-3xl text-white cursor-pointer lg:hover:text-[#FF6F61] transition-colors" />
          </button>
          <button
            onClick={() => splideInstance.current?.go(">")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2"
            aria-label="Next slide"
          >
            <ArrowRightIcon className="text-xl md:text-2xl xl:text-3xl text-white cursor-pointer lg:hover:text-[#FF6F61] transition-colors" />
          </button>
        </div>
      </article>
    </section>
  );
}

export default Carousel;
