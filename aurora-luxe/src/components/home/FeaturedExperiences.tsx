'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Experience {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  price: string;
  duration: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Private Safari in Kenya',
    location: 'Masai Mara, Kenya',
    description: 'Experience the Big Five in their natural habitat with our exclusive private safari guides and luxury tented camps.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 'From $15,000',
    duration: '7 Days'
  },
  {
    id: 2,
    title: 'Northern Lights in Iceland',
    location: 'Reykjavik, Iceland',
    description: 'Witness the aurora borealis from a luxury glass igloo with private chef and astronomer guide.',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 'From $8,500',
    duration: '5 Days'
  },
  {
    id: 3,
    title: 'Private Yacht in French Riviera',
    location: 'Monaco, France',
    description: 'Sail the Mediterranean on a luxury yacht with private chef, crew, and exclusive access to hidden coves.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 'From $25,000',
    duration: '10 Days'
  }
];

export default function FeaturedExperiences() {
  const [currentExperience, setCurrentExperience] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentExperience((prev) => (prev + 1) % experiences.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="experiences" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
            Featured Experiences
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Immerse yourself in once-in-a-lifetime adventures crafted exclusively for our discerning clients.
          </p>
        </div>

        {/* Main Experience Display */}
        <div className="relative">
          <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={experiences[currentExperience].image}
              alt={experiences[currentExperience].title}
              fill
              className="object-cover transition-all duration-1000"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Content Overlay */}
            <div className={`absolute inset-0 flex items-end p-8 lg:p-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="max-w-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {experiences[currentExperience].duration}
                  </span>
                  <span className="text-blue-400 font-medium">
                    {experiences[currentExperience].location}
                  </span>
                </div>
                
                <h3 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
                  {experiences[currentExperience].title}
                </h3>
                
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  {experiences[currentExperience].description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-amber-400">
                    {experiences[currentExperience].price}
                  </div>
                  <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentExperience(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentExperience === index
                    ? 'bg-white scale-125'
                    : 'bg-gray-500 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`group cursor-pointer transition-all duration-300 ${
                currentExperience === index ? 'opacity-100' : 'opacity-70 hover:opacity-100'
              }`}
              onClick={() => setCurrentExperience(index)}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className="font-serif text-xl font-bold mb-2">{experience.title}</h4>
              <p className="text-gray-400 text-sm">{experience.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
