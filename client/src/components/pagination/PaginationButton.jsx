import React from 'react'

const PaginationButton = ({
    className="",
    disabled=false,
    children,
    onClick,
    ...props
}) => {
  return (
    <button 
        type='button'
        disabled={disabled}
        aria-disabled={disabled}
        onClick={onClick}
        className={`h-6 w-6 lg:h-9 lg:w-9 rounded-lg text-sm transition-colors disabled:cursor-not-allowed 
            inline-flex items-center justify-center focus:outline-none focus:ring-2 cursor-pointer
            focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 
            ${className}
        `}
        {...props}
    >
        {children}
    </button>
  )
}

export default PaginationButton