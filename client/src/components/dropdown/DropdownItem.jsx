import React from 'react'

const DropdownItem = ({
    icon,
    children,
    variant = 'default',
    className='',
    disabled=false,
    onClick,
    ...props
}) => {

    const baseClasses =
        `flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors duration-200 
        cursor-pointer outline-none focus:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50`

    const variants = {
        default: 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800',
        danger:'text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/30'
    }

  return (
    <button 
        type='button' 
        disabled={disabled} 
        onClick={onClick}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        {...props}
    >
        {
            icon && (
                <span className="flex h-4 w-4 items-center justify-center shrink-0">
                    {icon}
                </span>
            )
        }

        <span className="truncate">
            {children}
        </span>
        
    </button>
  )
}

export default DropdownItem