import React from 'react'

const Button = ({ 
    children, 
    variant = "primary",
    type = "button",
    disabled = false, 
    className = "", 
    ...props
}) => {

    const baseClasses = 
        "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-violet-300 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer";
    
    const btnVariants ={
        primary: "bg-violet-600 text-white hover:bg-violet-700",
        secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
        outline: "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100",
        danger: "bg-red-600 text-white hover:bg-red-700",
        success: "bg-emerald-600 text-white hover:bg-emerald-700",
    }

  return (

    <button 
        type={type}
        disabled={disabled}
        className={`${baseClasses} ${btnVariants[variant] || btnVariants.primary} ${className}`}
        {...props}
    >

        {children}

    </button>
  )

}

export default Button