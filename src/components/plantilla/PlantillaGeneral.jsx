import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projectsService from "@/services/projectsService";
import ArrowRight from "@/assets/img/arrow/arrow-right.svg";
import ArrowBottom from "@/assets/img/arrow/arrow-bottom.svg";
import ArrowCurve from "@/assets/img/arrow/arrow-curve-1.svg";
import ArrowLeft from "@/assets/img/arrow/arrow-left.svg";
import ArrowCurve2 from "@/assets/img/arrow/arrow-curve-2.svg";
import ArrowCurveFinal from "@/assets/img/arrow/arrow-curve-final.svg";

const API_BASE_URL =
  import.meta.env.VITE_API_URL?.replace("/api", "") || "http://localhost:4000";

function PlantillaGeneral() {
  const { id, categoria, slug } = useParams(); // Obtener parámetros desde la URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      setLoading(true);
      let data = null;

      // Si tenemos categoría y slug, usar esa ruta (prioridad)
      if (categoria && slug) {
        data = await projectsService.getProjectByCategoryAndSlug(
          categoria,
          slug
        );
      }
      // Si solo tenemos ID, usar la ruta por ID (retrocompatibilidad)
      else if (id) {
        data = await projectsService.getProjectById(id);
      }

      setProject(data);
      setLoading(false);
    };

    if (id || (categoria && slug)) {
      loadProject();
    }
  }, [id, categoria, slug]);

  if (loading) {
    return (
      <section className="max-w-[1300px] m-auto py-8 md:py-12 lg:py-14">
        <div className="flex justify-center items-center h-96">
          <p className="text-white text-xl">Cargando proyecto...</p>
        </div>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="max-w-[1300px] m-auto py-8 md:py-12 lg:py-14">
        <div className="flex justify-center items-center h-96 flex-col gap-4">
          <p className="text-white text-xl">Proyecto no encontrado</p>
          <Link
            to="/projects"
            className="text-[#FFEA00] hover:text-[#FFEE39] underline"
          >
            Volver a proyectos
          </Link>
        </div>
      </section>
    );
  }

  // Separar el contenido en secciones (excluyendo la presentación que es la última)
  const contentSections = project.content?.slice(0, -1) || [];
  const presentationSection = project.content?.slice(-1)[0] || null;

  return (
    <section className="max-w-[1300px] m-auto py-8 md:py-12 lg:py-14">
      {/* Header del proyecto */}
      <div className="px-5 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-3/5">
          <h2 className="font-primary text-white text-4xl md:text-5xl lg:text-6xl font-extrabold text-center md:text-left">
            {project.titulo}
          </h2>
          <div className="font-secondary font-normal md:text-lg text-center md:text-start text-white py-3 pb-6 lg:pb-0">
            <p>{project.descripcion}</p>
          </div>
        </div>

        {/* Botón de Behance o Demo */}
        {(project.demo_url || project.github_url) && (
          <div>
            <button className="font-secondary py-2 px-5 bg-[#FFEA00] hover:bg-[#FFEE39] text-[#202023] font-semibold rounded-lg hover:-translate-y-2 hover:shadow-lg will-change-transform transition-transform duration-300 ease-in-out">
              <a
                href={project.demo_url || project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {project.demo_url ? (
                  <>
                    Behance{" "}
                    <i className="fa-brands fa-square-behance text-3xl"></i>
                  </>
                ) : (
                  <>
                    GitHub <i className="fa-brands fa-github text-3xl"></i>
                  </>
                )}
              </a>
            </button>
          </div>
        )}
      </div>

      {/* Secciones de contenido dinámicas */}
      {contentSections.map((section, index) => {
        const isEven = index % 2 === 0;

        return (
          <React.Fragment key={section.id}>
            <div
              className={`mx-5 flex flex-col lg:flex-row justify-center items-center gap-7 md:gap-12 ${
                isEven ? "lg:gap-14" : ""
              } pt-11`}
            >
              {/* Contenido de texto (para secciones pares) */}
              {isEven && (
                <>
                  <div className="border-2 border-white text-white p-11 rounded-md w-full">
                    <h3 className="font-primary text-[#FF6F61] text-xl md:text-2xl font-semibold text-center">
                      {section.titulo}
                    </h3>
                    <div className="font-secondary text-white font-normal md:text-lg py-3 md:py-4">
                      <p>{section.descripcion}</p>
                    </div>
                  </div>

                  {/* Flecha mobile después del texto */}
                  <div className="lg:hidden block">
                    <img
                      src={ArrowBottom}
                      alt="arrow-bottom"
                      className="w-3/4 md:w-full"
                    />
                  </div>
                </>
              )}

              {/* Imagen (para secciones impares) */}
              {!isEven && (
                <>
                  <div className="w-full">
                    <img
                      src={`${API_BASE_URL}${section.url}`}
                      alt={section.titulo}
                      className="rounded-md m-auto lg:m-0 w-full"
                    />
                  </div>

                  {/* Flecha mobile después de la imagen */}
                  <div className="lg:hidden block">
                    <img
                      src={ArrowBottom}
                      alt="arrow-bottom"
                      className="w-3/4 md:w-full"
                    />
                  </div>
                </>
              )}

              {/* Flecha para desktop */}
              <div className="w-1/4 hidden lg:block">
                <img
                  src={isEven ? ArrowRight : ArrowLeft}
                  alt={`arrow-${isEven ? "right" : "left"}`}
                />
              </div>

              {/* Imagen (para secciones pares) */}
              {isEven && (
                <>
                  <div className="w-full">
                    <img
                      src={`${API_BASE_URL}${section.url}`}
                      alt={section.titulo}
                      className="rounded-md m-auto lg:m-0 w-full"
                    />
                  </div>
                  {/* Flecha mobile después de la imagen */}
                  <div className="lg:hidden block">
                    <img
                      src={ArrowBottom}
                      alt="arrow-bottom"
                      className="w-3/4 md:w-full"
                    />
                  </div>
                </>
              )}

              {/* Contenido de texto (para secciones impares) */}
              {!isEven && (
                <>
                  <div className="border-2 border-white text-white p-11 rounded-md w-full">
                    <h3 className="font-primary text-[#FF6F61] text-xl md:text-2xl font-semibold text-center">
                      {section.titulo}
                    </h3>
                    <div className="font-secondary text-white font-normal md:text-lg py-3 md:py-4">
                      <p>{section.descripcion}</p>
                    </div>
                  </div>

                  {/* Flecha mobile después de la imagen */}
                  <div className="lg:hidden block">
                    <img
                      src={ArrowBottom}
                      alt="arrow-bottom"
                      className="w-3/4 md:w-full"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Flechas curvas entre secciones (solo desktop) */}
            {index < contentSections.length - 1 && (
              <div className="lg:flex lg:justify-center hidden relative">
                <div
                  className={`absolute ${
                    index % 2 === 0 ? "-bottom-32" : "-bottom-44"
                  }`}
                >
                  <img
                    src={index % 2 === 0 ? ArrowCurve : ArrowCurve2}
                    alt={`arrow-curve-${index}`}
                  />
                </div>
              </div>
            )}

            {/* Flecha final antes de presentación */}
            {index === contentSections.length - 1 && (
              <div className="lg:flex lg:justify-center hidden relative">
                <div className="absolute -bottom-[100px]">
                  <img src={ArrowCurveFinal} alt="arrow-final" />
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}

      {/* Sección de presentación final */}
      {presentationSection && (
        <section className="max-w-[1300px] m-auto pt-14 md:pt-16">
          <div className="flex justify-center items-center flex-col w-72 md:w-1/2 lg:w-3/4 text-white m-auto text-center gap-3">
            <h2 className="font-primary text-white text-3xl md:text-4xl font-semibold">
              {presentationSection.titulo}
            </h2>
            <div className="font-secondary font-normal md:text-lg pb-2">
              <p>{presentationSection.descripcion}</p>
            </div>
          </div>
          <div className="flex justify-center px-4 pt-8 md:pt-14">
            <img
              src={`${API_BASE_URL}${presentationSection.url}`}
              alt={presentationSection.titulo}
              className="rounded-md w-full max-w-4xl"
            />
          </div>
        </section>
      )}

      {/* Botón de contacto */}
      <section className="flex justify-center py-8">
        <button className="flex items-center gap-2 font-secondary py-2 px-5 bg-[#FFEA00] hover:bg-[#FFEE39] text-[#202023] font-semibold rounded-lg hover:-translate-y-2 hover:shadow-lg will-change-transform transition-transform duration-300 ease-in-out">
          <Link to="/contact">Contacto</Link>
        </button>
      </section>
    </section>
  );
}

export default PlantillaGeneral;
