import React from 'react'
import CardHeader from '../CardHeader'
import Card from '../../Card'
import { User } from 'lucide-react';
import Input from '../../Input';
import Select from '../../Select';
import ProfileImage from './ProfileImage';

const PersonalInformation = ({
  formData,
  onChange,
  profilePreview,
  handleImageChange,
}) => {

  const gender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const maritalStatus = [
    { value: "single", label: "Single" },
    { value: "married", label: "Married" },
  ];

  return (
    <Card className='p-6'>

      <CardHeader
        title='Personal Information'
        subTitle='Basic details about the employee'
        icon={User}
      />

      <div className='grid grid-cols-1 lg:grid-cols-2 mt-6'>

        <div className='flex items-center justify-center p-6'>

          <ProfileImage
            image={profilePreview} 
            onChange={handleImageChange}
          />

        </div>

        <div className='space-y-3'>

          <Input 
            label='First Name'
            name='firstName'
            value={formData.firstName} 
            placeholder='Enter first name'
            onChange={onChange}
          />

          <Input 
            label='Last Name'
            name='lastName'
            value={formData.lastName} 
            placeholder='Enter last name'
            onChange={onChange}
          />

          <Input
            type='email' 
            label='Email'
            name='email'
            value={formData.email}  
            placeholder='Enter email'
            onChange={onChange}
          />

          <Input 
            label='Phone'
            name='phone'
            value={formData.phone} 
            placeholder='Enter phone number'
            onChange={onChange}
          />

          <Input
            type='date' 
            label='Date of Birth'
            name='dateOfBirth'
            value={formData.dateOfBirth} 
            placeholder='Enter email'
            onChange={onChange}
          />

          <div className='grid grid-cols-2 gap-3'>

            <Select
              label='Gender'
              name='gender'
              options={gender}
              value={formData.gender} 
              placeholder='Select Gender'
              onChange={onChange}
            />

            <Select
              label='Marital Status'
              name='maritalStatus'
              value={formData.maritalStatus} 
              options={maritalStatus} 
              placeholder='Select Status'
              onChange={onChange}
            />

          </div>

        </div>

      </div>

    </Card>
  )
}

export default PersonalInformation