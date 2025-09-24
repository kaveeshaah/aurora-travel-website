'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import LightweightIcon from './LightweightIcon';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe email:', email);
    setEmail('');
  };

  return (
    <section
      className="flex flex-col items-center justify-center py-16 mt-32 bg-slate-800 text-white"
      style={{
        borderTopLeftRadius: '40px',
        borderTopRightRadius: '40px',
        marginLeft: '5rem',
        width: 'calc(100% - 5rem)'
      }}
    >
      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col items-center gap-12 text-center">
        {/* Company Name and Description */}
        <div>
          <h2 className="text-3xl font-medium mb-6 font-serif"><br></br>Aurora Luxe Travels</h2><br></br><br></br>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto font-lato mb-2">
            Aurora Luxe Travels curates bespoke journeys to the worlds most exclusive destinations. With a passion for elegance and detail, we craft seamless luxury escapes designed for the discerning traveler.
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex flex-col items-center gap-2">
            <LightweightIcon name="mdi:phone" size={24} className="text-white" />
            <span className="text-gray-300 text-sm">+94 771 469 4101</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LightweightIcon name="mdi:email" size={24} className="text-white" />
            <span className="text-gray-300 text-sm">auroraluxe@gmail.com</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LightweightIcon name="mdi:map-marker" size={24} className="text-white" />
            <span className="text-gray-300 text-sm text-center">
              No. 68A Senanayake Crescent,<br />Colombo 07, Sri Lanka
            </span>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col items-center gap-3 w-full">
          <h3 className="text-2xl font-medium mb-2">Subscribe to our Newsletter</h3>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="   Enter your Email here"
              className="pl-12 pr-4 py-5 text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 border-2 rounded-full w-64"
              required
            />
            <button
              type="submit"
              aria-label="Send"
              className="w-12 h-12 flex items-center justify-center text-white border-2 border-white rounded-full hover:bg-white hover:text-slate-800 transition-all duration-100 cursor-pointer"
            >
              <LightweightIcon name="mdi:send" size={20} />
            </button>
          </form>
        </div>

        {/* Help & Support */}
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-xl font-semibold mb-2">Help & Support</h4>
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-gray-300">
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <LightweightIcon name="mdi:instagram" size={28} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <LightweightIcon name="mdi:twitter" size={28} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <LightweightIcon name="mdi:facebook" size={28} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <LightweightIcon name="mdi:youtube" size={28} />
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-600 w-full">
          <br />
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
