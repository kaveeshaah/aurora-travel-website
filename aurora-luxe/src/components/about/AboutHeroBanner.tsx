'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

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
    <section className="relative min-h-screen flex items-center justify-center bg-black/80">
      {/* Background Image - Same pattern as destination hero */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1732008669462-daded78588bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGR1cmRsZSUyMGRvb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Durdle Door coastal landscape"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      </div>

      {/* Top positioned ABOUT US heading */}
      <div className="absolute top-20 left-0 right-0 z-10 text-center px-4">
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-sm border-1 sm:text-base tracking-widest uppercase mb-4 font-serif text-amber-200">
            {heroContent.brandText}
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight text-white">
            {heroContent.mainHeading}
          </h1>
        </div>
      </div>
      
      {/* Centered subtitle */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg sm:text-xl lg:text-xl leading-relaxed font-light text-white font-lato">
            &ldquo;{heroContent.subtitle}&rdquo;
          </p>
        </div>
      </div>

      {/* Bottom Content - Our Story section indicator */}
      <div className="absolute bottom-20 left-0 right-0 z-10 text-center px-4">
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Horizontal Line */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-px bg-amber-200" />
          </div>
          
          {/* Our Story Section Indicator */}
          <div className="flex flex-col items-center">
            <a href="/about#our-story" className="hover:text-amber-300 transition-colors">
              <h2 className="text-lg sm:text-xl tracking-widest uppercase mb-6 font-light text-amber-200 font-serif">
                {heroContent.sectionIndicator}
              </h2>
            </a>
            <br />
            <a href="/about#our-story" aria-label="Scroll to Our Story">
              <ChevronDown className="w-6 h-6 animate-bounce text-amber-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}