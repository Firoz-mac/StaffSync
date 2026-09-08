import { useState } from "react"
import { markAttendance, attendanceStatus } from "../services/attendanceService";

const useAttendance = () => {

    const [loading, setLoading] = useState(false);
    const [statusLoading, setStatusLoading] = useState(false);
    const [error, setError] = useState(null);

    const toggleAttendance = async () => {

        try {
            setLoading(true)
            setError(null)

            const response = await markAttendance();

            return response;
        } catch (error) {
            const message = error.response?.data?.message || 'Failed to process attendance.'

            setError(message);

            throw new Error(message);
        } finally {
            setLoading(false);
        }
    }

    const checkAttendanceStatus = async () => {
        try {
            setStatusLoading(true)
            setError(null)

            const response = await attendanceStatus();

            return response;

        } catch {
            const message = error.response?.data?.message || 'Failed to get attendance status.'
            setError(message);

            throw new Error(message);
        } finally {
            setStatusLoading(false);
        }
    }

    return {
        loading,
        statusLoading,
        error,
        toggleAttendance,
        checkAttendanceStatus,
    }
}

export default useAttendance;