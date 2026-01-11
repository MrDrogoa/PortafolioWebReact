import Header from "../components/Header"; // Ajusta la ruta según la ubicación de tu Header
import Footer from "../components/Footer"; // Ajusta la ruta según la ubicación de tu Footer
import ButtonArrowUpComponents from "@/components/buttons/ButtonArrowUpComponents";

function Layout({ children }) {
  return (
    <div className="bg-[#202023]">
      <Header /> {/* Cabecera */}
      <main>
        {children}
        <ButtonArrowUpComponents />
      </main>{" "}
      {/* Contenido principal */}
      <Footer /> {/* Pie de página */}
    </div>
  );
}

export default Layout;
