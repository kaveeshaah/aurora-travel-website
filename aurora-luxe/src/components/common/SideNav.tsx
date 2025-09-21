'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Home,
  Plane,
  Info,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';

interface NavItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Plane, label: 'Destinations', href: '#' },
  { icon: Info, label: 'About', href: '#about' },
  { icon: MessageCircle, label: 'Contact', href: '#contact' },
];

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-110 hover:rotate-6 active:scale-95"
        aria-label="Toggle navigation menu"
      >
        <div className="relative">
          {isOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-black transition-all duration-300 transform rotate-90" />
          ) : (
            <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-black transition-all duration-300 transform hover:rotate-180" />
          )}
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-all duration-500 ease-out animate-in fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-full sm:w-80 max-w-sm bg-white shadow-2xl z-50 transition-all duration-700 ease-out ${
        isOpen ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-full opacity-0'
      }`}>
        {/* Header */}
        <div className="flex items-center p-6 sm:p-8 border-b border-gray-100 animate-in slide-in-from-left duration-700 delay-100">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-12 hover:shadow-lg">
              <span className="text-white font-serif font-bold text-base sm:text-lg transition-all duration-300">AL</span>
            </div>
            <div className="transition-all duration-500 hover:translate-x-1">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-black tracking-wide transition-all duration-300 hover:text-gray-600">
                Aurora Luxe
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm font-light tracking-wider uppercase transition-all duration-300 hover:text-gray-700">
                Luxury Travel
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="mt-8 sm:mt-12 px-4 sm:px-6">
          <ul className="space-y-3 sm:space-y-4">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={index}
                  className="animate-in slide-in-from-left duration-500"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center px-4 sm:px-6 py-4 sm:py-5 text-black rounded-xl sm:rounded-2xl hover:bg-gray-50 transition-all duration-500 ease-out transform hover:translate-x-2 hover:scale-105 hover:shadow-lg active:scale-95"
                  >
                    <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 rounded-lg sm:rounded-xl mr-4 sm:mr-6 group-hover:bg-black group-hover:text-white transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300 group-hover:scale-110" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <span className="font-serif text-lg sm:text-xl font-medium text-black group-hover:text-black transition-all duration-500 ease-out group-hover:translate-x-1">
                        {item.label}
                      </span>
                    </div>
                    <div className="w-1 h-6 sm:w-1.5 sm:h-8 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-0 group-hover:scale-100" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 border-t border-gray-100 bg-white animate-in slide-in-from-bottom duration-700 delay-700">
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 font-light tracking-wide transition-all duration-300 hover:text-gray-700">Ready for your next adventure?</p>
            <button className="w-full bg-black text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-serif font-medium hover:bg-gray-800 transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl tracking-wide text-sm sm:text-base active:scale-95 active:translate-y-0">
              Plan Your Journey
            </button>
          </div>
        </div>
      </div>
    </>
  );
}