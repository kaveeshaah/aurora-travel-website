'use client';

import React from 'react';
import Image from 'next/image';

export default function FeaturedLuxuryExperience() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-left mb-12">
          <h2 className="text-4xl font-serif font-medium text-black">
            Featured Luxury Experience
          </h2>
        </div>

        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-none shadow-lg">
          {/* Left Side - Image */}
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
              alt="Luxury Villa Experience"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Side - Content */}
          <div className="bg-sky-300 h-[400px] lg:h-[500px] p-8 lg:p-12 flex flex-col justify-center">
            <div className="text-left">
              {/* Category Title */}
              <h3 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-8 tracking-wider">
                VILLAS
              </h3>

              {/* Description */}
              <p className="text-white text-sm lg:text-base leading-relaxed mb-8 font-light max-w-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>

              {/* Button */}
              <button className="px-6 py-2.5 bg-transparent border-2 border-white rounded-full text-white text-sm font-medium hover:bg-white hover:text-sky-300 transition-all duration-300">
                Plan My Escape
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}