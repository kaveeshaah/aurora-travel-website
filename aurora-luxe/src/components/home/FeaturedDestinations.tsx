// src/components/home/FeaturedDestinations.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const featuredDestinations = [
  { id: 1, name: 'Maldives', image: 'https://images.unsplash.com/photo-1547528114-f4daa226e256?w=600&auto=format&fit=crop&q=90&ixlib=rb-4.1.0' },
  { id: 2, name: 'Netherlands', image: 'https://images.unsplash.com/photo-1609875103184-cba8296a5220?w=600&auto=format&fit=crop&q=90&ixlib=rb-4.1.0'},
  { id: 3, name: 'Bali', image: 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&auto=format&fit=crop&q=90&ixlib=rb-4.1.0' }
];

const FeaturedDestinations = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="featured-destinations" className="relative min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-amber-50 to-slate-100">
      <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Section Header */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-32 sm:w-48"></div>
            </div>
            <br />
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-slate-800 mb-4 sm:mb-6 tracking-tight">
              Featured Destinations
            </h2>
            <br />
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-lato px-4 sm:px-0">
              Discover our handpicked destinations that promise unforgettable experiences
            </p>
            <br />
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {featuredDestinations.map((dest, index) => (
              <div
                key={dest.id}
                className={`group cursor-pointer transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
              >
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 sm:hover:-translate-y-3 aspect-[3/4] sm:aspect-[9/16] bg-slate-800 will-change-transform">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={95}
                    priority={index === 0}
                  />
                  
                  {/* Lighter Gradient Overlay for better image clarity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8 uppercase tracking-wide drop-shadow-2xl transition-transform duration-500 group-hover:scale-105">
                      {dest.name}
                    </h3>
                    <br />

                    
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform translate-y-8 group-hover:translate-y-0">
                      <button className="group/btn relative overflow-hidden bg-white text-slate-800 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-medium text-sm sm:text-base tracking-wide hover:shadow-xl transition-all duration-300 ease-out hover:scale-110 will-change-transform min-w-[120px] sm:min-w-[160px] flex items-center justify-center space-x-2">
                        <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1">Explore</span>
                        <ArrowRight className="w-4 h-4 relative z-10 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
                        
                        {/* Animated background effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out"></div>
                        
                        {/* Text color change overlay */}
                        <div className="absolute inset-0 bg-white transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out opacity-0 group-hover/btn:opacity-100"></div>
                        <span className="absolute inset-0 flex items-center justify-center space-x-2 text-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 ease-out">
                          <span className="transition-transform duration-300 group-hover/btn:translate-x-1">Explore</span>
                          <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
