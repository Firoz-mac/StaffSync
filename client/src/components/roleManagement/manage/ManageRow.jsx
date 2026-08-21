import React from 'react'
import { X } from 'lucide-react';
import Avatar from '../../Avatar'

const ManageRow = ({
    name='Mac'
}) => {

    const handleRowClick = ()=>{
        console.log('User selected:', name)
    };

    const handleRemove = (e)=>{
        e.stopPropagation()
        console.log('Remove user:', name)
    };

  return (
    <div 
        className='flex items-center justify-between gap-4 rounded-lg p-3 transition-colors 
        hover:bg-slate-100 dark:hover:bg-slate-800/50 cursor-pointer'
        onClick={handleRowClick}
    >

        <div className='flex min-w-0 items-center gap-3'>
            <Avatar 
                name={name} 
                size='h-10 w-10'
                className='shrink-0'
            />
            <p className='truncate text-sm font-semibold text-slate-900 dark:text-slate-100'>
                {name}
            </p>
        </div>

        <button 
            type='button' 
            aria-label={`remove ${name}`}
            className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 
            text-slate-500 transition-colors hover:bg-red-100 hover:text-red-600 dark:bg-slate-800 
            dark:text-slate-400 dark:hover:bg-red-900/30 dark:hover:text-red-400 cursor-pointer'
            onClick={handleRemove}
        >
            <X size={18}/>
        </button>


    </div>
  )
}

export default ManageRow