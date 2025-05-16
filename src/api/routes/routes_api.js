import API from "../axios";

export const addRoute = async (routeData) => {
    try {
        const response = await API.post('/routes', routeData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getAllRoutes = async () => {
    try {
        const response = await API.get('/routes');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getOneRoute = async (id) => {
    try {
        const response = await API.get(`/routes/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateRoute = async (id, routeData) => {
    try {
        const response = await API.patch(`/routes/${id}`, routeData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteRoute = async (id) => {
    try {
        const response = await API.delete(`/routes/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
