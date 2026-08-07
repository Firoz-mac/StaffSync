import React from 'react'
import EmployeeProfile from './EmployeeProfile'
import EmployeePosition from './EmployeePosition'
import { useNavigate } from 'react-router-dom'


const EmployeeCard = ({ employee }) => {

  const navigate = useNavigate();

  const {name, avatar, empId, position, department, email, phone, joinedDate,} = employee;
  
  return (
    <div 
      onClick={()=>navigate(`/employees/${empId}`)} 
      className='grid p-6 gap-6 lg:grid-cols-2 lg:items-center cursor-pointer'
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

    </div>
  )
}

export default EmployeeCard