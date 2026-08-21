import React from 'react'
import PaginationInfo from './PaginationInfo'
import PaginationControls from './PaginationControls'

const Pagination = ({
  currentPage, 
  pageSize, 
  totalItems, 
  resourceName, 
  totalPages,
  onPageChange,
}) => {
  return (
    <div 
      className='flex items-center justify-center lg:justify-between bg-blue-50 dark:bg-blue-900/20 
      p-6 border-t border-slate-200 dark:border-slate-700'
    >

      <div className='hidden lg:block'>
        <PaginationInfo 
          currentPage={currentPage} 
          pageSize={pageSize} 
          totalItems={totalItems} 
          resourceName={resourceName}/>
      </div>

      <div className='flex justify-center lg:justify-end'>
        <PaginationControls 
          currentPage={currentPage} 
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
      
    </div>
  )
}

export default Pagination