// src/components/SideNav.tsx
'use client';

import Link from 'next/link';
import {
  Home,
  Plane,
  Info,
  MessageCircle,
  Menu
} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Plane, label: 'Destinations', href: '/destinations' },
  { icon: Info, label: 'About', href: '#about' },
  { icon: MessageCircle, label: 'Contact', href: '#contact' },
];

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className="group fixed left-0 top-0 h-screen w-20 hover:w-60 transition-all duration-300 flex flex-col justify-between items-center bg-white shadow-lg z-50 pt-6"
    >
      {/* Top hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-10 p-3 rounded-md border border-gray-100 bg-white hover:bg-gray-20 transition"
        aria-label="Toggle navigation menu"
      >
        <Menu className="w-6 h-6 text-black" />
      </button>
      {/* Icons and labels */}
      <nav className="flex flex-col gap-8 w-full items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center w-16 group-hover:w-full px-4 h-12 rounded-lg bg-gray-50 text-gray-700 hover:bg-black hover:text-white transition-all duration-300"
              aria-label={item.label}
            >
              <Icon className="w-8 h-8 flex-shrink-0" />
              <span className="ml-4 text-lg font-bold origin-left scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
      {/* Vertical brand name at bottom */}
      <div className="mb-8">
        <span className="block text-xs font-serif text-black font-bold tracking-wide origin-bottom-left rotate-90 whitespace-nowrap">
          Aurora Luxe Travels
        </span>
      </div>
    </aside>
  );
}
