import React, { useState } from 'react'
import Card from '../../Card'
import PayrollHistoryRow from './PayrollHistoryRow'
import Pagination from '../../pagination/Pagination'

const PayrollHistory = () => {

    const  payrollData = [
        {
            id:1,
            date:'30-01-26',
            status:'paid',
            netSalary:51500,
        },
        {
            id:2,
            date:'30-02-26',
            status:'paid',
            netSalary:51500,
        },
        {
            id:3,
            date:'30-03-26',
            status:'paid',
            netSalary:51500,
        },
        {
            id:4,
            date:'30-04-26',
            status:'paid',
            netSalary:51500,
        },
        {
            id:5,
            date:'30-05-26',
            status:'pending',
            netSalary:50500,
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);

    const pageSize=5;

    const totalItems= payrollData.length;

    const totalPages = Math.ceil(totalItems/pageSize);

    const resourceName='payrolls';
    

  return (
    <Card className=''>

        <div className='border-b border-slate-200 dark:border-slate-700 p-6'>
            <h4 className='text-base font-semibold text-slate-900 dark:text-slate-100'>Payroll History</h4>
        </div>

        <div className='divide-y divide-slate-200 dark:divide-slate-700'>

            {
                payrollData.map((payroll)=>(
                    <PayrollHistoryRow
                        key={payroll.id} 
                        {...payroll}
                    />
                ))
            }
            
        </div>

        {
            totalPages > 1 && (
                <Pagination 
                    currentPage={currentPage}
                    pageSize={pageSize}
                    totalItems={totalItems}
                    resourceName={resourceName}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )
        }

    </Card>
  )
}

export default PayrollHistory