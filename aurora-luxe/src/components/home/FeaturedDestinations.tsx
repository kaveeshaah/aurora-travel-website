'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const featuredDestinations = [
  {
    id: 1,
    name: 'Maldives Paradise',
    country: 'Maldives',
    image: '/images/hompage-range.jpg',
    price: 'From $2,500/night',
    description: 'Pristine beaches and luxury overwater villas'
  },
  {
    id: 2,
    name: 'Swiss Alps Retreat',
    country: 'Switzerland',
    image: '/images/hompage-range.jpg',
    price: 'From $1,800/night',
    description: 'Majestic mountain views and world-class skiing'
  },
  {
    id: 3,
    name: 'Tokyo Luxury Experience',
    country: 'Japan',
    image: '/images/hompage-range.jpg',
    price: 'From $1,200/night',
    description: 'Traditional culture meets modern luxury'
  }
];

export default function FeaturedDestinations() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked luxury experiences in the worlds most exclusive locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-7xl mx-auto">
          {featuredDestinations.map((destination, index) => (
            <div
              key={destination.id}
              className={`w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div className="relative h-64">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-serif text-lg font-bold text-gray-900">
                    {destination.price}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}