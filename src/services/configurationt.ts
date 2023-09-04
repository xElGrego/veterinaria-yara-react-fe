import axios, { InternalAxiosRequestConfig } from "axios";

const instance = axios.create({ baseURL: import.meta.env.VITE_URL });

instance.interceptors.request.use(
  (req: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    req.headers.Authorization = `Bearer ${window.localStorage.getItem(
      "token"
    )}`;
    return req;
  }
);

export default instance;
