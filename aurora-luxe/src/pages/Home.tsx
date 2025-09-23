'use client';

import dynamic from 'next/dynamic';
import HeroSection from '../components/home/HeroSection';
import FlyingPlaneLoader from '../components/common/FlyingPlaneLoader';

// Lazy load heavy components
const FeaturedDestinations = dynamic(() => import('../components/home/FeaturedDestinations'), {
  loading: () => <FlyingPlaneLoader />,
  ssr: false
});

const FeaturedExperiences = dynamic(() => import('../components/home/FeaturedExperiences'), {
  loading: () => <FlyingPlaneLoader />,
  ssr: false
});

const TrendingDestination = dynamic(() => import('../components/home/TrendingDestination'), {
  loading: () => <FlyingPlaneLoader />,
  ssr: false
});

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="relative">
        <HeroSection />
        <FeaturedDestinations />
        <FeaturedExperiences />
        <TrendingDestination />
        {/* <WhyChooseUs /> */}
        {/* <Testimonials /> */}
      </main>
    </div>
  );
}