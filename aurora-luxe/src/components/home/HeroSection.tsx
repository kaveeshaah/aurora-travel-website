// src/components/HeroSection.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-black/80">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497535944603-98de35a7eef9?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHN3aXNzfGVufDB8fDB8fHww"
          alt="Swiss mountain landscape"
          fill
          className="object-cover opacity-95"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/15 to-transparent" />
      </div>

      {/* Content */}
       <div
         className="relative z-10 flex flex-col items-start justify-center h-full max-w-3xl w-full"
         style={{ paddingLeft: '160px' }} // Change this pixel value to adjust position
       >
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-left text-white">
            WHERE ELEGANCE 
            MEETS ADVENTURE
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mt-4 mb-8 text-white max-w-xl leading-relaxed text-left font-lato font-normal">
            Tailored luxury journeys to the world&apos;s most exclusive destinations
          </p>
          <br></br>
          <br></br>
          <button
            className="w-50 h-20 py-3 text-white border-6 border-white rounded-full text-xl font-medium hover:bg-white hover:text-black transition-all duration-300"
             aria-label="Explore destinations"
        >
            WHERE TO?
          </button>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
