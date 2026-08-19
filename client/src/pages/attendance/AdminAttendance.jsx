import React from 'react'
import { 
    CalendarCheck, 
    ClipboardClock, 
    UserRoundX,
} from 'lucide-react';
import AttendanceSummarySection from '../../components/attendance/AttendanceSummarySection'
import AttendanceTrendChart from '../../components/attendance/admin/AttendanceTrendChart'
import DepartmentAttendance from '../../components/attendance/admin/DepartmentAttendance'

const AdminAttendance = () => {

    const attendanceData = [
        {
            id: 1,
            title: "Present Today",
            value: 1185,
            icon: CalendarCheck,
            iconVariant: "success",
            tag: "Daily",
        },
        {
            id: 2,
            title: "Absent Today",
            value: 60,
            icon: UserRoundX,
            iconVariant: "danger",
            tag: "Daily",
        },
        {
            id: 3,
            title: "Late Arrivals",
            value: 12,
            icon: ClipboardClock,
            iconVariant: "amber",
        },
    ];

  return (
    <div className='p-6 space-y-4'>
        
        <AttendanceSummarySection 
            data={attendanceData}
        />
        <AttendanceTrendChart/>
        <DepartmentAttendance/>
    </div>
  )
}

export default AdminAttendance