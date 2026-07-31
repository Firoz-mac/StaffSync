import React from 'react'

const Title = ({ title, description}) => {
    return (
        <div className='hidden lg:block'>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                {title}
            </h1>

            {
                description && (
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {description}
                    </p>
                )
            }

        </div>
    )
}

export default Title