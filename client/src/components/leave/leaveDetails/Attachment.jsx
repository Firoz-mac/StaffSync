import React from 'react'
import { Download, FileText } from 'lucide-react'

const Attachment = ({
    fileName = 'Graduation_Invite_Jenkins.pdf',
    fileSize = '1.2 MB',
    fileType = 'PDF Document',
}) => {
  return (
    <div className='px-6 py-3'>

        <h6 
            className='text-xs font-semibold uppercase tracking-wider 
            text-slate-500 dark:text-slate-400'
        >
            Attachments
        </h6>

        <div 
            className='flex mt-3 items-center justify-between gap-4 rounded-lg border border-slate-300 
            bg-white px-4 py-4 dark:border-slate-700 dark:bg-slate-900'
        >

            <div className='flex min-w-0 items-center gap-3'>
                <div 
                    className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg 
                    text-blue-600 dark:text-blue-400'
                >
                    <FileText/>
                </div>

                <div className='min-w-0'>

                    <p className='truncate text-sm font-medium text-slate-900 dark:text-slate-100'>
                        {fileName}
                    </p>

                    <p className='mt-0.5 text-xs text-slate-500 dark:text-slate-400'>
                        {fileSize}
                        <span className="mx-1">•</span>
                        {fileType}
                    </p>

                </div>
            </div>

            <button 
                type='button' 
                className='shrink-0 rounded-lg p-2 text-slate-500 transition-colors 
                hover:bg-slate-100 hover:text-blue-600
                dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400'
            >
                <Download size={23} />
            </button>
            
        </div>
        
    </div>
  )
}

export default Attachment