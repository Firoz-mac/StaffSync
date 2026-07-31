import React from 'react'
import { Search } from 'lucide-react';
import Input from './Input';

const SearchBar = ({
    type="text",
    placeholder="Search...",
    icon,
    value,
    className,
    inputClassName,
    onChange,
    ...props

}) => {
    return (
        <div 
            className={`relative ${className}`}
        >

            {
                icon && (

                    <div 
                        className='absolute left-3 top-1/2 -translate-y-1/2 
                        text-slate-400 dark:text-slate-500'
                    >
                        {icon}
                    </div>
                )
            }
            
            <Input 
                type={type}
                placeholder={placeholder}
                value={value}
                className={inputClassName}
                onChange={onChange}
                {...props}
            />

        </div>
    )
}

export default SearchBar