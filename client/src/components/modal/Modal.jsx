import React, { useEffect } from 'react'
import ModalHeader from './ModalHeader'
import { createPortal } from "react-dom";

const Modal = ({
    open, 
    onClose,
    size = "max-w-lg",
    children,
}) => {

    useEffect(()=>{
        if (!open) return null;

        const handleKeyDown = (e) =>{
            if(e.key === 'Escape'){
                onClose?.();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        const originalOverflow = document.body.style.overflow;

        // Disable body scrolling
        document.body.style.overflow = "hidden";

        return ()=>{
            // Re-enable body scrolling
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    },[open, onClose]);

  return createPortal(

    <div 
        className='fixed inset-0  z-50 flex items-center justify-center overflow-y-auto p-6 
        animate-in fade-in zoom-in-95'
    >

        <div 
            onClick={onClose} 
            className='absolute inset-0 bg-black/50 backdrop-blur-[2px]'
        />

        <div
            role="dialog"
            aria-modal="true" 
            onClick={(e) => e.stopPropagation()} 
            className={`relative z-10 w-full ${size} rounded-xl shadow-xl`}
        >
            {children}
        </div>

    </div>,
    document.body

  )
}

export default Modal