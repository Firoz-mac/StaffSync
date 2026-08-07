import React from 'react'

const PayrollStat = ({
    label,
    value = 0,
    variant = "default",
}) => {

    const variants = {
        default: 'text-slate-900 dark:text-slate-100',
        danger: 'text-red-600 dark:text-red-400',
        success: 'text-green-600 dark:text-green-400',
    }

    return (

        <div>
            <p 
                className='text-sm text-slate-500 dark:text-slate-400'
            >
                {label}
            </p>

            <p 
                className={`mt-1 text-xl font-semibold ${variants[variant]}`}
            >
                {value}
            </p>
        </div>

    )
}

export default PayrollStat