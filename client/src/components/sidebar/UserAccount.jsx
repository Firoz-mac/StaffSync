import React from 'react'
import { useAuthStore } from '../../store/authStore'
import LogoutButton from './LogoutButton';
import { useEffect } from 'react';

const UserAccount = () => {

  const user = useAuthStore(state => state.user);

  useEffect(()=>{
    console.log(user)
  },[user])

  return (
    <div className='flex items-center justify-between py-3'>

      <div className='flex items-center gap-3'>
        <div className='flex w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/30 
        text-violet-700 dark:text-violet-300 items-center justify-center font-semibold'
        >
          MC
        </div>

        <div className='flex flex-col text-left'>
          <span className='text-sm font-semibold text-slate-800 dark:text-slate-100'>
            {user?.employee.firstName || 'User'}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {user?.employee.designation}
          </span>
        </div>

      </div>

      <LogoutButton/>
      
    </div>
  )
}

export default UserAccount