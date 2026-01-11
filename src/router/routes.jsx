import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import ProjectUxUi from "@/pages/ProjectUxui.jsx";
import ProjectFrontend from "@/pages/ProjectFrontend.jsx";
import ProjectFrameworks from "@/pages/ProjectFrameworks.jsx";
import Plantilla from "@/pages/Plantilla";
import Experience from "@/pages/Experience";
import Error404 from "@/pages/Error404";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/experience", element: <Experience /> },
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
  {
    path: "/404",
    element: <Error404 />,
  },
];

export default routes;
