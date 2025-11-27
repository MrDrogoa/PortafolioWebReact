-- Base de datos para Portafolio Web
-- Creación de tablas para gestión de proyectos

-- Crear base de datos
CREATE DATABASE IF NOT EXISTS portafolio_db;
USE portafolio_db;

-- Tabla de proyectos
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    categoria ENUM('frontend', 'uxui', 'framework') NOT NULL,
    tecnologias JSON,
    github_url VARCHAR(500),
    demo_url VARCHAR(500),
    orden INT DEFAULT 0,
    activo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_categoria (categoria),
    INDEX idx_activo (activo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de imágenes de proyectos (relación 1:N)
CREATE TABLE IF NOT EXISTS project_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    image_alt VARCHAR(255),
    is_main BOOLEAN DEFAULT FALSE,
    orden INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
    INDEX idx_project (project_id),
    INDEX idx_main (is_main)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla de pasos/procesos del proyecto (para ProjectsDeveloper)
CREATE TABLE IF NOT EXISTS project_steps (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    orden INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
    INDEX idx_project (project_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
