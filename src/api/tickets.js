import API from "./axios.js";


export const getTickets = async () => {
    const response = await API.get("/tickets");
    return response.data;
};