'use client';

import { useState, useEffect } from 'react';

interface CTAContent {
  title: string;
  description: string;
  buttonText: string;
}

const ctaContent: CTAContent = {
  title: 'Ready to Begin Your Journey?',
  description: 'Let our travel experts craft a personalized luxury experience that exceeds your wildest dreams.',
  buttonText: 'Start Planning Your Adventure'
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
    <section className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-100 to-orange-100">
      <div className="max-w-5xl mx-auto w-full">
        <div className={`text-center transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Section divider line */}
          <div className="w-24 h-px bg-amber-500 mx-auto mb-12" />
          
          <h2 className="font-serif text-4xl lg:text-5xl text-slate-800 mb-8 tracking-wide">
            {ctaContent.title}
          </h2>
          
          <p className="text-lg lg:text-xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed font-lato">
            {ctaContent.description}
          </p>
          
          <button 
            onClick={handleButtonClick}
            className="bg-slate-800 text-white px-12 py-4 font-serif text-lg tracking-wide uppercase hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 border-2 border-slate-800 hover:border-amber-500 hover:scale-105"
          >
            {ctaContent.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}