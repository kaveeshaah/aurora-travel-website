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
  const [safetyTimerId, setSafetyTimerId] = useState<number | null>(null);

  const navigate = (path: string) => {
    if (path === pathname) return; // Don't show loader for same page
    
    setTargetPath(path);
    setIsLoading(true);
    
    // Safety: ensure we never keep the loader forever
    if (safetyTimerId) {
      clearTimeout(safetyTimerId);
    }
    const id = window.setTimeout(() => {
      setIsLoading(false);
      setTargetPath(null);
    }, 8000); // hard cap at 8s
    setSafetyTimerId(id);
    
    // Add a minimum loading time for better UX
    setTimeout(() => {
      router.push(path);
    }, 500);
  };

  useEffect(() => {
    // If we navigated and the path changed (regardless of exact match), stop loader shortly after
    if (isLoading) {
      const timer = window.setTimeout(() => {
        setIsLoading(false);
        setTargetPath(null);
      }, 400); // brief delay to let content render
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (safetyTimerId) clearTimeout(safetyTimerId);
    };
  }, [safetyTimerId]);

  // Note: We intentionally avoid forcing a loader on browser back/forward navigation
  // to prevent the loader from getting stuck when the route doesn't change as expected.

  return (
    <NavigationContext.Provider value={{ isLoading, navigate }}>
      {isLoading && <FlyingPlaneLoader />}
      {children}
    </NavigationContext.Provider>
  );
}