import React from 'react'

const LeaveTypeCard = ({ 
    label,
    value,
    remaining,
    onClick,
    isSelected,
}) => {
  return (
    <button 
        type='button'
        onClick={()=>onClick(value)} 
        className={`flex flex-col w-full p-4 rounded-xl text-left cursor-pointer transition-all 
        duration-200 hover:bg-slate-50 border-2
            ${isSelected 
                ? 
                `border-2 border-blue-600 bg-blue-50/50 dark:border-blue-500 dark:bg-blue-950/20`
                :
                `border-slate-300 bg-white hover:border-blue-400 hover:bg-slate-50
                dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-500`
            }
        `}
    >
        <h4 className='text-base font-semibold text-slate-900 dark:text-slate-100'>
            {label}
        </h4>
        <p className='mt-1 text-sm text-slate-600 dark:text-slate-400'>
            {remaining} days remaining
        </p>
    </button>
  )
}

export default LeaveTypeCard