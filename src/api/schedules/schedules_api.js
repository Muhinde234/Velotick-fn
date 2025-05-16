import API from "../axios";

export const createSchedule = async(data) => {
    try{
        const response =await API.post("/schedules", data);
        return response.data;
        
    }catch(error){
        console.log(error);
}
}

export const getSchedules = async() => {
    try{
        const response =await API.get("/schedules");
        return response.data;

    }catch(error){
        console.log(error);
}
}

export const getSchedule = async(id) => {
    try{
        const response =await API.get(`/schedules/${id}`);
        return response.data;

    }catch(error){
        console.log(error);
}
}
export const updateSchedule = async(id, data) => {
    try{
        const response =await API.patch(`/schedules/${id}`, data);
        return response.data;

    }catch(error){
        console.log(error);
}
}

export const deleteSchedule = async(id) => {
    try{
        const response =await API.delete(`/schedules/${id}`);
        return response.data;

    }catch(error){
        console.log(error);
}
}