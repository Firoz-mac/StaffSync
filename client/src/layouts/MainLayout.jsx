import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex'>
        <Sidebar/>

        <div className='min-h-screen flex-1 lg:ml-64'>

          <Navbar/>

          <main>
            <Outlet/>
          </main>
            
        </div>
    </div>
  )
}

export default MainLayout