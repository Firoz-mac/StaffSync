import React from 'react'

const Input = ({
    type="text",
    ref,
    placeholder="",
    value,
    onChange,
    className="",
    ...props
}) => {
    return (
        <input
            type={type}
            ref={ref}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full px-4 py-2 rounded-lg border border-slate-300 hover:border-slate-400 
                    dark:border-slate-700 dark:hover:border-slate-600 bg-white dark:bg-slate-900 
                    text-slate-900 dark:text-slate-100 placeholder:text-slate-400  
                    dark:placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500
                    transition-colors duration-200 
                    ${className}
                `}
            {...props}
        />
    )
}

export default Input