import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react';

const Select = ({
    options = [],
    value = "",
    onChange,
    placeholder = '',
    className = "",
    ...props
}) => {

    const [isFocused, setIsFocused] = useState(false);

  return (
    <div className='relative'>

        <select 
            value={value} 
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full bg-white dark:bg-slate-900 px-4 py-2 pr-10 rounded-lg 
                border border-slate-300 dark:border-slate-700 hover:border-slate-400 
                dark:hover:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none
                focus:ring-1 focus:ring-blue-500 transition-colors duration-200 appearance-none cursor-pointer
                ${className}
            `}
            {...props}
        >
            {
                placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )
            }
            
            {
                options.map((option)=>(
                    <option 
                        key={option.value} 
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))
            }
        </select>

        <ChevronDown 
            size={18} 
            className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 
                text-slate-500 ${isFocused ? 'rotate-270' : null} transition-transform duration-200 ease-in-out`
            }
        />

    </div>
  )
}

export default Select