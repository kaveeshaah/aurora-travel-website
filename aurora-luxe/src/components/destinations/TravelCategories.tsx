'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useNavigation } from '../common/NavigationProvider';

const categories = [
  {
    id: 'beach',
    title: 'Beach Escapes',
    destinations: [
      {
        name: 'MALDIVES',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=80',
        description: 'Crystal clear waters and luxury overwater villas'
      }
    ]
  },
  {
    id: 'city',
    title: 'City Luxury',
    destinations: [
      {
        name: 'KYOTO',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80',
        description: 'Ancient temples and modern luxury in Japan'
      }
    ]
  },
  {
    id: 'adventure',
    title: 'Adventure',
    destinations: [
      {
        name: 'SCOTLAND',
        image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&auto=format&fit=crop&q=80',
        description: 'Dramatic highlands and historic castles'
      }
    ]
  }
];

export default function TravelCategories() {
  const [activeCategory, setActiveCategory] = useState(0);
  const { navigate } = useNavigation();

  const handleDiscoverMore = () => {
    // Navigate to specific destination or destinations page
    navigate('/destinations');
  };

  const nextCategory = () => {
    setActiveCategory((prev) => (prev + 1) % categories.length);
  };

  const prevCategory = () => {
    setActiveCategory((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Category Headers */}
        <div className="flex justify-center mb-12 space-x-8 md:space-x-16">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`text-lg md:text-xl font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-2'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Destination Cards Container */}
        <div className="relative">
          <div className="flex justify-center items-center">
            {/* Previous Button */}
            <button
              onClick={prevCategory}
              className="absolute left-0 z-10 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-all duration-300"
              aria-label="Previous category"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Active Category Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-16">
              {categories.map((category, categoryIndex) => 
                category.destinations.map((destination, destIndex) => (
                  <div
                    key={`${category.id}-${destIndex}`}
                    className={`relative group cursor-pointer transform transition-all duration-500 ${
                      categoryIndex === activeCategory
                        ? 'opacity-100 scale-100'
                        : 'opacity-50 scale-95'
                    }`}
                  >
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={destination.image}
                        alt={destination.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Content Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4 tracking-wide">
                          {destination.name}
                        </h3>
                        
                        <button
                          onClick={() => handleDiscoverMore()}
                          className="self-start px-6 py-2 border-2 border-white rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
                        >
                          Discover More
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={nextCategory}
              className="absolute right-0 z-10 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-all duration-300"
              aria-label="Next category"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Category Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeCategory === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to category ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}