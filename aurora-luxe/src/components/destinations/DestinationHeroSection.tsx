// src/components/HeroSection.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?w=1920&auto=format&fit=crop&q=80",
      alt: "Ocean waves at sunset",
      icon: "mdi:waves"
    },
    {
      src: "https://images.unsplash.com/photo-1723243122471-c401da1e09e8?w=1920&auto=format&fit=crop&q=80", 
      alt: "Mountain landscape",
      icon: "mdi:mountain"
    },
    {
      src: "https://images.unsplash.com/photo-1507752533523-5186b0bc4c43?w=1920&auto=format&fit=crop&q=80",
      alt: "City skyline", 
      icon: "mdi:city"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex items-center bg-black/80">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImages[activeImageIndex].src}
          alt={heroImages[activeImageIndex].alt}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
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
          <h1 className="font-serif text-4xl sm:text-4xl lg:text-7xl font-medium mb-6 leading-tight text-left text-white">
           EXPLORE OUR DESTINATIONS
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mt-4 mb-8 text-white max-w-xl leading-relaxed text-left font-lato font-normal">
            Discover our most popular destinations
          </p>
          <br></br>
          <br></br>
          <button
            className="w-50 h-20 py-3 text-white border-6 border-white rounded-full text-xl font-bold hover:bg-white hover:text-black transition-all duration-300"
             aria-label="Explore destinations"
        >
            Where to?
          </button>

        </div>
      </div>

      {/* Right Side Icons */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 flex flex-col space-y-4">
        {heroImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImageIndex(index)}
            className={`w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
              activeImageIndex === index
                ? 'bg-white border-white text-gray-800 shadow-lg'
                : 'bg-transparent border-white/60 text-white hover:bg-white/10 hover:border-white'
            }`}
            aria-label={`Switch to ${image.alt}`}
          >
            <Icon 
              icon={image.icon} 
              width={20} 
              height={20}
            />
          </button>
        ))}
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
