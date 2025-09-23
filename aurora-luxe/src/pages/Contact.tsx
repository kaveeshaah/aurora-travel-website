'use client';

import { useState, useEffect } from 'react';
import ContactHeroBanner from '../components/contact/ContactHeroBanner';
import ContactForm from '../components/contact/FormSection';
import InfoSection from '../components/contact/InfoSection';
import MapSection from '../components/contact/MapSection';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      <ContactHeroBanner />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Contact Form Section */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex flex-col items-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-px bg-amber-200" />
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-slate-800 mb-8 text-center tracking-wide">Send Us a Message</h2>
              <div className="bg-white/80 rounded-2xl p-8 shadow-lg border border-slate-200 w-full max-w-2xl mx-auto">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex flex-col items-center mb-16">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-px bg-amber-200" />
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-slate-800 mb-8 text-center tracking-wide">Contact Information</h2>
              <div className="bg-white/80 rounded-2xl p-8 shadow-lg border border-slate-200 w-full max-w-2xl mx-auto">
                <InfoSection />
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex flex-col items-center mb-8">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-px bg-amber-200" />
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl text-slate-800 mb-8 text-center tracking-wide">Visit Our Office</h2>
              <div className="bg-white/80 rounded-2xl p-6 shadow-lg border border-slate-200 w-full max-w-2xl mx-auto">
                <MapSection />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}