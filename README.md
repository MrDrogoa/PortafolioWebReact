# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Cambios realizados el 16 de octubre de 2025

## Estructura del proyecto
- Se revisó y ajustó la estructura de carpetas:
  - `src/components`: Componentes reutilizables como `Header` y `NavbarComponents`.
  - `src/layout`: Layout principal (`Layout.jsx`).
  - `src/pages`: Páginas principales como `Home`, `About`, `Projects`, y `Contact`.
  - `src/router`: Archivo `routes.js` para centralizar las rutas.

## Configuración de rutas
- Se creó el archivo `routes.js` para centralizar las rutas de la aplicación.
- Se ajustó `App.jsx` para usar las rutas centralizadas.

## Solución de problemas
- Se revisaron errores en la consola relacionados con `routes.js`.
- Se verificó la configuración de `vite.config.js` y el archivo `index.html`.

## Mejoras en componentes
- Se ajustó el componente `Home.jsx` para evitar redundancias.
- Se mejoró `NavbarComponents.jsx` añadiendo enlaces de navegación reales.

## Instalaciones
- Se instaló `react-router-dom` para manejar las rutas de la aplicación.

## Próximos pasos
- Continuar con la implementación de estilos y funcionalidad en las páginas y componentes.

# Cambios realizados el 22 de octubre de 2025

Resumen de lo implementado y revisado hoy:

- Instalación
  - Se instaló la dependencia `react-router-dom` para manejar las rutas de la aplicación.

- Rutas y navegación
  - Se creó/ajustó `src/router/routes.js` y se centralizaron las rutas como objetos { path, element }.
  - Se actualizó `src/App.jsx` para consumir `routes` y renderizar las `Route` dinámicamente dentro de `Routes`.

- Layout y estilo global
  - Se aplicó el fondo oscuro global y color de texto en `src/layout/Layout.jsx` añadiendo `className="min-h-screen bg-[#202023] text-white"` al wrapper principal para que el fondo cubra toda la app.
  - Se revisaron recomendaciones para `tailwind.config.js` y `src/index.css` (uso de `@tailwind base; @tailwind components; @tailwind utilities;`) para asegurar que las utilidades se compilen correctamente.

- Componentes de navegación
  - `src/components/nav/NavList.jsx`: Implementado como una lista horizontal con Tailwind (`flex justify-center items-center gap-8`) y usando `Link` de `react-router-dom`.
  - `src/components/nav/Navimg.jsx`: corregida la ruta de import (`../../assets/images/logo.svg`) y el logo se envolvió en un `Link` al `/` con tamaño controlado (`h-8`).
  - `src/components/NavbarComponents.jsx`: corregida la clase `fle` por `flex`, y reorganizado el layout del header usando `max-w-[1200px] mx-auto flex items-center justify-between px-4 py-3` para colocar logo a la izquierda y menú centrado.

- Organización de assets
  - Recomendación y estructura sugerida: `src/assets/images/` para imágenes procesadas por Vite y `public/` para recursos estáticos que deben servir sin procesamiento (favicons, og:image, etc.).

- Limpieza y comprobaciones
  - Se revisaron errores de consola relacionados con `routes.js` y se verificó que no haya errores de sintaxis en los componentes modificados.
  - Se actualizó el `README.md` con este registro de cambios.

Cómo probar localmente

1. Asegúrate de estar en la carpeta del proyecto y haber instalado dependencias:

```bash
cd c:/Users/danie/Desktop/PortafolioWeb/joDani
pnpm install
```

2. Arranca el servidor de desarrollo y abre la app en el navegador:

```bash
pnpm run dev
```

3. Recarga la página (Ctrl+F5) y revisa el header: el fondo oscuro debe cubrir la página y la navbar debe mostrar el logo a la izquierda y el menú centrado.

Notas / próximos pasos sugeridos

- Añadir la carpeta `src/assets/images/` si aún no existe y colocar el `logo.svg` ahí.
- Ajustar el responsive del navbar (hamburger menu) para pantallas pequeñas.
- Añadir contenido real a `pages/Home.jsx`, `About.jsx`, `Projects.jsx` y probar navegación.
- Revisar `tailwind.config.js` para asegurar que `content` incluya `./index.html` y `./src/**/*.{js,jsx}`.

Si quieres, aplico cualquiera de estos pasos por ti ahora (por ejemplo: mover/crear carpetas de assets, ajustar `index.css` o añadir el menú responsive).

