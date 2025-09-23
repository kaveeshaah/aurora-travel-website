'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Mission background"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 to-orange-50/60" />
      </div>

      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full">
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Mission */}
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-4xl lg:text-5xl text-slate-800 mb-6">
                {missionContent.missionTitle}
              </h3>
              <br />
              <p className="text-slate-700 text-lg lg:text-xl font-lato leading-relaxed">
                {missionContent.missionText}
              </p>
            </div>
            
            {/* Values */}
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-4xl lg:text-5xl text-slate-800 mb-8">
                {missionContent.valuesTitle}
              </h3>
              <br />
              <div className="space-y-6">
                {missionContent.values.map((value, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-6 h-6 border-2 border-amber-500 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:bg-amber-500 transition-colors duration-300">
                      <div className="w-2 h-2 bg-amber-500 group-hover:bg-white transition-colors duration-300"></div>
                    </div>
                    <p className="text-slate-600 text-lg font-lato leading-relaxed">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}