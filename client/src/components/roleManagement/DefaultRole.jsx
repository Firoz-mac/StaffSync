import React from 'react'
import { ChevronRight, UserShield } from 'lucide-react';

const DefaultRole = ({ 
    defaultRole = 'admin'
}) => {
  return (
    <div 
        className='flex w-full items-center gap-4 rounded-xl p-4 border border-slate-200 
        dark:border-slate-700 bg-white dark:bg-slate-900 text-left transition-all duration-200'
    >
        
        <div 
            className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full 
            bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300
            transition-colors duration-200'
        >
            <UserShield size={20}/>
        </div>

        <div className='min-w-0 flex-1'>
            <h6 className='text-sm font-semibold text-slate-900 dark:text-slate-100'>
                Default Role
            </h6>
            <p className='mt-1 truncate text-xs text-slate-500 dark:text-slate-400'>
                <span className='capitalize'>{defaultRole} </span>
                applies to all
            </p>
        </div>

    </div>
    
  )
}

export default DefaultRole