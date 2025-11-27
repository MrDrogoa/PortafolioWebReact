const express = require("express");
const cors = require("cors");
require('dotenv').config();

const { testConnection } = require('./config/database');
const projectRoutes = require('./routes/projects');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Rutas
app.get("/", (req, res) => {
  res.json({
    message: "API de Portafolio Web 🚀",
    version: "1.0.0",
    endpoints: {
      projects: "/api/projects",
      health: "/health"
    }
  });
});

app.get("/health", async (req, res) => {
  const dbStatus = await testConnection();
  res.json({
    status: "ok",
    database: dbStatus ? "connected" : "disconnected",
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/projects', projectRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada'
  });
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Iniciar servidor
app.listen(PORT, async () => {
  console.log(`\n🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📝 Documentación: http://localhost:${PORT}/\n`);
  
  // Verificar conexión a la base de datos
  await testConnection();
});
