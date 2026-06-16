import axios from "axios";

const API = axios.create({
  baseURL: "https://fitness-ai-planner.onrender.com/api",
});

export default API;