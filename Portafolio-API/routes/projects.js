const express = require("express");
const ProjectController = require("../controllers/ProjectController");

const router = express.Router();

/**
 * @route   GET /api/projects
 * @desc    Obtener todos los proyectos (opcionalmente filtrados por categoría)
 * @query   categoria - frontend | uxui | framework
 * @access  Public
 */
router.get("/", ProjectController.getAll);

/**
 * @route   GET /api/projects/:id
 * @desc    Obtener un proyecto por ID
 * @params  id - ID del proyecto
 * @access  Public
 */
router.get("/:id", ProjectController.getById);

/**
 * @route   POST /api/projects
 * @desc    Crear un nuevo proyecto
 * @body    { titulo, descripcion, categoria, tecnologias, github_url, demo_url, orden, images, steps }
 * @access  Public (en producción debería ser Private con autenticación)
 */
router.post("/", ProjectController.create);

/**
 * @route   PUT /api/projects/:id
 * @desc    Actualizar un proyecto existente
 * @params  id - ID del proyecto
 * @body    { titulo, descripcion, categoria, tecnologias, github_url, demo_url, orden, images, steps }
 * @access  Public (en producción debería ser Private con autenticación)
 */
router.put("/:id", ProjectController.update);

/**
 * @route   DELETE /api/projects/:id
 * @desc    Eliminar un proyecto (soft delete - marca como inactivo)
 * @params  id - ID del proyecto
 * @access  Public (en producción debería ser Private con autenticación)
 */
router.delete("/:id", ProjectController.delete);

/**
 * @route   DELETE /api/projects/:id/hard
 * @desc    Eliminar permanentemente un proyecto de la base de datos
 * @params  id - ID del proyecto
 * @access  Public (en producción debería ser Private con autenticación)
 */
router.delete("/:id/hard", ProjectController.hardDelete);

module.exports = router;
