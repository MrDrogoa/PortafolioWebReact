const DEFAULT_API_URL = import.meta.env.PROD
  ? "https://jodani-api-backend.vercel.app/api"
  : "http://localhost:4000/api";

export const API_URL = import.meta.env.VITE_API_URL || DEFAULT_API_URL;

export const API_BASE_URL = API_URL.replace(/\/api\/?$/, "");
