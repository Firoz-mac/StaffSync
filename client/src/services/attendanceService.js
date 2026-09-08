import api from "./api"

export const markAttendance = async () => {
    const response = await api.post('/attendance/mark');

    return response.data;
}

export const attendanceStatus = async () => {
    const response = await api.get('/attendance/current');

    return response.data;
}