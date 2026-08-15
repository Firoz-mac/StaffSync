import React from 'react'

const FilterTabMenu = ({
    tabs,
    value,
    onChange,
}) => {
  return (
    <div className='flex w-full rounded-xl bg-blue-50 p-1 dark:bg-slate-800'>
        {
            tabs.map((tab)=>{
                const isActive = value === tab.value;

                return (
                    <button
                        key={tab.value} 
                        type="button"
                        onClick={()=>onChange(tab.value)}
                        className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer 
                            ${isActive
                                ? 'bg-white text-blue-700 shadow-sm dark:bg-slate-900 dark:text-blue-400'
                                : 'text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400'
                            }
                        `}
                    >
                        {tab.label}
                    </button>
                )
            })
        }
        
    </div>
  )
}

export default FilterTabMenu