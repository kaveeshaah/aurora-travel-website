'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
import HeroSection from '../components/HeroSection';
// Commented out other components - keeping only homepage
// import DestinationsGrid from '@/components/DestinationsGrid';
// import PromiseSection from '@/components/PromiseSection';
// import FeaturedExperiences from '@/components/FeaturedExperiences';
// import DestinationsSection from '@/components/DestinationsSection';

export default function Home() {
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   setIsLoaded(true);
  // }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="relative">
        <HeroSection />
        
        {/* Commented out other sections - keeping only homepage */}
        {/* <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <DestinationsGrid />
          <PromiseSection />
          <FeaturedExperiences />
          <DestinationsSection />
        </div> */}
      </main>
      
      {/* Commented out footer - keeping only homepage */}
      {/* <Footer /> */}
    </div>
  );
}