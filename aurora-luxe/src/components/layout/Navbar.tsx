'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">AL</span>
            </div>
            <span className={`font-serif text-xl lg:text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Aurora Luxe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="#destinations" className={`transition-colors font-medium ${
              isScrolled 
                ? 'text-gray-700 hover:text-blue-600' 
                : 'text-white hover:text-amber-400'
            }`}>
              Destinations
            </Link>
            <Link href="#experiences" className={`transition-colors font-medium ${
              isScrolled 
                ? 'text-gray-700 hover:text-blue-600' 
                : 'text-white hover:text-amber-400'
            }`}>
              Experiences
            </Link>
            <Link href="#about" className={`transition-colors font-medium ${
              isScrolled 
                ? 'text-gray-700 hover:text-blue-600' 
                : 'text-white hover:text-amber-400'
            }`}>
              About
            </Link>
            <Link href="#contact" className={`transition-colors font-medium ${
              isScrolled 
                ? 'text-gray-700 hover:text-blue-600' 
                : 'text-white hover:text-amber-400'
            }`}>
              Contact
            </Link>
            <button className={`px-6 py-2 rounded-full transition-colors font-medium ${
              isScrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900'
            }`}>
              Plan Your Journey
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isScrolled 
                ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100' 
                : 'text-white hover:text-amber-400 hover:bg-white/10'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#destinations" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                Destinations
              </Link>
              <Link href="#experiences" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                Experiences
              </Link>
              <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Plan Your Journey
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
