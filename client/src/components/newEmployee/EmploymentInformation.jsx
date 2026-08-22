import React from 'react'
import Card from '../Card'
import CardHeader from './CardHeader'
import { IdCardLanyard } from 'lucide-react';
import Select from '../Select';
import Input from '../Input';

const EmploymentInformation = ({
    formData,
    onChange,
}) => {

    const departments = [
        { value: "Engineering", label: "Engineering" },
        { value: "Human Resources", label: "Human Resources" },
        { value: "Finance", label: "Finance" },
    ];

  return (
    <Card className='p-6'>
        <CardHeader
            title='Employment Information'
            subTitle='Job related information and role details'
            icon={IdCardLanyard}
        />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6'>
            <Select 
                label='Department'
                name='department'
                value={formData.department} 
                options={departments}
                placeholder='Select department'
                onChange={onChange}
            />

            <Input 
                label='Designation'
                name='designation'
                value={formData.designation}  
                placeholder='Enter designation'
                onChange={onChange}
            />
        </div>
    </Card>
  )
}

export default EmploymentInformation