import API from "../axios";


export const login = async (userData) => {
    const { data } = await API.post('/auth/login', userData);
    return data;
};


export const logout = async () => {
    const { data } = await API.post('/auth/logout');
    return data;
};

export const register = async (userData) => {
    const { data } = await API.post('/auth/sign-up', userData);
    return data;
};

export const changePassword = async (payload) => {
    const { data } = await API.post('/auth/change-password', payload);
    return data;
};


export const getLoggedInUser = async () => {
    const { data } = await API.post('/auth/me');
    return data;
};