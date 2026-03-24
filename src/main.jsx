import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
// Importar Splide y sus estilos globalmente
import "@splidejs/splide/css";
// También puedes importar temas adicionales si quieres:
// import "@splidejs/splide/css/skyblue";
// import "@splidejs/splide/css/sea-green";
// import "@splidejs/splide/css/core"; // Solo estilos básicos sin tema

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
