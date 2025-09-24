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
        className={`fixed left-0 top-0 h-screen bg-white border-r border-slate-200 z-50 py-6 sm:py-8 transition-all duration-300 ${
          isOpen ? 'w-64 sm:w-72' : 'w-16 sm:w-18 md:w-20'
        } flex flex-col justify-between items-center`}
      >
        {/* Top hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-6 sm:mb-8 p-1.5 sm:p-2 cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <LightweightIcon
            name={isOpen ? "mdi:close" : "mdi:menu"}
            size={24}
            className="text-slate-800 transition-all duration-100 sm:w-7 sm:h-7 md:w-8 md:h-8"
          />
        </button>

        {/* Icons navigation */}
        <nav className="flex flex-col gap-6 sm:gap-8 md:gap-10 flex-1 justify-center w-full px-1 sm:px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <button
                onClick={() => {
                  navigate(item.href);
                  setIsOpen(false);
                }}
                key={item.label}
                className={`flex items-center py-2 sm:py-2.5 md:py-3 transition-all duration-100 cursor-pointer w-full ${
                  isOpen ? 'justify-start px-3 sm:px-4 md:px-6' : 'justify-center'
                } ${
                  isActive ? 'bg-slate-100' : 'hover:bg-slate-100'
                } rounded-lg mx-1 sm:mx-1.5 md:mx-2 group`}
                aria-label={item.label}
              >
                <LightweightIcon
                  name={item.icon}
                  size={20}
                  className="text-slate-800 flex-shrink-0 transition-all duration-100 group-hover:text-amber-600 sm:w-6 sm:h-6 md:w-7 md:h-7"
                />
                {isOpen && (
                  <span className="ml-3 sm:ml-4 md:ml-6 text-xs sm:text-sm font-bold text-slate-800 whitespace-nowrap font-lato tracking-wide">
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
              className="text-[10px] sm:text-xs font-serif text-slate-800 font-bold tracking-wide whitespace-nowrap"
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
            <span className="text-xs sm:text-sm font-serif text-slate-800 font-bold tracking-wide font-lato">
              Aurora Luxe Travels
            </span>
          </div>
        )}
      </aside>
    </>
  );
}