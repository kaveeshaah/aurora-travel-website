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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
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