'use client';

import HeroSection from '../components/home/HeroSection';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import FeaturedExperiences from '../components/home/FeaturedExperiences';
import TrendingDestination from '../components/home/TrendingDestination';
// import WhyChooseUs from '../components/home/WhyChooseUs';
// import Testimonials from '../components/home/Testimonials';

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