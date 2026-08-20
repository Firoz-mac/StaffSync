import React from 'react'
import Avatar from '../../Avatar'

const ModalRow = ({
    name='Mac',
    selected = false,
}) => {
  return (
    <label 
        className='flex items-center gap-4 rounded-lg p-3 transition-colors 
        hover:bg-slate-100 dark:hover:bg-slate-800/50 cursor-pointer'
    >

        <input 
            type="checkbox"
            className='h-4 w-4 cursor-pointer rounded border-slate-300 text-blue-600 
            focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 shrink-0' 
        />

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

    </label>
  )
}

export default ModalRow