import React from 'react'
import { NavLink } from "react-router-dom";
import { sidebarLinks } from '../../constants/sidebarLinks';
import { useSidebarStore } from '../../store/sidebarStore';
import UserAccount from './UserAccount';

const SidebarLinks = () => {

    const { closeSidebar } = useSidebarStore();

    const handleNavLinkClick = () =>{
        closeSidebar();
    };

    return (
        <nav className='flex-1 flex flex-col justify-between p-4'>

            <div className='space-y-2'>

                {sidebarLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                        <NavLink
                            to={link.path}
                            key={link.path}
                            onClick={handleNavLinkClick}
                            className={({ isActive }) =>
                                `flex w-full items-center gap-3 px-4 py-3 rounded-lg transition-colors 
                                ${isActive
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                }`
                            }
                        >
                            <Icon size={20} />
                            <span>{link.title}</span>
                        </NavLink>
                    )
                })}

            </div>

            <UserAccount />

        </nav>
    )
}

export default SidebarLinks