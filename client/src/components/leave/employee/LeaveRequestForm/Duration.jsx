import React, { useEffect, useState } from 'react'
import { Info } from 'lucide-react';
import Input from '../../../Input'

const Duration = ({
    formData,
    setFormData,
    onChange,
}) => {

    const [duration, setDuration]= useState(null);
    const isHalfDay = formData.isHalfDay;

    useEffect(()=>{

        const {startDate, endDate, isHalfDay} = formData;

        if(!startDate){
            setDuration(null);
            setFormData((prev)=>({
                ...prev,
                duration: null,
            }));

            return;
        }

        if(isHalfDay){
            setDuration(0.5);
            setFormData((prev)=>({
                ...prev,
                endDate:'',
                duration: 0.5,
            }));

            return;
        }

        if(!endDate){
            setDuration(null);
            setFormData((prev)=>({
                ...prev,
                duration: null,
            }));

            return;
        }

        const start = new Date(startDate);
        const end = new Date(endDate);

        const difference = end.getTime()-start.getTime();

        const period = difference/(1000 * 60 * 60 * 24)+1;

        if(period <= 0){
            setDuration(null);
            setFormData((prev)=>({
                ...prev,
                duration: null,
            }));

            return
        }

        setDuration(period);
        setFormData((prev)=>({
            ...prev,
            duration: period,
        }));
        
    },[formData.startDate, formData.endDate, formData.isHalfDay,]);
    

  return (
    <div className='space-y-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
            <Input 
                label='Start Date' 
                type='date'
                name='startDate'
                value={formData.startDate}
                onChange={onChange}
            />

            {
                !isHalfDay && (
                    <Input 
                        label='End Date' 
                        type='date'
                        name='endDate'
                        value={formData.endDate}
                        min={formData.startDate}
                        onChange={onChange}
                    />
                )
            }
            
        </div>

        <label className='flex w-fit cursor-pointer items-center gap-2'>
            <input 
                type="checkbox"
                name="isHalfDay"
                checked={formData.isHalfDay}
                onChange={onChange}
                className='h-4 w-4 cursor-pointer rounded border-slate-300 
                text-blue-600 focus:ring-blue-500'
            />

            <span className='text-sm text-slate-700 dark:text-slate-300'>Half Day</span>
        </label>

        {
            duration !== null && (
                <div 
                    className='flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 p-3 
                    text-blue-700 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-300'
                >
                    <Info 
                        size={20} 
                        className='shrink-0'
                    />
                    <p className='text-sm font-medium'>
                        {duration} {duration === 1 ? 'Day' : 'Days'}
                    </p>
                </div>
            )
        }

    </div>
  )
}

export default Duration