import React from 'react'
import { 
    CalendarCheck, 
    ClipboardClock, 
    UserRoundX,
    ClockPlus,
} from 'lucide-react';
import AttendanceSummarySection from '../../components/attendance/AttendanceSummarySection';
import Select from '../../components/Select';
import MonthSelector from '../../components/MonthSelector';
import AttendanceLog from '../../components/employeeDetails/employeeAttendance/attendanceLog/AttendanceLog';

const EmployeeAttendance = () => {

    const attendanceData = [
        {
            id: 1,
            title: "Total Present",
            value: 1185,
            icon: CalendarCheck,
            iconVariant: "success",
            tag: "Month",
        },
        {
            id: 2,
            title: "Total Leave",
            value: 60,
            icon: UserRoundX,
            iconVariant: "danger",
            tag: "Month",
        },
        {
            id: 3,
            title: "Late Arrivals",
            value: 12,
            icon: ClipboardClock,
            iconVariant: "amber",
            tag: "2hr",
        },
        {
            id: 4,
            title: "Over Time",
            value: 12,
            icon: ClockPlus,
            iconVariant: "success",
            tag: "2hr 31min",
        },
    ];

  return (
    <div className='p-6 space-y-4'>
        <MonthSelector/>
        <AttendanceSummarySection data={attendanceData}/>
        <AttendanceLog/>
    </div>
  )
}

export default EmployeeAttendance