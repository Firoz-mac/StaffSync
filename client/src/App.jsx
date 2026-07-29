import { useEffect, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Departments from './pages/Departments'
import Attendance from './pages/Attendance'
import Leave from './pages/Leave'
import Payroll from './pages/Payroll'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'
import MainLayout from './layouts/MainLayout'
import AdminDashboard from './pages/dashboard/AdminDashboard'
import { useThemeStore } from './store/useThemeStore'

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

          <Route path='/dashboard' element={<AdminDashboard/>}/>
          <Route path='/employees' element={<Employees/>}/>
          <Route path='/departments' element={<Departments/>}/>
          <Route path='/attendance' element={<Attendance/>}/>
          <Route path='/leave' element={<Leave/>}/>
          <Route path='/payroll' element={<Payroll/>}/>
          <Route path='/reports' element={<Reports/>}/>
          <Route path='/settings' element={<Settings/>}/>
        
        </Route>

        <Route path='*' element={<NotFound/>}/>
        
      </Routes>
    </>
  )
}

export default App
