const { pool } = require("../config/database");

class ProjectModel {
  // Obtener todos los proyectos con sus imágenes y pasos
  static async getAll(categoria = null) {
    try {
      let query = `
        SELECT p.*, 
          JSON_ARRAYAGG(
            JSON_OBJECT(
              'id', pi.id,
              'image_url', pi.image_url,
              'image_alt', pi.image_alt,
              'is_main', pi.is_main,
              'orden', pi.orden
            )
          ) as images
        FROM projects p
        LEFT JOIN project_images pi ON p.id = pi.project_id
        WHERE p.activo = TRUE
      `;

      const params = [];
      if (categoria) {
        query += " AND p.categoria = ?";
        params.push(categoria);
      }

      query += " GROUP BY p.id ORDER BY p.orden ASC, p.created_at DESC";

      const [rows] = await pool.execute(query, params);

      // Procesar cada proyecto para obtener sus pasos
      for (let project of rows) {
        const [steps] = await pool.execute(
          "SELECT * FROM project_steps WHERE project_id = ? ORDER BY orden ASC",
          [project.id]
        );
        project.steps = steps;

        // Parsear JSON de tecnologías
        if (project.tecnologias) {
          project.tecnologias = JSON.parse(project.tecnologias);
        }

        // Filtrar imágenes null
        if (project.images && project.images[0].id === null) {
          project.images = [];
        }
      }

      return rows;
    } catch (error) {
      throw new Error(`Error al obtener proyectos: ${error.message}`);
    }
  }

  // Obtener un proyecto por ID
  static async getById(id) {
    try {
      const [projects] = await pool.execute(
        `SELECT p.*, 
          JSON_ARRAYAGG(
            JSON_OBJECT(
              'id', pi.id,
              'image_url', pi.image_url,
              'image_alt', pi.image_alt,
              'is_main', pi.is_main,
              'orden', pi.orden
            )
          ) as images
        FROM projects p
        LEFT JOIN project_images pi ON p.id = pi.project_id
        WHERE p.id = ?
        GROUP BY p.id`,
        [id]
      );

      if (projects.length === 0) {
        return null;
      }

      const project = projects[0];

      // Obtener pasos del proyecto
      const [steps] = await pool.execute(
        "SELECT * FROM project_steps WHERE project_id = ? ORDER BY orden ASC",
        [id]
      );
      project.steps = steps;

      // Parsear JSON
      if (project.tecnologias) {
        project.tecnologias = JSON.parse(project.tecnologias);
      }

      // Filtrar imágenes null
      if (project.images && project.images[0].id === null) {
        project.images = [];
      }

      return project;
    } catch (error) {
      throw new Error(`Error al obtener proyecto: ${error.message}`);
    }
  }

  // Crear un nuevo proyecto
  static async create(projectData) {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();

      // Insertar proyecto
      const [result] = await connection.execute(
        `INSERT INTO projects (titulo, descripcion, categoria, tecnologias, github_url, demo_url, orden)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          projectData.titulo,
          projectData.descripcion,
          projectData.categoria,
          JSON.stringify(projectData.tecnologias || []),
          projectData.github_url || null,
          projectData.demo_url || null,
          projectData.orden || 0,
        ]
      );

      const projectId = result.insertId;

      // Insertar imágenes si existen
      if (projectData.images && projectData.images.length > 0) {
        for (let i = 0; i < projectData.images.length; i++) {
          const img = projectData.images[i];
          await connection.execute(
            `INSERT INTO project_images (project_id, image_url, image_alt, is_main, orden)
             VALUES (?, ?, ?, ?, ?)`,
            [
              projectId,
              img.image_url,
              img.image_alt || "",
              img.is_main || false,
              img.orden || i,
            ]
          );
        }
      }

      // Insertar pasos si existen
      if (projectData.steps && projectData.steps.length > 0) {
        for (let i = 0; i < projectData.steps.length; i++) {
          const step = projectData.steps[i];
          await connection.execute(
            `INSERT INTO project_steps (project_id, titulo, descripcion, orden)
             VALUES (?, ?, ?, ?)`,
            [projectId, step.titulo, step.descripcion, step.orden || i]
          );
        }
      }

      await connection.commit();
      return await this.getById(projectId);
    } catch (error) {
      await connection.rollback();
      throw new Error(`Error al crear proyecto: ${error.message}`);
    } finally {
      connection.release();
    }
  }

  // Actualizar un proyecto
  static async update(id, projectData) {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();

      // Actualizar proyecto
      await connection.execute(
        `UPDATE projects 
         SET titulo = ?, descripcion = ?, categoria = ?, tecnologias = ?, 
             github_url = ?, demo_url = ?, orden = ?
         WHERE id = ?`,
        [
          projectData.titulo,
          projectData.descripcion,
          projectData.categoria,
          JSON.stringify(projectData.tecnologias || []),
          projectData.github_url || null,
          projectData.demo_url || null,
          projectData.orden || 0,
          id,
        ]
      );

      // Actualizar imágenes (eliminar y reinsertar)
      if (projectData.images) {
        await connection.execute(
          "DELETE FROM project_images WHERE project_id = ?",
          [id]
        );

        for (let i = 0; i < projectData.images.length; i++) {
          const img = projectData.images[i];
          await connection.execute(
            `INSERT INTO project_images (project_id, image_url, image_alt, is_main, orden)
             VALUES (?, ?, ?, ?, ?)`,
            [
              id,
              img.image_url,
              img.image_alt || "",
              img.is_main || false,
              img.orden || i,
            ]
          );
        }
      }

      // Actualizar pasos (eliminar y reinsertar)
      if (projectData.steps) {
        await connection.execute(
          "DELETE FROM project_steps WHERE project_id = ?",
          [id]
        );

        for (let i = 0; i < projectData.steps.length; i++) {
          const step = projectData.steps[i];
          await connection.execute(
            `INSERT INTO project_steps (project_id, titulo, descripcion, orden)
             VALUES (?, ?, ?, ?)`,
            [id, step.titulo, step.descripcion, step.orden || i]
          );
        }
      }

      await connection.commit();
      return await this.getById(id);
    } catch (error) {
      await connection.rollback();
      throw new Error(`Error al actualizar proyecto: ${error.message}`);
    } finally {
      connection.release();
    }
  }

  // Eliminar un proyecto (soft delete)
  static async delete(id) {
    try {
      const [result] = await pool.execute(
        "UPDATE projects SET activo = FALSE WHERE id = ?",
        [id]
      );
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Error al eliminar proyecto: ${error.message}`);
    }
  }

  // Eliminar permanentemente
  static async hardDelete(id) {
    try {
      const [result] = await pool.execute("DELETE FROM projects WHERE id = ?", [
        id,
      ]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(
        `Error al eliminar proyecto permanentemente: ${error.message}`
      );
    }
  }
}

module.exports = ProjectModel;
