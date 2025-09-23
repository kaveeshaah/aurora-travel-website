'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface LuxuryExperience {
  title: string;
  category: string;
  location: string;
  price: string;
  description: string;
  image: string;
}

const featuredExperience: LuxuryExperience = {
  title: 'Exclusive Overwater Villa Retreat',
  category: 'LUXURY VILLAS',
  location: 'Maldives',
  price: 'From $2,500/night',
  description: 'Escape to paradise in our handpicked overwater villas, where crystal-clear waters meet endless horizons. Experience unparalleled luxury with personalized service and world-class amenities.',
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.0.3'
};

export default function FeaturedLuxuryExperience() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl text-slate-800 mb-4 tracking-tight">
              Featured Luxury Experience
            </h2>
            <p className="text-lg text-slate-600 font-lato">
              Discover our most exclusive destinations and experiences
            </p>
            <br />
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-[400px] lg:h-[500px]">
                <Image
                  src={featuredExperience.image}
                  alt={featuredExperience.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-sm font-medium text-slate-800">{featuredExperience.location}</span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center text-center">
                {/* Category */}
                <p className="text-amber-600 text-sm font-medium uppercase tracking-widest mb-4 font-lato">
                  {featuredExperience.category}
                </p>

                {/* Title */}
                <h3 className="font-serif text-3xl lg:text-4xl text-slate-800 mb-4 tracking-tight">
                  {featuredExperience.title}
                </h3>
                <br />

                {/* Price */}
                <p className="text-xl text-amber-600 font-semibold mb-6">
                  {featuredExperience.price}
                </p>

                {/* Description */}
                <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-8 font-lato">
                  {featuredExperience.description}
                </p>
                <br />

                {/* CTA Button */}
                <div className="flex justify-center">
                  <button className="group inline-flex items-center justify-center space-x-3 bg-slate-800 text-white px-8 py-4 font-serif text-lg hover:bg-amber-500 hover:text-slate-900 transition-all duration-300">
                    <span>Book This Experience</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}