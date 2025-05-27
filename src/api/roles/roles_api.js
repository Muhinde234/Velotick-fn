import API from "../axios"


export const createRole = async (role) => {
    const response = await API.post("/roles", role);
    return response.data;
};

export const getRoles = async () => {
    const response = await API.get("/roles");
    return response.data;
};

export const getRole = async (id) => {
    const response = await API.get(`/roles/${id}`);
    return response.data;
};

export const deleteRole = async (id) => {
    const response = await API.delete(`/roles/${id}`);
    return response.data;
};