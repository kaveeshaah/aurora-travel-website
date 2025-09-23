'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Compass, MapPin } from 'lucide-react';

interface CTAContent {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  features: string[];
}

const ctaContent: CTAContent = {
  title: 'Ready to Begin Your Journey?',
  subtitle: 'Your Next Adventure Awaits',
  description: 'Let our travel experts craft a personalized luxury experience that exceeds your wildest dreams. From exotic destinations to intimate moments, we create journeys that transform perspectives.',
  buttonText: 'Start Planning Your Adventure',
  features: [
    'Personalized Itineraries',
    'Expert Local Guides',
    'Luxury Accommodations'
  ]
};

export default function CallToAction() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleButtonClick = () => {
    // Add navigation logic here - could navigate to contact page or booking form
    console.log('Navigate to booking/contact page');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-amber-50 to-slate-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 opacity-5">
        <Compass className="w-40 h-40 text-amber-400" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 opacity-5">
        <MapPin className="w-32 h-32 text-slate-400" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Decorative line */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent w-48"></div>
          </div>
          
          {/* Subtitle */}
          <p className="text-amber-600 text-sm lg:text-base font-medium uppercase tracking-widest mb-8 font-lato">
            {ctaContent.subtitle}
          </p>
          
          {/* Main title */}
          <h2 className="font-serif text-5xl lg:text-7xl xl:text-8xl text-slate-800 mb-12 tracking-tight leading-none max-w-5xl mx-auto">
            {ctaContent.title}
          </h2>
          <br />
          
          {/* Description */}
          <p className="text-xl lg:text-2xl text-slate-600 mb-16 max-w-5xl mx-auto leading-relaxed font-lato font-light">
            {ctaContent.description}
          </p>
          <br />
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-12 lg:gap-16 mb-20">
            {ctaContent.features.map((feature, index) => (
              <div 
                key={feature}
                className={`flex items-center space-x-3 text-slate-700 transition-all duration-700 delay-${300 + index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <span className="text-base lg:text-lg font-medium font-lato">{feature}</span>
              </div>
            ))}
          </div>
          <br />
          
          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button 
              onClick={handleButtonClick}
              className="group inline-flex items-center space-x-4 bg-slate-800 text-white px-12 lg:px-16 py-5 lg:py-6 font-serif text-lg lg:text-xl tracking-wide hover:bg-amber-500 hover:text-slate-900 transition-all duration-500 border-2 border-slate-800 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105"
            >
              <span>{ctaContent.buttonText}</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>

            <br />
            
            {/* Secondary text */}
            <p className="text-slate-500 text-base mt-8 font-lato">
              Free consultation • No commitment required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}