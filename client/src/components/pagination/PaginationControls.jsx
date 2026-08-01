import React from 'react'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import PaginationButton from './PaginationButton';

const PaginationControls = ({
    currentPage = 1,
    totalPages = 20,
    onPageChange,
    className = "",
}) => {
 
    const pages = []

    if(totalPages <= 5){
        for( let i=1; i <= totalPages; i++){
            pages.push(i);
        }
    }else{
        if(currentPage <= 3){
            pages.push(1, 2, 3, "...", totalPages);
        }else if (currentPage >= totalPages-2){
            pages.push(1, "...", totalPages-2, totalPages-1, totalPages);
        }else{
            pages.push(1, "...", currentPage-1, currentPage, currentPage+1, "...", totalPages);
        }
    }

  return (
    <div className={`flex items-center select-none gap-1 ${className}`}>
    
        <PaginationButton 
            disabled={currentPage === 1}
            aria-label="Previous page" 
            className='text-slate-500 hover:bg-slate-100 
            disabled:opacity-40'
            onClick={() => {
                if(currentPage > 1){
                    onPageChange?.(currentPage - 1);
                }
            }}
        >
            <ChevronLeft size={18}/>
        </PaginationButton>

        {
            pages.map((page, i)=> {
                if(page === "..."){
                    return (
                        <MoreHorizontal 
                            key={`ellipsis-${i}`} 
                            size={18} 
                            className="text-slate-500"
                        />
                    )
                }else{
                    return(
                        <PaginationButton 
                            key={page}
                            aria-label={`Go to page ${page}`}
                            aria-current={currentPage === page ? "page" : undefined}
                            onClick={()=> onPageChange?.(page)}
                            className={`transition-colors duration-200 
                                ${currentPage === page 
                                    ? 'bg-blue-600 text-white' 
                                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                                }
                            `}
                        >
                            {page}
                        </PaginationButton>
                    )
                }
            })
        }
        
        <PaginationButton 
            disabled={currentPage === totalPages}
            aria-label="Next page" 
            className='text-slate-500 hover:bg-slate-100 
            disabled:opacity-40'
            onClick={() => {
                if(currentPage < totalPages){
                    onPageChange?.(currentPage + 1)
                }
            }}
        >
            <ChevronRight size={18} />
        </PaginationButton>
        
    </div>
  )
}

export default PaginationControls