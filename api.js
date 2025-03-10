import axios from "axios";

const api = axios.create({
  baseURL: "https://api.catboys.com",
});

export default api;