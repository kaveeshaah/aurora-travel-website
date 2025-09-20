'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Home,
  MapPin,
  Compass,
  MessageCircle,
  Calendar,
  ChevronRight,
  ChevronLeft,
  User
} from 'lucide-react';

interface NavItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: MapPin, label: 'Destinations', href: '#destinations' },
  { icon: Compass, label: 'Experiences', href: '#experiences' },
  { icon: Calendar, label: 'Plan Journey', href: '#booking' },
  { icon: MessageCircle, label: 'Contact', href: '#contact' },
  { icon: User, label: 'Profile', href: '#profile' },
];

export default function SideNav() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`fixed left-0 top-0 h-full bg-white shadow-lg border-r border-gray-200 z-40 transition-all duration-300 ease-in-out ${
      isExpanded ? 'w-64' : 'w-16'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {isExpanded && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">AL</span>
            </div>
            <span className="font-serif text-lg font-bold text-gray-900">
              Aurora Luxe
            </span>
          </div>
        )}

        {!isExpanded && (
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-sm">AL</span>
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors ml-auto"
        >
          {isExpanded ? (
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="mt-8">
        <ul className="space-y-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                    !isExpanded ? 'justify-center' : ''
                  }`}
                  title={!isExpanded ? item.label : undefined}
                >
                  <Icon className={`w-5 h-5 ${isExpanded ? 'mr-3' : ''}`} />
                  {isExpanded && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      {isExpanded && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
          <div className="text-xs text-gray-500 text-center">
            © 2025 Aurora Luxe Travel
          </div>
        </div>
      )}
    </div>
  );
}