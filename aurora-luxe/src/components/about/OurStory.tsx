'use client';

import { useState, useEffect } from 'react';

interface StoryContent {
  title: string;
  paragraphs: string[];
}

const storyContent: StoryContent = {
  title: 'Our Story',
  paragraphs: [
    'Founded in 2010, Aurora Luxe began with a simple yet ambitious vision: to redefine luxury travel by creating bespoke experiences that reflect the unique desires and dreams of each traveler.',
    'Our journey started when our founder, inspired by a transformative trip to the Northern Lights, realized that true luxury lies not just in five-star accommodations, but in those rare moments that take your breath away and change your perspective forever.',
    'Today, we partner with the world\'s most exclusive hotels, resorts, and local experts to craft journeys that are as unique as you are.'
  ]
};

export default function OurStory() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">
            {storyContent.title}
          </h2>
          <div className="max-w-4xl mx-auto lg:mx-0">
            {storyContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}