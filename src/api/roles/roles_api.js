import API from "../axios"



export const createRole = async (role) => {
    try {
        const response = await API.post("/roles", role);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const getRoles = async () => {
    try {
        const response = await API.get("/roles");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getRole = async (id) => {
    try {
        const response = await API.get(`/roles/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export const deleteRole = async (id) => {
    try {
        const response = await API.delete(`/roles/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}