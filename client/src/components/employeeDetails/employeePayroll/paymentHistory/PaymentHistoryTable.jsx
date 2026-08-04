import React from 'react'
import HistoryRow from './HistoryRow'

const PaymentHistoryTable = () => {
  return (
    <div className='overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700'>
        <table className='min-w-full divide-y divide-slate-200 dark:divide-slate-700'>
            <thead className='bg-slate-50 dark:bg-slate-800'>
                <tr>
                    <th className='px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500'>
                        Date
                    </th>

                    <th className='px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500'>
                        Gross Salary
                    </th>

                    <th className='px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500'>
                        Net Paid
                    </th>
                </tr>
            </thead>

            <tbody className='divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-900'>
                <HistoryRow/>
            </tbody>

        </table>
    </div>
  )
}

export default PaymentHistoryTable