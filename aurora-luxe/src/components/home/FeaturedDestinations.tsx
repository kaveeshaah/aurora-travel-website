// src/components/home/FeaturedDestinations.tsx

import React from 'react';

const featuredDestinations = [
  { id: 1, name: 'Maldives', image: '/images/maldivs.jpg' },
  { id: 2, name: 'Nethearland', image: '/images/netherlands.jpg' },
  { id: 3, name: 'Bali', image: '/images/bali.jpg' },
  { id: 4, name: 'Sri Lanka', image: '/images/sri-lanka.jpg' },
  { id: 5, name: 'Maldives', image: '/images/maldivs.jpg' },
  { id: 6, name: 'Nethearland', image: '/images/netherlands.jpg' }
 
];

const FeaturedDestinations = () => (
  <section className="w-full flex flex-col items-center justify-center py-8"><br></br>
  <br></br>
    <h2 className="text-center mb-16 text-4xl font-bold">Featured Destinations</h2><br></br><br></br>
    <br></br>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-20 max-w-7xl w-full justify-center items-center">
      {featuredDestinations.map(dest => (
        <div
          key={dest.id}
          className="relative rounded-3xl overflow-hidden shadow-lg flex items-center justify-center aspect-[9/16] bg-white"
        >
          <img
            src={dest.image}
            alt={dest.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white text-4xl font-bold drop-shadow-lg mb-16 tracking-wide uppercase">
              {dest.name}
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           
           
            <button
              className="w-50 py-3 text-white border-4 border-white rounded-full text-lg font-medium font-bold hover:bg-white hover:text-black transition-all duration-300"
              aria-label={`Explore ${dest.name}`}
            >
              Explore
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
  
);



export default FeaturedDestinations;
