import { FileUp } from 'lucide-react'
import React, { useState } from 'react'
import { useRef } from 'react'

const FileUpload = ({
    maxSize=5,
    accept='.svg,.png,.jpg,.jpeg,.pdf',
    onChange,
}) => {

    const inputRef = useRef(null);
    const [error, setError] = useState('');
    const [isDragging, setIsDragging] = useState(false);

    const validateFile = (file)=>{
        if (!file) return false

        const maxSizeInBytes = maxSize*1024*1024;

        if(file.size > maxSizeInBytes){
            setError(`File size must be less than ${maxSize}MB.`)
            return false
        }

        setError('')
        return true
    }

    const handleFile = (file)=>{
        if(!validateFile(file)) return

        onChange?.(file)
    }

    const handleInputChange = (e)=>{

        const file = e.target.files?.[0]

        if(file){
            handleFile(file)
        }
    }

    const handleDrop = (e)=>{
        e.preventDefault()
        setIsDragging(false);

        const file = e.dataTransfer.files?.[0]

        if(file){
            handleFile(file)
        }
    }

  return (
    <div className='w-full'>

        <div className='mb-3 flex items-center gap-1'>
            <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
                Attachments
            </h3>
            <span className='text-sm text-blue-700 dark:text-blue-400'>(Optional)</span>
        </div>

        <button
            type="button"
            onClick={()=> inputRef.current?.click()}
            onDragOver={(e)=> {
                e.preventDefault()
                setIsDragging(true)
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`flex min-h-41.25 w-full cursor-pointer flex-col items-center justify-center
            rounded-xl border-2 border-dashed transition-all duration-200 
                ${
                    isDragging
                        ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-950/20'
                        : 'border-slate-300 bg-white hover:border-blue-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-500 dark:hover:bg-slate-800'
                }
            `}
        >
            <div 
                className='mb-3 flex h-12 w-12 items-center justify-center rounded-full
                bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
            >
                <FileUp size={22}/>
            </div>

            <p className='text-sm font-semibold text-slate-900 dark:text-slate-100'>
                Click to upload or drag and drop
            </p>

            <p className='mt-1 text-sm text-slate-500 dark:text-slate-400'>
                SVG, PNG, JPG or PDF (max. {maxSize}MB)
            </p>
        </button>

        <input
            ref={inputRef} 
            type="file"
            accept={accept} 
            className='hidden'
            onChange={handleInputChange} 
        />

        {
            error && (
                <p className='mt-2 text-sm text-red-500'>
                    {error}
                </p>
            )
        }

    </div>
  )
}

export default FileUpload