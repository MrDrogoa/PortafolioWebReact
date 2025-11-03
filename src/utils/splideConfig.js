// Configuración global para Splide
// Puedes importar estas opciones en cualquier componente que use Splide

export const defaultSplideOptions = {
  type: "loop", // Carrusel infinito
  perPage: 4, // Slides por página (desktop)
  perMove: 1,
  gap: "2rem",
  autoplay: true,
  interval: 3000,
  pauseOnHover: true,
  arrows: true,
  pagination: false,
  breakpoints: {
    1024: { perPage: 3 },
    768: { perPage: 2 },
    640: { perPage: 1 },
  },
};

// Otras configuraciones predefinidas que puedes usar

export const testimonialOptions = {
  type: "loop",
  perPage: 1,
  perMove: 1,
  gap: "1rem",
  autoplay: true,
  interval: 5000,
  pauseOnHover: true,
  arrows: false,
  pagination: true,
};

export const portfolioOptions = {
  type: "slide",
  perPage: 3,
  perMove: 1,
  gap: "1.5rem",
  autoplay: false,
  arrows: true,
  pagination: true,
  breakpoints: {
    1024: { perPage: 2 },
    640: { perPage: 1 },
  },
};
