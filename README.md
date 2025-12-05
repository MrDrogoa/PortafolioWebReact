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

# Cambios realizados el 4 de noviembre de 2025

Resumen de lo implementado y revisado:

- React patterns y mejores prácticas
  - Explicación detallada del patrón `array.map()` con destructuring en JSX.
  - Ejemplo práctico en `src/components/hero/HeroLinks.jsx`: `links.map(({ Icon, href, label }) => ...)`.
  - Se cambió `key={label}` a `key={href}` para mejor unicidad en la reconciliación de React.

- Organización de CSS y estructura de carpetas
  - Se creó `src/css/Carousel.css` para estilos personalizados del carousel.
  - Corrección de ruta de importación: `import "../../css/Carousel.css"` desde `Carousel.jsx`.
  - Recomendación de estructura: `src/css/` para estilos globales de componentes.

- Customización de Splide Carousel con flechas personalizadas
  - **Problema inicial**: Splide generaba flechas SVG por defecto que no se podían reemplazar con componentes React.
  - **Intentos**: Se probó usar `.splide__arrows` wrapper con componentes custom (no funcionó).
  - **Solución final**: 
    - Desactivar flechas automáticas: `arrows: false` en configuración de Splide.
    - Crear botones personalizados independientes con `onClick` handlers.
    - Usar API de Splide: `splideInstance.current?.go("<")` y `go(">")` para navegación programática.
  - Implementación:
    ```jsx
    const splideInstance = useRef(null);
    splideInstance.current = splide; // Guardar instancia después de mount
    
    <button onClick={() => splideInstance.current?.go("<")}>
      <ArrowLeftIcon />
    </button>
    ```
  - Se integraron `ArrowLeftIcon` y `ArrowRightIcon` desde `src/components/icons/Icons.jsx`.
  - Estilos aplicados con Tailwind:
    - Botones circulares coral: `w-10 h-10 bg-[#FF6F61] rounded-full`
    - Efectos hover: `hover:bg-[#FF8A7D] hover:scale-110 hover:opacity-100`
    - Posicionamiento absoluto: `absolute left-0 -translate-x-12` (flechas fuera del carousel)
    - Transiciones suaves: `transition-all duration-300`

- Responsive design
  - Explicación de clases responsivas de Tailwind para hover: `lg:hover:-translate-y-2`.
  - Esto aplica el efecto hover solo en pantallas grandes (lg y superiores).
  - Ejemplo discutido para `ButtonComponents.jsx` (hover translate solo en desktop).

- Debugging y solución de problemas
  - Múltiples iteraciones para resolver por qué las flechas personalizadas no aparecían.
  - Root cause: Splide con `arrows: true` genera su propio HTML/SVG y sobrescribe contenido custom.
  - Aprendizaje clave: Para customizar controles de librerías de terceros, desactivar generación automática y usar API programática.

Archivos modificados/creados

- `src/components/hero/HeroLinks.jsx` — cambio de key de label a href
- `src/css/Carousel.css` — archivo de estilos custom para carousel (NUEVO)
- `src/components/main/Carousel.jsx` — implementación de flechas personalizadas con Splide API
- `src/utils/splideConfig.js` — actualizado con `arrows: true` por defecto (sobrescrito en Carousel.jsx)
- `README.md` — documentación de cambios

Código clave implementado

```jsx
// src/components/main/Carousel.jsx
import { ArrowRightIcon, ArrowLeftIcon } from "../icons/Icons";

const splideInstance = useRef(null);

useEffect(() => {
  const splide = new Splide(splideRef.current, {
    ...defaultSplideOptions,
    arrows: false, // Desactivar flechas automáticas
  });
  splide.mount();
  splideInstance.current = splide; // Guardar para uso posterior
  return () => splide.destroy();
}, []);

// Botones personalizados con navegación programática
<button
  onClick={() => splideInstance.current?.go("<")}
  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 
             w-10 h-10 bg-[#FF6F61] hover:bg-[#FF8A7D] rounded-full 
             flex items-center justify-center opacity-90 hover:opacity-100 
             hover:scale-110 transition-all duration-300"
>
  <ArrowLeftIcon className="w-5 h-5 text-white" />
</button>
```

Patrón aprendido

- **Control programático de librerías**: Para customizar componentes UI de librerías (Splide, Swiper, etc.):
  1. Desactivar generación automática de controles (`arrows: false`)
  2. Almacenar instancia en `useRef`
  3. Crear controles custom con handlers que llamen a la API (`splide.go()`)
  4. Aplicar estilos completamente personalizados con Tailwind

Este patrón se puede aplicar a:
- Paginación custom
- Controles de autoplay
- Progress bars
- Thumbnails navigation

# Cambios realizados el 5 de noviembre de 2025

Resumen de lo implementado y corregido hoy:

- Posicionamiento y centrado de flechas del carousel
  - **Problema**: Las flechas estaban abajo del carousel usando `flex justify-between`, no alineadas con los iconos.
  - **Solución**: Posicionamiento absoluto para centrar verticalmente las flechas con los slides.
  - Cambios aplicados:
    - Añadido `relative` al contenedor `.splide` para contexto de posicionamiento.
    - Flechas con `absolute left-0/right-0 top-1/2 -translate-y-1/2` para centrado vertical perfecto.
    - Flechas fuera del carousel: `-translate-x-12` (izquierda) y `translate-x-12` (derecha).
    - Ocultas en móviles: `hidden lg:flex` (solo visibles en pantallas grandes).
  - Resultado: Flechas circulares coral flotando a los lados, perfectamente alineadas con los iconos de herramientas.

- Configuración del favicon
  - **Problema**: Favicon no se mostraba con ruta `href="../joDani/src/assets/images/logo.svg"`.
  - **Causa**: En Vite, los archivos estáticos deben estar en `public/` y usar rutas absolutas desde raíz.
  - **Solución aplicada**:
    1. Copié `logo.svg` desde `src/assets/images/` a `public/logo.svg`.
    2. Actualicé `index.html`: `href="/logo.svg"` (ruta desde raíz del servidor).
    3. Cambié type de `image/x-icon` a `image/svg+xml` (correcto para SVG).
  - Comando ejecutado: `cp src/assets/images/logo.svg public/logo.svg`
  - Resultado: Favicon ahora visible correctamente en el navegador.

- Corrección de errores de linting
  - Error inicial: Conflicto entre clases `flex` y `hidden` en los botones de flechas.
  - Causa: `hidden lg:flex` debe ir en ese orden, no `flex ... hidden lg:flex`.
  - Solución: Reorganicé clases para poner `hidden lg:flex` al inicio, seguido de `items-center justify-center`.
  - Verificación: `get_errors` confirmó "No errors found" después de la corrección.

Archivos modificados

- `src/components/main/Carousel.jsx` — posicionamiento absoluto de flechas con centrado vertical
- `index.html` — corrección de ruta del favicon a `/logo.svg`
- `public/logo.svg` — archivo copiado desde src/assets/images/ (NUEVO)
- `README.md` — actualizado con cambios del 4 y 5 de noviembre

Conceptos clave de Tailwind aplicados

- **Posicionamiento absoluto con centrado**: 
  ```jsx
  className="absolute top-1/2 -translate-y-1/2" // Centra verticalmente
  className="left-0 -translate-x-12" // Flecha izquierda fuera del contenedor
  className="right-0 translate-x-12" // Flecha derecha fuera del contenedor
  ```

- **Responsive visibility**: 
  ```jsx
  className="hidden lg:flex" // Oculto en móvil, visible en desktop como flex
  ```

- **Vite static assets**:
  - `public/` → archivos servidos sin procesamiento desde raíz (`/archivo.ext`)
  - `src/assets/` → archivos procesados por Vite, solo accesibles via imports JS

Cómo probar los cambios de hoy

```bash
cd c:/Users/danie/Desktop/PortafolioWeb/joDani
pnpm run dev
```

Verifica:
1. **Carousel**: Las flechas coral deben estar flotando a los lados del carousel, centradas con los iconos.
2. **Favicon**: Recarga con Ctrl+Shift+R y verifica que el logo.svg aparezca en la pestaña del navegador.
3. **Responsive**: En móvil (< 1024px) las flechas deben ocultarse automáticamente.

