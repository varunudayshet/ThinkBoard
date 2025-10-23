import axios from "axios";

// Use environment variable for production, localhost for development
const BASE_URL = import.meta.env.VITE_API_URL 
  ? `${import.meta.env.VITE_API_URL}/api`
  : "http://localhost:5001/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
