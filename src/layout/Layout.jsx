import Header from "../components/Header"; // Ajusta la ruta según la ubicación de tu Header
import Footer from "../components/Footer"; // Ajusta la ruta según la ubicación de tu Footer

function Layout({ children }) {
  return (
    <div className="bg-[#202023]">
      <Header /> {/* Cabecera */}
      <main>{children}</main> {/* Contenido principal */}
      <Footer /> {/* Pie de página */}
    </div>
  );
}

export default Layout;
