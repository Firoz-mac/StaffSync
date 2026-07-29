import React from 'react'
import { TriangleAlert } from "lucide-react";

const ErrorState = ({
    title = "Something went wrong",
    description = "We couldn't load the requested data",
    onRetry,
}) => {
  return (
    <div 
        className="flex flex-col items-center justify-center rounded-xl 
        border border-red-200 bg-red-50 px-6 py-12 text-center"
    >
        <div className="mb-4 rounded-full bg-red-100 p-4">
            <TriangleAlert className="h-8 w-8 text-red-500" />
        </div>

        <h3 className="text-lg font-semibold text-slate-900">
            {title}
        </h3>

        <p className="mt-2 max-w-xs text-sm text-slate-600">
            {description}
        </p>

        {
            onRetry && (

                <button 
                    type="button"
                    aria-label='Retry' 
                    onClick={onRetry}
                    className="mt-6 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium 
                    text-white transition-colors hover:bg-red-600"
                >
                    Try Again
                </button>
            )
        }
    </div>
  )
}

export default ErrorState