import React, { useState } from "react";
import TitleSection from "@/components/TitleSection";
import ButtonComponents from "@/components/buttons/ButtonComponents";
import ButtonArrowReturnComponents from "@/components/buttons/ButtonArrowReturnComponents";

function ContactComponents() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const inputs = [
    { type: "text", id: "nombre", name: "nombre", placeholder: "Nombre" },
    { type: "email", id: "correo", name: "correo", placeholder: "Email" },
  ];
  const textarea = {
    id: "mensaje",
    name: "mensaje",
    placeholder: "Mensaje",
    rows: 7,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construir mensaje para WhatsApp
    const mensaje = `*Nuevo contacto desde portafolio*%0A%0A*Nombre:* ${formData.nombre}%0A*Email:* ${formData.correo}%0A*Mensaje:* ${formData.mensaje}`;

    // Número de WhatsApp (reemplaza con tu número en formato internacional sin + ni espacios)
    // Ejemplo: 56912345678 para Chile
    const numeroWhatsApp = "56962857073"; // CAMBIA ESTE NÚMERO

    // Abrir WhatsApp
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, "_blank");

    // Limpiar formulario
    setFormData({
      nombre: "",
      correo: "",
      mensaje: "",
    });
  };

  return (
    <section className="max-w-[1300px] m-auto px-4 lg:px-0">
      <ButtonArrowReturnComponents />
      <div className="px-5">
        <TitleSection>Contacto</TitleSection>
        <p className="font-secondary text-[#FF6F61] font-normal text-sm sm:text-base md:text-lg text-center m-auto w-1/2 md:w-1/3 lg:w-1/4 py-2 md:py-4">
          Contactame para marcar la diferencia. ¿Listo para crear tu impacto?
        </p>
      </div>

      <div className="flex flex-col px-5 mt-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <div key={input.id} className="mb-4">
              <input
                type={input.type}
                id={input.id}
                name={input.name}
                placeholder={input.placeholder}
                value={formData[input.name]}
                onChange={handleChange}
                className="font-secondary mt-1 block w-full sm:w-3/4 md:w-1/2 m-auto px-3 py-2 focus:outline-none bg-transparent border-2 text-white placeholder:text-white/30"
                required
              />
            </div>
          ))}
          <div>
            <textarea
              id={textarea.id}
              name={textarea.name}
              rows={textarea.rows}
              placeholder={textarea.placeholder}
              value={formData[textarea.name]}
              onChange={handleChange}
              className="font-secondary mt-1 block w-full sm:w-3/4 md:w-1/2 m-auto px-3 py-2 focus:outline-none bg-transparent border-2 text-white resize-none placeholder:text-white/30"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <ButtonComponents type="submit">Enviar</ButtonComponents>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactComponents;
