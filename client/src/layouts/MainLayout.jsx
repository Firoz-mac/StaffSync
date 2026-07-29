import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex'>
        <Sidebar/>

        <div 
          className='min-h-screen bg-slate-50 
          text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex-1 lg:ml-64'
        >

          <Navbar/>

          <main>
            <Outlet/>
          </main>
            
        </div>
    </div>
  )
}

export default MainLayout