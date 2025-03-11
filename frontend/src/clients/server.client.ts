import axios, { AxiosInstance } from 'axios';

const apiPort: string = String(import.meta.env.VITE_SERVER_PORT);
const apiBase: string = `http://localhost:${apiPort}/api/`;

const apiClient: AxiosInstance = axios.create({
  baseURL: apiBase,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export { apiClient };
