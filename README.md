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

Si quieres que añada cierre al hacer click fuera del dropdown, animaciones o que reemplace usos antiguos por las nuevas versiones de los componentes, lo hago ahora.
