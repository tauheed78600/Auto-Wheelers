"use client";
import React, { useState } from "react";

function ContactUs() {
  const [formDetails, setFormDetails] = useState({
    name: "",
    number: "",
    email: "",
    contactMethod: "Email",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const { name, number, email, message } = formDetails;
    if (!name || !number || !email || !message) {
      alert("Please fill all fields.");
      return false;
    }
    if (!/^\d{10}$/.test(number)) {
      alert("Please enter a valid 10-digit number.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const formData = new FormData();
        Object.keys(formDetails).forEach((key) =>
          formData.append(key, formDetails[key])
        );

        const res = await fetch(
          "https://formsubmit.co/ajax/tauheeddarekar786@gmail.com",
          {
            method: "POST",
            body: formData,
          }
        );

        if (res.ok) {
          alert("Email Sent Successfully!");
          setFormDetails({
            name: "",
            number: "",
            email: "",
            contactMethod: "Email",
            message: "",
          });
        } else {
          alert("Something went wrong.");
        }
      } catch (error) {
        console.error(error);
        alert("Error sending email.");
      }
    }
  };

  return (
    <div className="mt-20 px-6 py-12 bg-gradient-to-br from-indigo-50 to-white text-gray-800 flex flex-col items-center">
      <h2 className="text-5xl font-extrabold text-blue-900 mb-4">Get in Touch</h2>
      <p className="text-lg text-blue-500 mb-10 max-w-2xl text-center">
        We’d love to hear from you. Please fill out the form below, and our team will
        get back to you as soon as possible.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-4xl border border-gray-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formDetails.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Number
            </label>
            <input
              type="number"
              name="number"
              placeholder="10 digit number"
              value={formDetails.number}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formDetails.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Preferred Contact Method
            </label>
            <select
              name="contactMethod"
              value={formDetails.contactMethod}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            >
              <option>Email</option>
              <option>Whatsapp</option>
              <option>Call</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Enter your message here"
            value={formDetails.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-8 w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
