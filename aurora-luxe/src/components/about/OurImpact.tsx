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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full">
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Section divider line */}
          <div className="flex justify-center mb-16">
            <div className="w-24 h-px bg-amber-400" />
          </div>
          
          <h2 className="font-serif text-4xl lg:text-6xl text-white text-center mb-20 tracking-wide">
            {impactContent.title}
          </h2>
          <br />
          <br />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20">
            {impactContent.stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-amber-400 rounded-full mb-8 group-hover:bg-amber-400 group-hover:border-amber-500 transition-all duration-300">
                    <IconComponent className="w-10 h-10 text-amber-400 group-hover:text-slate-900 transition-colors duration-300" />
                  </div>
                  <div className="font-serif text-4xl lg:text-5xl text-white mb-4">
                    {stat.value}
                  </div>
                  <br />
                  <div className="text-amber-200 text-base lg:text-lg font-lato tracking-wider uppercase">
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