'use client';

import { useState, useEffect } from 'react';
import DestinationCard from './DestinationCard';

const destinations = [
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
  }
];

interface DestinationGridProps {
  filteredDestinations?: typeof destinations;
}

export default function DestinationGrid({ filteredDestinations = destinations }: DestinationGridProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      {filteredDestinations.map((destination, index) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
          index={index}
          isVisible={isVisible}
        />
      ))}
    </div>
  );
}