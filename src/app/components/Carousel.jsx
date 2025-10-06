'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';

const slides = [
    { image: '/bike1.jpg', heading: 'WELCOME TO', highlight: 'BIKE-TRADER', tagline: 'Sell Your Used Bike From Home in Minutes!' },
    { image: '/bike2.jpg', heading: 'FAST & EASY', highlight: 'SELLING EXPERIENCE', tagline: 'Quick Quotes. Instant Offers. Trusted Buyers.' },
    { image: '/bike3.jpg', heading: 'TRUSTED BY', highlight: 'THOUSANDS OF SELLERS', tagline: 'Join Our Happy Sellers Community!' },
];

const BikeCarousel = () => {
    return (
        <div className="w-full min-h-[500px] md:min-h-[600px] lg:min-h-[80vh]">
            <Carousel
                autoPlay
                infiniteLoop
                interval={3000}
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                showIndicators={true}
                swipeable
                emulateTouch
            >
                {slides.map((slide, index) => (
                    <div key={index} className="relative w-full h-[90vh]">
                        <img
                            src={slide.image}
                            alt={`Slide ${index}`}
                            loading={index === 0 ? 'eager' : 'lazy'}
                            decoding="async"
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
                        {/* Text Content */}
                        <div className="absolute inset-0 z-20 flex items-center justify-start px-6 md:px-20">
                            <div className="text-left space-y-4 max-w-lg">
                                <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-snug">
                                    {slide.heading} <span className="text-blue-400">{slide.highlight}</span>
                                </h2>
                                <p className="text-lg md:text-2xl font-medium text-white">
                                    {slide.tagline}
                                </p>

                                {/* Button as Link */}
                                <Link href="/sell-now">
                                    <span className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition duration-300 cursor-pointer">
                                        Sell Your Bike Now →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default BikeCarousel;
