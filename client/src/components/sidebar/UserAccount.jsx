import React from 'react'
import { useAuthStore } from '../../store/authStore'
import LogoutButton from './LogoutButton';
import { useEffect } from 'react';
import Avatar from '../Avatar';
import { getFullName } from '../../utils/nameUtils';

const UserAccount = () => {

  const user = useAuthStore(state => state.user);

  const fullName = getFullName(
    user?.employee?.firstName,
    user?.employee?.lastName
  )

  const userAvatar = user?.employee?.image

  return (
    <div className='flex items-center justify-between py-3'>

      <div className='flex items-center gap-3'>

        <Avatar
          size='h-10 w-10' 
          name={fullName}
          avatar={userAvatar}
        />

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