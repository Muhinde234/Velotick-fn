import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BASE_URL

const API = axios.create({
    baseURL: API_BASE_URL,
})

// Interceptor that will include the token in every request when available
API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
)


export default API;