import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
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
} from "../icons/Icons";
import { defaultSplideOptions } from "../../utils/splideConfig";
// Ya no necesitas importar los estilos aquí porque están en main.jsx

function Carousel() {
  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      // Inicializa Splide usando las opciones globales
      // Puedes personalizar mezclando con opciones adicionales
      const splide = new Splide(splideRef.current, {
        ...defaultSplideOptions,
        // Aquí puedes sobrescribir opciones específicas si lo necesitas:
        // interval: 4000,
        // perPage: 5,
      });

      splide.mount();

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
    <section className="max-w-[1300px] m-auto py-14 md:py-20 px-4">
      <article>
        <h2 className="font-primary text-white text-3xl md:text-4xl font-semibold text-center mb-12">
          Herramientas
        </h2>

        {/* Splide Carousel */}
        <div ref={splideRef} className="splide">
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
        </div>
      </article>
    </section>
  );
}

export default Carousel;