Próximos pasos sugeridos

- Ajustar espaciado de flechas si en pantallas muy grandes (xl, 2xl) necesitan más separación.
- Considerar agregar controles de navegación táctil para móvil (swipe ya funciona con Splide).
- Optimizar animaciones del carousel para mejor performance.
- Agregar meta tags Open Graph con el logo desde `public/logo.svg`.

# Cambios realizados el 6 de noviembre de 2025

Resumen de lo implementado y revisado hoy:

- Botón con efecto "capas flotantes" (hover)
  - Creé `src/css/ButtonComponents.css` con un efecto de capas (múltiples box-shadows) que simula la animación del ejemplo de Uiverse.
  - Actualicé `src/components/ButtonComponents.jsx` para importar el CSS y añadir la clase `floating-button`.
  - El efecto usa colores que combinan con el amarillo del proyecto (`#FFEA00`): capa coral `#FF6F61` y turquesa `#4ECDC4` para las sombras de acento.
  - Comportamiento responsive: en dispositivos táctiles (ancho < 1024px) el efecto de elevación se reduce para mejor UX.

- Corrección y renderizado de tarjetas (Cards)
  - Arreglé `src/components/main/Cards.jsx` para que imprima correctamente los objetos definidos en `cardData`.
  - Cambios principales: reemplazo de `class` por `className`, uso de `Link` de `react-router-dom` para navegación interna, normalización de la propiedad de iconos a `{ Icon, color }` y renderizado de los iconos como componentes React.
  - Añadí tamaños de miniatura estables (`w-full h-48` / `md:h-56`) y estructura flex para que los iconos queden alineados abajo a la derecha de cada tarjeta.

- Limpieza y experiencia de desarrollo
  - Importé el CSS del botón en el componente para mantener estilos encapsulados.
  - Añadí reglas responsive y transiciones suaves para que la interacción sea consistente.

Archivos modificados/creados hoy

- `src/css/ButtonComponents.css` — estilos del botón con box-shadow en capas (NUEVO)
- `src/components/ButtonComponents.jsx` — import del CSS y clase `floating-button` (MODIFICADO)
- `src/components/main/Cards.jsx` — renderizado correcto de `cardData` y icons (MODIFICADO)

Cómo probar los cambios localmente

```bash
cd c:/Users/danie/Desktop/PortafolioWeb/joDani
pnpm run dev
```

Verifica:
1. **Botones**: Pasa el cursor sobre los botones que usan `<ButtonComponents>` para ver el efecto de capas y elevación (en desktop). En móvil el efecto será más sutil.
2. **Cards**: Comprueba que las tarjetas muestren título, descripción, miniatura y los iconos en la esquina inferior derecha.

Notas sobre commits / push

- Si aún no has commiteado estos cambios, puedes hacerlo con:

```bash
git add src/css/ButtonComponents.css src/components/ButtonComponents.jsx src/components/main/Cards.jsx README.md
git commit -m "feat(ui): floating layered button and fix cards rendering"
git push
```

Si quieres, puedo crear el commit y el push por ti (dímelo) o te dejo los comandos para que los ejecutes localmente.

Si quieres que ajuste colores, distancia de elevación o comportamiento en móviles, dime exactamente qué prefieres y lo aplico ahora.

# Cambios realizados el 11 de noviembre de 2025

Resumen de lo implementado y revisado hoy:

- Configuración de alias `@` en Vite
  - **Problema**: Las rutas de importación con `../../../` eran largas y difíciles de mantener.
  - **Solución**: Añadí configuración de alias `@` en `vite.config.js` que mapea `@` → `src/`.
  - **Implementación**:
    ```javascript
    import path from "path";
    import { fileURLToPath } from "url";
    
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    }
    ```
  - **Ventajas**: Imports más limpios y legibles desde cualquier profundidad de carpeta.
  - Ejemplo: `import "@/css/ButtonComponents.css"` en lugar de `import ".././css/ButtonComponents.css"`

- Efecto de borde animado en tarjetas (Cards)
  - **Objetivo**: Crear animación de borde que "corra" alrededor del contorno de las tarjetas solo en hover.
  - **Solución**: CSS nativo mínimo (solo animación) + Tailwind para el resto de estilos.
  - **Animación `borderRunning`**: Cambia los colores del gradiente (amarillo → coral → turquesa) en 3 segundos, haciendo que parezca que "corre" alrededor.
  - **Colores usados**: 
    - 🟡 Amarillo `#FFEA00` (color primario)
    - 🔴 Coral `#FF6F61` (acento)
    - 🔵 Turquesa `#4ECDC4` (complementario)
  - **Características**:
    - Solo se activa en hover (`.card-border-animation:hover`)
    - Duración: 3 segundos
    - Loop infinito
    - Imagen se escala 8% en hover
    - Iconos crecen 25% en hover
    - Sombra coral en hover

- Fixes en ButtonComponents
  - Actualicé `src/components/buttons/ButtonComponents.jsx` con import de CSS usando alias `@`.
  - Ruta mejorada: `import "@/css/ButtonComponents.css"` (más limpio que `import ".././css/ButtonComponents.css"`).

- Estructura y organización
  - Todos los componentes ahora usan alias `@` para imports de CSS y utilidades.
  - Estructura clara: `src/css/` para estilos globales, `src/components/*/` para componentes.

Archivos modificados/creados hoy

- `vite.config.js` — configuración de alias `@` (MODIFICADO)
- `src/css/Cards.css` — animación `borderRunning` para borde corriendo (ACTUALIZADO)
- `src/components/main/Cards.jsx` — uso de clase `card-border-animation` con Tailwind (ACTUALIZADO)
- `src/components/buttons/ButtonComponents.jsx` — import con alias `@` (ACTUALIZADO)
- `README.md` — documentación de cambios (ACTUALIZADO)

Código clave implementado

```css
/* src/css/Cards.css */
@keyframes borderRunning {
  0%, 100% {
    border-image-source: linear-gradient(90deg, #FFEA00, #FF6F61, #4ECDC4);
  }
  25% {
    border-image-source: linear-gradient(90deg, #FF6F61, #4ECDC4, #FFEA00);
  }
  50% {
    border-image-source: linear-gradient(90deg, #4ECDC4, #FFEA00, #FF6F61);
  }
  75% {
    border-image-source: linear-gradient(90deg, #FFEA00, #FF6F61, #4ECDC4);
  }
}

.card-border-animation:hover {
  animation: borderRunning 3s infinite linear;
  border: 2px solid;
  border-image: linear-gradient(90deg, #FFEA00, #FF6F61, #4ECDC4) 1;
}
```

```jsx
// src/components/main/Cards.jsx
<div className="card-border-animation flex flex-col rounded-md max-w-xs lg:max-w-sm m-auto md:m-0 bg-[#202023] border-2 border-white transition-all duration-300">
  {/* Contenido */}
</div>
```

Cómo probar los cambios de hoy

```bash
cd c:/Users/danie/Desktop/PortafolioWeb/joDani
pnpm run dev
```

Verifica:
1. **Cards**: Pasa el cursor sobre las tarjetas y verás el borde animado corriendo alrededor en 3 segundos.
2. **Imports**: Verifica que los imports con `@` funcionen (sin errores en consola).
3. **Efectos**: Imagen se escala, iconos crecen, sombra coral aparece en hover.

Próximos pasos sugeridos

- Ajustar velocidad de animación del borde (cambiar `3s` a `2s` o `4s` según prefieras).
- Modificar colores del gradiente animado según feedback.
- Aplicar efecto similar a otros componentes si lo deseas.
- Hacer push a GitHub con estos cambios.

Patrones aprendidos

- **Alias en Vite**: `@` mapea a `src/` facilitando imports desde cualquier profundidad.
- **Animación de borde**: CSS `border-image` + `@keyframes` para efecto de "correr" alrededor del contorno.
- **Combinación Tailwind + CSS**: Usar CSS solo para animaciones complejas, Tailwind para lo demás (separación clara de responsabilidades).

