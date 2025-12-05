import React from "react";
import TitleSection from "./TitleSection";
import ButtonComponents from "./buttons/ButtonComponents";

function ContactComponents() {
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

  return (
    <section className="max-w-[1300px] m-auto ">
      <div className="px-5">
        <TitleSection>Contacto</TitleSection>
        <p className="font-secondary text-[#FF6F61] font-normal text-sm sm:text-base md:text-lg text-center m-auto w-1/2 md:w-1/3 lg:w-1/4 py-2 md:py-4">
          Contactame para marcar la diferencia. ¿Listo para crear tu impacto?
        </p>
      </div>

      <div className="flex flex-col px-5 mt-6">
        <form className="space-y-6">
          {inputs.map((input) => (
            <div key={input.id} className="mb-4">
              <input
                type={input.type}
                id={input.id}
                name={input.name}
                placeholder={input.placeholder}
                className="mt-1 block w-full sm:w-3/4 md:w-1/2 m-auto px-3 py-2 focus:outline-none bg-transparent border-2 text-white placeholder:text-white/30"
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
              className="mt-1 block w-full sm:w-3/4 md:w-1/2 m-auto px-3 py-2 focus:outline-none bg-transparent border-2 text-white resize-none placeholder:text-white/30"
              required=""
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
