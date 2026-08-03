import React from 'react'
import EmployeeProfile from './EmployeeProfile'
import EmployeePosition from './EmployeePosition'
import EmployeeContact from './EmployeeContact/EmployeeContact'
import { useNavigate } from 'react-router-dom'


const EmployeeCard = ({ employee }) => {

  const navigate = useNavigate();

  const {name, avatar, empId, position, department, email, phone, joinedDate,} = employee;
  
  return (
    <div 
      onClick={()=>navigate(`/employees/${empId}`)} 
      className='grid p-6 gap-6 lg:grid-cols-[2fr_2fr_1fr_auto_auto] lg:items-center cursor-pointer'
    >

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