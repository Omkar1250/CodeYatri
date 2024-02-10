import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from './AppContext'

import Header from './Header'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'

export default function BlogPage() {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog,setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const {setLoading, Loading} = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  const navigation = useNavigate();

  async function fetchRelatedBlog(){
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try{
        let res = await fetch(url);
        let data = await res.json();

        setBlog(data.blog);
        setRelatedBlogs(data.relatedBlogs);
    }
    catch(error){
      console.log("Something Went Wrong");
      setBlog(null);
      setRelatedBlogs([])

    }
    setLoading(false);
  }

  useEffect(()=>{
    if(blogId){
      fetchRelatedBlog();
    }
  },[location.pathname])
  return (
    <div className='flex flex-col justify-center items-center  gap-5 '>
      <Header/>

      <div>
        <button className='rounded-md border px-4 py-1 '
         onClick={() => navigation(-1)}
        >
          Back
        </button>
      </div>
      {
        Loading ? 
        (<Spinner/>
          ): blog ?
        (
          <div className='mt-10 flex flex-col justify-center items-center max-w-lg'>
            <BlogDetails post={blog}/>
            <h2 className='text-2xl mt-5 font-bold text-blue-500'>Related Blogs</h2>
            {

                relatedBlogs.map((post)=>(
                    <div key={post.id}>
                       <BlogDetails post={post}/>
                    </div>
                ))
            }

          </div>
        ) : 
        (
          <div>
            <p>No Post Found</p>
            </div>
        )
      }
      
    </div>
  )
}
