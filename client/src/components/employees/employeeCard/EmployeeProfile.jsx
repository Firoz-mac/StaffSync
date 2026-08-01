import React from 'react'
import Avatar from '../../Avatar'

const EmployeeProfile = ({
    name,
    avatar,
    empId,
}) => {
  return (
    <div className="flex items-center gap-4">
        <Avatar name={name}/>

        <div className="min-w-0">
            <h5 className="text-lg font-semibold text-slate-900 dark:text-slate-100 truncate">
                {name}
            </h5>
            <p className="text-sm text-slate-500 dark:text-slate-400">
                {empId}
            </p>
        </div>
    </div>
  )
}

export default EmployeeProfile