import React from 'react'
import Modal from '../modal/Modal';
import ModalCard from '../modal/ModalCard';
import Input from '../Input';

const EditDepartmentModal = ({
    open,
    onClose,
}) => {
    
    if(!open) return null;

    const formFields = [
        'Department Name',
        'Description',
    ];

    const data = {
        title: 'Edit Department',
    }

  return (
    <Modal 
        open={open} 
        onClose={onClose}
    >
        <ModalCard 
            onClose={onClose}
            data={data}
        >
            <div className='space-y-3 mt-3'>
                {
                    formFields.map((field)=>(
                        <Input 
                            label={field} 
                            placeholder={field}
                        />
                    ))
                }

                <Input label='Department Head' placeholder='EMP:007'/>

            </div>
            
        </ModalCard>

    </Modal>
  )
}

export default EditDepartmentModal