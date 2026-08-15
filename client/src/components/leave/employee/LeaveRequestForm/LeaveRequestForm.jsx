import React, { useEffect, useState } from 'react'
import Card from '../../../Card'
import Select from '../../../Select'
import Duration from './Duration';
import Button from '../../../Button';
import LeaveTypeCard from './LeaveTypeCard';
import TextArea from './TextArea';
import FileUpload from './FileUpload';

const LeaveRequestForm = () => {

    const [error, setError] = useState('');

    const leaveTypes = [
        {value:'vacation', label:'Vacation', remaining:'12'},
        {value:'sick', label:'Sick', remaining:'5'},
        {value:'casual', label:'Casual', remaining:'3'},
    ];

    const [formData, setFormData] = useState({
        leaveType:'',
        startDate:'',
        endDate:'',
        duration:'',
        isHalfDay:false,
        reason:'',
        file:null,
    });

    const handleInputChange = (e)=>{
        const {name, value, type, checked} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    };

    const handleLeaveTypeChange = (type)=>{
        setFormData((prev)=>({
            ...prev,
            leaveType:type,
        }))
    };

    const handleFileInputChange = (file)=>{
        setFormData((prev)=>({
            ...prev,
            file:file
        }));
    };

    const validateForm = ()=>{

        if(!formData.leaveType){
            setError('Please select a leave type');
        }

        if(!formData.startDate){
            setError('Start date is required');
        }

        if(!formData.isHalfDay && !formData.endDate){
            setError('End date is required');
        }

        if(formData.duration <= 0){
            setError('End date must be after start date');
        }

        if(!formData.reason.trim()){
            setError('Please provide a reason for your leave');
        }

    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(error) return;

        //reminder: handle the error text with react-toastify

        console.log(formData);
    };


  return (
    <div>

        <form 
            className='space-y-4' 
            onSubmit={handleSubmit}
        >

            <div className='space-y-3'>
                <p className='mt-1 text-sm text-slate-500 dark:text-slate-400'>
                    Choose the type of your leave
                </p>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                    {
                        leaveTypes.map((card)=>(
                            <LeaveTypeCard
                                key={card.value}
                                {...card}
                                onClick={handleLeaveTypeChange}
                                isSelected={formData.leaveType === card.value}
                            />
                        ))
                    }
                    
                </div>
            </div>

            <Duration 
                formData={formData} 
                setFormData={setFormData}
                onChange={handleInputChange}
            />

            <TextArea 
                label='Reason'
                value={formData.reason}
                placeholder='Please provide a brief reason for your leave request...'
                name='reason'
                onChange={handleInputChange}
            />

            <FileUpload onChange={handleFileInputChange}/>

            <div className='grid grid-cols-2 lg:flex lg:justify-end gap-3 py-3'>
                <Button 
                    variant='secondary'
                >
                    Cancel
                </Button>
                <Button
                    type='submit' 
                    variant='primary'
                    className='px-10'
                    disabled={error}
                >
                    Submit
                </Button>
            </div>
        </form>
        
    </div>
  )
}

export default LeaveRequestForm