'use client';

import Image from 'next/image';
import { MapPin, Star, Clock, Users } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  region: string;
  country: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  maxGuests: number;
  rating: number;
  category: string;
}

interface DestinationCardProps {
  destination: Destination;
  index: number;
  isVisible: boolean;
}

export default function DestinationCard({ destination, index, isVisible }: DestinationCardProps) {
  return (
    <div
      className={`group cursor-pointer transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${700 + index * 200}ms` }}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-medium rounded-full">
              {destination.category}
            </span>
          </div>

          <div className="absolute top-4 right-4">
            <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-900">{destination.rating}</span>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-serif font-medium hover:bg-gray-100 transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0">
              Explore Destination
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center text-gray-500 mb-3">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{destination.country}, {destination.region}</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {destination.name}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
            {destination.description}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{destination.duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>Up to {destination.maxGuests} guests</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl font-bold text-gray-900">
                {destination.price}
              </span>
              <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">
                View Details →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}