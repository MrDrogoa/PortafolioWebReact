import React from "react";
import Button2Components from "@/components/buttons/Button2Components";

function Error404Components() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center py-4 sm:py-8 md:py-16 lg:py-24 theme-text">
        <h3 className="text-5xl md:text-6xl font-bold mb-3">404</h3>
        <p className="text-sm sm:text-base md:text-lg mb-8">
          Página no encontrada
        </p>
        <a href="/">
          <Button2Components type="submit">Volver al inicio</Button2Components>
        </a>
      </div>
    </section>
  );
}

export default Error404Components;
