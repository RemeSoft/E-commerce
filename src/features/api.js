import axios from "axios";

// base URL for your API
const API_URL = "http://localhost:3000";

// create axios instance with the base URL
const baseURL = API_URL + "/api";
const api = axios.create({ baseURL });

// export instance & api url
export default api;
export { API_URL };
