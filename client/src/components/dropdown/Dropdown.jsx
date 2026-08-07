import React, { useState } from 'react'

const Dropdown = ({
    trigger,
    children,
    className='',
}) => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative inline-block ${className}`}>

        <div 
            onClick={()=> setIsOpen((prev)=> !prev)}
        >
            {trigger}
        </div>

        {
            isOpen && (
                <div 
                className={`absolute right-0 mt-2 min-w-48 rounded-xl border border-slate-200 
                bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900`}
            >
                {children}
            </div>
            )
        }

        
    </div>
  )
}

export default Dropdown