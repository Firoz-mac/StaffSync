import React from 'react'
import { X } from 'lucide-react';
import { useSidebarStore } from '../../store/sidebarStore';

const SidebarLogo = () => {

    const {closeSidebar} = useSidebarStore();
    
    return (
        <div 
            className='flex items-center justify-between gap-3 px-8 py-4 
            border-b border-slate-200 dark:border-slate-700'
        >

            <div className='flex items-center gap-3'>
                <img
                    className="w-8 h-8"
                    src="/favicon.svg"
                    alt="StaffSync"
                />
                <h1 
                    className="text-xl font-bold text-slate-800 dark:text-slate-100 whitespace-nowrap"
                >
                    StaffSync
                </h1>
            </div>

            <button
                type='button'
                onClick={closeSidebar}
                className='block lg:hidden cursor-pointer
                hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md p-1'
                aria-label="Close sidebar"
            >

                <X 
                    className='text-slate-500 dark:text-slate-400 transition-colors 
                    hover:text-slate-800 dark:hover:text-slate-100' 
                />

            </button>


        </div>
    )
}

export default SidebarLogo