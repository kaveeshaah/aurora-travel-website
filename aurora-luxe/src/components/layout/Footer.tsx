'use client';

import { useState } from 'react';
import Link from 'next/link';
import { newsletterApi, NewsletterFormData } from '@/lib/api';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData: NewsletterFormData = {
        email,
        interests: ['destinations', 'experiences', 'offers']
      };
      
      const response = await newsletterApi.subscribe(formData);
      
      if (response.success) {
        setIsSubscribed(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
    }
  };

  const footerLinks = {
    destinations: [
      { name: 'Europe', href: '#' },
      { name: 'Asia', href: '#' },
      { name: 'Americas', href: '#' },
      { name: 'Africa', href: '#' },
      { name: 'Oceania', href: '#' }
    ],
    experiences: [
      { name: 'Luxury Cruises', href: '#' },
      { name: 'Private Jets', href: '#' },
      { name: 'Safari Adventures', href: '#' },
      { name: 'Cultural Tours', href: '#' },
      { name: 'Wellness Retreats', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Sustainability', href: '#' }
    ],
    support: [
      { name: 'Contact Us', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Travel Insurance', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'YouTube', href: '#', icon: '📺' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
            Stay Inspired
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get exclusive access to our latest luxury travel experiences and special offers.
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="text-green-300 text-lg">
              ✓ Thank you for subscribing! Check your email for confirmation.
            </div>
          )}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AL</span>
                </div>
                <span className="font-serif text-2xl font-bold">Aurora Luxe</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Crafting extraordinary luxury travel experiences for the world's most discerning travelers.
              </p>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <span className="font-medium">Phone:</span> +1 (555) 123-4567
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">Email:</span> concierge@auroraluxe.com
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">Address:</span> 123 Luxury Lane, New York, NY 10001
                </p>
              </div>
            </div>

            {/* Destinations */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-6">Destinations</h4>
              <ul className="space-y-3">
                {footerLinks.destinations.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experiences */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-6">Experiences</h4>
              <ul className="space-y-3">
                {footerLinks.experiences.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-serif text-lg font-bold mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors text-2xl"
                    title={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
              
              <div className="text-gray-400 text-sm">
                © 2024 Aurora Luxe Travel. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
