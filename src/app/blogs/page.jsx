"use client";
import React, { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";

function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Lock background scrolling when modal is open, restore when closed
  useEffect(() => {
    if (!selectedBlog) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedBlog]);

const blogs = [
  {
    title: "🚗 Simplifying the RTO Process for Selling Your Bike",
    imageUrl:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=800&q=60",
    description: `
Selling a bike involves one of the most confusing parts — the RTO process. But with our platform, you don’t need to worry about any of that. We make RTO formalities simple, fast, and hassle-free.  

✅ **Instant RC Transfer:** Our team ensures your RC transfer happens legally and on time.  
🧾 **No Queues or Agents Needed:** Forget standing in long lines or paying brokers.  
🔍 **Transparent Paperwork:** We handle all documentation right in front of you.  
🛵 **End-to-End Assistance:** From Form 28 to Form 30, every step is handled smoothly.  
💡 **Peace of Mind:** You sell your bike and rest assured it’s legally transferred to the new owner.  

> Selling a bike shouldn’t feel like a government exam. Let us handle the RTO maze while you relax!`,
  },
  {
    title: "🛡️ Understanding Bike Insurance Before You Sell",
    imageUrl: "https://images.unsplash.com/photo-1610553556003-9b2ae8ef1b8e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627",

    description: `
Before selling your bike, understanding your insurance status can save you from major headaches and boost your resale value.  

💰 **Check Validity:** Ensure your insurance is active before putting your bike up for sale.  
📑 **Transfer with Ease:** We help you seamlessly transfer the existing insurance to the buyer.  
🧠 **Expired Policy? No Problem:** Our team assists in renewing expired policies instantly.  
🔍 **Boost Your Offer:** Bikes with active insurance attract better offers from dealers.  
💬 **Stay Informed:** Know what type of policy (Comprehensive/Third-Party) you hold — it matters!  

> Selling smart starts with understanding your coverage. Let us make your insurance work for you.`,
  },
  {
    title: "🏆 Why Our Platform Is India’s #1 Choice for Bike Sellers",
    imageUrl:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=60",
    description: `
Thousands of bike owners across India trust us — and there’s a reason we’re the #1 platform for used bike sales.  

🔥 **Best Market Price:** Get real-time offers from verified dealers competing for your bike.  
🤝 **Zero Middlemen:** No hidden fees, no commission — every rupee is yours.  
⚡ **Quick Process:** Sell your bike within hours, not weeks.  
📱 **Digital Convenience:** Upload details, get instant offers, and schedule pick-up from home.  
💬 **Verified Dealers Only:** We ensure every buyer is RTO-approved and verified.  

> Simple, transparent, and profitable — that’s our promise. When it comes to trust and value, we ride ahead of everyone.`,
  },
  {
    title: "💸 How to Get the Best Price for Your Used Bike",
    imageUrl:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=60",
    description: `
Getting a great deal for your used bike isn’t luck — it’s strategy. Follow these pro tips before you list your bike.  

🧽 **Clean It Well:** A shiny, well-maintained bike gives the impression of good care.  
📷 **High-Quality Photos:** Capture clear shots from multiple angles — daylight works best.  
📋 **Document Readiness:** Keep RC, insurance, and PUC handy. It builds instant trust.  
⚙️ **Highlight Maintenance:** Mention any recent servicing or parts replaced — buyers love transparency.  
💬 **Honesty Sells:** Don’t hide scratches or issues; being upfront helps you attract genuine buyers.  

> A clean bike, clear details, and honesty — the three golden rules for a profitable sale.`,
  },
  {
    title: "📄 Important Documents You’ll Need to Sell Your Bike",
    imageUrl:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=60",
    description: `
Before you hand over your keys, make sure your paperwork is in order. Missing even one document can delay your sale.  

🪪 **RC Book (Registration Certificate):** The most essential proof of ownership.  
📜 **Valid Insurance Copy:** Active insurance is mandatory for ownership transfer.  
🧾 **Pollution Certificate (PUC):** Shows your bike meets emission standards.  
🧍‍♂️ **ID & Address Proof:** Aadhar, PAN, or passport for verification.  
🖋️ **Forms 28, 29 & 30:** Required for RTO ownership transfer.  
🚀 **NOC if Financed:** If your bike was under loan, obtain a No Objection Certificate.  

> Keep your documents ready, and you’ll complete the deal faster and without stress.`,
  },
];

  return (
    <div className="mt-20 px-6 py-12 bg-gradient-to-br from-indigo-50 to-white">
      <h2 className="text-5xl font-extrabold text-center text-blue-900 mb-12">
        Our Latest Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} onReadMore={setSelectedBlog} />
        ))}
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-start md:items-center justify-center z-50 p-4 sm:p-6 overflow-y-auto transition-all duration-300">
          <div
            role="dialog"
            aria-modal="true"
            className="bg-white rounded-2xl shadow-2xl w-full sm:w-11/12 md:w-3/4 lg:w-2/3 max-w-2xl p-6 md:p-8 relative animate-fadeIn max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              ✕
            </button>
            <img
              src={selectedBlog.imageUrl}
              alt={selectedBlog.title}
              className="rounded-xl h-56 sm:h-64 w-full object-cover mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              {selectedBlog.title}
            </h3>
            <div className="text-gray-700 whitespace-pre-line leading-relaxed">
              {selectedBlog.description}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Blogs;
