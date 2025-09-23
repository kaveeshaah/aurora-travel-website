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

      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full">
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

          <div className="flex justify-center">
            <div className="bg-white/90 rounded-2xl p-12 shadow-2xl border border-amber-100 max-w-4xl w-full backdrop-blur-sm">
              <div>
                <h3 className="font-serif text-3xl lg:text-4xl text-slate-900 mb-12 tracking-wide text-center">
                  Get in Touch
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="group">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0 w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-500 transition-all duration-300">
                            <IconComponent className="w-8 h-8 text-amber-700 group-hover:text-white transition-colors duration-300" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-serif text-xl text-slate-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                              {info.title}
                            </h4>
                            <div className="space-y-1">
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-slate-600 text-base font-lato leading-relaxed">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-16 pt-12 border-t border-amber-200">
                  <h4 className="font-serif text-xl text-slate-900 mb-6 text-center">
                    Follow Our Journey
                  </h4>
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
          </div>
        </div>
      </div>
    </section>
  );
}


