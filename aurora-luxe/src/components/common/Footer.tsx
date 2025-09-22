'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe email:', email);
    setEmail('');
  };

  return (
    <section className="flex flex-col items-center justify-center py-16 mt-32 bg-slate-800 text-white" style={{ borderTopLeftRadius: '40px', borderTopRightRadius: '40px', marginLeft: '5rem', width: 'calc(100% - 5rem)' }}>
      <div className="max-w-4xl mx-auto px-6 text-center w-full">
        {/* Company Name and Description */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-medium mb-10 font-serif">Aurora Luxe Travels</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto font-lato">
            Aurora Luxe Travels curates bespoke journeys to the world&apos;s most exclusive destinations. With a passion for elegance 
            and detail, we craft seamless luxury escapes designed for the discerning traveler.
          </p>
          <br />
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          <div className="flex flex-col items-center gap-2">
            <Icon icon="mdi:phone" width={24} height={24} className="text-white" />
            <span className="text-gray-300 text-sm">+94 771 469 4101</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <Icon icon="mdi:email" width={24} height={24} className="text-white" />
            <span className="text-gray-300 text-sm">auroraluxe@gmail.com</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <Icon icon="mdi:map-marker" width={24} height={24} className="text-white" />
            <span className="text-gray-300 text-sm text-center">No. 68A Senanayake Crescent,<br />Colombo 07, Sri Lanka</span>
          </div>
          <br />
        </div>
        <br />

        {/* Newsletter Subscription */}
        <div className="mb-12 flex flex-col items-center">
          <h3 className="text-2xl font-medium mb-6">Subscribe to our Newsletter</h3>
          <br />
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email here"
              className="px-4 py-5 text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 border-0 rounded-md w-64"
              required
            />
            <button
              type="submit"
              className="w-32 py-3 text-white border-2 border-white rounded-full text-lg font-lato font-medium font-bold hover:bg-white hover:text-slate-800 transition-all duration-300 cursor-pointer"
            >
              SUBSCRIBE
            </button>
          </form>
          <br />
        </div>

        {/* Help & Support */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold mb-6">Help & Support</h4>
          <br />
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-gray-300">
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
          <br />
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-8 mb-12">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Icon icon="mdi:instagram" width={28} height={28} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Icon icon="mdi:twitter" width={28} height={28} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Icon icon="mdi:facebook" width={28} height={28} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Icon icon="mdi:youtube" width={28} height={28} />
          </a>
        </div>
        <br />

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-600">
          <p className="text-gray-400 text-sm">
            © 2025 Aurora Luxe Travels. All Rights Reserved
          </p>
          <br />
        </div>
      </div>
    </section>
  );
};

export default Footer;

