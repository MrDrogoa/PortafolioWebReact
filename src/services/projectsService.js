const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

class ProjectsService {
  // Obtener todos los proyectos
  async getAllProjects() {
    try {
      const response = await fetch(`${API_URL}/projects`);
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error("Error al obtener proyectos:", error);
      return [];
    }
  }

  // Obtener proyectos por categoría
  async getProjectsByCategory(categoria) {
    try {
      const response = await fetch(
        `${API_URL}/projects?categoria=${categoria}`
      );
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error("Error al obtener proyectos por categoría:", error);
      return [];
    }
  }

  // Obtener un proyecto específico por ID
  async getProjectById(id) {
    try {
      const response = await fetch(`${API_URL}/projects/${id}`);
      const data = await response.json();
      return data.data || null;
    } catch (error) {
      console.error("Error al obtener proyecto:", error);
      return null;
    }
  }

  // Obtener un proyecto por categoría y slug
  async getProjectByCategoryAndSlug(categoria, slug) {
    try {
      const response = await fetch(`${API_URL}/projects/${categoria}/${slug}`);
      const data = await response.json();
      return data.data || null;
    } catch (error) {
      console.error("Error al obtener proyecto por categoría y slug:", error);
      return null;
    }
  }

  // Crear un nuevo proyecto
  async createProject(projectData) {
    try {
      const response = await fetch(`${API_URL}/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });
      const data = await response.json();
      return data.data || null;
    } catch (error) {
      console.error("Error al crear proyecto:", error);
      return null;
    }
  }

  // Actualizar un proyecto
  async updateProject(id, projectData) {
    try {
      const response = await fetch(`${API_URL}/projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });
      const data = await response.json();
      return data.data || null;
    } catch (error) {
      console.error("Error al actualizar proyecto:", error);
      return null;
    }
  }

  // Eliminar un proyecto
  async deleteProject(id) {
    try {
      const response = await fetch(`${API_URL}/projects/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error("Error al eliminar proyecto:", error);
      return false;
    }
  }
}

export default new ProjectsService();
