import React from 'react'

const Input = ({
    label,
    type='text',
    error,
    helperText,
    leftIcon,
    rightIcon,
    className = '',
    inputClassName = '',
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

        <div className='relative'>
            {
                leftIcon && (
                    <span className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400'>
                        {leftIcon}
                    </span>
                )
            }
            
            <input 
                type={type} 
                className={`w-full rounded-lg border  px-4 py-2.5 text-sm 
                text-slate-900 placeholder:text-slate-400 transition-colors focus:border-blue-500
                focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-slate-100
                dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500
                ${leftIcon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''}
                ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-300'} ${inputClassName}`}

                {...props}
                
            />

            {
                rightIcon && (
                    <span className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-400'>
                        {rightIcon}
                    </span>
                )
            }
        </div>

        {
            error ? (
                <p className='mt-1 text-sm text-red-500'>
                    {error}
                </p>
            ) : (
                helperText && (
                    <p className='mt-1 text-sm text-slate-500 dark:text-slate-400'>
                        {helperText}
                    </p>
                )
            ) 
        }
    </div>
  )
}

export default Input