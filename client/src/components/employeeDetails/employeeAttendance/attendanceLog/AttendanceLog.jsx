import React from 'react'
import Card from '../../../Card'
import Attendance from './Attendance'

const AttendanceLog = () => {

  const attendanceData = [
    {
      id:1,
      date:"03-08-2026",
      checkIn:"10:00 AM",
      checkOut:"5:00 PM",
      duration:"7hr",
      status:"On Time"
    },
    {
      id:2,
      date:"04-08-2026",
      checkIn:"10:30 AM",
      checkOut:"5:00 PM",
      duration:"6hr 30m",
      status:"Late"
    },
    {
      id:3,
      date:"05-08-2026",
      checkIn:"10:00 AM",
      checkOut:"5:30 PM",
      duration:"7hr 30m",
      status:"Over Time"
    },
    {
      id:4,
      date:"06-08-2026",
      leaveType:"Sick Leave",
      description:"Approved by HR",
      status:"Leave"
    },
    {
      id:5,
      date:"07-08-2026",
      checkIn:"10:00 AM",
      checkOut:"5:00 PM",
      duration:"7hr",
      status:"On Time"
    },
  ]
  return (
    <Card className=''>

      <div className='p-6 flex justify-between'>

        <h5 className='text-md font-medium text-slate-900 dark:text-slate-100'>Attendance History</h5>

        <button 
          type='button' 
          className="text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer"
        >
          View More
        </button>

      </div>
      
      <div className='space-y-3 divide-y divide-slate-200'>
        
        {
          attendanceData.map((log)=>(
            <Attendance 
              key={log.id}
              {...log}
            />
          ))
        }
        
      </div>

    </Card>
  )
}

export default AttendanceLog