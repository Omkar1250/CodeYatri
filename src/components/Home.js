import React from 'react'
import Blogs from './Blogs'
import Header from './Header'
import Pagination from './Pagination'

export default function Home() {
  return (
    <div >
        <div>
            <Header></Header>
        </div>
        <div >
           <Blogs/> 
        </div>
        <div>
        <Pagination/>
        </div>
       
       
      
    </div>
  )
}
