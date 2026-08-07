import React from 'react'
import { X } from 'lucide-react';
import Button from '../Button';

const ModalHeader = ({
    title,
    subtitle,
    onClose,
    className = "",
    children,
}) => {
    return (

        <div 
            className='flex justify-between items-center border-b 
            border-slate-200 dark:border-slate-700 pb-4'
        >

            <h2 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
                {title}
            </h2>

            <Button
                variant='ghost'
                onClick={onClose}
            >
                <X size={18} />
            </Button>

        </div>
    )
}

export default ModalHeader