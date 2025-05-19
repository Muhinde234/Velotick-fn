import API from "../axios";


export const login = async (userData) => {
    const {data} = await API.post("/auth/login", userData);
    return data;
}


export const logout = async () => {
    const {data} = await API.post("/auth/logout");
   
}

export const register = async (userData) => {
    const {data} = await API.post("/auth/sign-up", userData);
    return data;
}

export const changepassword=async()=>{
    const {data} = await API.post("auth/change-password");
}
export const loggedin=async()=>{
    const {data} = await API.post("auth/me");
}