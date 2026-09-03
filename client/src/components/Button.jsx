import React, { useEffect } from 'react'

const Button = ({ 
    children, 
    variant = "primary",
    type = "button",
    onClick,
    disabled = false, 
    className = "", 
    ...props
}) => {

    const baseClasses = 
        "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-violet-300 dark:focus:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer";
    
    const btnVariants ={
        primary: "bg-violet-600 text-white hover:bg-violet-700",
        secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",
        outline: "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800",
        danger: "bg-red-600 text-white hover:bg-red-700",
        success: "bg-emerald-600 text-white hover:bg-emerald-700",
        white: "bg-slate-100 hover:bg-slate-200 text-blue-600 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-100",
        ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
    }

  return (

    <button 
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`
            ${baseClasses} 
            ${btnVariants[variant] || btnVariants.primary} 
            ${className}
        `}
        {...props}
    >

        {children}

    </button>
  )

}

export default Button