# Cambios realizados el 23 de octubre de 2025

Resumen de lo implementado y revisado hoy:

- Iconos
  - Instalé y configuré `react-icons` (se añadió la dependencia al proyecto).
  - Creé `src/components/icons/Icons.jsx` que reexporta los iconos que usamos (Github, Instagram, LinkedIn, WhatsApp, Menu), dejando el control de tamaño y color a los componentes que los consumen.
  - Corregí importaciones incorrectas (por ejemplo `HiMenuAlt3` se importa desde `react-icons/hi`, no desde `react-icons/fa`).

- Navbar y menú responsive
  - Implementé `src/components/nav/NavList.jsx` con la versión de escritorio (lista horizontal) y un `MobileMenu` dinámico para pantallas pequeñas.
  - El `MobileMenu` renderiza el dropdown dinámicamente desde el array `items` y cierra el menú al seleccionar una opción.
  - Añadí control para mostrar el dropdown y propuesta para controlar su tamaño y comportamiento por clases Tailwind (`fixed` / `w-screen` / `h-64` / `overflow-auto`).

- Hero & Social links
  - Implementé `src/components/hero/HeroLinks.jsx` con una barra vertical de iconos sociales (componentes reutilizables) usando Tailwind; el hover aplica el color `#FF6F61`.
  - Refactoricé `HeroLinks.jsx` para generar los iconos dinámicamente desde un array (menos código repetido).

- Componentes y utilidades
  - `src/components/ButtonComponents.jsx` convertido en componente reutilizable que acepta `children`, `className` y `onClick`.
  - `src/components/nav/Navimg.jsx` importando correctamente el logo desde `src/assets/images/logo.svg` y envolviéndolo en un `Link`.

- Arreglos y comprobaciones
  - Revisé y corregí errores en consola relacionados con imports o nombres de iconos.
  - Añadí el fondo global en `src/layout/Layout.jsx` (`min-h-screen bg-[#202023] text-white`).

Cómo probar los cambios localmente

```bash
cd c:/Users/danie/Desktop/PortafolioWeb/joDani
pnpm install
pnpm run dev
```

Luego abre la app y prueba:
- Header: comprobar navbar en escritorio y el botón de menú en móvil.
- Hero: ver la barra social vertical y los hover en `#FF6F61`.
- Iconos: verificar que los iconos se muestren y respondan a `size` / `className`.

## Cambios realizados el 28 de octubre de 2025

Resumen de lo implementado y corregido hoy:

- Hero (fondo/íconos)
  - Creé/ajusté `src/components/hero/HeroIcons.jsx` y lo dejé como elemento decorativo dentro del contenedor del Hero: la imagen de la luna ahora usa `z-0` y `pointer-events-none` para quedar visible detrás del contenido del Hero sin interceptar eventos.
  - Reemplacé implementaciones corruptas y limpié `src/components/HeroComponents.jsx` para asegurar que la imagen (HeroIcons) esté dentro del `section` relativo y el contenido use `z-10`/`z-20` para superponerse.
  - `src/components/hero/HeroContent.jsx` fue actualizado para aceptar un `className` desde su padre (por ejemplo `z-10`) y así controlar el stacking correctamente.

- Navegación y UI
  - Mantuvimos y refinamos el `MobileMenu` en `src/components/nav/NavList.jsx` (dropdown dinámico y accesible).
  - `src/components/nav/Navimg.jsx` y `src/components/NavbarComponents.jsx` se ajustaron para asegurar el logo y la estructura flex correcta (logo a la izquierda, menú centrado).

- Componentes reutilizables
  - `src/components/ButtonComponents.jsx` quedó como componente reutilizable (acepta `children`, `className`, `onClick`).
  - Se creó/validó `src/components/icons/Icons.jsx` como módulo central de iconos para evitar imports duplicados y facilitar control de tamaño/color.

- Corregidos errores y limpieza
  - Se realizaron varias correcciones de imports rotos y duplicados (al editar archivos se produjo contenido duplicado en `HeroComponents.jsx`, ya corregido).
  - Realicé comprobaciones de sintaxis con el linter/compilador en los archivos tocados: `HeroIcons.jsx`, `HeroComponents.jsx`, `hero/HeroContent.jsx` — no se detectaron errores de compilación.

Cómo probar localmente (rápido)

```bash
cd c:/Users/danie/Desktop/PortafolioWeb/joDani
pnpm install
pnpm run dev
```

