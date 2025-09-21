'use client';

import { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import DestinationGrid from '../components/destinations/DestinationGrid';
import FilterBar from '../components/destinations/FilterBar';

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

interface FilterState {
  region: string;
  category: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Maldives Paradise',
    region: 'Asia',
    country: 'Maldives',
    description: 'Pristine beaches and luxury overwater villas in crystal clear waters',
    image: '/images/hompage-range.jpg',
    price: 'From $2,500/night',
    duration: '7-14 days',
    maxGuests: 2,
    rating: 4.9,
    category: 'Beach'
  },
  {
    id: 2,
    name: 'Swiss Alps Retreat',
    region: 'Europe',
    country: 'Switzerland',
    description: 'Majestic mountain views and world-class skiing in the heart of the Alps',
    image: '/images/hompage-range.jpg',
    price: 'From $1,800/night',
    duration: '5-10 days',
    maxGuests: 6,
    rating: 4.8,
    category: 'Mountain'
  },
  {
    id: 3,
    name: 'Tokyo Luxury Experience',
    region: 'Asia',
    country: 'Japan',
    description: 'Immerse yourself in traditional culture meets modern luxury in Tokyo',
    image: '/images/hompage-range.jpg',
    price: 'From $1,200/night',
    duration: '6-12 days',
    maxGuests: 4,
    rating: 4.7,
    category: 'Cultural'
  },
  {
    id: 4,
    name: 'African Safari Adventure',
    region: 'Africa',
    country: 'Kenya',
    description: 'Witness the Great Migration and luxury safari experiences',
    image: '/images/hompage-range.jpg',
    price: 'From $3,000/night',
    duration: '8-15 days',
    maxGuests: 8,
    rating: 4.9,
    category: 'Adventure'
  }
];

export default function Destinations() {
  const [filters, setFilters] = useState<FilterState>({
    region: 'All Regions',
    category: 'All Categories'
  });
  const [isVisible, setIsVisible] = useState(false);
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>(destinations);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let filtered = destinations;

    if (filters.region !== 'All Regions') {
      filtered = filtered.filter(dest => dest.region === filters.region);
    }

    if (filters.category !== 'All Categories') {
      filtered = filtered.filter(dest => dest.category === filters.category);
    }

    setFilteredDestinations(filtered);
  }, [filters]);

  const handleFilterChange = (type: keyof FilterState, value: string) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Luxury Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Discover handpicked destinations where elegance meets adventure.
            Each location offers unparalleled luxury and unforgettable experiences.
          </p>
        </div>

        <FilterBar filters={filters} onFilterChange={handleFilterChange} />

        <div className={`text-center mb-8 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-600 font-serif">
            Showing {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}
          </p>
        </div>

        <DestinationGrid filteredDestinations={filteredDestinations} />

        {filteredDestinations.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                No destinations found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters to see more destinations.
              </p>
              <button
                onClick={() => setFilters({ region: 'All Regions', category: 'All Categories' })}
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-serif font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}
        </div>
      </section>
      <Footer />
    </div>
  );
}