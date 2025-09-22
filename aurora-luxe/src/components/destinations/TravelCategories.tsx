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
        image: 'https://images.unsplash.com/photo-1586495985096-787fb4a54ac0?w=600&auto=format&fit=crop&q=80',
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
        image: 'https://plus.unsplash.com/premium_photo-1690576837220-8be94b699fc4?w=600&auto=format&fit=crop&q=80',
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

  return (
    <section className="py-16 px-4 bg-white min-h-screen flex flex-col justify-center">
      <div className="w-full">
        {/* Category Headers */}
        <div className="flex justify-center mb-20 space-x-16 md:space-x-28 lg:space-x-32 py-8">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`text-xl md:text-2xl lg:text-3xl font-semibold transition-all duration-300 px-6 py-3 font-lato ${
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
        <div className="w-full flex justify-center">
          <div className="flex justify-center items-center gap-6">
            {/* Render cards in specific order: left, center (active), right */}
            {[
              // Left card (previous card or last if active is first)
              categories[(activeCategory - 1 + categories.length) % categories.length],
              // Center card (active)
              categories[activeCategory],
              // Right card (next card or first if active is last)
              categories[(activeCategory + 1) % categories.length]
            ].map((category) => {
              const originalIndex = categories.findIndex(cat => cat.id === category.id);
              const isActive = originalIndex === activeCategory;
              
              return (
                <div
                  key={category.id}
                  className={`relative group cursor-pointer transition-all duration-1000 ease-in-out transform-gpu ${
                    isActive
                      ? 'scale-100 z-20'
                      : 'scale-85 opacity-80'
                  }`}
                  style={{
                    transformOrigin: 'center center',
                    willChange: 'transform, opacity'
                  }}
                  onClick={() => setActiveCategory(originalIndex)}
                >
                  <div className={`relative overflow-hidden shadow-xl transition-all duration-1000 ease-in-out ${
                    isActive ? 'h-[450px] w-[350px]' : 'h-[380px] w-[290px]'
                  }`}>
                    <Image
                      src={category.destinations[0].image}
                      alt={category.destinations[0].name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Destination Name - Top Center */}
                    <div className="absolute top-0 left-0 right-0 pt-6 text-white">
                      <div className="text-center">
                        <br />
                        <h3 className={`font-bold font-serif tracking-wide transition-all duration-800 ease-in-out ${
                          isActive ? 'text-3xl' : 'text-xl'
                        }`}>
                          {category.destinations[0].name}
                        </h3>
                      </div>
                    </div>

                    {/* Button - Bottom Center */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-center h-12 flex justify-center items-start">
                        {isActive && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDiscoverMore();
                            }}
                            className="px-8 py-3 text-white border-2 border-white rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
                          >
                            DISCOVER MORE
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}