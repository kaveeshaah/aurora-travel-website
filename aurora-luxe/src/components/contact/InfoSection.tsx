'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, LucideIcon } from 'lucide-react';

interface ContactInfoItem {
  icon: LucideIcon;
  title: string;
  details: string[];
}

const contactInfo: ContactInfoItem[] = [
  {
    icon: MapPin,
    title: 'Address',
    details: ['123 Luxury Avenue', 'New York, NY 10001', 'United States']
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@auroraluxe.com', 'concierge@auroraluxe.com']
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Monday - Friday: 9AM - 6PM', 'Weekend: 10AM - 4PM', '24/7 Emergency Support']
  }
];

export default function InfoSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Warm travel background"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 to-orange-50/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>

          {/* Section divider line */}
          <div className="flex justify-center mb-16">
            <div className="w-24 h-px bg-amber-500" />
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl text-slate-800 mb-20 text-center tracking-wide">
            Contact Information
          </h2>
          <br />
          <br />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl mx-auto">
            {/* Left Side */}
            <div className="space-y-16">
              {contactInfo.slice(0, 2).map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex flex-col lg:flex-row lg:items-start lg:gap-8 text-center lg:text-left">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6 lg:mb-0 mx-auto lg:mx-0">
                      <IconComponent className="w-8 h-8 text-amber-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl text-slate-900 mb-4 tracking-wide">
                        {info.title}
                      </h3>
                      <div className="space-y-3">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-slate-600 leading-relaxed text-lg font-lato">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Side */}
            <div className="space-y-16">
              {contactInfo.slice(2, 4).map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex flex-col lg:flex-row lg:items-start lg:gap-8 text-center lg:text-left">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6 lg:mb-0 mx-auto lg:mx-0">
                      <IconComponent className="w-8 h-8 text-amber-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl text-slate-900 mb-4 tracking-wide">
                        {info.title}
                      </h3>
                      <div className="space-y-3">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-slate-600 leading-relaxed text-lg font-lato">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <br />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-amber-200 max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl text-slate-900 mb-8 text-center tracking-wide">
              Follow Our Journey
            </h3>
            <div className="flex justify-center space-x-6">
              <button className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-slate-800 hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-sm font-semibold">f</span>
              </button>
              <button className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center hover:bg-amber-600 hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-sm font-semibold">t</span>
              </button>
              <button className="w-12 h-12 bg-slate-700 text-white rounded-full flex items-center justify-center hover:bg-slate-600 hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-sm font-semibold">i</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


