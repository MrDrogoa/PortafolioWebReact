import React from "react";
import {
  FigmaIcon,
  TrelloIcon,
  WordIcon,
  ExcelIcon,
  AdobeXdIcon,
  VisualStudioIcon,
  HtmlIcon,
  CssIcon,
  GoogleIcon,
  FireFoxIcon,
  IoExtensionPuzzleIcon,
  JavascriptIcon,
  BookIcon,
  JqueryIcon,
  AnimationIcon,
  ScrollRevealIcon,
  PhpIcon,
  WordpressIcon,
  DatabaseIcon,
  MysqlIcon,
  PostmanIcon,
  TailwindIcon,
  CpanelIcon,
} from "@/components/icons/Icons";

function Timeline() {
  // Datos hardcodeados de experiencias
  const experiences = [
    {
      id: 1,
      year: 2023,
      title: "Comprendiendo los requerimientos del usuario",
      description: `Mi camino en el desarrollo comenzó con la importancia de entender las 
      necesidades reales de quienes utilizarán un producto digital. Durante el curso de Diseño 
      de Interfaces aprendí que todo proyecto debe iniciar con la identificación del <span class="text-[#FF6F61] font-semibold">brief</span>, donde 
      se define la problemática del usuario y los objetivos que se buscan alcanzar. Este primer paso 
      me permitió comprender que el diseño no es solo estética, sino también una respuesta estratégica 
      a un problema específico. Para la <span class="text-[#FF6F61] font-semibold">planificación y organización</span> del proyecto trabajé con <span class="text-[#FF6F61] font-semibold">Trello</span>, 
      lo que me permitió estructurar tareas, tiempos y prioridades de manera clara y ordenada.`,
      icons: [{ Icon: TrelloIcon, color: "text-blue-700" }],
    },
    {
      id: 2,
      year: 2023,
      title: "Análisis de competencias y arquetipos de usuarios",
      description: `Una vez definido el contexto, descubrí el valor del <span class="text-[#FF6F61] font-semibold">benchmarking</span> como herramienta 
        para analizar las competencias y referencias existentes en el mercado. Este proceso 
        me ayudó a diferenciar propuestas y encontrar oportunidades de mejora. Paralelamente, 
        aprendí a construir <span class="text-[#FF6F61] font-semibold">arquetipos de usuarios</span>, representaciones que permiten estudiar más 
        a fondo las motivaciones, necesidades y comportamientos de quienes interactúan con la 
        plataforma. Para documentar y organizar estos análisis trabajé con <span class="text-[#FF6F61] font-semibold">Word</span> y <span class="text-[#FF6F61] font-semibold">Excel</span>, y para la 
        creación de mapas y esquemas colaborativos utilicé <span class="text-[#FF6F61] font-semibold">FigJam</span>, lo que me permitió visualizar 
        de forma más dinámica las ideas y los perfiles de usuario.`,
      icons: [
        { Icon: FigmaIcon, color: "text-red-700" },
        { Icon: WordIcon, color: "text-blue-900" },
        { Icon: ExcelIcon, color: "text-green-700" },
      ],
    },
    {
      id: 3,
      year: 2023,
      title: "De la idea al diseño visual final",
      description: `El último tramo de este proceso consistió en transformar la investigación 
      en propuestas tangibles. Primero elaboré <span class="text-[#FF6F61] font-semibold">wireframes</span>, bocetos que muestran la estructura 
      básica de la interfaz y cómo se organizarían los elementos principales. Luego, avancé hacia 
      el <span class="text-[#FF6F61] font-semibold">mockup final</span>, donde definí la guía de estilos con todos los detalles visuales: cuadrículas, 
      íconos, imágenes, tipografías y paletas de colores. Para este trabajo utilicé <span class="text-[#FF6F61] font-semibold">Figma</span> y también 
      <span class="text-[#FF6F61] font-semibold">Adobe XD</span>, herramientas que manejo con soltura y que me permitieron dar forma a diseños 
      profesionales, integrando tanto la funcionalidad como la estética en un resultado coherente 
      y atractivo.`,
      icons: [
        { Icon: FigmaIcon, color: "text-red-700" },
        { Icon: AdobeXdIcon, color: "text-pink-900" },
      ],
    },
    {
      id: 4,
      year: 2023,
      title: "Descubriendo el lenguaje semántico",
      description: `En la segunda etapa del año tuve la oportunidad de conocer 
      cómo se construyen los sitios web directamente desde el código. El curso que 
      llevamos se llamó Lenguaje Semántico, y me resultó muy curioso ver cómo al escribir 
      código podía reflejarse inmediatamente en la pantalla. Comenzamos trabajando con 
      <span class="text-[#FF6F61] font-semibold">Visual Studio Code</span>, primero desarrollando la estructura con <span class="text-[#FF6F61] font-semibold">HTML</span> y luego aplicando 
      el diseño con <span class="text-[#FF6F61] font-semibold">CSS</span>. Al inicio me costó comprender cómo se manejaban estas tecnologías, 
      pero con muchas horas de práctica logré avanzar y entender mejor su funcionamiento.`,
      icons: [
        { Icon: VisualStudioIcon, color: "text-blue-500" },
        { Icon: HtmlIcon, color: "text-orange-600" },
        { Icon: CssIcon, color: "text-blue-800" },
      ],
    },
    {
      id: 5,
      year: 2023,
      title: "Del diseño al código en acción",
      description: `Lo más fascinante de esta etapa fue poder transformar los diseños 
      que habíamos trabajado en el primer semestre en código real y verlos funcionar en 
      navegadores como <span class="text-[#FF6F61] font-semibold">Google Chrome</span> y <span class="text-[#FF6F61] font-semibold">Mozilla Firefox</span>. Aprendí a desarrollar interfaces 
      basadas en los prototipos previos, asegurando que la estética y la funcionalidad se 
      mantuvieran fieles a la idea original. Además, trabajamos en la implementación de 
      <span class="text-[#FF6F61] font-semibold">responsive design</span> mediante <span class="text-[#FF6F61] font-semibold">media queries</span>, lo que me permitió adaptar los proyectos a 
      diferentes resoluciones de pantalla y garantizar que se vieran bien en cualquier dispositivo.
`,
      icons: [
        { Icon: FireFoxIcon, color: "text-orange-600" },
        { Icon: GoogleIcon },
        { Icon: HtmlIcon, color: "text-orange-600" },
        { Icon: CssIcon, color: "text-blue-800" },
      ],
    },
    {
      id: 6,
      year: 2023,
      title: "Optimizando el desarrollo con extensiones",
      description: `Posteriormente descubrí que el proceso de codificación 
      podía ser mucho más ágil gracias a las <span class="text-[#FF6F61] font-semibold">extensiones</span> de <span class="text-[#FF6F61] font-semibold">Visual Studio Code</span>. 
      Estas herramientas me facilitaron la escritura de código, la organización 
      de estilos y la automatización de tareas repetitivas. Con ellas, pude optimizar 
      mi flujo de trabajo y enfocarme más en la calidad del diseño y la experiencia del 
      usuario, consolidando así mis primeros pasos en el desarrollo frontend con una base 
      sólida y práctica.`,
      icons: [
        { Icon: IoExtensionPuzzleIcon, color: "text-gray-800" },
        { Icon: VisualStudioIcon, color: "text-blue-500" },
      ],
    },
    {
      id: 7,
      year: 2024,
      title: "Primeros pasos con JavaScript",
      description: `Al comenzar el año 2024, en el tercer semestre de la carrera, nos 
      introdujimos en lo básico de <span class="text-[#FF6F61] font-semibold">JavaScript</span>. Fue un reto complejo al inicio, ya que 
      primero tuvimos que comprender la teoría y cómo funciona este lenguaje de programación. 
      Para reforzar mi aprendizaje, recurrí a diferentes contenidos en internet que me ayudaron 
      a entender más a fondo sus conceptos. Una vez adquirida esa base, pasamos a la práctica, 
      lo que significó un cambio importante respecto al año anterior, donde solo habíamos 
      trabajado con sitios estáticos.`,
      icons: [
        { Icon: JavascriptIcon, color: "text-yellow-500" },
        { Icon: BookIcon, color: "text-slate-600" },
      ],
    },
    {
      id: 8,
      year: 2024,
      title: "Animaciones e interacción con el DOM",
      description: `En esta etapa realizamos múltiples trabajos que me permitieron 
      experimentar con <span class="text-[#FF6F61] font-semibold">animaciones</span> y comprender el funcionamiento del <span class="text-[#FF6F61] font-semibold">DOM (Document Object Model)</span>. 
      Aprendí a manipular el HTML desde JavaScript para generar interacción dinámica en los sitios 
      web, lo que abrió un nuevo mundo de posibilidades en el desarrollo frontend. Además, conocimos 
      la librería <span class="text-[#FF6F61] font-semibold">jQuery</span>, que facilitaba muchas tareas y reducía la cantidad de código que debíamos 
      escribir en JavaScript puro (vanilla). Esta herramienta fue clave para agilizar el proceso y 
      entender cómo se podían simplificar ciertas funciones`,
      icons: [
        { Icon: JqueryIcon, color: "text-blue-600" },
        { Icon: AnimationIcon, color: "text-red-800" },
      ],
    },
    {
      id: 9,
      year: 2024,
      title: "Mi primer portafolio con animaciones",
      description: `Como trabajo final del semestre, desarrollé <span class="text-[#FF6F61] font-semibold">mi primer portafolio 
        en JavaScript</span>, al cual le añadí numerosas animaciones porque me parecían 
        extraordinarias y daban vida al diseño. Durante este proceso descubrí varias 
        librerías populares que potenciaban los efectos visuales, entre ellas <span class="text-[#FF6F61] font-semibold">ScrollReveal</span> 
        y <span class="text-[#FF6F61] font-semibold">Animate.css</span>, que me permitieron crear transiciones llamativas y modernas. 
        Gracias a estas herramientas, pude transformar mi portafolio en un proyecto más 
        atractivo y dinámico, consolidando así mis primeros pasos en el desarrollo 
        interactivo con JavaScript.`,
      icons: [
        { Icon: ScrollRevealIcon, color: "text-blue-800" },
        { Icon: JavascriptIcon, color: "text-yellow-500" },
        { Icon: AnimationIcon, color: "text-green-800" },
      ],
    },
    {
      id: 10,
      year: 2024,
      title: "Primeros pasos con PHP y bases de datos",
      description: `En esta etapa de la materia, el ramo se llamaba Administración de Contenidos. 
      Comenzamos aprendiendo las bases del lenguaje <span class="text-[#FF6F61] font-semibold">PHP</span> con trabajos simples, como crear un login 
      que se guardara en una base de datos utilizando <span class="text-[#FF6F61] font-semibold">MySQL</span>. Para ello, primero estudiamos cómo 
      interactúan estos lenguajes con un servidor local, trabajando con herramientas como <span class="text-[#FF6F61] font-semibold">MAMP</span> y <span class="text-[#FF6F61] font-semibold">XAMPP</span>, 
      y manipulando directamente <span class="text-[#FF6F61] font-semibold">phpMyAdmin</span>. Este proceso me permitió comprender cómo se conectan el 
      frontend y el backend, y cómo la lógica del servidor da funcionalidad real a los sitios web.`,
      icons: [
        { Icon: PhpIcon, color: "text-violet-700" },
        { Icon: MysqlIcon, color: "text-blue-700" },
        { Icon: DatabaseIcon, color: "text-blue-900" },
      ],
    },
    {
      id: 11,
      year: 2024,
      title: "WordPress desde el código",
      description: `Durante el curso también trabajamos con <span class="text-[#FF6F61] font-semibold">WordPress</span>, pero no desde la 
      maquetación tradicional, sino codificando directamente. Replicamos una página que 
      inicialmente habíamos construido con <span class="text-[#FF6F61] font-semibold">HTML, CSS</span> y <span class="text-[#FF6F61] font-semibold">JavaScript</span>, y la convertimos en un 
      archivo <span class="text-[#FF6F61] font-semibold">index.php</span> para que funcionara como una plantilla dentro de WordPress. De esta 
      manera, aprendimos cómo se estructuran las plantillas modernas y cómo integrarlas desde 
      el código. Esta experiencia me permitió ver que los sitios que antes eran solo estáticos 
      ahora podían tener mayor funcionalidad, integrando tanto la parte visual como la lógica 
      del backend.`,
      icons: [
        { Icon: WordpressIcon, color: "text-blue-900" },
        { Icon: JavascriptIcon, color: "text-yellow-500" },
        { Icon: HtmlIcon, color: "text-orange-600" },
        { Icon: CssIcon, color: "text-blue-800" },
      ],
    },
    {
      id: 12,
      year: 2024,
      title: "Replicando Spotify con CRUD",
      description: `El último trabajo de la materia fue uno de los más desafiantes: 
      replicar el sitio de <span class="text-[#FF6F61] font-semibold">Spotify</span> con varias de sus funciones principales. Implementamos 
      un sistema que permitía <span class="text-[#FF6F61] font-semibold">registrar cantantes, eliminar y modificar información</span>, 
      aplicando el concepto de <span class="text-[#FF6F61] font-semibold">CRUD (Create, Read, Update, Delete)</span>. Para lograrlo, 
      consumimos una <span class="text-[#FF6F61] font-semibold">API</span> de <span class="text-[#FF6F61] font-semibold">WordPress</span> y usamos <span class="text-[#FF6F61] font-semibold">phpMyAdmin</span> como base de datos, integrando 
      todo con <span class="text-[#FF6F61] font-semibold">PHP</span> y <span class="text-[#FF6F61] font-semibold">JavaScript externo</span>. Además, utilizamos <span class="text-[#FF6F61] font-semibold">Postman</span> para probar que la 
      API corriera correctamente y verificar los distintos <span class="text-[#FF6F61] font-semibold">POST</span> y demás peticiones que 
      traía. Este proyecto fue clave para entender cómo interactúan el frontend y el 
      backend, y cómo se pueden construir aplicaciones web completas con lógica de servidor, 
      gestión de datos y pruebas de integración.`,
      icons: [
        { Icon: PhpIcon, color: "text-violet-700" },
        { Icon: MysqlIcon, color: "text-blue-700" },
        { Icon: DatabaseIcon, color: "text-blue-900" },
        { Icon: WordpressIcon, color: "text-blue-900" },
        { Icon: PostmanIcon, color: "text-orange-500" },
      ],
    },
    {
      id: 13,
      year: 2025,
      title: "Fase de estudio y construcción del portafolio",
      description: `En el quinto semestre de la carrera, en el ramo de 
      Portafolio de Título, nos pidieron crear un sitio web profesional que reflejara 
      todo lo aprendido a lo largo de la formación. Este desafío se dividió en tres etapas 
      y se extendió por aproximadamente cuatro meses. En la primera fase, tuve que analizar 
      todo lo visto previamente y definir qué quería transmitir en mi portafolio, estableciendo 
      mi propuesta de valor. Decidí enfocarme en dos públicos principales: <span class="text-[#FF6F61] font-semibold">reclutadores de 
      empresas de tecnología y pequeños negocios que buscan digitalizarse para crecer</span>. 
      Durante este proceso también aprendimos sobre posicionamiento web, revisando las 
      bases necesarias para optimizar un sitio y utilizando herramientas como pagespeed.web.dev 
      para analizar el rendimiento de diferentes páginas. En la segunda fase, comencé a construir 
      el sitio desde la base, realizando un <span class="text-[#FF6F61] font-semibold">brief</span>, un <span class="text-[#FF6F61] font-semibold">benchmark</span>, definiendo <span class="text-[#FF6F61] font-semibold">arquetipos de usuarios</span> 
      y estableciendo objetivos generales y específicos. Posteriormente diseñé el <span class="text-[#FF6F61] font-semibold">wireframe</span> y el 
      <span class="text-[#FF6F61] font-semibold">mockup</span>, y desarrollé el sitio con tecnologías como <span class="text-[#FF6F61] font-semibold">Tailwind</span>, <span class="text-[#FF6F61] font-semibold">jQuery</span> y <span class="text-[#FF6F61] font-semibold">ScrollReveal</span> para darle 
      dinamismo y estilo.`,
      icons: [
        { Icon: FigmaIcon, color: "text-red-700" },
        { Icon: TailwindIcon, color: "text-blue-400" },
        { Icon: JqueryIcon, color: "text-blue-600" },
      ],
    },
    {
      id: 14,
      year: 2025,
      title: "Desarrollo final y presentación del portafolio",
      description: `La tercera fase consistió en llevar el proyecto a un entorno real. 
      Subí el sitio a <span class="text-[#FF6F61] font-semibold">WordPress</span> como una plantilla nueva, convirtiéndolo en <span class="text-[#FF6F61] font-semibold">PHP</span> para que 
      funcionara correctamente. Además, implementé una sección de <span class="text-[#FF6F61] font-semibold">“Contáctame”</span> con un pequeño 
      formulario conectado a <span class="text-[#FF6F61] font-semibold">MySQL</span>, que registraba la información en <span class="text-[#FF6F61] font-semibold">phpMyAdmin</span>. Todo este 
      trabajo lo monté en WordPress y finalmente lo publiqué en el <span class="text-[#FF6F61] font-semibold">cPanel</span>, lo que me permitió 
      visualizar el resultado final en línea. Este portafolio fue presentado como mi <span class="text-[#FF6F61] font-semibold">trabajo 
      final de la carrera</span>, y la recepción fue muy positiva: destacaron tanto la presentación 
      como el camino completo que había recorrido para llegar al resultado final. Esta experiencia 
      consolidó mis conocimientos en frontend y backend, y me permitió demostrar de manera práctica 
      mi evolución como desarrollador web.`,
      icons: [
        { Icon: WordpressIcon, color: "text-blue-900" },
        { Icon: MysqlIcon, color: "text-blue-700" },
        { Icon: DatabaseIcon, color: "text-blue-900" },
        { Icon: PhpIcon, color: "text-violet-700" },
        { Icon: CpanelIcon, color: "text-orange-600" },
      ],
    },
  ];
  // Agrupar experiencias por año
  const groupedByYear = experiences.reduce((acc, exp) => {
    if (!acc[exp.year]) {
      acc[exp.year] = [];
    }
    acc[exp.year].push(exp);
    return acc;
  }, {});

  return (
    <div className="max-w-[1300px] m-auto pt-8 sm:pt-10 md:pt-30">
      {Object.keys(groupedByYear).map((year) => (
        <div key={year} className="mb-12">
          {/* Separador de año */}
          <div className="flex items-center justify-center mb-8 md:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-primary">
              {year}
            </h3>
          </div>

          {/* Timeline items */}
          <div className="relative">
            {/* Línea vertical central en desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white -translate-x-1/2"></div>

            {/* Línea vertical centrada en mobile */}
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-0.5 bg-white -translate-x-1/2"></div>

            {groupedByYear[year].map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={exp.id} className="relative mb-8 md:mb-12 last:mb-0">
                  {/* Desktop: Tarjetas intercaladas con flex */}
                  <div className="hidden md:flex md:items-start">
                    {isLeft ? (
                      <>
                        {/* Tarjeta izquierda - ancho fijo del 50% */}
                        <div className="w-1/2 flex justify-end pr-12">
                          <div className="w-full max-w-sm lg:max-w-md border-2 border-white rounded-lg p-6 bg-[#202023]">
                            <h4 className="font-primary text-white text-lg md:text-xl font-semibold mb-2">
                              {exp.title}
                            </h4>
                            <p
                              className="text-gray-300 text-sm mb-4 font-secondary"
                              dangerouslySetInnerHTML={{
                                __html: exp.description,
                              }}
                            ></p>
                            {exp.icons && exp.icons.length > 0 && (
                              <div className="flex gap-2 justify-end">
                                {exp.icons.map((ic, idx) => {
                                  const IconComp = ic.Icon;
                                  return (
                                    <IconComp
                                      key={idx}
                                      className={`${ic.color} text-3xl rounded-2xl p-1 bg-white`}
                                    />
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                        {/* Punto y flecha sobre la línea - posición absoluta */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 flex flex-col items-center">
                          <div className="w-4 h-4 bg-white rounded-full z-10 mb-2"></div>
                          <div className="flex justify-center absolute top-20"></div>
                        </div>
                        {/* Espacio vacío derecha - ancho fijo del 50% */}
                        <div className="w-1/2"></div>
                      </>
                    ) : (
                      <>
                        {/* Espacio vacío izquierda - ancho fijo del 50% */}
                        <div className="w-1/2"></div>
                        {/* Punto y flecha sobre la línea - posición absoluta */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 flex flex-col items-center">
                          <div className="w-4 h-4 bg-white rounded-full z-10 mb-2"></div>
                          <div className="flex justify-center absolute top-20"></div>
                        </div>
                        {/* Tarjeta derecha - ancho fijo del 50% */}
                        <div className="w-1/2 flex justify-start pl-12">
                          <div className="w-full max-w-sm lg:max-w-md border-2 border-white rounded-lg p-6 bg-[#202023]">
                            <h4 className="text-lg font-bold text-white mb-2 font-primary">
                              {exp.title}
                            </h4>
                            <p
                              className="text-gray-300 text-sm mb-4 font-secondary"
                              dangerouslySetInnerHTML={{
                                __html: exp.description,
                              }}
                            ></p>
                            {exp.icons && exp.icons.length > 0 && (
                              <div className="flex gap-2">
                                {exp.icons.map((ic, idx) => {
                                  const IconComp = ic.Icon;
                                  return (
                                    <IconComp
                                      key={idx}
                                      className={`${ic.color} text-3xl rounded-2xl p-1 bg-white`}
                                    />
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile: Todas las tarjetas centradas con punto y flecha arriba */}
                  <div className="md:hidden flex flex-col items-center">
                    {/* Punto y flecha arriba centrados */}
                    <div className="flex flex-col items-center mb-3">
                      <div className="w-4 h-4 bg-white rounded-full mb-2"></div>
                    </div>

                    {/* Tarjeta centrada */}
                    <div className="w-full max-w-sm px-4">
                      <div className="border-2 border-white rounded-lg p-4 bg-[#202023]">
                        <h4 className="text-base font-bold text-white mb-2 font-primary">
                          {exp.title}
                        </h4>
                        <p
                          className="text-gray-300 text-sm mb-3 font-secondary"
                          dangerouslySetInnerHTML={{
                            __html: exp.description,
                          }}
                        ></p>
                        {exp.icons && exp.icons.length > 0 && (
                          <div className="flex gap-2 flex-wrap">
                            {exp.icons.map((ic, idx) => {
                              const IconComp = ic.Icon;
                              return (
                                <IconComp
                                  key={idx}
                                  className={`${ic.color} text-3xl rounded-2xl p-1 bg-white`}
                                />
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
