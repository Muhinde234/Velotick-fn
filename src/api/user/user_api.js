import API from "../axios";

export const createUser=async(data)=>{
    try{
        const response = await API.post("/users",data);
        return response.data;

    }catch(error){
        return error.response.data;
    }
}

export const getUsers=async()=>{
    try{
        const response = await API.get("/users");
        return response.data;

    }catch(error){
        return error.response.data;
    }
}

export const getUser=async(id)=>{
    try{
        const response = await API.get(`/users/${id}`);
        return response.data;

    }catch(error){
        return error.response.data;
    }
}

export const updateUser=async(id,data)=>{
    try{
        const response = await API.patch(`/users/${id}`,data);
        return response.data;

    }catch(error){
        return error.response.data;
    }
}

export const deleteUser=async(id)=>{
    try{
        const response = await API.delete(`/users/${id}`);
        return response.data;

    }catch(error){
        return error.response.data;
    }
}