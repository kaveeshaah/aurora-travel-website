'use client';

import React from 'react';
import Image from 'next/image';

export default function FeaturedLuxuryExperience() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-medium text-black">
            Featured Luxury Experience
          </h2>
        </div>

        {/* Main Content - Split Layout */}
        <div className="w-full max-w-none flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden h-[500px] lg:h-[550px] w-full max-w-7xl">
            {/* Left Side - Image */}
            <div className="relative h-full">
              <Image
                src="https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHZpbGxhfGVufDB8fDB8fHww"
                alt="Luxury Villa Experience"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right Side - Content */}
            <div className="bg-sky-300 h-full p-16 flex flex-col justify-center">
              <div className="text-center">
                {/* Category Title */}
                <h3 className="text-5xl font-serif font-bold text-white mb-12 tracking-wider">
                  VILLAS
                </h3>

                {/* Description */}
                <p className="text-white text-base leading-7 mb-12 font-lato font-light max-w-sm mx-auto">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                {/* Button */}
                <button className="px-8 py-3 bg-transparent border-2 border-white rounded-full text-white font-lato font-medium hover:bg-white hover:text-sky-300 transition-all duration-300">
                  Plan My Escape
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}