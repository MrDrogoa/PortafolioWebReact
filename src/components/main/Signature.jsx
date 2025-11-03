import React from "react";
import SignatureImage from "../../assets/images/RuM.svg";

function Signature() {
  return (
    <section className="max-w-[1300px] m-auto">
      <div className="pt-8 md:pt-20 lg:pt-36 px-5 flex justify-center md:justify-end">
        <img src={SignatureImage} alt="Signature" className="w-10 md:w-auto" />
      </div>
    </section>
  );
}

export default Signature;
