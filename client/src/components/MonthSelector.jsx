import { ChevronDown } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Select from './Select';

const MonthSelector = () => { 

    const date = new Date();
    const months = [];

    const currentMonthValue = `${date.getFullYear()}-${date.getMonth() + 1}`

    const [selectedMonth, setSelectedMonth] = useState(currentMonthValue);

    for(let i=0; i<=6; i++){
        
        const month = new Date(
            date.getFullYear(),
            date.getMonth() - i,
            1
        );

        months.push({
            value: `${month.getFullYear()}-${month.getMonth() + 1}`,
            label: `${month.toLocaleString('default', {
                month: 'short',
            })} ${month.getFullYear() !== date.getFullYear() 
                ? ` ${month.getFullYear()}` 
                : ''
            }`,
        });
    };

    const handleChange  = (e) =>{
        setSelectedMonth(e.target.value)
    };

  return (
    
    <Select
        value={selectedMonth} 
        onChange={handleChange} 
        options={months}
    />

  )
}

export default MonthSelector