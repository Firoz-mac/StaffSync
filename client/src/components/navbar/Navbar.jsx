import React from 'react'
import { Menu } from 'lucide-react';
import { useSidebarStore } from '../../store/sidebarStore';
import NotificationButton from './NotificationButton';
import { useCurrentPage } from '../../hooks/useCurrentPage';

const Navbar = () => {

  const { openSidebar } = useSidebarStore();
  const {title} = useCurrentPage();

  return (
    <nav 
      className='flex w-full h-16 justify-between 
      border-b border-slate-200 dark:border-slate-700 px-6'
    >

      <div className='flex items-center gap-4'>

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

      </div>

      <div className='flex items-center'>
        
        <NotificationButton/>
        
      </div>

    </nav>
  )
}

export default Navbar