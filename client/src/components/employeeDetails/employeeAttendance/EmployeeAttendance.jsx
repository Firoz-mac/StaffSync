import React from 'react'
import StatCard from './StatCard'
import AttendanceLog from './attendanceLog/AttendanceLog'

const EmployeeAttendance = () => {
  return (
    <div className='space-y-4'>

      <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>

        <StatCard 
          title='Total days' 
          subtitle='Oct 2026'
        />
        <StatCard 
          title='Present' 
          subtitle='days' 
          titleColor='text-green-500'
        />
        <StatCard 
          title='Absent' 
          subtitle='days' 
          titleColor='text-red-500'
        />
        <StatCard 
          title='On leave' 
          subtitle='Approved' 
          titleColor='text-orange-500'
        />
        <StatCard 
          title='Late Arrival' 
          subtitle='-40 min'
        />

      </div>

      <AttendanceLog/>

    </div>
  )
}

export default EmployeeAttendance