

import API from "./axios.js";

export const login = async (userData) => {
    const {data} = await API.post("/auth/login", userData);//real API
    return data;
}


export const logout = async () => {
    const {data} = await API.post("/auth/logout");
    return data;
}