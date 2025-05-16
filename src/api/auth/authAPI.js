import API from "./axios.js";


export const login = async (userData) => {
    const {data} = await API.post("/auth/login", userData);
    return data;
}


export const logout = async () => {
    const {data} = await API.post("/auth/logout");
    return data; // No response body.
}