import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BASE_URL

const API = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})


export default API;