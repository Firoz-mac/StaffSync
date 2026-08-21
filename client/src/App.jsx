import { useEffect, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Departments from './pages/Departments'
import Attendance from './pages/Attendance'
import Leave from './pages/Leave'
import Payroll from './pages/Payroll'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'
import MainLayout from './layouts/MainLayout'
import { useThemeStore } from './store/useThemeStore'
import EmployeeDetails from './pages/EmployeeDetails'
import DepartmentDetails from './pages/DepartmentDetails'
import LeaveRequest from './pages/LeaveRequest'
import LeaveDetails from './components/leave/leaveDetails/LeaveDetails'
import RoleManagement from './pages/RoleManagement'
import Manage from './components/roleManagement/manage/Manage'

function App() {

  const theme = useThemeStore((state) => state.theme);

  useEffect(()=> {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      <Routes>

        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route element={<MainLayout/>}>

          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/employees' element={<Employees/>}/>
          <Route path='/employees/:empId' element={<EmployeeDetails/>}/>
          <Route path='/departments' element={<Departments/>}/>
          <Route path='/departments/:department' element={<DepartmentDetails/>}/>
          <Route path='/attendance' element={<Attendance/>}/>
          <Route path='/leave' element={<Leave/>}/>
          <Route path='/leave/leaveDetails/:empId' element={<LeaveDetails/>}/>
          <Route path='/leave/newRequest/:empId' element={<LeaveRequest/>}/>
          <Route path='/payroll' element={<Payroll/>}/>
          <Route path='/roles' element={<RoleManagement/>}/>
          <Route path='/roles/manage/:role' element={<Manage/>}/>
          <Route path='/settings' element={<Settings/>}/>
        
        </Route>

        <Route path='*' element={<NotFound/>}/>
        
      </Routes>
    </>
  )
}

export default App
