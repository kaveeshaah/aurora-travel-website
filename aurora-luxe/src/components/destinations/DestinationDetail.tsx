'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin, Star, Clock, Users, Check } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  region: string;
  country: string;
  description: string;
  longDescription: string;
  image: string;
  price: string;
  duration: string;
  maxGuests: number;
  rating: number;
  highlights: string[];
  bestTime: string;
  category: string;
}

interface DestinationDetailProps {
  destination: Destination;
}

export default function DestinationDetail({ destination }: DestinationDetailProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden">
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}>
          <div className="flex items-center text-gray-500 mb-4">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{destination.country}, {destination.region}</span>
          </div>

          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {destination.name}
          </h1>

          <div className="flex items-center mb-6">
            <div className="flex items-center mr-6">
              <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
              <span className="font-medium">{destination.rating}</span>
            </div>
            <span className="text-gray-500">•</span>
            <span className="ml-4 text-gray-600">{destination.category}</span>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {destination.longDescription}
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <div className="flex items-center text-gray-600 mb-2">
                <Clock className="w-5 h-5 mr-2" />
                <span className="font-medium">Duration</span>
              </div>
              <p className="text-gray-900">{destination.duration}</p>
            </div>
            <div>
              <div className="flex items-center text-gray-600 mb-2">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-medium">Max Guests</span>
              </div>
              <p className="text-gray-900">Up to {destination.maxGuests} guests</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
              Highlights
            </h3>
            <ul className="space-y-2">
              {destination.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-gray-600 mb-1">Starting from</p>
                <span className="font-serif text-3xl font-bold text-gray-900">
                  {destination.price}
                </span>
              </div>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-serif font-medium hover:bg-blue-700 transition-colors duration-300">
                Book Now
              </button>
            </div>
            <p className="text-sm text-gray-500">
              Best time to visit: {destination.bestTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}