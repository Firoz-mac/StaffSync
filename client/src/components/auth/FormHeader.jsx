import React from 'react'

const FormHeader = ({
    isLogin,
}) => {

  return (
    <div className='space-y-6'>

        <div className='w-fit bg-slate-300 px-4 py-1.5 rounded-full'>
            <p className='text-[10px] text-violet-900'>V01.01</p>
        </div>

        <div>

            <h4 className='text-2xl font-semibold text-slate-200'>
                {isLogin ?'Welcome back' : 'Create New'}
            </h4>
            <p className='text-sm text-slate-300'>
                {isLogin ?'Sign in to access your StaffSync workspace.' : 'Signup to access your StaffSync workspace.'}
            </p>

        </div>

    </div>
  )
}

export default FormHeader