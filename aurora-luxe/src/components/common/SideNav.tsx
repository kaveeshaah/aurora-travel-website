// src/components/SideNav.tsx
'use client';

import { Icon } from '@iconify/react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useNavigation } from './NavigationProvider';

const navItems = [
  { icon: 'mdi:home', label: 'HOME', href: '/' },
  { icon: 'mdi:airplane', label: 'DESTINATIONS', href: '/destinations' },
  { icon: 'mdi:information', label: 'ABOUT', href: '/about' },
  { icon: 'mdi:phone', label: 'CONTACT', href: '/contact' },
];

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { navigate } = useNavigation();

  return (
    <>
      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <aside
        className={`fixed left-0 top-0 h-screen bg-white shadow-lg z-50 py-8 transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-20'
        } flex flex-col justify-between items-center`}
      >
        {/* Top hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-8 p-2 cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <Icon 
            icon={isOpen ? "mdi:close" : "mdi:menu"} 
            width={30} 
            height={30} 
            className="text-gray-800 transition-all duration-200" 
          />
        </button>
        
        {/* Icons navigation */}
        <nav className="flex flex-col gap-10 flex-1 justify-center w-full">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <button
                onClick={() => {
                  navigate(item.href);
                  setIsOpen(false);
                }}
                key={item.label}
                className={`flex items-center py-3 transition-all duration-200 cursor-pointer w-full ${
                  isOpen ? 'justify-start px-6' : 'justify-center'
                } ${
                  isActive ? 'bg-gray-50' : ''
                } rounded-lg mx-2 group`}
                aria-label={item.label}
              >
                <Icon 
                  icon={item.icon} 
                  width={28} 
                  height={28} 
                  className="text-blue-900 flex-shrink-0 transition-all duration-200 group-hover:scale-110 group-hover:drop-shadow-lg" 
                />
                {isOpen && (
                  <span className="ml-4 text-sm font-bold text-gray-800 whitespace-nowrap font-lato tracking-wide">
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
        
        {/* Vertical brand name at bottom */}
        <div className={`mb-4 flex items-center justify-center ${isOpen ? 'hidden' : ''}`}>
          <div className="h-32 flex items-center">
            <span 
              className="text-xs font-serif text-gray-800 font-bold tracking-wide whitespace-nowrap"
              style={{ 
                writingMode: 'vertical-rl', 
                textOrientation: 'mixed',
                transform: 'rotate(180deg)'
              }}
            >
              Aurora Luxe Travels
            </span>
          </div>
        </div>
        
        {/* Horizontal brand name when expanded */}
        {isOpen && (
          <div className="mb-4 text-center">
            <span className="text-sm font-serif text-gray-800 font-bold tracking-wide font-lato">
              Aurora Luxe Travels
            </span>
          </div>
        )}
      </aside>
    </>
  );
}