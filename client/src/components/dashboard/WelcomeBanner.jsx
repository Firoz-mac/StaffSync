import React from 'react'
import { Download, Plus } from 'lucide-react'
import Button from '../Button'
import { formatCurrentDate } from '../../utils/formatDate'
import ErrorState from '../errorState/ErrorState'
import { useAuthStore } from '../../store/authStore'
import { useNavigate } from 'react-router-dom'

const WelcomeBanner = () => {

    const navigate = useNavigate();

    const user = useAuthStore((state) => state.user);

    const isAdmin = user?.role === "admin";

    const today = formatCurrentDate();

  return (
    <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>

        <div>
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                Welcome {user?.fullName || "User"}
            </h1>
            <p className="text-slate-500 dark:text-slate-400">{today}</p>
        </div>
        
        {
            isAdmin && (
                <div className='flex flex-wrap gap-2'>

                    <Button variant='outline'>
                        <Download size={18} />
                        Export
                    </Button>

                    <Button 
                        variant='primary' 
                        className="flex-1 sm:flex-none justify-center"
                        onClick={()=>navigate('/employees/new')}
                    >
                        <Plus size={18}/>
                        New Employee
                    </Button>

                </div>
            )
        }

    </div>
    // <ErrorState 
    //     description='We couldnt load your dashboard information. Please refresh the page.'
    // />
  )
}

export default WelcomeBanner