import React from 'react'

const EmptyState = ({
    title = "No data available", 
    description = "There's nothing to display right now.",
    icon: Icon,
}) => {
  return (
    <div 
        className="flex flex-col items-center justify-center rounded-xl 
        border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center"
    >
        {
            Icon && (
                <div className="mb-4 rounded-full bg-slate-100 p-4">
                    <Icon className="h-8 w-8 text-slate-400" />
                </div>
            )
        }

        <h3 className="text-lg font-semibold text-slate-900">
            {title}
        </h3>

        <p className="mt-2 max-w-xs text-sm text-slate-500">
            {description}
        </p>
    </div>
  )
}

export default EmptyState