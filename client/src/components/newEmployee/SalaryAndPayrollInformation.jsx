import React from 'react'
import Card from '../Card'
import CardHeader from './CardHeader'
import { HandCoins } from 'lucide-react';
import Input from '../Input';

const SalaryAndPayrollInformation = ({
    formData,
    onChange,
    errors,
}) => {
  return (
    <Card className='p-6'>
        <CardHeader 
            title='Salary & Payroll'
            subTitle='Salary information'
            icon={HandCoins}
        />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6'>

            <Input 
                label='Basic Salary'
                name='basicSalary'
                id='basicSalary'
                value={formData.basicSalary}
                placeholder='Enter basic salary'
                onChange={onChange}
                error={errors.basicSalary}
            />
            <Input 
                label='HRA'
                name='hra'
                value={formData.hra} 
                placeholder='Enter HRA'
                onChange={onChange}
            />

            <Input 
                label='Special Allowance'
                name='specialAllowance'
                value={formData.specialAllowance}  
                placeholder='Enter special allowence'
                onChange={onChange}
            />

            <Input 
                label='Retirement Fund'
                name='retirementFund'
                value={formData.retirementFund} 
                placeholder='Enter retirement fund'
                onChange={onChange}
            />

        </div>
    </Card>
  )
}

export default SalaryAndPayrollInformation