import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import ProjectUxUi from "@/pages/ProjectUxUi.jsx";
import ProjectFrontend from "@/pages/ProjectFrontend.jsx";
import ProjectFrameworks from "@/pages/ProjectFrameworks.jsx";
import Plantilla from "@/pages/Plantilla";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
  { path: "/diseno-centrado-en-el-usuario", element: <ProjectUxUi /> },
  {
    path: "/desarrollo-front-end",
    element: <ProjectFrontend />,
  },
  {
    path: "/implementacion-de-frameworks",
    element: <ProjectFrameworks />,
  },
  {
    path: "/plantilla",
    element: <Plantilla />,
  },
  {
    path: "/:categoria/:slug",
    element: <Plantilla />,
  },
  {
    path: "/project/:id",
    element: <Plantilla />,
  },
];

export default routes;
