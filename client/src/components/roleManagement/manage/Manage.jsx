import React from 'react'
import SearchAndAction from './SearchAndAction'
import ManageRow from './ManageRow'

const Manage = () => {
  return (
    <div className='p-6'>
      <SearchAndAction/>

      <div className='mt-6'>
        <ManageRow/>
        <ManageRow/>
        <ManageRow/>
        <ManageRow/>
        <ManageRow/>
        <ManageRow/>
        <ManageRow/>
        <ManageRow/>
        <ManageRow/>
        <ManageRow/>
        <ManageRow/>
      </div>

    </div>
  )
}

export default Manage