import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BlogDetails({ post }) {
 
  return (
    <div className=' flex flex-col text-wrap px-4   mb-3'>
        <hr />
      <NavLink to={`/blog/${post.id}`}>
        <span className='text-[1rem] font-bold'>{post.title}</span>
      </NavLink>
      <p  className='text-xs text-blue-400 '>
        By <span className='text-xs text-blue-400'>{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span>{post.category}</span>
        </NavLink>
      </p>
      <p  className='text-xs text-blue-400'>Posted on {post.date}</p>
      <p className='text-xs'>{post.content}</p>
      <div  className='text-xs text-blue-400'>
        {post.tags && post.tags.length > 0 ? (
          post.tags.map((tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
              <span>{`#${tag}`}</span>
            </NavLink>
          ))
        ) : (
          <span>No tags</span>
        )}
      </div>
    </div>
  );
}
