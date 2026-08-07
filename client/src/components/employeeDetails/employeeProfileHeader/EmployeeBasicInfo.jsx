import React from 'react'

const EmployeeBasicInfo = ({
    name,
    role,
    department,
}) => {
  return (
    <div className='flex flex-col items-center lg:items-start space-y-2'>

        <div className='text-center lg:text-left'>
            <h5 className='text-2xl font-bold text-slate-900 dark:text-slate-100 truncate'>
                {name}
            </h5>
            <p className='text-md text-slate-600 dark:text-slate-300'>
                {role}
            </p>
        </div>

        <span 
            className='inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 
            text-sm font-medium text-blue-700 dark:bg-blue-950/40 dark:text-blue-400'
        >
            {department}
        </span>

    </div>
  )
}

export default EmployeeBasicInfo