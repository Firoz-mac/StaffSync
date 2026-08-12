import React from 'react'
import Card from '../../Card'
import ProgressBar from '../../ProgressBar'

const DepartmentAttendance = () => {

    const departmentAttenance = [
        {
            id:1,
            department:'Engineering',
            attendancePercentange:60,
            color: "#1D4ED8",
        },
        {
            id:2,
            department:'Design',
            attendancePercentange:40,
            color: "#B45309",
        },
        {
            id:3,
            department:'sales',
            attendancePercentange:90,
            color: "#59637F",
        },
        {
            id:4,
            department:'Support',
            attendancePercentange:92,
            color: "#C7DBFF",
        },
    ]

  return (
    <Card className='p-6 space-y-4'>
        {
            departmentAttenance.map(({department, attendancePercentange, color})=>(
                <ProgressBar
                    key={department} 
                    type={department} 
                    percentage={attendancePercentange}
                    barColor={color}
                />
            ))
        }
    </Card>
  )
}

export default DepartmentAttendance