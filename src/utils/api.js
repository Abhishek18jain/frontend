import axios from "axios";

export const api = axios.create({
  baseURL: "backend-production-4e61.up.railway.app/api",
});
