import React from 'react'
import { Bell } from 'lucide-react';

const NotificationButton = () => {
    return (
        <button
            type='button'
            className="relative p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
            aria-label="View notifications"
        >

            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500"></span>

        </button>
    )
}

export default NotificationButton