Después de arrancar, recarga la página (Ctrl+F5) y verifica:
- Que la luna aparezca detrás del texto del Hero (si no la ves, dime y ajusto tamaño/posición/opacidad).
- Que la barra social lateral se muestre y los hovers usen `#FF6F61`.

Notas y próximos pasos sugeridos
- Si quieres que la luna esté centrada o con otro tamaño/opacidad puedo aplicarlo ahora (ej.: `inset-0`, `transform -translate-...`, `w-96`, `opacity-60`).
- Si quieres que haga el commit con los cambios y haga push a la rama `main`, indícame y lo preparo (necesitaré que autorices/ejecutes los comandos en tu máquina o me indiques que lo haga aquí si tienes remotos configurados).

Registro rápido de archivos tocados hoy:

- src/components/hero/HeroIcons.jsx — z-0, pointer-events-none, aria-hidden
- src/components/HeroComponents.jsx — limpieza y posicionamiento correcto
- src/components/hero/HeroContent.jsx — acepta `className` (para controlar z-index)
- src/components/hero/HeroLinks.jsx — refactor dinámico y verificación
- src/components/nav/NavList.jsx — mobile dropdown dinámico (ajustes menores)
- src/components/nav/Navimg.jsx — import del logo corregido
- src/components/ButtonComponents.jsx — reutilizable
- src/components/icons/Icons.jsx — módulo de iconos
- src/layout/Layout.jsx — background global aplicado

# Cambios realizados el 3 de noviembre de 2025

Resumen de lo implementado y revisado hoy:

- Navbar con hover y dropdown
  - Implementé efecto hover con subrayado animado color `#FF6F61` en todos los enlaces del navbar (escritorio y móvil).
  - Añadí dropdown para "Proyectos" con tres categorías: "Diseño UX UI", "Front End" y "Frameworks".
  - El dropdown funciona tanto en escritorio (hover) como en móvil (botón expandible con +/-).
  - Todo implementado usando **solo Tailwind CSS** sin librerías adicionales.
  - Archivo modificado: `src/components/nav/NavList.jsx`

- Carousel con Splide.js
  - Instalé la dependencia `@splidejs/splide` usando pnpm.
  - Configuré Splide globalmente importando los estilos en `src/main.jsx`.
  - Creé archivo de configuración reutilizable `src/utils/splideConfig.js` con opciones predefinidas (default, testimonial, portfolio).
  - Implementé carousel en `src/components/main/Carousel.jsx` para mostrar herramientas/tecnologías.
  - El carousel es completamente responsive (4→3→2→1 slides según breakpoints).
  - Características: autoplay, pausar al hover, navegación con flechas, loop infinito.
  - Integré iconos de `react-icons` para mostrar logos de tecnologías con colores personalizados.

- Componentes y mejoras
  - Actualicé `src/components/main/Carousel.jsx` para renderizar iconos como componentes React en lugar de emojis.
  - Simplifiqué el código del carousel eliminando lógica condicional innecesaria.
  - Los iconos ahora se importan desde `src/components/icons/Icons.jsx` y se pasan como componentes al array de herramientas.

Cómo probar localmente

```bash
cd c:/Users/danie/Desktop/PortafolioWeb/joDani
pnpm install
pnpm run dev
```

Prueba estas funcionalidades:
- **Navbar**: Pasa el cursor sobre los enlaces para ver el subrayado animado coral.
- **Dropdown**: Hover sobre "Proyectos" en escritorio o toca en móvil para ver las categorías.
- **Carousel**: El carrusel de herramientas debe auto-deslizarse cada 3 segundos, pausar al hover y mostrar iconos coloridos.

Archivos modificados/creados hoy

- `src/components/nav/NavList.jsx` — hover con underline y dropdown de Proyectos
- `src/main.jsx` — importación global de estilos de Splide
- `src/utils/splideConfig.js` — configuraciones reutilizables para Splide (NUEVO)
- `src/components/main/Carousel.jsx` — implementación del carousel con Splide y react-icons
- `README.md` — actualizado con los cambios del día

Dependencias instaladas

- `@splidejs/splide@4.1.4` — Librería de carousel ligera y flexible

Recursos útiles

- [Documentación de Splide](https://splidejs.com/)
- [Opciones de configuración](https://splidejs.com/guides/options/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Tailwind CSS Hover Effects](https://tailwindcss.com/docs/hover-focus-and-other-states)

