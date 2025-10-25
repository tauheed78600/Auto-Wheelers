"use client";
import React from "react";
import Link from "next/link";
import BlogCard from "../components/BlogCard";
import bike1 from "../../../public/bike1.jpg";
import bike2 from "../../../public/bike2.jpg";
import bike3 from "../../../public/bike3.jpg";

function Blogs() {

  // Append first 3 blogs from the /blogs page
  const featuredFromBlogsPage = [
    {
      title: "🚗 Simplifying the RTO Process for Selling Your Bike",
      imageUrl:
        "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=800&q=60",
      description: `Selling a bike involves one of the most confusing parts — the RTO process. But with our platform, you don’t need to worry about any of that. We make RTO formalities simple, fast, and hassle-free.`,
    },
    {
      title: "🛡️ Understanding Bike Insurance Before You Sell",
      imageUrl:
        "https://images.unsplash.com/photo-1610553556003-9b2ae8ef1b8e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627",
      description: `Before selling your bike, understanding your insurance status can save you from major headaches and boost your resale value.`,
    },
    {
      title: "🏆 Why Our Platform Is India’s #1 Choice for Bike Sellers",
      imageUrl:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=60",
      description: `Thousands of bike owners across India trust us — and there’s a reason we’re the #1 platform for used bike sales.`,
    },
  ];

  const allPosts = [...featuredFromBlogsPage];

  return (
    <div className="w-full py-10 px-4 md:px-12 bg-white">
      <div>
        <h2 className="text-4xl text-blue-900 font-extrabold text-center mb-10">
          Explore Our Blogs
        </h2>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {allPosts.map((post, index) => (
            <BlogCard key={index} blog={post} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center text-blue-700 font-semibold hover:underline"
          >
            &gt; Read more blogs
          </Link>
        </div>
      </div>
    </div>
  );
}


export default Blogs
