import React from 'react' 
import { useSidebarStore } from '../../store/sidebarStore';
import SidebarLogo from './SidebarLogo';
import SidebarLinks from './SidebarLinks';

const Sidebar = () => {

    const { isOpen, closeSidebar } = useSidebarStore();

  return (
    <>
        {isOpen && (
            <div 
                onClick={closeSidebar} 
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
        )}
        
        <aside 
            className={`fixed top-0 left-0 w-64 h-screen z-50 border-r border-slate-200 dark:border-slate-700
                bg-white dark:bg-slate-900 transition-transform duration-300 ease-in-out 
                lg:translate-x-0 flex flex-col
                ${isOpen
                    ? "translate-x-0"
                    : "-translate-x-full"

            }`}
        >

            <SidebarLogo/>

            <SidebarLinks/>

        </aside>
    </>
  )
}

export default Sidebar