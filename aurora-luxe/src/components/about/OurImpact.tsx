'use client';

import { useState, useEffect } from 'react';
import { Award, Users, Globe, Star, LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
}

interface ImpactContent {
  title: string;
  stats: Stat[];
}

const impactContent: ImpactContent = {
  title: 'Our Impact',
  stats: [
    { icon: Users, label: 'Happy Travelers', value: '10,000+' },
    { icon: Globe, label: 'Destinations', value: '150+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Star, label: 'Average Rating', value: '4.9' }
  ]
};

export default function OurImpact() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-serif text-4xl font-bold text-gray-900 text-center mb-12">
            {impactContent.title}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactContent.stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <IconComponent className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="font-serif text-4xl font-bold text-gray-900 mb-3">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-lg font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}