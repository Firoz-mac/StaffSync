import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import useAuth from '../../hooks/useAuth';
import { useAuthStore } from '../../store/authStore';
import { toast } from 'sonner'

const LogoutButton = () => {

    const navigate = useNavigate();

    const { logoutUser, loading } = useAuth();

    const clearUser = useAuthStore(state => state.clearUser)

    const handleLogout = async () => {
        try {
            const response = await logoutUser();

            clearUser();

            toast.success(response.message);

            navigate('/auth');

        } catch (error) {
            toast.error('Logout failed.', {
                description: error.message,
            })
        }
    }

    return (
        <button
            type='button'
            aria-label="Logout"
            disabled={loading}
            onClick={handleLogout}
            className='hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-red-600  
            dark:hover:text-red-400 rounded-full p-2 transition-colors cursor-pointer'
        >
            <LogOut size={18} />

        </button>
    )
}

export default LogoutButton