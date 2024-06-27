import axios from "axios";
import { BASE_SERVER_URL } from "config";

const commonConfig = {
  withCredentials: true,
  headers: {
    "bypass-tunnel-reminder": "anyValue",
  },
};

const api = axios.create({
  baseURL: `${BASE_SERVER_URL}/api`,
  ...commonConfig,
});

const authApi = axios.create({
  baseURL: `${BASE_SERVER_URL}/login`,
  ...commonConfig,
});

export default api;
export { authApi }; // Export the auth API as a named export
