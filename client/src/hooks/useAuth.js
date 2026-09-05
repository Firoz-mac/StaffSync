import { useState } from "react"
import { createAccount, login, logout } from '../services/authService'

const useAuth = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const signupUser = async (userData) => {
        try {
            setLoading(true)
            setError(null)

            const data = await createAccount(userData)

            return data;

        } catch (error) {
            const message = error.response?.data?.message || 'Failed to create account.'
            setError(message)

            throw new Error(message)
        } finally {
            setLoading(false)
        }
    }

    const loginUser = async (loginData) => {
        try {
            setLoading(true)
            setError(null)

            const data = await login(loginData)

            return data;

        } catch (error) {
            const message = error.response?.data?.message || 'Login failed.'
            setError(message)

            throw new Error(message)
        } finally {
            setLoading(false)
        }
    }

    const logoutUser = async () => {
        
        try {
            setLoading(true)
            setError(null)

            const data = await logout()

            return data;

        } catch (error) {
            const message = error.response?.data?.message || 'Failed to logout.'
            setError(message)

            throw new Error(message)
        } finally{
            setLoading(false)
        }
    }

    return {
        signupUser,
        loginUser,
        logoutUser,
        loading,
        error,
    }
}

export default useAuth;