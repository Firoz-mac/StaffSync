import React from 'react'

const EmployeePosition = ({
    position,
    department,
}) => {
  return (
    <div className='flex gap-1 lg:flex-col flex-wrap'>
        <h4 className='text-md font-medium text-slate-900 dark:text-slate-100'>
            {position}
        </h4>
        <span 
            className='inline-flex w-fit rounded-md bg-blue-100 px-2.5 py-1 text-xs font-medium 
            tracking-wide text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
        >
            {department}
        </span>
    </div>
  )
}

export default EmployeePosition