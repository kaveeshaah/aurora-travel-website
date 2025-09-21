'use client';

import { useState, useEffect } from 'react';
import { Award, Users, Globe, Star, LucideIcon } from 'lucide-react';
import Footer from '../components/common/Footer';

interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
}

const stats: Stat[] = [
  { icon: Users, label: 'Happy Travelers', value: '10,000+' },
  { icon: Globe, label: 'Destinations', value: '150+' },
  { icon: Award, label: 'Awards Won', value: '25+' },
  { icon: Star, label: 'Average Rating', value: '4.9' }
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About Aurora Luxe
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Where elegance meets adventure. We craft extraordinary travel experiences
              that transcend the ordinary and create memories that last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded in 2010, Aurora Luxe began with a simple yet ambitious vision:
                to redefine luxury travel by creating bespoke experiences that reflect
                the unique desires and dreams of each traveler.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our journey started when our founder, inspired by a transformative
                trip to the Northern Lights, realized that true luxury lies not just
                in five-star accommodations, but in those rare moments that take your
                breath away and change your perspective forever.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we partner with the world&apos;s most exclusive hotels, resorts,
                and local experts to craft journeys that are as unique as you are.
              </p>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="bg-gray-100 rounded-2xl p-8">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To create transformative travel experiences that inspire,
                  rejuvenate, and connect our guests with the extraordinary
                  beauty of our world.
                </p>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                  Our Values
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Excellence in every detail
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Authentic cultural experiences
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Sustainable and responsible travel
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Personalized service beyond expectations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`mb-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="font-serif text-3xl font-bold text-gray-900 text-center mb-12">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="font-serif text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`text-center transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-gray-50 rounded-2xl p-12">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let our travel experts craft a personalized luxury experience
                that exceeds your wildest dreams.
              </p>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-serif font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Planning Your Adventure
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}