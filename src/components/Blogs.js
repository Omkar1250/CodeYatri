import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';


export default function Blogs() {
      const {posts, loading} = useContext(AppContext);
      console.log("Printing inside blog component");
      console.log(posts);
      
  return (
    <div className='flex flex-col  mx-auto max-w-xl' >
        {
            loading ? (<Spinner />) : (

                posts.length===0 ? (
                    <div>
                        <p>No Post Found</p>
                    </div>
                ) : (
                    (posts.map((post,index)=>(
                        
                       <BlogDetails key={index} post={post}/>
                    )))
                )
            )
        }
      
    </div>
  )
}
