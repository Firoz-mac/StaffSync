import React from 'react'
import Card from '../../../Card'
import BreakdownInfo from './BreakdownInfo'

const AnnualSalaryBreakdown = () => {

  const earnings = [
    {
      id:1,
      title:'Basic Salary',
      value:6500,
    },
    {
      id:2,
      title:'HRA',
      value:2100,
    },
    {
      id:3,
      title:'Special Allowence',
      value:1600,
    },
  ];

  const deductions = [
    {
      id:1,
      title:'Retirement Fund (PF)',
      value:517,
    },
  ];

  return (
    <Card className='p-6'>
        

      <div className='flex flex-col lg:flex-row justify-between'>
          <h5 className='text-xl font-semibold text-slate-900 dark:text-slate-100'>Annual Salary Breakdown</h5>

          <div className='flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800'>

            <div className='w-2 h-2 bg-blue-600 rounded-full'/>
            <span 
              className='text-sm font-medium text-slate-700 dark:text-slate-300'
            >
              ₹360000
            </span>

          </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5'>

        <BreakdownInfo 
          title="Monthly Earnings" 
          data={earnings}
        />

        <BreakdownInfo 
          title="Monthly Deductions"
          variant='deductions' 
          data={deductions}
        />

      </div>


    </Card>
  )
}

export default AnnualSalaryBreakdown