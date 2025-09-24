// src/components/SideNav.tsx
'use client';

import LightweightIcon from './LightweightIcon';
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
        className={`fixed left-0 top-0 h-screen bg-slate-800 z-50 py-8 transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-20'
        } flex flex-col justify-between items-center`}
      >
        {/* Top hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-8 p-2 cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <LightweightIcon 
            name={isOpen ? "mdi:close" : "mdi:menu"} 
            size={30} 
            className="text-white transition-all duration-200" 
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
                  isActive ? 'bg-slate-700' : 'hover:bg-slate-700'
                } rounded-lg mx-2 group`}
                aria-label={item.label}
              >
                <LightweightIcon 
                  name={item.icon} 
                  size={28} 
                  className="text-white flex-shrink-0 transition-all duration-200 group-hover:text-blue-300" 
                />
                {isOpen && (
                  <span className="ml-24 text-sm font-bold text-white whitespace-nowrap font-lato tracking-wide">
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
              className="text-xs font-serif text-white font-bold tracking-wide whitespace-nowrap"
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
          <div className="mb- text-center">
            <span className="text-sm font-serif text-white font-bold tracking-wide font-lato">
              Aurora Luxe Travels
            </span>
          </div>
        )}
      </aside>
    </>
  );
}
