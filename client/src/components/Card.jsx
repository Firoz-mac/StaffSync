import React from 'react'

const Card = ({
    children,
    className = "",
    withDefaultBackground = true,
    withDefaultBorder = true,
    ...props
}) => {
  return (
    <div 
        className={`rounded-xl shadow-sm ${className}   
        ${withDefaultBackground ? "bg-white dark:bg-slate-900" : ""}
        ${withDefaultBorder ? "border border-slate-200 dark:border-slate-700" : ""}`}
        {...props}
    >
        {children}
    </div>
  )
}

export default Card