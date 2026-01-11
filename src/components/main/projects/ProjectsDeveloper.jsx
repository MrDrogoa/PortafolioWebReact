import React from "react";

function ProjectsDeveloper() {
  const ideaProcess = [
    {
      step: "01",
      description: `Antes de iniciar un sitio web, es importante realizar una investigación previa que permita optimizar su funcionamiento. Herramientas como el <span class="text-[#FF6F61] font-semibold">Brief</span> ayudan a definir el enfoque estratégico analizando al público objetivo, mientras que el <span class="text-[#FF6F61] font-semibold">Benchmarking</span> permite evaluar la usabilidad, accesibilidad y estética de sitios similares. Aplicar estos métodos favorece el desarrollo de una estructura clara y alineada con las necesidades del usuario.`,
    },
    {
      step: "02",
      description: `Es fundamental crear un <span class="text-[#FF6F61] font-semibold">Wireframe</span> para planificar su estructura y distribución visual. Herramientas como Figma o Adobe XD, junto con plugins, facilitan este proceso y lo hacen más dinámico. Al diseñar el <span class="text-[#FF6F61] font-semibold">Mockup</span> final, se debe aplicar lo aprendido para definir tipografías, colores, tamaños de imagen y secciones, asegurando así un diseño claro, coherente y funcional desde el inicio.`,
    },
    {
      step: "03",
      description: `Antes de comenzar a codificar con <span class="text-[#FF6F61] font-semibold">HTML</span> y <span class="text-[#FF6F61] font-semibold">CSS</span>, es clave definir la estructura del sitio, pestañas, enlaces y librerías necesarias. Esto permite organizar mejor los recursos, facilitar el uso de <span class="text-[#FF6F61] font-semibold">JavaScript</span> y mantener ordenados los archivos en carpetas. Con todo listo y descargado, se inicia la etapa final de codificación, aplicando lo planificado para construir el sitio con un diseño responsivo y bien estructurado desde el principio.`,
    },
    {
      step: "04",
      description: `Subimos el proyecto a <span class="text-[#FF6F61] font-semibold">WordPress</span>, primero se configura en local usando MAMP o XAMPP, descargando WordPress y creando una base de datos en <span class="text-[#FF6F61] font-semibold">PhpMyAdmin</span>, ubicada en la carpeta htdocs. Luego, se agrega el proyecto en wp-content/themes/(nombre del sitio) con archivos clave como style.css, y el lenguaje Backend como <span class="text-[#FF6F61] font-semibold">PHP</span> para index.php y functions.php para estructurar el sitio. Después se organiza el contenido en categorías, entradas y páginas para completar la estructura. Finalmente, el sitio se sube a producción mediante CPanel, importando la base de datos y vinculándolo correctamente al dominio para su publicación online.`,
    },
  ];

  return (
    <section className="pt-8 md:pt-12 lg:pt-14 xl:pt-16">
      <div className="flex flex-wrap lg:flex-nowrap md:flex-row justify-center">
        {ideaProcess.map((item, index) => (
          <div
            key={index}
            className="flex flex-col text-white border-2 px-5 md:px-6 py-10 max-w-sm w-full"
          >
            <h3 className="font-primary text-xl md:text-2xl font-semibold">
              {item.step}
            </h3>
            <p
              className="font-secondary font-normal text-gray-300 text-sm md:text-lg pb-2"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsDeveloper;
