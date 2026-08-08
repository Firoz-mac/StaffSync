import React from 'react'
import DepartmentCard from './DepartmentCard/DepartmentCard'

const DepartmentContent = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <DepartmentCard/>
        <DepartmentCard/>
        <DepartmentCard/>
        <DepartmentCard/>
        <DepartmentCard/>
        <DepartmentCard/>
    </div>
  )
}

export default DepartmentContent