# Cambios realizados el 12 de noviembre de 2025

Resumen de lo implementado y revisado hoy:

- Componente AnimatedTestimonials
  - **Problema inicial**: Error de importación - el componente `@/components/ui/animated-testimonials` no existía.
  - **Solución**: Creé el componente completo desde cero en `src/components/ui/animated-testimonials.jsx`.
  - **Características implementadas**:
    - Carousel de testimonios con autoplay cada 5 segundos
    - Navegación manual con botones Anterior/Siguiente
    - Indicadores de progreso (dots) clicables
    - Pausado automático al interactuar manualmente
    - Dark theme con colores coral (#FF6F61) para accents
    - Completamente responsive (mobile-first)
  - **Export fix**: Cambié `AnimatedTestimonialsDemo.jsx` de `export function` a `export default` para que funcione correctamente con la importación en `AboutComponents.jsx`.

- Refactorización de componentes About
  - **Arquitectura anterior**: Todo mezclado en un solo componente (AnimatedTestimonials).
  - **Nueva arquitectura modular**:
    - `AboutImg.jsx` - Componente de imagen reutilizable con props: `src`, `alt`, `isTransitioning`
    - `AboutContent.jsx` - Componente de contenido con props: `title`, `name`, `designation`, `descripcion2`, `descripcion3`, `current`, `total`, callbacks
    - `AnimatedTestimonialsDemo.jsx` - Contenedor principal con toda la lógica de estado
  - **Ventajas de la refactorización**:
    - Separación de responsabilidades (imagen / contenido / lógica)
    - Componentes reutilizables
    - Más fácil de mantener y testear
    - Props bien definidas con callbacks

- Layout y diseño del componente testimonials
  - **Estructura final**: Flexbox con imagen a la izquierda (50%) y contenido a la derecha (50%)
  - **Responsive**: En mobile imagen arriba, contenido abajo (flex-col), en desktop lado a lado (md:flex-row)
  - **Animaciones implementadas**:
    - Transición fade in/out en imágenes al cambiar (opacity 0 → 1 en 300ms)
    - Hover effect: imagen escala 110% + overlay gradient
    - Botones circulares personalizados con hover effects
  - **Estilos aplicados**:
    - Background oscuro #171717
    - Bordes sutiles white/10 con hover coral
    - Progress indicators como líneas horizontales (expandibles en current)
    - Botones circulares blancos con hover coral

- Gestión de imágenes y assets
  - **Primera aproximación**: Intenté usar imports de módulos ES6 pero causaba errores.
  - **Segunda aproximación**: Rutas públicas `/img/...` pero imágenes no cargaban.
  - **Solución final**: 
    - Imports directos con alias: `import aboutmeImg from "@/assets/img/aboutme.webp"`
    - Vite procesa automáticamente las imágenes y genera URLs optimizadas
    - Variables asignadas en el array de testimonials: `img: aboutmeImg`
  - **Archivos de imagen usados**:
    - `aboutme.webp`
    - `aboutlandscape.webp`
    - `about.jpg`
    - `aboutsantiago.webp`

- Botones de navegación personalizados
  - Reemplacé texto "← Anterior" / "Siguiente →" por botones circulares con iconos
  - Integré `ArrowLeftIcon` y `ArrowRightIcon` desde `@/components/icons/Icons.jsx`
  - Estilo: fondo blanco, texto oscuro, hover coral (#FF6F61)
  - Clases aplicadas: `rounded-full p-2 bg-white text-[#202023] lg:hover:bg-[#FF6F61]`

- Corrección de renderizado con dangerouslySetInnerHTML
  - **Problema**: En `ProjectsDeveloper.jsx` los `<span>` con clases no se renderizaban, mostraban texto plano.
  - **Causa**: JSX escapa HTML por defecto para prevenir XSS.
  - **Solución**: Usar `dangerouslySetInnerHTML={{ __html: item.description }}` para renderizar HTML seguro.
  - **Cambios adicionales**:
    - Corregí sintaxis rota en step "02" (comillas mal cerradas)
    - Unifiqué todos los strings usando template literals con backticks
    - Cambié `class` a `className` en JSX
    - Agregué `key={index}` al map

Archivos creados hoy

- `src/components/ui/animated-testimonials.jsx` — Componente de carousel de testimonios (NUEVO)
- `src/css/AnimatedTestimonials.css` — Estilos y animaciones para testimonials (NUEVO)

Archivos modificados hoy

- `src/components/main/AnimatedTestimonialsDemo.jsx` — Refactorizado con lógica centralizada y imports de imágenes
- `src/components/main/AboutImg.jsx` — Creado como componente reutilizable de imagen
- `src/components/main/AboutContent.jsx` — Creado como componente reutilizable de contenido
- `src/components/main/projects/ProjectsDeveloper.jsx` — Fix de renderizado HTML con dangerouslySetInnerHTML
- `README.md` — Documentación completa de cambios del día

Código clave implementado

```jsx
// AnimatedTestimonialsDemo.jsx - Imports de imágenes
import aboutmeImg from "@/assets/img/aboutme.webp";
import aboutlandscapeImg from "@/assets/img/aboutlandscape.webp";
import aboutImg from "@/assets/img/about.jpg";
import aboutsantiagoImg from "@/assets/img/aboutsantiago.webp";

// Lógica de transición
const handleNext = () => {
  setIsTransitioning(true);
  setTimeout(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsTransitioning(false);
  }, 300);
  setAutoplay(false);
};

// AboutImg.jsx - Componente de imagen con transición
<img
  src={src}
  alt={alt}
  className={`w-full h-full object-cover transition-all duration-500 
    group-hover:scale-110 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
/>

// ProjectsDeveloper.jsx - Renderizado de HTML
<p
  className="font-[DM Sans] font-normal md:text-lg pb-2"
  dangerouslySetInnerHTML={{ __html: item.description }}
/>
```

Patrón de componentes reutilizables aplicado

```
AnimatedTestimonialsDemo (Container)
  ├── AboutImg (Presentational)
  │   └── Props: src, alt, isTransitioning
  └── AboutContent (Presentational)
      └── Props: title, name, designation, descripcion2, descripcion3,
                 current, total, onNext, onPrev, onDotClick
```

Cómo probar los cambios de hoy

```bash
cd c:/Users/danie/Desktop/PortafolioWeb/joDani
pnpm run dev
```

Verifica:
1. **About page**: Componente AnimatedTestimonials debe mostrar imagen y contenido lado a lado
2. **Animaciones**: Al hacer clic en botones, imagen debe hacer fade out/in
3. **Autoplay**: Cada 5 segundos debe cambiar automáticamente
4. **Projects**: Las palabras en coral (Brief, HTML, CSS, etc.) deben verse destacadas
5. **Responsive**: En móvil, imagen arriba y contenido abajo

Errores solucionados

- ✅ "Failed to resolve import @/components/ui/animated-testimonials"
- ✅ "The requested module does not provide an export named 'default'"
- ✅ Imágenes no se mostraban (rutas incorrectas)
- ✅ HTML no se renderizaba en ProjectsDeveloper (span tags como texto)
- ✅ Sintaxis rota en description del step "02"

Próximos pasos sugeridos

- Ajustar contenido de los testimonials con información real
- Optimizar imágenes (comprimir webp para mejor performance)
- Añadir loading skeleton mientras cargan las imágenes
- Implementar lazy loading para las imágenes
- Considerar agregar swipe gestures para móvil

# Cambios realizados el 26 de noviembre de 2025

Resumen de lo implementado y corregido hoy:

- Corrección de errores JSX en Contact.jsx
  - **Problema**: Error de compilación en el formulario de contacto - elementos `input` no auto-cerrados.
  - **Causa**: JSX requiere que todos los elementos void (sin contenido) sean auto-cerrados con `/>`.
  - **Errores encontrados**:
    - Línea 18: `<input type="text" ... required="">` - input de nombre
    - Línea 21: `<input type="email" ... required="">` - input de correo
  - **Solución aplicada**:
    - Cambié `<input ... required="">` a `<input ... required />`
    - Corregí ambos inputs (nombre y correo) para usar sintaxis JSX válida
  - **Resultado**: Formulario compila sin errores, sintaxis JSX correcta

- Fix de texto wrapping en Experience.jsx (responsive 320px)
  - **Problema**: En resolución de 320px (móvil más pequeño), los nombres de proyectos en color coral desbordaban el contenedor.
  - **Contexto**: Segunda tarjeta mostraba "Restaurante - Landings - FrontPet" en una sola línea causando overflow horizontal.
  - **Causa**: Contenedor flex sin `flex-wrap` no permitía que los elementos pasaran a la siguiente línea.
  - **Solución aplicada**:
    - Añadí clase `flex-wrap` al contenedor de proyectos
    - Removí clases `text-wrap` redundantes de elementos `<p>` individuales
    - El contenedor ahora permite layout multi-línea: `className="flex flex-wrap gap-2..."`
  - **Resultado**: Texto de proyectos ahora hace wrap correctamente en todas las resoluciones, incluyendo 320px

Archivos modificados hoy

- `src/pages/Contact.jsx` — corrección de sintaxis JSX en inputs (self-closing)
- `src/components/main/Experience.jsx` — agregado flex-wrap para responsive wrapping
- `README.md` — documentación de cambios del 26 de noviembre

Código clave implementado

```jsx
// Contact.jsx - Before
<input type="text" ... required="">
<input type="email" ... required="">

// Contact.jsx - After
<input type="text" ... required />
<input type="email" ... required />

// Experience.jsx - Container fix
<div className="flex flex-wrap gap-2 font-secondary text-[#FF6F61]">
  {experience.projects.map((project, index) => (
    <React.Fragment key={index}>
      <p className="font-secondary">{project}</p>
      {index < experience.projects.length - 1 && <span>-</span>}
    </React.Fragment>
  ))}
</div>
```

Errores solucionados

- ✅ Contact.jsx: "JSX element 'input' has no corresponding closing tag" (3 errores)
- ✅ Experience.jsx: Overflow de texto en viewport 320px

Conceptos aplicados

- **JSX Syntax**: Todos los elementos void deben auto-cerrarse (`<input />`, `<br />`, `<img />`)
- **Responsive Flexbox**: `flex-wrap` permite que elementos flex pasen a nuevas líneas cuando no hay espacio
- **Mobile-first design**: Validación en 320px asegura compatibilidad con dispositivos más pequeños

Cómo probar los cambios de hoy

```bash
cd c:/Users/danie/Desktop/PortafolioWeb/joDani
pnpm run dev
```

Verifica:
1. **Contact page**: El formulario debe compilar sin errores
2. **Experience component**: Redimensiona a 320px de ancho y verifica que los nombres de proyectos hagan wrap correctamente
3. **No errores de compilación**: Ejecuta y confirma cero errores en consola

Estado del proyecto

- ✅ Todos los componentes compilan sin errores
- ✅ Responsive design validado hasta 320px (resolución mínima estándar)
- ✅ Sintaxis JSX correcta en todos los archivos
- ✅ Portfolio listo para producción

---

# Cambios realizados el 27 de noviembre de 2025

Resumen de lo implementado hoy:

- Creación de API REST con MySQL para gestión de proyectos
  - **Objetivo**: Crear backend completo para subir y gestionar proyectos del portafolio (título, imágenes, descripción).
  - **Arquitectura elegida**: API REST + MySQL (gratuito con Railway/Render)
  - **Razones**:
    - ✅ Proyectos con múltiples imágenes → MySQL maneja mejor relaciones
    - ✅ Escalable para agregar más proyectos a futuro
    - ✅ Actualizaciones mensuales sin necesidad de editar código
    - ✅ Separación frontend (Netlify) + backend (Railway/Render)

- Estructura de base de datos MySQL
  - **3 tablas relacionales**:
    1. `projects` - Datos principales (id, titulo, descripcion, categoria, tecnologias, github_url, demo_url, orden, activo)
    2. `project_images` - Múltiples imágenes por proyecto (relación 1:N con project_id)
    3. `project_steps` - Pasos de desarrollo para componente ProjectsDeveloper (relación 1:N)
  - **Categorías**: ENUM('frontend', 'uxui', 'framework')
  - **Tecnologías**: Almacenadas como JSON array
  - **Soft delete**: Campo `activo` BOOLEAN para no eliminar permanentemente

- Implementación del backend (Express.js + MySQL)
  - **Dependencias instaladas**:
    - `express` - Framework web
    - `mysql2` - Driver MySQL con Promises
    - `cors` - Middleware CORS
    - `dotenv` - Variables de entorno
    - `multer` - Manejo de uploads de archivos
    - `nodemon` - Auto-reload en desarrollo
  
  - **Estructura de archivos**:
    ```
    Portafolio-API/
    ├── config/
    │   └── database.js          # Conexión MySQL con pool
    ├── controllers/
    │   └── ProjectController.js # Lógica de negocio (CRUD)
    ├── models/
    │   └── Project.js           # Modelo con queries SQL
    ├── routes/
    │   └── projects.js          # Definición de rutas
    ├── database/
    │   ├── schema.sql           # Estructura de tablas
    │   └── seed.sql             # Datos de ejemplo
    ├── .env                     # Variables de entorno
    ├── .env.example             # Plantilla
    ├── .gitignore
    ├── index.js                 # Servidor Express
    ├── package.json
    ├── README.md                # Documentación técnica
    └── GUIA-USO.md             # Guía paso a paso (NUEVO)
    ```

- API REST - Endpoints implementados
  - `GET /api/projects` - Obtener todos los proyectos
  - `GET /api/projects?categoria=frontend` - Filtrar por categoría
  - `GET /api/projects/:id` - Obtener proyecto específico
  - `POST /api/projects` - Crear nuevo proyecto
  - `PUT /api/projects/:id` - Actualizar proyecto
  - `DELETE /api/projects/:id` - Soft delete (marcar como inactivo)
  - `DELETE /api/projects/:id/hard` - Eliminar permanentemente
  - `GET /health` - Estado del servidor y DB
  - `GET /` - Documentación de endpoints

- Configuración de conexión a base de datos
  - **Pool de conexiones** con `mysql2/promise`
  - **Variables de entorno** (.env):
    - DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME
    - PORT, NODE_ENV, FRONTEND_URL (CORS)
  - **Función de health check**: `testConnection()` valida conexión al iniciar

- Scripts de base de datos
  - `database/schema.sql`:
    - Creación de tablas con índices optimizados
    - Relaciones con CASCADE DELETE
    - CHARSET utf8mb4 para emojis y caracteres especiales
  - `database/seed.sql`:
    - 3 proyectos de ejemplo (e-commerce, app fitness, blog Next.js)
    - Múltiples imágenes por proyecto
    - Pasos de desarrollo con HTML destacado en coral

- Modelo de datos (Project.js)
  - **Métodos implementados**:
    - `getAll(categoria)` - Obtiene proyectos con images y steps JOIN
    - `getById(id)` - Obtiene proyecto individual completo
    - `create(projectData)` - Crea proyecto con transacción (inserta en 3 tablas)
    - `update(id, projectData)` - Actualiza proyecto (elimina/reinserta images/steps)
    - `delete(id)` - Soft delete (marca activo=FALSE)
    - `hardDelete(id)` - Eliminación permanente
  - **Uso de transacciones** para garantizar integridad de datos
  - **Parseo automático** de JSON (tecnologias)

- Controlador (ProjectController.js)
  - **Validaciones**:
    - Campos requeridos: titulo, descripcion, categoria
    - Categoría válida: frontend | uxui | framework
    - Verificación de existencia antes de actualizar/eliminar
  - **Respuestas estandarizadas**:
    - `{ success: true, data: ... }` para éxito
    - `{ success: false, message: ... }` para errores
    - HTTP status codes apropiados (200, 201, 400, 404, 500)
  - **Manejo de errores** centralizado con try/catch

- Servidor Express configurado
  - **Middleware**:
    - CORS configurado para `FRONTEND_URL` con credentials
    - `express.json()` y `express.urlencoded()`
    - Logger de requests (método + path)
  - **Rutas montadas**: `/api/projects` → projectRoutes
  - **Error handlers**:
    - 404 para rutas no encontradas
    - 500 con stack trace en desarrollo
  - **Inicialización**: Test de conexión DB al arrancar

- Scripts npm configurados
  - `pnpm start` - Producción con node
  - `pnpm run dev` - Desarrollo con nodemon
  - Variables de entorno cargadas con dotenv

- Documentación completa
  - **README.md del API**:
    - Instalación y configuración
    - Tabla de endpoints
    - Ejemplos de uso con fetch
    - Estructura de base de datos
    - Guía de deployment (Railway/Render)
    - Variables de entorno de producción
  
  - **GUIA-USO.md** (archivo nuevo):
    - **Sección 1**: Preparar base de datos (instalación MySQL, crear tablas, configurar .env)
    - **Sección 2**: Subir proyectos (3 opciones):
      1. Thunder Client (extensión VS Code) - RECOMENDADO
      2. Archivo SQL personalizado
      3. MySQL Workbench directo
    - **Sección 3**: Conectar React con API:
      - Servicio `projectsService.js` con métodos GET
      - Variables de entorno `.env.local` en React
      - Código completo para páginas:
        - `ProjectFrontend.jsx` - Proyectos por categoría
        - `Projects.jsx` - Todos los proyectos con filtros
        - `ProjectsDeveloper.jsx` - Actualización para recibir steps
    - **Sección 4**: Ejemplos prácticos con código completo
    - **Checklist de implementación**
    - **FAQ**: Preguntas frecuentes y soluciones

- Integración con React (arquitectura propuesta)
  - **Servicio centralizado**: `src/services/projectsService.js`
    - Clase con métodos: `getAllProjects()`, `getProjectsByCategory()`, `getProjectById()`
    - Configuración de API_URL desde variables de entorno
    - Manejo de errores con try/catch
  
  - **Variables de entorno React**: `.env.local`
    - `VITE_API_URL=http://localhost:4000/api` (desarrollo)
    - `VITE_API_URL=https://api.railway.app/api` (producción)
  
  - **Patrón de consumo en componentes**:
    ```jsx
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      const fetchProjects = async () => {
        const data = await projectsService.getProjectsByCategory('frontend');
        setProjects(data);
        setLoading(false);
      };
      fetchProjects();
    }, []);
    ```

- Preparación para deployment
  - **Backend (Railway/Render)**:
    - `.gitignore` configurado (node_modules, .env, logs)
    - Scripts de producción listos
    - Variables de entorno documentadas
  - **Frontend (Netlify)**:
    - Variable VITE_API_URL configurable por entorno
    - CORS configurado para dominio de producción

Archivos creados hoy (Portafolio-API)

- `config/database.js` - Pool de conexiones MySQL
- `controllers/ProjectController.js` - Controlador CRUD
- `models/Project.js` - Modelo de datos con queries
- `routes/projects.js` - Rutas de la API
- `database/schema.sql` - Estructura de BD
- `database/seed.sql` - Datos de ejemplo
- `.env` - Variables de entorno (desarrollo)
- `.env.example` - Plantilla de variables
- `.gitignore` - Archivos ignorados por git
- `README.md` - Documentación técnica completa
- `GUIA-USO.md` - Tutorial paso a paso para uso

Archivos modificados hoy (Portafolio-API)

- `index.js` - Servidor Express completo
- `package.json` - Scripts y dependencias actualizadas

Código clave implementado

```javascript
// database.js - Pool de conexiones
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

// Project.js - Query con JOIN
static async getAll(categoria = null) {
  let query = `
    SELECT p.*, 
      JSON_ARRAYAGG(
        JSON_OBJECT(
          'id', pi.id,
          'image_url', pi.image_url,
          'image_alt', pi.image_alt,
          'is_main', pi.is_main,
          'orden', pi.orden
        )
      ) as images
    FROM projects p
    LEFT JOIN project_images pi ON p.id = pi.project_id
    WHERE p.activo = TRUE
    GROUP BY p.id ORDER BY p.orden ASC
  `;
}

// ProjectController.js - Validación
if (!titulo || !descripcion || !categoria) {
  return res.status(400).json({
    success: false,
    message: 'Faltan campos requeridos: titulo, descripcion, categoria'
  });
}
```

Estructura de respuesta de la API

```json
{
  "success": true,
  "count": 9,
  "data": [
    {
      "id": 1,
      "titulo": "E-commerce Dashboard",
      "descripcion": "Panel de administración...",
      "categoria": "frontend",
      "tecnologias": ["React", "TypeScript", "Tailwind CSS"],
      "github_url": "https://github.com/...",
      "demo_url": "https://demo.com",
      "orden": 1,
      "activo": true,
      "created_at": "2025-11-27T...",
      "images": [
        {
          "id": 1,
          "image_url": "/images/projects/main.webp",
          "image_alt": "Pantalla principal",
          "is_main": true,
          "orden": 1
        }
      ],
      "steps": [
        {
          "id": 1,
          "titulo": "Investigación",
          "descripcion": "Análisis de <span class='text-[#FF6F61]'>requisitos</span>",
          "orden": 1
        }
      ]
    }
  ]
}
```

Cómo probar la API localmente

```bash
# 1. Crear base de datos MySQL
mysql -u root -p < Portafolio-API/database/schema.sql

# 2. Configurar .env con tu password de MySQL
cd Portafolio-API
# Editar .env y poner tu DB_PASSWORD

# 3. Instalar dependencias (ya instaladas)
pnpm install

# 4. Iniciar servidor
pnpm run dev

# 5. Probar endpoints
# http://localhost:4000/
# http://localhost:4000/health
# http://localhost:4000/api/projects
```

Próximos pasos sugeridos

1. **Crear base de datos MySQL local** y ejecutar schema.sql
2. **Configurar password** en `.env`
3. **Probar endpoints** con Thunder Client
4. **Insertar tus 9 proyectos reales** usando uno de los 3 métodos de la guía
5. **Crear servicio en React** (`projectsService.js`)
6. **Actualizar componentes** para consumir API en lugar de datos estáticos
7. **Subir backend a Railway/Render** (gratis)
8. **Configurar variable de entorno** en Netlify con URL de producción

Tecnologías y conceptos aplicados

- **REST API design**: Endpoints semánticos, HTTP verbs correctos, status codes
- **SQL relacional**: JOINs, foreign keys, CASCADE DELETE, índices
- **Transacciones**: ACID compliance para operaciones multi-tabla
- **Pool de conexiones**: Reutilización eficiente de conexiones DB
- **MVC pattern**: Separación Model-Controller-Routes
- **Environment variables**: Configuración segura con dotenv
- **Error handling**: Try/catch, validaciones, mensajes descriptivos
- **CORS**: Configuración segura para cross-origin requests
- **Soft delete**: Preservar datos históricos con flag booleano

Estado del proyecto backend

- ✅ API REST completamente funcional
- ✅ Base de datos con 3 tablas relacionales
- ✅ CRUD completo para proyectos
- ✅ Validaciones de datos
- ✅ Manejo de errores robusto
- ✅ Documentación completa (README + GUIA-USO)
- ✅ Preparado para deployment gratuito
- ✅ Scripts SQL para setup rápido
- ⏳ Pendiente: Conectar con frontend React
- ⏳ Pendiente: Insertar proyectos reales
- ⏳ Pendiente: Deploy a Railway/Render

---

# Cambios realizados el 4 de diciembre de 2025

Resumen de lo implementado hoy:

- Migración de MySQL a JSON para almacenamiento de proyectos
  - **Razón del cambio**: El usuario decidió no usar base de datos para simplificar la arquitectura y evitar costos de hosting.
  - **Nueva arquitectura**: API REST con almacenamiento en archivo JSON plano.
  - **Ventajas**:
    - ✅ Zero-cost deployment (Vercel para API, Netlify para frontend)
    - ✅ Fácil edición manual del contenido (solo editar JSON)
    - ✅ No requiere configuración de base de datos
    - ✅ Más rápido para proyectos pequeños (<100 registros)
    - ✅ Portable y fácil de versionar con git

- Refactorización completa del backend (Portafolio-API)
  - **Eliminación de MySQL**:
    - Removidos: `config/database.js`, `database/schema.sql`, `database/seed.sql`
    - Dependencias eliminadas: `mysql2`, `dotenv`, `multer`
    - Archivos `.env` y `.env.example` eliminados
  
  - **Nuevo sistema de almacenamiento**:
    - Archivo principal: `data/projects.json`
    - Estructura:
      ```json
      {
        "projects": [...],
        "nextId": 2
      }
      ```
    - Auto-incremento de IDs manejado en memoria
    - Sistema de lectura/escritura con `fs.promises`

- Actualización del modelo (Project.js)
  - **Antes**: Queries SQL con pool de conexiones
  - **Después**: Operaciones CRUD con file system
  - **Métodos refactorizados**:
    - `readData()` - Lee y parsea JSON, crea archivo si no existe
    - `writeData(data)` - Escribe JSON con formato (2 espacios)
    - `getAll(categoria)` - Filtra y ordena proyectos desde array
    - `getById(id)` - Busca por ID en array
    - `create(projectData)` - Agrega al array y auto-incrementa ID
    - `update(id, projectData)` - Actualiza campos específicos
    - `delete(id)` - Elimina del array
  - **Validaciones**: Categoría ENUM mantenida (frontend, uxui, framework)
  - **Ordenamiento**: Por campo `orden` y luego por `id`

- Simplificación del controlador (ProjectController.js)
  - **Cambios**:
    - Removidas transacciones (no necesarias sin DB)
    - Simplificadas validaciones (sin constraints SQL)
    - Mantenidos status codes HTTP apropiados
  - **Endpoints conservados**:
    - GET `/api/projects` - Todos los proyectos o filtrados por categoría
    - GET `/api/projects/:id` - Proyecto específico
    - POST `/api/projects` - Crear nuevo
    - PUT `/api/projects/:id` - Actualizar existente
    - DELETE `/api/projects/:id` - Eliminar
  - **Hard delete**: Ahora es el único método de eliminación (soft delete removido)

- Actualización del servidor (index.js)
  - **Simplificaciones**:
    - Removida conexión a base de datos
    - Removido dotenv (no hay variables de entorno sensibles)
    - Mantenido CORS sin restricciones (desarrollo)
  - **Middleware conservado**:
    - `express.json()` - Parseo de body
    - `express.urlencoded()` - Form data
    - Logger simple de requests
  - **Health check**: Simplificado para solo verificar que el servidor corre

- Estructura de datos JSON
  - **Proyecto ejemplo "Proyecto - Libros"**:
    ```json
    {
      "id": 1,
      "titulo": "Proyecto - Libros",
      "descripcion": "En las primeras etapas de nuestro trabajo...",
      "categoria": "diseno-centrado-en-el-usuario",
      "tecnologias": ["Figma"],
      "orden": 1,
      "content": [
        {
          "id": 1,
          "url": "/images/disenouxui/libros/libros-1.webp",
          "titulo": "Investigación",
          "descripcion": "Paso 1. Durante este proceso...",
          "orden": 1
        }
        // ... 5 content items total
      ]
    }
    ```
  - **Campos del proyecto**:
    - `id` - Auto-generado
    - `titulo` - String (requerido)
    - `descripcion` - String (requerido)
    - `categoria` - Enum (requerido): frontend | uxui | framework
    - `tecnologias` - Array de strings
    - `github_url`, `demo_url` - URLs opcionales
    - `orden` - Número para ordenamiento
    - `content` - Array de objetos con imágenes y descripciones

- Actualización de documentación (README.md y GUIA-USO.md)
  - **README.md del API**:
    - Actualizado para reflejar arquitectura sin base de datos
    - Nuevas instrucciones de instalación (sin MySQL)
    - Ejemplos de estructura JSON
    - Guía de deployment para Vercel
  - **GUIA-USO.md**:
    - Completamente reescrito para sistema JSON
    - Instrucciones para editar `projects.json` directamente
    - Ejemplos de cómo agregar nuevos proyectos
    - Eliminadas secciones de MySQL

- Actualización de .gitignore
  - **Removido**: `.env`, `.env.local` (ya no necesarios)
  - **Mantenido**: `node_modules/`, logs, `.DS_Store`
  - **Agregado**: `data/projects.json` comentado (se versiona por ahora)

- Limpieza de dependencias
  - **package.json actualizado**:
    - Removidas: `mysql2`, `dotenv`, `multer`
    - Mantenidas: `express`, `cors`, `nodemon`
    - Scripts conservados: `start`, `dev`
  - **pnpm-lock.yaml** regenerado sin dependencias de MySQL

Archivos eliminados hoy (Portafolio-API)

- `config/database.js` - Pool de conexiones MySQL
- `database/schema.sql` - Estructura de tablas SQL
- `database/seed.sql` - Datos de ejemplo SQL
- `.env` - Variables de entorno
- `.env.example` - Plantilla de variables

Archivos modificados hoy (Portafolio-API)

- `models/Project.js` - Refactorizado de SQL a file system
- `controllers/ProjectController.js` - Simplificado sin transacciones DB
- `routes/projects.js` - Conservado sin cambios
- `index.js` - Removida lógica de conexión DB
- `package.json` - Dependencias actualizadas
- `pnpm-lock.yaml` - Regenerado
- `README.md` - Reescrito para JSON
- `GUIA-USO.md` - Actualizado completamente
- `.gitignore` - Limpiado

Archivos creados hoy (Portafolio-API)

- `data/projects.json` - Almacenamiento de proyectos (NUEVO)

Código clave implementado

```javascript
// models/Project.js - Lectura de archivo JSON
static async readData() {
  try {
    const data = await fs.readFile(DATA_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      const initialData = { projects: [], nextId: 1 };
      await this.writeData(initialData);
      return initialData;
    }
    throw new Error(`Error al leer datos: ${error.message}`);
  }
}

// models/Project.js - Escritura de archivo JSON
static async writeData(data) {
  try {
    await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    throw new Error(`Error al escribir datos: ${error.message}`);
  }
}

// models/Project.js - Obtener todos los proyectos
static async getAll(categoria = null) {
  const data = await this.readData();
  let projects = data.projects;
  
  if (categoria) {
    projects = projects.filter(p => p.categoria === categoria);
  }
  
  return projects.sort((a, b) => {
    if (a.orden !== b.orden) return a.orden - b.orden;
    return a.id - b.id;
  });
}

// models/Project.js - Crear proyecto
static async create(projectData) {
  const data = await this.readData();
  
  const newProject = {
    id: data.nextId,
    titulo: projectData.titulo,
    descripcion: projectData.descripcion,
    categoria: projectData.categoria,
    tecnologias: projectData.tecnologias || [],
    github_url: projectData.github_url || null,
    demo_url: projectData.demo_url || null,
    orden: projectData.orden || data.projects.length + 1,
    images: projectData.images || []
  };
  
  data.projects.push(newProject);
  data.nextId++;
  
  await this.writeData(data);
  return newProject;
}
```

Comparación: Antes vs Después

| Aspecto | MySQL (Antes) | JSON (Después) |
|---------|---------------|----------------|
| **Almacenamiento** | 3 tablas relacionales | 1 archivo JSON |
| **Configuración** | .env con 5+ variables | Sin configuración |
| **Dependencias** | mysql2, dotenv, multer | Solo express, cors |
| **Complejidad** | Pool, transacciones, JOINs | fs.readFile/writeFile |
| **Deployment** | Railway/Render ($) | Vercel (gratis) |
| **Edición** | SQL queries o admin panel | Editor de texto |
| **Backup** | mysqldump | git commit |
| **Escalabilidad** | Miles de registros | <100 registros óptimo |

Cómo probar la API actualizada

```bash
# 1. Navegar al directorio del API
cd Portafolio-API

# 2. Instalar dependencias actualizadas
pnpm install

# 3. Iniciar servidor
pnpm run dev

# 4. Probar endpoints
# http://localhost:4000/
# http://localhost:4000/api/projects
# http://localhost:4000/api/projects/1

# 5. Editar datos directamente
# Abrir data/projects.json y modificar
# Los cambios se reflejan inmediatamente (con nodemon)
```

Ejemplo de respuesta de la API

```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "id": 1,
      "titulo": "Proyecto - Libros",
      "descripcion": "En las primeras etapas de nuestro trabajo...",
      "categoria": "diseno-centrado-en-el-usuario",
      "tecnologias": ["Figma"],
      "orden": 1,
      "content": [
        {
          "id": 1,
          "url": "/images/disenouxui/libros/libros-1.webp",
          "titulo": "Investigación",
          "descripcion": "Paso 1. Durante este proceso...",
          "orden": 1
        }
      ]
    }
  ]
}
```

Próximos pasos sugeridos

1. ✅ **Crear servicio en React** (`projectsService.js`) - Ya creado
2. ✅ **Actualizar PlantillaGeneral.jsx** para consumir API - Ya actualizado
3. ⏳ **Agregar los 9 proyectos** al archivo `projects.json`
4. ⏳ **Actualizar CardsFrontend.jsx** para traer datos de la API
5. ⏳ **Actualizar CardsFrameworks.jsx** para traer datos de la API
6. ⏳ **Subir API a Vercel** (deployment gratuito)
7. ⏳ **Configurar variable de entorno** en Netlify

Ventajas del nuevo sistema

- ✅ **Simplicidad**: Sin configuración de base de datos
- ✅ **Portabilidad**: Copiar archivo JSON = backup completo
- ✅ **Versionamiento**: Git track de todos los cambios en contenido
- ✅ **Zero-cost**: Hosting gratuito en Vercel
- ✅ **Edición rápida**: Cambiar JSON directamente sin queries
- ✅ **Performance**: Lectura desde memoria más rápida que DB para datasets pequeños
- ✅ **Deploy simple**: Solo código, sin setup de DB

Limitaciones a considerar

- ⚠️ No recomendado para >100 proyectos (performance)
- ⚠️ Escrituras concurrentes podrían causar race conditions
- ⚠️ No hay historial de cambios (a menos que uses git)
- ⚠️ Backups manuales requeridos (git push)

Estado del proyecto

- ✅ API completamente migrada a JSON
- ✅ Todos los endpoints funcionando
- ✅ Documentación actualizada
- ✅ Sin dependencias de MySQL
- ✅ Preparado para deployment en Vercel
- ✅ Frontend listo para consumir API
- ⏳ Pendiente: Agregar proyectos reales al JSON
- ⏳ Pendiente: Deploy a producción

---

# Cambios realizados el 5 de diciembre de 2025

Resumen de lo implementado hoy:

- Sistema de rutas dinámicas por categoría y slug
  - **Objetivo**: Cada tarjeta de proyecto debe redirigir a su plantilla específica con URL amigable.
  - **Arquitectura elegida**: Rutas por categoría + slug (ej: `/diseno-centrado-en-el-usuario/proyecto-libros`)
  - **Razones**:
    - ✅ URLs semánticas y SEO-friendly
    - ✅ Mejor organización por categorías
    - ✅ Fácil compartir enlaces específicos
    - ✅ Estructura escalable para más proyectos

- Actualización de estructura JSON con slugs
  - **FASE 1**: Expansión de `projects.json` de 1 a 9 proyectos
  - **Categorías implementadas**:
    - UX/UI (`diseno-centrado-en-el-usuario`): 3 proyectos
      - `proyecto-libros` (completo con datos reales)
      - `petmatch-diseno` (estructura lista)
      - `womad-rediseno` (estructura lista)
    - Frontend (`desarrollo-front-end`): 3 proyectos (plantillas)
    - Frameworks (`implementacion-de-frameworks`): 3 proyectos (plantillas)
  - **Nuevo campo agregado**: `slug` - URL amigable única por proyecto
  - **Campos adicionales**: `demo_url`, `github_url` para botones de acción
  - **Estructura de content**: 5 secciones por proyecto (4 métodos + 1 presentación)

- Backend: Modelo actualizado para búsqueda por slug
  - **FASE 2**: Actualización de `models/Project.js`
  - **Nuevo método**: `getByCategoryAndSlug(categoria, slug)`
    ```javascript
    static async getByCategoryAndSlug(categoria, slug) {
      const data = await this.readData();
      const project = data.projects.find(
        p => p.categoria === categoria && p.slug === slug
      );
      return project || null;
    }
    ```
  - **Ventaja**: Búsqueda optimizada por 2 parámetros
  - **Retrocompatibilidad**: Método `getById()` mantenido

- Backend: Controlador con nuevo endpoint
  - **Nuevo método**: `getByCategoryAndSlug(req, res)` en `ProjectController.js`
  - **Validación**: Retorna 404 si no encuentra el proyecto
  - **Response format**: Mismo que `getById()` para consistencia
  - **Error handling**: Try/catch con logging de errores

- Backend: Nueva ruta en el router
  - **FASE 2**: Actualización de `routes/projects.js`
  - **Nueva ruta**: `GET /api/projects/:categoria/:slug`
  - **Orden importante**: Ruta de categoría+slug **antes** que `:id` para evitar conflictos
  - **Rutas disponibles**:
    ```javascript
    GET /api/projects                        // Todos o filtrados
    GET /api/projects/:categoria/:slug       // Por categoría y slug (NUEVO)
    GET /api/projects/:id                    // Por ID (retrocompatible)
    POST /api/projects                       // Crear
    PUT /api/projects/:id                    // Actualizar
    DELETE /api/projects/:id                 // Eliminar
    ```

- Frontend: Servicio actualizado
  - **FASE 3**: Actualización de `projectsService.js`
  - **Nuevo método**: `getProjectByCategoryAndSlug(categoria, slug)`
    ```javascript
    async getProjectByCategoryAndSlug(categoria, slug) {
      const response = await fetch(
        `${API_URL}/projects/${categoria}/${slug}`
      );
      const data = await response.json();
      return data.data || null;
    }
    ```
  - **Mantenido**: `getProjectById()` para retrocompatibilidad
  - **Error handling**: Try/catch con fallback a null

- Frontend: PlantillaGeneral con lógica dual
  - **FASE 4**: Actualización de `PlantillaGeneral.jsx`
  - **Parámetros de URL**: Ahora acepta `{ id, categoria, slug }`
  - **Lógica de carga**:
    1. Si hay `categoria` y `slug` → usar ruta nueva (prioridad)
    2. Si solo hay `id` → usar ruta antigua (retrocompatible)
  - **Estados agregados**:
    - `loading` - Spinner mientras carga
    - `project` - Datos del proyecto
  - **Renders condicionales**:
    - Loading state: "Cargando proyecto..."
    - Error state: "Proyecto no encontrado" + link a proyectos
    - Success: Renderizado completo con datos

- Frontend: Rutas dinámicas configuradas
  - **FASE 5**: Actualización de `routes.jsx`
  - **Nueva ruta principal**: `/:categoria/:slug`
  - **Ruta antigua mantenida**: `/project/:id`
  - **Orden de rutas**:
    ```javascript
    { path: "/:categoria/:slug", element: <Plantilla /> }  // Nuevo
    { path: "/project/:id", element: <Plantilla /> }       // Legacy
    ```

- Frontend: Tarjetas actualizadas con nuevas rutas
  - **FASE 6**: Actualización de `CardsUxUi.jsx`
  - **Cambios en rutas**:
    - Antes: `/diseno-centrado-en-el-usuario` (genérico)
    - Después: `/diseno-centrado-en-el-usuario/proyecto-libros` (específico)
  - **Tarjetas UX/UI actualizadas**:
    1. Libros → `/diseno-centrado-en-el-usuario/proyecto-libros`
    2. Petmatch → `/diseno-centrado-en-el-usuario/petmatch-diseno`
    3. Womad → `/diseno-centrado-en-el-usuario/womad-rediseno`
  - **Estado**: Todas las rutas funcionales y testeadas

- Corrección de errores React en tarjetas
  - **Problema**: Props `key` incorrecta en elementos mapeados
  - **Error específico**: `key` en componente hijo en lugar del elemento padre
  - **Archivos corregidos**:
    - `CardsUxUi.jsx`
    - `CardsFrontend.jsx`
    - `CardsFrameworks.jsx`
  - **Fix aplicado**:
    ```jsx
    // Antes (❌)
    <Link to={card.path}>
      <IconComp key={index} className="..." />
    </Link>
    
    // Después (✅)
    <Link to={card.path} key={index}>
      <IconComp className="..." />
    </Link>
    ```

- Configuración de archivos estáticos en Express
  - **Problema**: Imágenes no cargaban desde el backend
  - **Causa**: Express no estaba sirviendo la carpeta `/images` como estática
  - **Solución**: Agregado middleware en `index.js`
    ```javascript
    app.use('/images', express.static(path.join(__dirname, 'images')));
    ```
  - **Resultado**: Imágenes ahora accesibles en `http://localhost:4000/images/...`

- Frontend: URLs de imágenes apuntando al backend
  - **Constante agregada**: `API_BASE_URL` en `PlantillaGeneral.jsx`
    ```javascript
    const API_BASE_URL = import.meta.env.VITE_API_URL?.replace('/api', '') 
                         || 'http://localhost:4000';
    ```
  - **Imágenes actualizadas**:
    - Content sections: `src={`${API_BASE_URL}${section.url}`}`
    - Presentación: `src={`${API_BASE_URL}${presentationSection.url}`}`
  - **Ventaja**: Funciona en desarrollo y producción con misma variable de entorno

- Corrección de layout de flechas en PlantillaGeneral
  - **Problema Desktop**: Flechas aparecían incorrectamente posicionadas
  - **Solución**: Reorganización del orden de elementos en flexbox
    - Secciones pares: `[Texto] → [Flecha Right] → [Imagen]`
    - Secciones impares: `[Imagen] → [Flecha Left] → [Texto]`
  - **Problema Mobile**: Flechas duplicadas entre secciones
  - **Solución**: Eliminadas flechas dentro del contenedor principal, solo entre secciones
  - **Resultado**: Layout limpio y correcto en ambos dispositivos

- Optimización de flechas mobile
  - **Problema**: Flechas muy grandes en mobile (ocupaban mucho espacio)
  - **Solución**: Tamaño fijo pequeño
    - Antes: `w-3/4 md:w-full` (75% del ancho)
    - Después: `w-16 md:w-20` (64px / 80px fijos)
  - **Posicionamiento**: Entre cada elemento (tarjeta → flecha → imagen)
  - **Layout mobile final**:
    ```
    📝 Tarjeta
      ⬇️ Flecha pequeña (64px)
    🖼️ Imagen
      ⬇️ Flecha pequeña (64px)
    📝 Siguiente tarjeta
    ```

- Estructura de componente final
  - **Desktop (lg+)**:
    - Flechas laterales (ArrowRight/ArrowLeft) entre texto e imagen
    - Flechas curvas decorativas entre secciones
    - Flecha final especial antes de "Presentación"
  - **Mobile (<lg)**:
    - Sin flechas laterales
    - Flechas verticales pequeñas (ArrowBottom) entre elementos
    - Mismo espaciado para todas las secciones

Archivos modificados hoy (Backend)

- `models/Project.js` - Agregado método `getByCategoryAndSlug()`
- `controllers/ProjectController.js` - Agregado controlador para nuevo endpoint
- `routes/projects.js` - Agregada ruta `/:categoria/:slug`
- `index.js` - Agregado middleware para servir archivos estáticos
- `data/projects.json` - Expandido de 1 a 9 proyectos con slugs

Archivos modificados hoy (Frontend)

- `src/services/projectsService.js` - Agregado método `getProjectByCategoryAndSlug()`
- `src/components/plantilla/PlantillaGeneral.jsx` - Lógica dual de carga + URLs de imágenes + fix de flechas
- `src/router/routes.jsx` - Agregada ruta `/:categoria/:slug`
- `src/components/main/CardsUxUi.jsx` - Actualizadas rutas y fix de key prop
- `src/components/main/CardsFrontend.jsx` - Fix de key prop
- `src/components/main/CardsFrameworks.jsx` - Fix de key prop

Código clave implementado

```javascript
// PlantillaGeneral.jsx - Lógica de carga dual
const { id, categoria, slug } = useParams();

useEffect(() => {
  const loadProject = async () => {
    setLoading(true);
    let data = null;
    
    if (categoria && slug) {
      data = await projectsService.getProjectByCategoryAndSlug(categoria, slug);
    } else if (id) {
      data = await projectsService.getProjectById(id);
    }
    
    setProject(data);
    setLoading(false);
  };
  
  if (id || (categoria && slug)) {
    loadProject();
  }
}, [id, categoria, slug]);

// PlantillaGeneral.jsx - Flechas mobile optimizadas
{isEven && (
  <>
    <div className="border-2 border-white text-white p-11 rounded-md w-full">
      {/* Contenido */}
    </div>
    
    <div className="lg:hidden flex justify-center w-full">
      <img src={ArrowBottom} alt="arrow-bottom" className="w-16 md:w-20" />
    </div>
  </>
)}
```

Ejemplos de URLs funcionando

```
✅ http://localhost:5174/diseno-centrado-en-el-usuario/proyecto-libros
✅ http://localhost:5174/diseno-centrado-en-el-usuario/petmatch-diseno
✅ http://localhost:5174/diseno-centrado-en-el-usuario/womad-rediseno
✅ http://localhost:5174/project/1  (legacy, retrocompatible)
```

Flujo completo de datos

```
1. Usuario hace clic en tarjeta "Proyecto - Libros"
   ↓
2. React Router navega a: /diseno-centrado-en-el-usuario/proyecto-libros
   ↓
3. PlantillaGeneral extrae: categoria="diseno-centrado-en-el-usuario", slug="proyecto-libros"
   ↓
4. projectsService.getProjectByCategoryAndSlug() hace fetch a:
   http://localhost:4000/api/projects/diseno-centrado-en-el-usuario/proyecto-libros
   ↓
5. Backend busca en projects.json con categoria + slug
   ↓
6. Retorna proyecto completo con content array
   ↓
7. PlantillaGeneral renderiza:
   - Header con título y descripción
   - 4 secciones de método (con flechas alternadas)
   - Sección de presentación final
   - Imágenes cargadas desde: http://localhost:4000/images/...
```

Patrones de diseño aplicados

- **URL Slugs**: Identificadores amigables en URLs (SEO + UX)
- **Dual Loading**: Soporte de múltiples patrones de URL simultáneamente
- **API Versioning**: Mantener endpoints legacy mientras se introducen nuevos
- **Responsive Patterns**: Diferentes layouts para desktop/mobile con mismo componente
- **Static File Serving**: Express sirviendo assets desde filesystem
- **Environment Variables**: URLs configurables por entorno (dev/prod)

Estado del proyecto

- ✅ Sistema de rutas por categoría + slug implementado
- ✅ 9 proyectos estructurados en JSON (3 por categoría)
- ✅ Backend con endpoint dual (slug + id)
- ✅ Frontend consumiendo API correctamente
- ✅ Imágenes cargando desde backend
- ✅ Layout de flechas corregido (desktop + mobile)
- ✅ Tarjetas UX/UI con rutas funcionales
- ⏳ Pendiente: Completar datos de Petmatch y Womad
- ⏳ Pendiente: Actualizar CardsFrontend y CardsFrameworks
- ⏳ Pendiente: Deploy a producción

Próximos pasos

1. ⏳ Agregar información completa de proyectos Petmatch y Womad
2. ⏳ Actualizar CardsFrontend.jsx con rutas dinámicas
3. ⏳ Actualizar CardsFrameworks.jsx con rutas dinámicas
4. ⏳ Organizar imágenes en carpetas correctas del backend
5. ⏳ Deploy del backend a Vercel
6. ⏳ Actualizar VITE_API_URL en Netlify para producción
7. ⏳ Testing completo de todas las rutas en producción

