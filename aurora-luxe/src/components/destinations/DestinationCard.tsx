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
      className={`group cursor-pointer transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${700 + index * 100}ms` }}
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 border border-slate-100 hover:border-amber-200 will-change-transform">
        <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

          <div className="absolute top-4 left-4 transition-transform duration-300 ease-out group-hover:scale-105 will-change-transform">
            <span className="inline-block px-4 py-2 bg-white/95 backdrop-blur-sm text-slate-800 text-sm font-medium rounded-full shadow-md">
              {destination.category}
            </span>
          </div>

          <div className="absolute top-4 right-4 transition-transform duration-300 ease-out group-hover:scale-105 will-change-transform">
            <div className="flex items-center space-x-1 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <Star className="w-4 h-4 text-amber-400 fill-current" />
              <span className="text-sm font-semibold text-slate-800">{destination.rating}</span>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <button className="bg-white/95 backdrop-blur-sm text-slate-800 px-8 py-4 rounded-full font-serif font-semibold hover:bg-slate-800 hover:text-white transition-all duration-300 ease-out transform translate-y-4 group-hover:translate-y-0 shadow-lg will-change-transform">
              Explore Destination
            </button>
          </div>
        </div>

        <div className="p-8 transition-colors duration-300 ease-out group-hover:bg-slate-50/30">
          <div className="flex items-center text-slate-500 mb-4 transition-colors duration-300 ease-out group-hover:text-amber-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">{destination.country}, {destination.region}</span>
          </div>

          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-slate-800 mb-4 group-hover:text-amber-700 transition-colors duration-300 ease-out leading-tight">
            {destination.name}
          </h3>

          <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed transition-colors duration-300 ease-out group-hover:text-slate-700">
            {destination.description}
          </p>

          <div className="flex items-center justify-between text-sm text-slate-500 mb-6 transition-colors duration-300 ease-out group-hover:text-slate-600">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="font-medium">{destination.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span className="font-medium">Up to {destination.maxGuests} guests</span>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6 transition-colors duration-300 ease-out group-hover:border-amber-200">
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl font-bold text-slate-800 transition-colors duration-300 ease-out group-hover:text-amber-700">
                {destination.price}
              </span>
              <button className="text-slate-600 hover:text-slate-800 font-semibold transition-all duration-300 ease-out hover:translate-x-1 flex items-center space-x-2 will-change-transform">
                <span>View Details</span>
                <span className="transform transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}