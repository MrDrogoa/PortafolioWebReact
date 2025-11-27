-- Datos de ejemplo para testing
USE portafolio_db;

-- Insertar proyectos de ejemplo
INSERT INTO projects (titulo, descripcion, categoria, tecnologias, github_url, demo_url, orden) VALUES
(
    'E-commerce Dashboard',
    'Panel de administración para tienda online con gestión de productos, órdenes y clientes. Incluye gráficos en tiempo real y análisis de ventas.',
    'frontend',
    '["React", "TypeScript", "Tailwind CSS", "Chart.js"]',
    'https://github.com/usuario/ecommerce-dashboard',
    'https://demo.ejemplo.com',
    1
),
(
    'App Móvil de Fitness',
    'Aplicación de seguimiento de ejercicios y nutrición con rutinas personalizadas y calculadora de calorías.',
    'uxui',
    '["Figma", "Adobe XD", "Prototyping"]',
    NULL,
    'https://www.figma.com/file/ejemplo',
    2
),
(
    'Blog Personal con Next.js',
    'Blog desarrollado con Next.js 14, usando App Router, Server Components y MDX para contenido.',
    'framework',
    '["Next.js", "React", "MDX", "Vercel"]',
    'https://github.com/usuario/nextjs-blog',
    'https://blog.ejemplo.com',
    3
);

-- Insertar imágenes para el primer proyecto
INSERT INTO project_images (project_id, image_url, image_alt, is_main, orden) VALUES
(1, '/images/projects/ecommerce-dashboard-main.webp', 'Dashboard principal', TRUE, 1),
(1, '/images/projects/ecommerce-products.webp', 'Gestión de productos', FALSE, 2),
(1, '/images/projects/ecommerce-analytics.webp', 'Analytics de ventas', FALSE, 3);

-- Insertar imágenes para el segundo proyecto
INSERT INTO project_images (project_id, image_url, image_alt, is_main, orden) VALUES
(2, '/images/projects/fitness-home.webp', 'Pantalla principal', TRUE, 1),
(2, '/images/projects/fitness-workout.webp', 'Vista de ejercicios', FALSE, 2);

-- Insertar imágenes para el tercer proyecto
INSERT INTO project_images (project_id, image_url, image_alt, is_main, orden) VALUES
(3, '/images/projects/blog-home.webp', 'Página de inicio', TRUE, 1),
(3, '/images/projects/blog-post.webp', 'Vista de artículo', FALSE, 2);

-- Insertar pasos de desarrollo para el primer proyecto
INSERT INTO project_steps (project_id, titulo, descripcion, orden) VALUES
(1, 'Investigación y Planificación', 'Análisis de <span class="text-[#FF6F61] font-semibold">requisitos</span> y definición de <span class="text-[#FF6F61] font-semibold">arquitectura</span>', 1),
(1, 'Diseño de Interfaz', 'Creación de <span class="text-[#FF6F61] font-semibold">wireframes</span> y <span class="text-[#FF6F61] font-semibold">mockups</span> en Figma', 2),
(1, 'Desarrollo Frontend', 'Implementación con <span class="text-[#FF6F61] font-semibold">React</span> y <span class="text-[#FF6F61] font-semibold">TypeScript</span>', 3),
(1, 'Testing y Deployment', '<span class="text-[#FF6F61] font-semibold">Pruebas</span> unitarias y despliegue en <span class="text-[#FF6F61] font-semibold">Vercel</span>', 4);
