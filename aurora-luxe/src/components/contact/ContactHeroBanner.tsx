// ContactHeroBanner.tsx
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const heroContent = {
  brandText: 'AURORA LUXE',
  mainHeading: 'CONTACT',
  subtitle: 'Let us help you plan your next unforgettable journey. Reach out to our team for personalized assistance.',
  sectionIndicator: 'GET IN TOUCH',
};

export default function ContactHeroBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black/80">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1500&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlJTIwdHJhdmVsfGVufDB8fDB8fHww"
          alt="Nature travel background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      </div>

      {/* Top positioned CONTACT heading */}
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

      {/* Bottom Content - Get In Touch section indicator */}
      <div className="absolute bottom-20 left-0 right-0 z-10 text-center px-4">
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Horizontal Line */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-px bg-amber-200" />
          </div>

          {/* Get In Touch Section Indicator */}
          <div className="flex flex-col items-center">
            <h2 className="text-lg sm:text-xl tracking-widest uppercase mb-6 font-light text-amber-200 font-serif">
              {heroContent.sectionIndicator}
            </h2>
            <br />
            <ChevronDown
              className="w-6 h-6 animate-bounce text-amber-200 hover:text-amber-100 transition-colors cursor-pointer"
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
