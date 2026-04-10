import React from "react";
import SignatureImage from "@/assets/images/RuM.svg";
import SignatureLight from "@/assets/images/RuMLight.svg";
import { useTheme } from "@/context/useTheme";
import "animate.css";

function Signature() {
  const { theme } = useTheme();
  const signatureSrc = theme === "light" ? SignatureLight : SignatureImage;
  return (
    <section className="max-w-[1300px] m-auto">
      <div className="pt-8 md:pt-20 lg:pt-36 px-5 flex justify-center md:justify-end">
        <img
          src={signatureSrc}
          alt="Signature"
          className="w-10 md:w-auto animate__animated animate__flash"
        />
      </div>
    </section>
  );
}

export default Signature;
