import Layout from "./layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./router/routes"; // Importa las rutas centralizadas

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
