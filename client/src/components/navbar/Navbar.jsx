import React from 'react'
import { Menu } from 'lucide-react';
import { useSidebarStore } from '../../store/sidebarStore';
import NotificationButton from './NotificationButton';
import { useCurrentPage } from '../../hooks/useCurrentPage';

const Navbar = () => {

  const { openSidebar } = useSidebarStore();
  const {title} = useCurrentPage();

  return (
    <nav className='flex w-full items-center h-16 gap-4 border-b border-slate-200 dark:border-slate-700 px-6'>

      <button 
        type='button'
        onClick={openSidebar} 
        className='lg:hidden cursor-pointer'
        aria-label="Open sidebar"
      >
        <Menu size={22}/>
      </button>

      <h1 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
        {title}
      </h1>

    </nav>
  )
}

export default Navbar