'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'MALDIVES',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Crystal clear waters and pristine beaches'
  },
  {
    id: 2,
    name: 'BALI',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Tropical paradise with rich culture'
  },
  {
    id: 3,
    name: 'NETHERLANDS',
    image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Charming canals and tulip fields'
  },
  {
    id: 4,
    name: 'SRI LANKA',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Ancient temples and tea plantations'
  },
  {
    id: 5,
    name: 'SWITZERLAND',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Majestic Alps and pristine lakes'
  },
  {
    id: 6,
    name: 'JAPAN',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Cherry blossoms and ancient traditions'
  }
];

export default function DestinationsGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Discover Your Dream Destination
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From tropical paradises to mountain retreats, explore our curated collection of the world's most exclusive destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift cursor-pointer"
              onMouseEnter={() => setHoveredCard(destination.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {destination.description}
                  </p>
                  <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 opacity-0 group-hover:opacity-100">
                    EXPLORE
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                {hoveredCard === destination.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
