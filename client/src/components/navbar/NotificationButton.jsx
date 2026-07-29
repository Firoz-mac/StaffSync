import React from 'react'
import { Bell } from 'lucide-react';

const NotificationButton = () => {
    return (
        <button
            type='button'
            className="relative p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 
            transition cursor-pointer"
            aria-label="View notifications"
        >

            <Bell 
                size={18} 
                className='text-slate-700 dark:text-slate-200'
            />
            
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500"></span>

        </button>
    )
}

export default NotificationButton