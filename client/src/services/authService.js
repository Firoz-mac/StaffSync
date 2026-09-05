import api from "./api"

export const createAccount = async (userData) => {
    const response = await api.post('/auth/signup', userData);

    return response.data;
}

export const login = async (loginData) => {
    const response = await api.post('/auth/login', loginData);

    return response.data;
}

export const logout = async () => {
    const response = await api.post('/auth/logout')

    return response.data;
}

export const getCurrentUser = async () => {
    const response = await api.get('/auth/getMe');

    return response.data;
}