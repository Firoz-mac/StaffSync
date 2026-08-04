import React from 'react'

const HistoryRow = () => {
  return (
    <tr className='hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors'>

        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
            04-08-2026
        </td>
        
        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
            ₹30000
        </td>

        <td className='px-6 py-4 text-sm text-slate-600 dark:text-slate-300'>
            ₹26000
        </td>

    </tr>
  )
}

export default HistoryRow