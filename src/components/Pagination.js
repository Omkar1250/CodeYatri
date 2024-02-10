import React, { useContext } from 'react'
import { AppContext } from './AppContext'


export default function Pagination() {
  const {page, handlePageChange, totalPages}= useContext(AppContext);
  return (
    
    <div className='w-full flex justify-center items-center border  bottom-0 bg-white'>
        <div className='flex justify-between -11/12 max-w-[670px] py-2 '>
         <div className='flex gap-x-20'>
         {
            page > 1 && 
                      (<button className='rounded-md border px-4 py-1 '
                       onClick={()=> handlePageChange(page-1)} >
                        Previous
                      </button>)
          }
       
       
         {
            page < totalPages && 
                      (<button className='rounded-md border px-4 py-1 '
                      onClick={() => handlePageChange(page+1)}>
                        Next
                      </button>)
          }
     </div>
         
          <p className='font text-sm  ml-2 mt-1'>
            Page {page} of {totalPages}
          </p>

        </div>

      
    </div>
  )
}
