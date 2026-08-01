import React from 'react'

const PaginationInfo = ({
    currentPage = 1,
    pageSize = 10,
    totalItems = 0,
    resourceName = "items",
}) => {

    const startItem = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
    const endItem = Math.min(currentPage * pageSize, totalItems);

  return (

    <p className='text-sm text-slate-500 dark:text-slate-400'>

        Showing{" "}

        <span className='font-semibold text-slate-900 dark:text-slate-100'>
            {startItem}-{endItem}
        </span>
        {" "}

        of{" "}

        <span className='font-semibold text-slate-900 dark:text-slate-100'>
            {totalItems.toLocaleString()}
        </span>{" "}

        {resourceName}

    </p>

  )
}

export default PaginationInfo