'use client';

import { useEffect } from 'react';

const criticalResources = [
  'https://images.unsplash.com/photo-1497535944603-98de35a7eef9?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
  'https://images.unsplash.com/photo-1590580808117-1caa8e13f0e5?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
];

export default function ResourcePreloader() {
  useEffect(() => {
    // Preload critical images
    criticalResources.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Prefetch next page routes
    const routes = ['/destinations', '/about', '/contact'];
    routes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  }, []);

  return null;
}