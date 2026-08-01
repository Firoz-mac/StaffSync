import React from 'react'
import EmployeeProfile from './EmployeeProfile'
import EmployeePosition from './EmployeePosition'
import EmployeeContact from './EmployeeContact/EmployeeContact'


const EmployeeCard = ({ employee }) => {

  const {name, avatar, empId, position, department, email, phone, joinedDate,} = employee;
  
  return (
    <div className='grid p-6 gap-6 lg:grid-cols-[2fr_2fr_1fr_auto_auto] lg:items-center'>

      <EmployeeProfile 
        name={name} 
        avatar={avatar} 
        empId={empId}
      />

      <EmployeePosition 
        position={position} 
        department={department}
      />

      <div className='hidden lg:flex'>
        <EmployeeContact 
          email={email} 
          phone={phone} 
          joinedDate={joinedDate}
        />
      </div>

    </div>
  )
}

export default EmployeeCard