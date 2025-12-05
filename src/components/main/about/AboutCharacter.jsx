import React from "react";

function AboutCharacter() {
  const ListCertificates = [
    { id: 1, name: "Certificado Front-End" },
    { id: 2, name: "Certificado UX UI" },
    { id: 3, name: "Certificado Inglés" },
    { id: 4, name: "Certificado Gestión de proyectos" },
    { id: 5, name: "Certificado Frameworks" },
    { id: 6, name: "Certificado Software" },
    { id: 7, name: "Edad: 24 años" },
  ];
  return (
    <section class="mt-6 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16">
      <div class="flex justify-center flex-wrap lg:flex-nowrap gap-6 text-white px-5 w-full">
        {ListCertificates.slice(0, 3).map((certificate) => (
          <div
            key={certificate.id}
            class="border-2 border-white p-5 hover:text-[#202023] hover:bg-white transition-colors w-64 h-32 flex items-center justify-center"
          >
            <p class="font-[DM Sans] font-medium md:text-lg text-center">
              {certificate.name}
            </p>
          </div>
        ))}
      </div>

      <div class="flex justify-center flex-wrap lg:flex-nowrap gap-6 text-white px-5 w-full mt-6">
        {ListCertificates.slice(3, 6).map((certificate) => (
          <div
            key={certificate.id}
            class="border-2 border-white p-5 hover:text-[#202023] hover:bg-white transition-colors w-64 h-32 flex items-center justify-center"
          >
            <p class="font-[DM Sans] font-medium md:text-lg text-center">
              {certificate.name}
            </p>
          </div>
        ))}
      </div>

      <div class="flex justify-center mt-6 px-5 text-white">
        {ListCertificates.slice(6, 7).map((certificate) => (
          <div
            key={certificate.id}
            class="border-2 border-white p-5 hover:text-[#202023] hover:bg-white transition-colors w-64 h-32 flex items-center justify-center"
          >
            <p class="font-[DM Sans] font-medium md:text-lg text-center">
              {certificate.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutCharacter;
