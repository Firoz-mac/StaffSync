import React from 'react'
import AdminAttendance from './attendance/AdminAttendance';
import EmployeeAttendance from './attendance/EmployeeAttendance';
import { useAuthStore } from '../store/authStore';
import Unauthorized from './Unauthorized';
import AdminLeave from './leave/AdminLeave';
import EmployeeLeave from './leave/EmployeeLeave';

const leavePages = {
  admin:AdminLeave,
  employee:EmployeeLeave,
};

const Leave = () => {

  const role = useAuthStore((state)=> state.user?.role);

  const LeavePage = leavePages[role];

  return LeavePage ? (
    <LeavePage/>
  ):(
    <Unauthorized/>
  )
}

export default Leave