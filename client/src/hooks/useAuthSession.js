import { useEffect } from 'react'
import { useAuthStore } from "../store/authStore"
import { getCurrentUser } from '../services/authService';

const useAuthSession = () => {

    const setUser = useAuthStore(state => state.setUser);
    const clearUser = useAuthStore(state => state.clearUser);
    const setLoading = useAuthStore(state => state.setLoading);

    useEffect(() => {
        const restoreSession = async () => {
            try {
                setLoading(true)

                const response = await getCurrentUser()

                if (response.success){
                    setUser(response.user)
                } else {
                    clearUser()
                }
            } catch (error) {
                clearUser()
            } finally {
                setLoading(false)
            }
        }

        restoreSession()
    },[setUser, clearUser, setLoading])
}

export default useAuthSession;