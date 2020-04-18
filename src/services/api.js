import axios from "axios";

const api = axios.create({
  baseURL: "https://covid19-brazil-api.now.sh/api/report/v1",
});

export const githubApi = axios.create({
  baseURL: "https://api.github.com",
});

export default api;
