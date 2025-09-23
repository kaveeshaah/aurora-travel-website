'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import FlyingPlaneLoader from './FlyingPlaneLoader';

interface NavigationContextType {
  isLoading: boolean;
  navigate: (path: string) => void;
}

const NavigationContext = createContext<NavigationContextType>({
  isLoading: false,
  navigate: () => {},
});

export const useNavigation = () => useContext(NavigationContext);

interface NavigationProviderProps {
  children: ReactNode;
}

export default function NavigationProvider({ children }: NavigationProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [targetPath, setTargetPath] = useState<string | null>(null);

  const navigate = (path: string) => {
    if (path === pathname) return; // Don't show loader for same page
    
    setTargetPath(path);
    setIsLoading(true);
    
    // Add a minimum loading time for better UX
    setTimeout(() => {
      router.push(path);
    }, 500);
  };

  useEffect(() => {
    if (targetPath && pathname === targetPath) {
      // Add a small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setIsLoading(false);
        setTargetPath(null);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [pathname, targetPath]);

  // Note: We intentionally avoid forcing a loader on browser back/forward navigation
  // to prevent the loader from getting stuck when the route doesn't change as expected.

  return (
    <NavigationContext.Provider value={{ isLoading, navigate }}>
      {isLoading && <FlyingPlaneLoader />}
      {children}
    </NavigationContext.Provider>
  );
}