import React, { useState, useEffect } from "react";
import AboutImg from "@/components/main/about/AboutImg";
import AboutContent from "@/components/main/about/AboutContent";
import "@/css/AnimatedTestimonials.css";

// Importar las imágenes
import aboutmeImg from "@/assets/img/aboutme.webp";
import aboutlandscapeImg from "@/assets/img/aboutlandscape.webp";
import aboutImg from "@/assets/img/about.jpg";
import aboutsantiagoImg from "@/assets/img/aboutsantiago.webp";

function AnimatedTestimonialsDemo() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      title:
        "Creatividad y accesibilidad desde Santiago, potenciando el mundo del desarrollo.",

      descripcion1:
        "Soy desarrollador web y diseñador UX/UI con experiencia en crear soluciones digitales escalables, combinando código limpio, interfaces intuitivas y accesibles.",
      descripcion2:
        "Me especializo en optimizar la experiencia del usuario y transformar ideas en productos digitales eficientes para emprendimientos y empresas emergentes. Integro principios de usabilidad, accesibilidad y marketing digital para negocios online, con un enfoque estratégico.",
      descripcion3:
        "Mi mentalidad emprendedora y creatividad me permiten diseñar soluciones innovadoras adaptadas a las necesidades reales de los usuarios.",
      img: aboutmeImg,
    },
    {
      title:
        "Creatividad y accesibilidad desde Santiago, potenciando el mundo del desarrollo.",

      descripcion1:
        "Soy desarrollador web y diseñador UX/UI con experiencia en crear soluciones digitales escalables, combinando código limpio, interfaces intuitivas y accesibles.",
      descripcion2:
        "Me especializo en optimizar la experiencia del usuario y transformar ideas en productos digitales eficientes para emprendimientos y empresas emergentes. Integro principios de usabilidad, accesibilidad y marketing digital para negocios online, con un enfoque estratégico.",
      descripcion3:
        "Mi mentalidad emprendedora y creatividad me permiten diseñar soluciones innovadoras adaptadas a las necesidades reales de los usuarios.",
      img: aboutlandscapeImg,
    },
    {
      title:
        "Creatividad y accesibilidad desde Santiago, potenciando el mundo del desarrollo.",

      descripcion1:
        "Soy desarrollador web y diseñador UX/UI con experiencia en crear soluciones digitales escalables, combinando código limpio, interfaces intuitivas y accesibles.",
      descripcion2:
        "Me especializo en optimizar la experiencia del usuario y transformar ideas en productos digitales eficientes para emprendimientos y empresas emergentes. Integro principios de usabilidad, accesibilidad y marketing digital para negocios online, con un enfoque estratégico.",
      descripcion3:
        "Mi mentalidad emprendedora y creatividad me permiten diseñar soluciones innovadoras adaptadas a las necesidades reales de los usuarios.",
      img: aboutImg,
    },
    {
      title:
        "Creatividad y accesibilidad desde Santiago, potenciando el mundo del desarrollo.",

      descripcion1:
        "Soy desarrollador web y diseñador UX/UI con experiencia en crear soluciones digitales escalables, combinando código limpio, interfaces intuitivas y accesibles.",
      descripcion2:
        "Me especializo en optimizar la experiencia del usuario y transformar ideas en productos digitales eficientes para emprendimientos y empresas emergentes. Integro principios de usabilidad, accesibilidad y marketing digital para negocios online, con un enfoque estratégico.",
      descripcion3:
        "Mi mentalidad emprendedora y creatividad me permiten diseñar soluciones innovadoras adaptadas a las necesidades reales de los usuarios.",
      img: aboutsantiagoImg,
    },
  ];

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
    setAutoplay(false);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 300);
    setAutoplay(false);
  };

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 300);
    setAutoplay(false);
  };

  const testimonial = testimonials[current];

  return (
    <div className="w-full mx-auto">
      <div className="rounded-xl overflow-hidden border-2 border-white lg:hover:border-[#FF6F61] transition-colors duration-300">
        {/* Contenedor principal con flexbox */}
        <div className="flex flex-col md:flex-row">
          <AboutImg
            src={testimonial.img}
            alt={testimonial.name}
            isTransitioning={isTransitioning}
          />
          <AboutContent
            title={testimonial.title}
            designation={testimonial.descripcion1}
            descripcion2={testimonial.descripcion2}
            descripcion3={testimonial.descripcion3}
            current={current}
            total={testimonials.length}
            onNext={handleNext}
            onPrev={handlePrev}
            onDotClick={handleDotClick}
          />
        </div>
      </div>
    </div>
  );
}

export default AnimatedTestimonialsDemo;
