import React from 'react'
import Header from '../components/roleManagement/Header'
import RoleCard from '../components/roleManagement/RoleCard'

const RoleManagement = () => {
  return (
    <div className='p-6'>
        
        <Header/>

        <div className='mt-6 space-y-2'>
            <RoleCard/>
        </div>

    </div>
  )
}

export default RoleManagement