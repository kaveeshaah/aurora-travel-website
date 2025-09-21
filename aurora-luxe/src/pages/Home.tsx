'use client';

// import Footer from '../components/common/Footer';
import HeroSection from '../components/home/HeroSection';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
// import WhyChooseUs from '../components/home/WhyChooseUs';
// import Testimonials from '../components/home/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="relative">
        <HeroSection />
        <FeaturedDestinations />
        {/* <WhyChooseUs /> */}
        {/* <Testimonials /> */}
      </main>
      
    </div>
  );
}