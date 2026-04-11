import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "@/css/ButtonMode.css";
import { useTheme } from "@/context/useTheme";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      onClick={toggleTheme}
      className={`relative inline-block h-7 lg:h-[37px] w-7 lg:w-[68px] rounded-[30px] shadow-[0_0_10px_rgba(0,0,0,0.1)] cursor-pointer transition-colors duration-[350ms] ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 overflow-hidden ${
        isDark ? "bg-[#2a2a2a] border-2 theme-border" : "bg-[#00a6ff]"
      }`}
    >
      <span className="sr-only">Modo claro y oscuro</span>

      <span
        aria-hidden="true"
        className={`mode-star mode-star-1 transition-opacity duration-[350ms] ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
      />
      <span
        aria-hidden="true"
        className={`mode-star mode-star-2 transition-opacity duration-[350ms] ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
      />
      <span
        aria-hidden="true"
        className={`mode-star mode-star-3 transition-opacity duration-[350ms] ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
      />

      <span
        aria-hidden="true"
        className={`mode-cloud transition-all duration-[350ms] ${
          isDark ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
        }`}
      />

      <span
        aria-hidden="true"
        className={`absolute left-1 bottom-1 lg:bottom-[8px] lg:left-[8px] flex h-[20px] w-[20px] items-center justify-center rounded-full transition-all duration-[350ms] ease-[cubic-bezier(0.81,-0.04,0.38,1.5)] ${
          isDark
            ? "translate-x-0 bg-[#2a2a2a] shadow-[inset_8px_-4px_0_0_#ffffff]"
            : "translate-x-[31px] bg-[#ffcf48] shadow-[inset_0_0_0_0_#ffffff]"
        }`}
      >
        <FaMoon
          className={`absolute text-[10px] text-white transition-all duration-[350ms] ${
            isDark ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        />
        <FaSun
          className={`absolute text-[11px] text-[#f59e0b] transition-all duration-[350ms] ${
            isDark ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
        />
      </span>
    </button>
  );
};

export default Switch;
