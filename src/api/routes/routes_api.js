import API from "../axios"

export const addRoute = async (routeData) => {
    const response = await API.post('/routes', routeData);
    return response.data;
}

export const getAllRoutes = async() => {
    const response = await API.get('/routes');
    return response.data;
}

export const getOneRoute = async(id) => {
    const response = await API.get(`/routes/${id}`);
    return response.data;
}

export const updateRoute = async(id, routeData) => {
    const response = await API.patch(`/routes/${id}`, routeData);
    return response.data;
}

export const deleteRoute = async(id) => {
    const response = await API.delete(`/routes/${id}`);
    return response.data;
}