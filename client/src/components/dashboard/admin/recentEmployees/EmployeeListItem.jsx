import React from 'react'
import Avatar from '../../../Avatar'

const EmployeeListItem = ({data}) => {

    const { name, avatar, role, joined } = data;

  return (
    <div className='flex items-center gap-3'>
        
        <Avatar name={name} avatar={avatar}/>
        
        <div className='min-w-0 flex-1'>
            <h5 className="truncate font-semibold text-slate-900 dark:text-slate-100">
                {name}
            </h5>

            <p className="truncate text-sm text-slate-500 dark:text-slate-400">
                {role}
                <span className="mx-1">•</span>
                {joined}
            </p>
        </div>

    </div>
  )
}

export default EmployeeListItem