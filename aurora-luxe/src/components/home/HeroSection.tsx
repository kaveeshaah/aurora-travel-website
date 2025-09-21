'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <Image
            src="/images/hompage-range.jpg"
            alt="Mountain landscape at sunset"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center px-6 sm:px-16 lg:px-36 max-w-3xl h-full">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-left">
            WHERE
            <br />
            ELEGANCE
            <br />
            MEETS ADVENTURE
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-xl leading-relaxed text-left">
            Tailored luxury journeys to the world&apos;s most exclusive destinations
          </p>

          <button className="bg-transparent border px-8 py-4 rounded-full text-lg font-medium text-white border-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            WHERE TO?
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
