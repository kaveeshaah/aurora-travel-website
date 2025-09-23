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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
            <h2 className="font-serif text-4xl font-bold mb-6">
              {ctaContent.title}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
              {ctaContent.description}
            </p>
            <button 
              onClick={handleButtonClick}
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-serif font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {ctaContent.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}