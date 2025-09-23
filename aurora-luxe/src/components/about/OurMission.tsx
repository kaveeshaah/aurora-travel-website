'use client';

import { useState, useEffect } from 'react';

interface MissionContent {
  missionTitle: string;
  missionText: string;
  valuesTitle: string;
  values: string[];
}

const missionContent: MissionContent = {
  missionTitle: 'Our Mission',
  missionText: 'To create transformative travel experiences that inspire, rejuvenate, and connect our guests with the extraordinary beauty of our world.',
  valuesTitle: 'Our Values',
  values: [
    'Excellence in every detail',
    'Authentic cultural experiences',
    'Sustainable and responsible travel',
    'Personalized service beyond expectations'
  ]
};

export default function OurMission() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}>
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="font-serif text-3xl font-bold text-gray-900 mb-6 text-center">
              {missionContent.missionTitle}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8 text-lg text-center max-w-3xl mx-auto">
              {missionContent.missionText}
            </p>
            
            <h3 className="font-serif text-3xl font-bold text-gray-900 mb-6 text-center">
              {missionContent.valuesTitle}
            </h3>
            <ul className="space-y-4 max-w-2xl mx-auto">
              {missionContent.values.map((value, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-gray-700 text-lg">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}