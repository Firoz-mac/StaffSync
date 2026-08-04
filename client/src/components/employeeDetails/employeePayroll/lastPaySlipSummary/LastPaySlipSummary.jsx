import React from 'react'
import Card from '../../../Card'
import PayrollStat from './PayrollStat'

const LastPaySlipSummary = () => {
  return (
    <Card className='p-6'>

        <div>

            <div className='flex items-start justify-between'>

                <p 
                    className='text-xs font-semibold uppercase tracking-widest text-slate-400'
                >
                    Last Payslip Summary
                </p>
                <span 
                    className='rounded-full text-sm px-4 py-1 bg-green-100 text-green-700 
                    dark:bg-green-900/30 dark:text-green-400'
                >
                    Paid
                </span>

            </div>

            <h3 
                className='mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100'
            >
                October 2023
            </h3>

        </div>

        <h3 
            className='text-4xl font-semibold leading-none mt-5'
        >
            ₹0
        </h3>

        <hr className="my-10 border-dashed border-slate-200 dark:border-slate-700" />

        <div className='flex justify-between'>

            <PayrollStat 
                label='Gross Salary'
            />

            <PayrollStat 
                label='Total Deductions' 
                variant='danger'
            />

        </div>

    </Card>
  )
}

export default LastPaySlipSummary