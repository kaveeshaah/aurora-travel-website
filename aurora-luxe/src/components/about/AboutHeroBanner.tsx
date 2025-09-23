'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroContent {
  brandText: string;
  mainHeading: string;
  subtitle: string;
  sectionIndicator: string;
}

const heroContent: HeroContent = {
  brandText: 'AURORA LUXE',
  mainHeading: 'ABOUT US',
  subtitle: 'Creating unforgettable journeys with elegance, exclusivity, and care.',
  sectionIndicator: 'OUR STORY'
};

export default function AboutHeroBanner() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/19/nomad.JPG?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGhpa2luZ3xlbnwwfHwwfHx8MA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Fallback gradient if image doesn't load */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 opacity-80" />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Content */}
      <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="mb-8">
          <p className="text-sm sm:text-base tracking-widest uppercase mb-4 font-light">
            {heroContent.brandText}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
            {heroContent.mainHeading}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
            &ldquo;{heroContent.subtitle}&rdquo;
          </p>
        </div>
        
        {/* Horizontal Line */}
        <div className="w-32 h-px bg-white mx-auto mb-16" />
        
        {/* Our Story Section Indicator */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg sm:text-xl tracking-widest uppercase mb-4 font-light">
            {heroContent.sectionIndicator}
          </h2>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
}