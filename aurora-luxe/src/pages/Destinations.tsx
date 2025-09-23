'use client';

import dynamic from 'next/dynamic';
import DestinationHeroSection from '../components/destinations/DestinationHeroSection';
import FlyingPlaneLoader from '../components/common/FlyingPlaneLoader';

// Lazy load heavy components
const TravelCategories = dynamic(() => import('../components/destinations/TravelCategories'), {
  loading: () => <FlyingPlaneLoader />,
  ssr: false
});

const FeaturedLuxuryExperience = dynamic(() => import('../components/destinations/FeaturedLuxuryExperience'), {
  loading: () => <FlyingPlaneLoader />,
  ssr: false
});

export default function Destinations() {
  return (
    <div className="min-h-screen bg-white">
      <main className="relative">
        <DestinationHeroSection />
        <TravelCategories />
        <FeaturedLuxuryExperience />
        
        {/* <WhyChooseUs /> */}
        {/* <Testimonials /> */}
      </main>
      
    </div>
  );
}