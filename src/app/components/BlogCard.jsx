"use client";
import React from "react";

const BlogCard = ({ blog, onReadMore }) => {
  if (!blog) return null;

  const imgSrc = blog.imageUrl || "/assets/logo.png";
  const title = blog.title || "Blog post";
  const excerpt = (blog.description || "").slice(0, 100);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 border border-gray-100">
      <img src={imgSrc} alt={title} className="h-48 w-full object-cover" />
      <div className="p-5 text-left">
        <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-3">{excerpt}...</p>
        <button
          onClick={() => onReadMore?.(blog)}
          className="text-blue-600 font-semibold underline hover:text-blue-800"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
