import Link from "next/link";  
import React from "react";  

const BlogItem = ({ blog }) => {  
  return (  
    <Link  
      href={`/blog/${blog.slug.current}`}  
      className="block p-5 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 my-8"  
    >  
      <article>  
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-700">  
          {blog.title}  
        </h3>  
        <p className="mb-3 font-normal text-sm text-gray-600">  
          {new Date(blog.publishedAt).toDateString()}  
        </p>  

        <p className="mb-3 font-normal text-gray-600">  
          {blog.metadata}
        </p>  
      </article>  
    </Link>  
  );  
};  

export default BlogItem;