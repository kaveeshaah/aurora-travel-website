'use client';

// import Footer from '../components/common/Footer';
import DestinationHeroSection from '../components/destinations/DestinationHeroSection'
import TravelCategories from '../components/destinations/TravelCategories'

export default function Destinations() {
  return (
    <div className="min-h-screen bg-white">
      <main className="relative">
        <DestinationHeroSection />
        <TravelCategories />
        
        {/* <WhyChooseUs /> */}
        {/* <Testimonials /> */}
      </main>
      
    </div>
  );
}