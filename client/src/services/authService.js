import api from "./api"

export const createAccount = async (userData) => {
    const response = await api.post('/auth/signup', userData);

    return response.data;
}

export const login = async (loginData) => {
    const response = await api.post('/auth/login', loginData);

    return response.data;
}