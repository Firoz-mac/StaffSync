import React from 'react'
import TotalDepartments from '../components/department/TotalDepartments'
import DepartmentHeader from '../components/department/DepartmentHeader'
import DepartmentContent from '../components/department/DepartmentContent'

const Departments = () => {
  return (
    <div className='p-6 space-y-4'>
      <TotalDepartments/>
      <DepartmentHeader/>

      <DepartmentContent/>
    </div>
  )
}

export default Departments