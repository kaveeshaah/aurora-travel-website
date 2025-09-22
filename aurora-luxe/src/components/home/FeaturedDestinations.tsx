// src/components/home/FeaturedDestinations.tsx

import React from 'react';
import Image from 'next/image';

const featuredDestinations = [
  { id: 1, name: 'Maldives', image: 'https://images.unsplash.com/photo-1547528114-f4daa226e256?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Netherlands', image: 'https://images.unsplash.com/photo-1609875103184-cba8296a5220?q=80&w=269&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
     { id: 3, name: 'Bali', image: '/images/bali.jpg' }
 
];

const FeaturedDestinations = () => (
  <section className="w-full flex flex-col items-center justify-center py-8 pl-36"><br></br>
  <br></br>
    <h2 className="font-serif text-4xl sm:text-3xl lg:text-4xl font-medium mb-6 leading-tight text-center text-black self-start">Featured Destinations</h2><br></br><br></br>
    <br></br>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-20 max-w-7xl w-full justify-center items-center">
      {featuredDestinations.map(dest => (
        <div
          key={dest.id}
          className="relative rounded-3xl overflow-hidden shadow-lg flex items-center justify-center aspect-[9/16] bg-white"
        >
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-serif text-4xl sm:text-3xl lg:text-4xl font-medium leading-tight text-center text-white drop-shadow-lg mb-16 uppercase">
              {dest.name}
            </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           
           
            <button
              className="w-50 py-3 text-white border-3 border-white rounded-full text-lg font-lato font-medium font-bold hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              aria-label={`Explore ${dest.name}`}
            >
              EXPLORE
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
  
);



export default FeaturedDestinations;
