import React from 'react'

const BreakdownInfo = ({ 
    title, 
    data,
    variant = "earnings"
}) => {

    const variants={
        earnings:{
            card: 'bg-blue-50 dark:bg-blue-900/20',
            amount: 'text-slate-900 dark:text-slate-100',
            heading:'text-blue-700 dark:text-blue-400'
        },
        deductions:{
            card: 'bg-red-50 dark:bg-red-900/20',
            amount: 'text-red-600 dark:text-red-400',
            heading:'text-red-700 dark:text-red-400'
        },
    };

    const styles = variants[variant];

  return (
    <div className='space-y-3'>

        <p 
            className={`text-xs font-semibold uppercase tracking-wider ${styles.heading}`}
        >
            {title}
        </p>

        {
            data.map((item)=>(
                <div 
                    key={item.id} 
                    className={`rounded-xl p-4 ${styles.card}`}
                >
                    <p 
                        className='text-base font-medium text-slate-700 dark:text-slate-200'
                    >
                        {item.title}
                    </p>
                    <p 
                        className={`text-xl font-semibold ${styles.amount}`}
                    >
                        ₹{item.value}
                    </p>
                </div>
            ))
        }

    </div>
  )
}

export default BreakdownInfo