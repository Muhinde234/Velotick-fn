import API from "../axios";

export const addRoute = async (data) => {
    const response = await API.post('/routes', data);
    return response.data;
};

export const getAllRoutes = async () => {
    const response = await API.get('/routes');
    return response.data;
};

export const getOneRoute = async (id) => {
    const response = await API.get(`/routes/${id}`);
    return response.data;
};

export const updateRoute = async (id, data) => {
    const response = await API.patch(`/routes/${id}`, data);
    return response.data;
};

export const deleteRoute = async (id) => {
    const response = await API.delete(`/routes/${id}`);
    return response.data;
};
