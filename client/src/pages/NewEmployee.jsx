import React, { useEffect, useState } from 'react'
import Header from '../components/newEmployee/Header'
import PersonalInformation from '../components/newEmployee/personalInformation/PersonalInformation'
import EmploymentInformation from '../components/newEmployee/EmploymentInformation'
import SalaryAndPayrollInformation from '../components/newEmployee/SalaryAndPayrollInformation'
import ActionButtons from '../components/newEmployee/ActionButtons'

const NewEmployee = () => {

  const [newEmpData, setNewEmpData]= useState({
    image:null,
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    dateOfBirth:'',
    gender:'',
    maritalStatus:'',
    department:'',
    designation:'',
    salary : {
      basicSalary:'',
      hra:'',
      specialAllowance:'',
      retirementFund:'',
    }
  });

  const [profilePreview, setProfilePreview] = useState('')

  const handleChange = (e)=>{
    const {name, value} = e.target;

    setNewEmpData((prev)=> ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e)=>{
    const file = e.target.files?.[0];

    if (!file) return;
    
    const previewUrl = URL.createObjectURL(file);

    setNewEmpData((prev)=> ({
      ...prev,
      image: file,
    }));

    setProfilePreview(previewUrl)
  };

  const handleSalaryChange = (e)=>{

    const {name, value} = e.target;

    setNewEmpData((prev)=>({
      ...prev,
      salary:{
        ...prev.salary,
        [name]: value,
      }
    }));
  };

  useEffect(()=>{
    return ()=> {
      if (profilePreview) {
        URL.revokeObjectURL(profilePreview);
      }
    }
  },[profilePreview]);

  return (
    <div className='p-6'>
        <Header/>

        <div className='mt-5 space-y-6'>

          <PersonalInformation
            formData={newEmpData} 
            onChange={handleChange}
            profilePreview={profilePreview}
            handleImageChange={handleImageChange}
          />

          <EmploymentInformation 
            formData={newEmpData} 
            onChange={handleChange}
          />

          <SalaryAndPayrollInformation 
            formData={newEmpData.salary} 
            onChange={handleSalaryChange}
          />
          
        </div>

        <ActionButtons/>
    </div>
  )
}

export default NewEmployee