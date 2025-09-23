'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

// Lazy load heavy components on client side
const SideNav = dynamic(() => import("./SideNav"), {
  ssr: false,
  loading: () => <div className="w-20 h-full bg-white border-r border-gray-200 fixed left-0 top-0 z-40" />
});

const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
  loading: () => <div className="h-16 bg-gray-100" />
});

const NavigationProvider = dynamic(() => import("./NavigationProvider"), {
  ssr: false
});

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <NavigationProvider>
      <SideNav />
      <div className="ml-20">
        <main className="min-h-screen">
          {children}
        </main>
      </div>
      <Footer />
    </NavigationProvider>
  );
}