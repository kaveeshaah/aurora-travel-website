'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { FC } from 'react';
import type { NavItemType } from '../config';

interface SidebarNavigationSlimProps {
  items: (NavItemType & { icon: FC<{ className?: string }> })[];
  footerItems?: (NavItemType & { icon: FC<{ className?: string }> })[];
  brand?: string;
}

export const SidebarNavigationSlim: FC<SidebarNavigationSlimProps> = ({
  items,
  footerItems = [],
  brand = 'Aurora Luxe Travels',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed left-0 top-0 h-full w-14 bg-white border-r border-gray-200 flex flex-col justify-between z-50">
      {/* Top Section */}
      <div>
        {/* Toggle */}
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {/* simple 3-line hamburger using divs */}
            <div className="space-y-1">
              <span className="block w-5 h-0.5 bg-gray-700"></span>
              <span className="block w-5 h-0.5 bg-gray-700"></span>
              <span className="block w-5 h-0.5 bg-gray-700"></span>
            </div>
          </button>
        </div>

        {/* Nav Icons */}
        <nav className="flex flex-col items-center py-6 space-y-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Icon className="w-6 h-6" />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center space-y-6 pb-6">
        {footerItems.length > 0 && (
          <nav className="flex flex-col items-center space-y-6">
            {footerItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </Link>
              );
            })}
          </nav>
        )}

        {/* Vertical Brand Name */}
        <div className="rotate-180 [writing-mode:vertical-rl] text-sm font-medium text-gray-500 tracking-wide">
          {brand}
        </div>
      </div>
    </div>
  );
};
