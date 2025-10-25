"use client";
import React, { useState } from "react";

const faqs = [
  {
    q: "How do I list my bike for sale on Auto Wheelers?",
    a: "Create an account, click 'Sell Now', provide bike details and documents, upload photos, and submit. Our team will contact you with offers.",
  },
  {
    q: "Do you handle RTO and document transfers?",
    a: "Yes — we assist with RC transfer paperwork and guide you through Forms 28/29/30. We also coordinate with verified dealers to complete transfers smoothly.",
  },
  {
    q: "Is there any fee or commission for selling?",
    a: "We aim for transparent pricing — any fees (if applicable) will be shown up front. Many basic listings and services are free, while value-added services may have charges.",
  },
  {
    q: "How do you verify buyers/dealers?",
    a: "We perform KYC, check dealer credentials, and maintain a network of verified partners to reduce fraud and ensure trustworthy transactions.",
  },
  {
    q: "What should I prepare before a buyer inspection?",
    a: "Have your RC, insurance, PUC, and service records ready. Clean the bike and be honest about any issues to speed up negotiations.",
  },
  {
    q: "Can I transfer insurance to the buyer?",
    a: "Yes — we guide you through transferring active policies or help renew expired ones so the buyer can take over coverage easily.",
  },
  {
    q: "What if my bike has an existing loan?",
    a: "Inform us during listing. You will typically need a No Objection Certificate (NOC) from the financer — we help coordinate this process.",
  },
  {
    q: "How long does it take to sell my bike?",
    a: "It varies by model, condition, and price. Many sellers receive offers within hours; completed sales can happen in a day to a few weeks depending on negotiation and paperwork.",
  },
  {
    q: "Is my personal information safe?",
    a: "We use industry-standard practices to protect data. See our Privacy Policy for full details on data collection and usage.",
  },
  {
    q: "Can I get a valuation before listing?",
    a: "Yes — use our valuation tool or request an instant quote from verified dealers to get a realistic market price estimate.",
  },
  {
    q: "Do you support nationwide pickup and inspection?",
    a: "We partner with logistics and dealer networks to support pickup in many cities. Availability depends on location — check during booking.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <main className="mt-20 px-6 py-12 bg-gradient-to-br from-indigo-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
                className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
              >
                <span className="text-lg font-semibold text-blue-900">{item.q}</span>
                <span className="ml-4 text-blue-700 font-bold">{openIndex === idx ? "−" : "+"}</span>
              </button>

              <div
                className={`px-6 pb-6 transition-[max-height,opacity] duration-300 ease-in-out ${
                  openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}