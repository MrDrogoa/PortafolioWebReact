const express = require("express");
const cors = require("cors");
const path = require("path");

const projectRoutes = require("./routes/projects");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (imágenes)
app.use("/images", express.static(path.join(__dirname, "images")));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Rutas
app.get("/", (req, res) => {
  res.json({
    message: "API de Portafolio Web 🚀",
    version: "2.0.0",
    description: "API REST con almacenamiento en JSON",
    endpoints: {
      projects: "/api/projects",
      project_by_id: "/api/projects/:id",
      filter_by_category:
        "/api/projects?categoria=frontend|disenouxui|framework",
    },
  });
});

// API Routes
app.use("/api/projects", projectRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Ruta no encontrada",
  });
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({
    success: false,
    message: "Error interno del servidor",
    error: err.message,
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`\n🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📝 Documentación: http://localhost:${PORT}/`);
  console.log(`💾 Datos almacenados en: data/projects.json\n`);
});
