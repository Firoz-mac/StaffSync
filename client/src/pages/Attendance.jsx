import React from 'react'
import AdminAttendance from './attendance/AdminAttendance'
import EmployeeAttendance from './attendance/EmployeeAttendance'
import { useAuthStore } from '../store/authStore';
import Unauthorized from './Unauthorized';

const attendancePages = {
  admin: AdminAttendance,
  employee: EmployeeAttendance,
};

const Attendance = () => {

  const role = useAuthStore((state)=> state.user?.role);

  const AttendancePage = attendancePages[role];

  return AttendancePage ? (
    <AttendancePage/>
  ) : (
    <Unauthorized/>
  )
}

export default Attendance