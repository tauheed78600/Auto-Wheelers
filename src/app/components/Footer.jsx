'use client';

import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Locate, Mail, Phone } from 'lucide-react';
import Image from 'next/image';

function Footer() {

    const [year, setYear] = useState(new Date().getFullYear());

    return (
        <footer className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 text-gray-900 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                {/* Branding */}
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2 flex-col">
                        <img src="assets/LogoBlack.png"/>
                    </div>
                    <p className="text-gray-700 text-sm">
                        Sell your used bike in minutes. Trusted by thousands of sellers and buyers across India.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold text-blue-900 mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-gray-800 text-sm">
                        <li><a href="/" className="hover:text-blue-600 transition">Home</a></li>
                        <li><a href="/about-us" className="hover:text-blue-600 transition">About Us</a></li>
                        <li><a href="/sell-now" className="hover:text-blue-600 transition">Sell Now</a></li>
                        <li><a href="/blog" className="hover:text-blue-600 transition">Blog</a></li>
                        <li><a href="/privacy-policy" className="hover:text-blue-600 transition">Privacy Policy</a></li>
                        <li><a href="/terms-and-conditions" className="hover:text-blue-600 transition">Terms & Conditions</a></li>
                        <li><a href="/faqs" className="hover:text-blue-600 transition">FAQs</a></li>
                        <li><a href="/contact-us" className="hover:text-blue-600 transition">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-xl font-semibold text-blue-900 mb-4">Contact Us</h2>
                    <ul className="space-y-2 text-gray-800 text-sm">
                        <li className="flex items-center gap-2"><Mail className="w-5 h-5 text-blue-900" /> support@biketrader.com</li>
                        <li className="flex items-center gap-2"><Phone className="w-5 h-5 text-blue-900" /> +91 9021492752</li>
                        <li className="flex items-center gap-2"><Locate className="w-5 h-5 text-blue-900" /> Rasta Peth, Pune</li>
                    </ul>
                    <div className="mt-4 flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition"><Facebook /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition"><Twitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition"><Instagram /></a>
                    </div>
                </div>

                {/* Newsletter / Extra Branding */}
                <div>
                    <h2 className="text-xl font-semibold text-blue-900 mb-4">Stay Connected</h2>
                    <p className="text-gray-700 text-sm mb-4">
                        Subscribe to our newsletter for the latest updates and offers.
                    </p>
                    <form className="flex flex-col  gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 flex-1"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className="text-gray-500 text-xs mt-4">We respect your privacy. Unsubscribe anytime.</p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200 mt-6 py-4 bg-gray-50 text-center text-gray-600 text-sm">
                Made with ❤ by Tauheed | &copy; {year} Bike Trader. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
