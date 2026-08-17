import React from 'react'
import LeaveDetailsHeader from './LeaveDetailsHeader'
import LeaveTypeAndDuration from './LeaveTypeAndDuration'
import Reason from './Reason'
import Attachment from './Attachment'
import Button from '../../Button'
import ActionButtons from './ActionButtons'
import LeaveBalances from './leaveBalances/LeaveBalances'
import Card from '../../Card'

const LeaveDetails = () => {
  return (
    <div className='p-6'>

      <Card className='grid grid-cols-1 lg:grid-cols-2'>

        <div className='space-y-4'>

          <LeaveDetailsHeader/>

          <LeaveTypeAndDuration/>

          <Reason/>

          <Attachment/>

          
          <ActionButtons/>


        </div>

        <LeaveBalances/>

      </Card>

    </div>
  )
}

export default LeaveDetails