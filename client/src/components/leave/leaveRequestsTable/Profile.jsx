import React from 'react'
import Avatar from '../../Avatar'

const Profile = ({
  name,
  avatar,
  position,
}) => {
  return (
    <div className='flex min-w-0 items-center gap-3'>

      <Avatar 
        name={name}
        avatar={avatar}
        size='w-10 h-10'
      />

      <div className='min-w-0'>
        <p className='truncate text-sm font-semibold text-slate-900 dark:text-slate-100'>
          {name}
        </p>
        <span className='truncate text-xs text-slate-500 dark:text-slate-400'>
          {position}
        </span>
      </div>

    </div>
  )
}

export default Profile