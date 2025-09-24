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
    <section id="destination-cards" className="py-16 px-4 bg-white min-h-screen flex flex-col justify-center">
      <div className="w-full">
        {/* Category Headers */}
        <div className="flex justify-center items-center mb-20 py-8">
          <div className="grid grid-cols-3 gap-8 md:gap-16 lg:gap-20 max-w-4xl">
            {categories.map((category, index) => (
              <div key={category.id} className="flex justify-center">
                <button
                  onClick={() => setActiveCategory(index)}
                  className={`text-xl md:text-2xl lg:text-xl font-semibold transition-all duration-300 px-6 py-3 font-lato whitespace-nowrap ${
                    activeCategory === index
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-slate-800'
                  }`}
                >
                  {category.title}
                </button>
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        {/* Destination Cards Container */}
        <div className="w-full max-w-none flex justify-center">
          <div className="flex justify-center items-center gap-12 w-full max-w-7xl">{/* Render cards in specific order: left, center (active), right */}
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
                  className={`relative group cursor-pointer transition-all duration-500 ease-in-out transform-gpu hover:shadow-2xl hover:shadow-black/30 ${
                    isActive
                      ? 'scale-100 z-20'
                      : 'scale-88 opacity-85 hover:scale-94 hover:opacity-95'
                  }`}
                  style={{
                    transformOrigin: 'center center',
                    willChange: 'transform, opacity'
                  }}
                  onClick={() => setActiveCategory(originalIndex)}
                >
                  <div className={`relative overflow-hidden shadow-xl transition-all duration-500 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2 ${
                    isActive ? 'h-[550px] w-[420px]' : 'h-[460px] w-[360px]'
                  }`}>
                    <Image
                      src={category.destinations[0].image}
                      alt={category.destinations[0].name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-all duration-300 ease-out group-hover:scale-115 group-hover:brightness-110 group-hover:contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 group-hover:via-transparent group-hover:to-black/10 transition-all duration-300" />
                    
                    {/* Destination Name - Top Center */}
                    <div className="absolute top-0 left-0 right-0 pt-6 text-white group-hover:transform group-hover:translate-y-1 transition-all duration-300">
                      <div className="text-center">
                        <br />
                        <h3 className={`font-bold font-serif tracking-wider transition-all duration-400 ease-in-out group-hover:text-white group-hover:drop-shadow-xl group-hover:scale-105 ${
                          isActive ? 'text-4xl' : 'text-2xl'
                        }`}>
                          {category.destinations[0].name}
                        </h3>
                      </div>
                    </div>

                    {/* Button - Bottom Center */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white group-hover:transform group-hover:-translate-y-1 transition-all duration-300">
                      <div className="text-center h-12 flex justify-center items-start">
                        {isActive && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDiscoverMore();
                            }}
                            className="w-40 h-14 py-2 text-white border-3 border-white rounded-full text-lg font-normal hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg transition-all duration-200 transform cursor-pointer"
                          >
                            Discover More
                          </button>
                          
                        )}
                      </div>
                      <br />
                      <br />
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