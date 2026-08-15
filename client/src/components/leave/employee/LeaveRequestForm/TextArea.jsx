import React from 'react'

const TextArea = ({ 
    label,
    value,
    placeholder='', 
    className='', 
    textareaClassName='',
    name,
    onChange,
    ...props
}) => {

  return (
    <div className={`w-full ${className}`}>

        {
            label && (
                <label className='mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300'>
                    {label}
                </label>
            )
        }

        <textarea 
            rows={5}
            label='Reason for Leave'
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder} 
            className={`w-full resize-y rounded-xl border border-slate-300 dark:border-slate-700 x-3 p-3 text-sm
            bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400
            dark:placeholder:text-slate-500 transition-colors focus:border-blue-500 focus:outline-none
            focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-slate-100 ${textareaClassName}`}
            {...props}
        />
    </div>
  )
}

export default TextArea