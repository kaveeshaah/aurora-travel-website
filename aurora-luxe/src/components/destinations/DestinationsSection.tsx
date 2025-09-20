'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Destination {
  id: number;
  name: string;
  region: string;
  description: string;
  image: string;
  highlights: string[];
  bestTime: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Santorini',
    region: 'Greece',
    description: 'Discover the iconic white-washed buildings and breathtaking sunsets of this volcanic island paradise.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    highlights: ['Sunset Views', 'Wine Tasting', 'Private Villas', 'Boat Tours'],
    bestTime: 'May - October'
  },
  {
    id: 2,
    name: 'Bora Bora',
    region: 'French Polynesia',
    description: 'Experience the ultimate tropical luxury with overwater bungalows and crystal-clear lagoons.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    highlights: ['Overwater Bungalows', 'Snorkeling', 'Spa Retreats', 'Private Islands'],
    bestTime: 'April - November'
  },
  {
    id: 3,
    name: 'Aspen',
    region: 'Colorado, USA',
    description: 'Ski the world-class slopes and enjoy après-ski luxury in this exclusive mountain resort town.',
    image: 'https://images.unsplash.com/photo-1551524164-6cf2ac531f54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    highlights: ['Skiing', 'Fine Dining', 'Art Galleries', 'Mountain Views'],
    bestTime: 'December - March'
  }
];

export default function DestinationsSection() {
  const [selectedDestination, setSelectedDestination] = useState(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Exclusive Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From tropical paradises to mountain retreats, each destination offers a unique luxury experience.
          </p>
        </div>

        {/* Destination Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {destinations.map((destination, index) => (
            <button
              key={destination.id}
              onClick={() => setSelectedDestination(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedDestination === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {destination.name}
            </button>
          ))}
        </div>

        {/* Selected Destination Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={destinations[selectedDestination].image}
                alt={destinations[selectedDestination].name}
                fill
                className="object-cover transition-all duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {destinations[selectedDestination].name}
              </h3>
              <p className="text-xl text-blue-600 font-medium">
                {destinations[selectedDestination].region}
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              {destinations[selectedDestination].description}
            </p>

            {/* Highlights */}
            <div>
              <h4 className="font-serif text-xl font-bold text-gray-900 mb-4">
                What to Expect
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {destinations[selectedDestination].highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Time to Visit */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-serif text-lg font-bold text-gray-900 mb-2">
                Best Time to Visit
              </h4>
              <p className="text-gray-600">
                {destinations[selectedDestination].bestTime}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                Plan Your Visit
              </button>
              <button className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-colors">
                View Gallery
              </button>
            </div>
          </div>
        </div>

        {/* All Destinations Grid */}
        <div className="mt-20">
          <h3 className="font-serif text-2xl font-bold text-gray-900 text-center mb-8">
            Explore All Destinations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={destination.id}
                className="group cursor-pointer"
                onClick={() => setSelectedDestination(index)}
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h4 className="font-serif text-xl font-bold text-gray-900 mb-1">
                  {destination.name}
                </h4>
                <p className="text-gray-600">{destination.region}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
