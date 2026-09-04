import { useState } from "react"
import { createEmployee } from "../services/employeeService";

const useEmployee = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addEmployee = async (employeeData) => {

        try {

            setLoading(true)
            setError(null)

            const data = await createEmployee(employeeData);

            return data;

        } catch (error) {
            
            const message = error.response?.data?.message || 'Failed to create employee.'

            setError(message);

            throw new Error(message)
        } finally {
            setLoading(false);
        }
    }

    return {
        addEmployee,
        loading,
        error,
    }
}

export default useEmployee;