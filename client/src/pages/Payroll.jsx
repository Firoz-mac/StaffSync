import React from 'react'
import AdminPayroll from './payroll/AdminPayroll'
import EmployeePayroll from './payroll/EmployeePayroll'
import { useAuthStore } from '../store/authStore';
import Unauthorized from './Unauthorized';


const payrollPages = {
  admin: AdminPayroll,
  employee: EmployeePayroll
};

const Payroll = () => {

  const role = useAuthStore((state)=>state.user?.role);

  const PayrollPage = payrollPages[role];

  return PayrollPage ? (
    <PayrollPage/>
  ):(
    <Unauthorized/>
  )
}

export default Payroll