import React from 'react'

const TabItem = ({
    value,
    icon,
    children,
    active = false,
    onSelect,
    className = "",
    disabled = false,
    ...props
}) => {

    const baseClasses = 
        `inline-flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors 
        duration-200 whitespace-nowrap outline-none shrink-0`

    const activeClasses =
        `border-blue-600 text-blue-600`

    const inactiveClasses =
        `border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300 
        dark:text-slate-400 dark:hover:text-slate-100 dark:hover:border-slate-600`

  return (
    <button
        type="button"
        disabled={disabled}
        onClick={onSelect}
        className={`${baseClasses} ${active ? activeClasses : inactiveClasses}  
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}  ${className}`}
        {...props}
    >
        {
            icon && (
                <span className='flex h-4 w-4 items-center justify-center shrink-0'>
                    {icon}
                </span>
            )
        }
        <span>{children}</span>
    </button>
  )
}

export default TabItem