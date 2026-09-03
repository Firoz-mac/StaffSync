import api from "./api";

export const createEmployee = async (employeeData) => {
    const response = await api.post('/employee/create', employeeData);

    return response.data;
}