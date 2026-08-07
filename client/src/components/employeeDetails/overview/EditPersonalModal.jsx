import React from 'react'
import Modal from '../../modal/Modal';
import ModalHeader from '../../modal/ModalHeader';
import ModalCard from '../../modal/ModalCard';
import Input from '../../Input';

const EditPersonalModal = ({
    open,
    onClose,
    data,
}) => {

    if(!open) return null;

    const formFields = [
        'Full Name',
        'Gender',
        'Date of Birth',
        'Nationality',
        'Marital Status',
    ];

  return (
    <Modal 
        open={open} 
        onClose={onClose} 
        data={data}
    >
        <ModalCard onClose={onClose}>

            <div className='space-y-3 mt-3'>

                {
                    formFields.map((field)=>(
                        <Input 
                            label={field} 
                            placeholder={field}
                        />
                    ))
                }

            </div>

        </ModalCard>
     
    </Modal>
  )
}

export default EditPersonalModal