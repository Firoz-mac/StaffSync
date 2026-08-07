import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Avatar from '../components/Avatar';
import EmployeeBasicInfo from '../components/employeeDetails/employeeProfileHeader/EmployeeBasicInfo';
import EmployeeProfileHeader from '../components/employeeDetails/employeeProfileHeader/EmployeeProfileHeader';
import Tabs from '../components/tabs/Tabs';
import TabItem from '../components/tabs/TabItem';
import { employeeDetailsTabs } from '../constants/employeeDetailsTabs';
import Overview from '../components/employeeDetails/overview/Overview';
import EmployeeAttendance from '../components/employeeDetails/employeeAttendance/EmployeeAttendance';
import EmployeePayroll from '../components/employeeDetails/employeePayroll/EmployeePayroll';

const EmployeeDetails = () => {

  const { empId } = useParams();

  const tabItems = employeeDetailsTabs;

  const tabComponents = {
    Overview: Overview,
    Attendance: EmployeeAttendance,
    Payroll: EmployeePayroll,
  };

  const [pageValue, setPageValue] = useState('Overview');
  const handlePageChange = (value)=>{
    setPageValue(value);
  };

  const ActiveTab = tabComponents[pageValue];

  return (
    <div className='max-w-screen p-6 space-y-3'>

      <EmployeeProfileHeader/>

      <Tabs 
        value={pageValue}
        onChange={handlePageChange}
      >

        {
          tabItems.map((tab)=> (
            <TabItem
              key={tab.title} 
              value={tab.title}
            >
              {tab.title}
            </TabItem>
          ))
        }

      </Tabs>

      {
        ActiveTab && <ActiveTab/>
      }
      

    </div>
  )
}

export default EmployeeDetails