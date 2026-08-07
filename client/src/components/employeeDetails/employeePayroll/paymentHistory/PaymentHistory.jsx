import React from 'react'
import Card from '../../../Card'
import Select from '../../../Select'
import PaymentHistoryTable from './PaymentHistoryTable';

const PaymentHistory = () => {

    const years = [
        { value: "2023-24", label: "2023-24" },
        { value: "2024-25", label: "2024-25" },
        { value: "2025-26", label: "2025-26" },
    ];

    const departments = [
        { value: "Engineering", label: "Engineering" },
        { value: "Human Resources", label: "Human Resources" },
        { value: "Finance", label: "Finance" },
    ];

  return (
    <Card>

        <div className='p-6 flex items-center justify-between'>
            <h5 className='text-xl font-semibold text-slate-900 dark:text-slate-100'>PaymentHistory</h5>

            <Select
                options={years} 
                placeholder={years[0].label}
            />
        </div>

        <PaymentHistoryTable/>

    </Card>
  )
}

export default PaymentHistory