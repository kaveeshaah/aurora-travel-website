'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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
    <section id="our-story" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-stone-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Travel story background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 to-stone-100/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto ml-auto mr-16">
        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Section divider line */}
          <div className="flex justify-center mb-16">
            <div className="w-24 h-px bg-amber-500" />
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl text-slate-800 mb-20 text-center tracking-wide">
            {storyContent.title}
          </h2>
          <br />
          
          <div className="space-y-12 max-w-3xl mx-auto">
            {storyContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-600 leading-relaxed text-lg lg:text-xl font-lato text-center">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}