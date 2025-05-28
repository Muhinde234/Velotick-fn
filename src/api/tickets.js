import API from "./axios.js";


export const getTickets = async () => {
    const response = await API.get("/tickets");
    return response.data;
};


export const buyTicket = async (seat_id, schedule_id) => {
    const response = await API.post("/tickets/buy", {
        seat_id,
        schedule_id
    });
    return response.data;
}

export const myTickets = async () => {
    const response = await API.get("/tickets/mytickets");
    return response.data;
}