import React from 'react'
import { useAuthStore } from '../store/authStore'
import AdminDashboard from './dashboard/AdminDashboard'
import EmployeeDashboard from './dashboard/EmployeeDashboard';
import Unauthorized from './Unauthorized';

const dashboards = {
  admin: AdminDashboard,
  employee: EmployeeDashboard,
};

const Dashboard = () => {

  const role = useAuthStore((state)=> state.user?.role);

  const DashboardPage = dashboards[role];

  return DashboardPage ? (
    <DashboardPage />
  ) : (
    <Unauthorized />
  )
  
}

export default Dashboard