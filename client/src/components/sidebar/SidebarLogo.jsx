import React from 'react'
import { X } from 'lucide-react';
import { useSidebarStore } from '../../store/sidebarStore';

const SidebarLogo = () => {

    const {closeSidebar} = useSidebarStore();
    
    return (
        <div className='flex items-center justify-between gap-3 px-8 py-4 border-b border-gray-200'>

            <div className='flex items-center gap-3'>
                <img
                    className="w-8 h-8"
                    src="/favicon.svg"
                    alt="StaffSync Logo"
                />
                <h1 className="text-xl font-bold text-slate-800 whitespace-nowrap">StaffSync</h1>
            </div>

            <button
                type='button'
                onClick={closeSidebar}
                className='block lg:hidden cursor-pointer'
                aria-label="Close sidebar"
            >
                <X className='text-gray-500 transition-colors hover:text-gray-800' />
            </button>


        </div>
    )
}

export default SidebarLogo