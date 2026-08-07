import React from 'react'
import LastPaySlipSummary from './lastPaySlipSummary/LastPaySlipSummary'
import AnnualSalaryBreakdown from './annualSalaryBreakdown/AnnualSalaryBreakdown'
import PaymentHistory from './paymentHistory/PaymentHistory'

const EmployeePayroll = () => {
  return (
    <div className='grid grid-cols-1 gap-5'>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <LastPaySlipSummary/>
        <AnnualSalaryBreakdown/>
      </div>

      <PaymentHistory/>
    </div>
  )
}

export default EmployeePayroll