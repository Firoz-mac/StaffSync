import React, { useEffect, useState } from 'react'
import Header from '../components/newEmployee/Header'
import PersonalInformation from '../components/newEmployee/personalInformation/PersonalInformation'
import EmploymentInformation from '../components/newEmployee/EmploymentInformation'
import SalaryAndPayrollInformation from '../components/newEmployee/SalaryAndPayrollInformation'
import ActionButtons from '../components/newEmployee/ActionButtons'
import useEmployee from '../hooks/useEmployee'
import { toast } from 'sonner'

const fieldOrder = [
  'firstName',
  'lastName',
  'email',
  'phone',
  'dateOfBirth',
  'gender',
  'maritalStatus',
  'department',
  'designation',
  'basicSalary',
];

const NewEmployee = () => {

  const {addEmployee, loading} = useEmployee();
  const [formError, setFormError] = useState({});
  const [shouldFocusError, setShouldFocusError] = useState(false)

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

    setFormError((prev) => {
      const updatedErrors = {...prev}

      if (value.trim()) {
        delete updatedErrors[name]
      }

      return updatedErrors;
    })

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

    setFormError((prev) => {
      const updatedErrors = { ...prev }

      if (value.trim()) {
        delete updatedErrors[name]
      }

      return updatedErrors;

    })
  };

  useEffect(()=>{
    return ()=> {
      if (profilePreview) {
        URL.revokeObjectURL(profilePreview);
      }
    }
  },[profilePreview]);


  const validateForm = () =>{
    const newErrors = {}

    if (!newEmpData.firstName.trim()){
      newErrors.firstName = 'First name is required.'
    }

    if (!newEmpData.lastName.trim()){
      newErrors.lastName = 'Last name is required.'
    }

    if (!newEmpData.email.trim()){
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmpData.email)){
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!newEmpData.phone.trim()){
      newErrors.phone = 'Phone number is required.'
    }

    if (!newEmpData.dateOfBirth){
      newErrors.dateOfBirth = 'Date of birth is required.'
    }

    if (!newEmpData.gender) {
      newErrors.gender = 'Gender is required.'
    }

    if (!newEmpData.maritalStatus) {
      newErrors.maritalStatus = 'Marital status is required.'
    }

    if (!newEmpData.department) {
      newErrors.department = 'Department is required.'
    }

    if (!newEmpData.designation.trim()) {
      newErrors.designation = 'Designation is required.'
    }

    if (!newEmpData.salary.basicSalary) {
      newErrors.basicSalary = 'Basic salary is required.'
    }

    setFormError(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setShouldFocusError(true)
      return false;
    }

    return Object.keys(newErrors).length === 0;

  }

  useEffect(() => {

    if (!shouldFocusError) return
    
    const firstError = fieldOrder.find(
      (field) => formError[field]
    )

    if (!firstError) {
      setShouldFocusError(false)
      return
    }

    const element = document.getElementById(firstError);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })

      element.focus();
    }
    
    setShouldFocusError(false);

  }, [shouldFocusError])

  const handleSubmit = async (e)=>{
    e.preventDefault();

    const isValid = validateForm()

    if (!isValid) return;

    const employeePayload = {
      firstName: newEmpData.firstName,
      lastName: newEmpData.lastName,
      email: newEmpData.email,
      phone: newEmpData.phone,
      dateOfBirth: newEmpData.dateOfBirth,
      gender: newEmpData.gender,
      maritalStatus: newEmpData.maritalStatus,
      department: newEmpData.department,
      designation: newEmpData.designation,
      salary:{
        basicSalary: Number(newEmpData.salary.basicSalary),
        hra: Number(newEmpData.salary.hra),
        specialAllowance: Number(newEmpData.salary.specialAllowance),
        retirementFund: Number(newEmpData.salary.retirementFund),
      }
    }

    try {

      const response = await addEmployee(employeePayload);
      toast.success(response.message,{
        description: `${newEmpData.firstName} ${newEmpData.lastName} has been added.`
      })

    } catch (error) {
      toast.error('Failed to add employee.', {
        description: error.message,
      })
    }

  }

  return (
    <div className='p-6'>
        <Header/>

        <div className='mt-5 space-y-6'>

          <PersonalInformation
            formData={newEmpData}
            errors={formError} 
            onChange={handleChange}
            profilePreview={profilePreview}
            handleImageChange={handleImageChange}
          />

          <EmploymentInformation 
            formData={newEmpData}
            errors={formError} 
            onChange={handleChange}
          />

          <SalaryAndPayrollInformation 
            formData={newEmpData.salary}
            errors={formError}
            onChange={handleSalaryChange}
          />
          
        </div>

        <ActionButtons 
          handleSubmit={handleSubmit}
          loading={loading}
        />
    </div>
  )
}

export default NewEmployee