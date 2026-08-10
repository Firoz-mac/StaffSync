import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import DepartmentHeader from '../components/departmentDetails/DepartmentHeader';
import Tabs from '../components/tabs/Tabs';
import { departmentDetailsTabs } from '../constants/departmentDetailsTabs';
import TabItem from '../components/tabs/TabItem';
import Overview from '../components/departmentDetails/overview/Overview';
import DepartmentEmployees from '../components/departmentDetails/DepartmentEmployees';


const DepartmentDetails = () => {

    const { department } = useParams();

    const tabItems = departmentDetailsTabs;
    
    const tabComponents = {
      Overview : Overview,
      "Employees List" : DepartmentEmployees,
    };

    const [pageValue, setPageValue]=useState('Overview');
    const handlePageChange = (value)=>{
      setPageValue(value);
    };

    const ActiveTab = tabComponents[pageValue];

  return (
    <div className='p-6 space-y-4'>
      <DepartmentHeader/>

      <Tabs 
        value={pageValue}
        onChange={handlePageChange}
      >

        {
          tabItems.map((tab)=>(
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

export default DepartmentDetails