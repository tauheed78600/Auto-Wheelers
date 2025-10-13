"use client";

import React from "react";
import aboutUsImage from "../../../public/assets/aboutusImagepage.png";

function AboutUs() {
  return (
    <div className="mt-20 p-6 bg-gradient-to-br from-gray-50 to-white text-gray-800">
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-6xl font-extrabold">
          About <span className="text-blue-900">Us</span>
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          Welcome to your ultimate digital garage. We bring together motorcycle
          enthusiasts, buyers, and sellers in one seamless platform. Whether
          you’re upgrading your ride or sharing your passion, we make it simple
          and fun.
        </p>
      </div>

      {/* About Section */}
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-12 px-8 py-12">
        <div className="flex justify-center">
          <img
            className="h-96 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
            src="assets/aboutusImagepage.png"
            alt="About Us"
          />
        </div>

        <div className="space-y-6">
          <h2 className="font-extrabold text-5xl leading-tight">
            The Perfect Hub <br /> for <br />
            <span className="text-blue-900">Motorcycle Lovers</span>
          </h2>
          <p className="max-w-md text-gray-700 leading-relaxed">
            Selling or buying a motorcycle should be easy and transparent. Our
            platform connects genuine riders, ensures fair pricing, and makes
            transactions smooth. Say goodbye to complicated listings and
            endless waiting.
          </p>
          <p className="max-w-md text-gray-700 leading-relaxed">
            Beyond transactions, we foster a community where riders can share
            experiences, tips, and stories. Join thousands of enthusiasts who
            trust us for both their bikes and their passion.
          </p>
          <button className="mt-4 bg-blue-900 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-800 transition-colors duration-300">
            Explore More
          </button>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="flex justify-center items-center py-16">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 px-4 md:px-0">
          
          {/* Card 1 */}
          <div className="border border-gray-300 rounded-2xl max-w-md h-auto p-6 bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
              Our Commitment
            </h2>
            <p className="text-gray-600 mb-4">
              We aim to give every rider a smooth and rewarding experience. No
              hidden charges, no unnecessary delays — just honest transactions.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Best value deals</li>
              <li>Speedy transactions</li>
              <li>Honest and simple process</li>
              <li>Community-driven support</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-300 rounded-2xl max-w-md h-auto p-6 bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
              Why Trust Us
            </h2>
            <p className="text-gray-600 mb-4">
              Thousands of riders rely on our platform for secure, transparent,
              and quick transactions. We combine technology with trust.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Safe and verified payments</li>
              <li>Instant valuations</li>
              <li>Trusted buyers and sellers</li>
              <li>Dedicated assistance 24/7</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Community Section */}
      <div className="bg-blue-900 text-white py-16 px-8 rounded-2xl mx-4 md:mx-20 mt-16 shadow-lg">
        <h2 className="text-4xl font-extrabold mb-4 text-center">
          Join Our Community
        </h2>
        <p className="text-center max-w-2xl mx-auto text-lg leading-relaxed">
          More than just a marketplace — we’re a hub for riders to connect,
          share stories, and grow their passion. Meet like-minded enthusiasts,
          attend events, and get insider tips from the motorcycle world.
        </p>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-blue-900 px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300">
            Join Now
          </button>
        </div>
      </div>

    </div>
  );
}

export default AboutUs;
