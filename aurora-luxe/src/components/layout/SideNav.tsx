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
  { icon: Plane, label: 'Destinations', href: '/destinations' },
  { icon: Info, label: 'About', href: '#about' },
  { icon: MessageCircle, label: 'Contact', href: '#contact' },
];

export default function SideNav() {
  return (
    <>
      {/* Vertical Left Sidebar */}
      <div className="fixed left-0 top-0 h-full w-20 bg-white/90 backdrop-blur-md border-r border-gray-200 z-50 flex flex-col items-center justify-between py-8">
        {/* Hamburger Menu Icon */}
        <div>
          <div className="p-4 rounded-xl hover:bg-gray-100 transition-all duration-300 cursor-pointer group">
            <Menu className="w-8 h-8 text-gray-700 group-hover:text-black transition-all duration-300" />
          </div>
        </div>

        {/* Navigation Icons */}
        <nav className="flex flex-col justify-center items-center h-full space-y-12">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className="relative group p-4 rounded-xl hover:bg-gray-100 transition-all duration-300"
                title={item.label}
              >
                <Icon className="w-8 h-8 text-gray-700 group-hover:text-black transition-all duration-300 group-hover:scale-110" />

                {/* Tooltip on hover */}
                <div className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 delay-500">
                  {item.label}
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-black"></div>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Bottom spacing for alignment */}
        <div></div>
      </div>
    </>
  );
}