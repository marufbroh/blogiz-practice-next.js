"use client"

import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
// import {useGetBlogsQuery} from "@/redux/api/baseApi";
import React from "react";

const BlogsPage = () => {

const {data: blogs, isLoading, isError, error} = useGetBlogsQuery("");

// console.log(blogs);

  return (
    <div className="w-[90%] mx-auto my-5">
      <h1 className="text-4xl text-center my-5">
        All blogs from <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>

      <div className="grid grid-cols-4 gap-4 my-5">
        {blogs?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
