'use client';

import AboutHeroBanner from '../components/about/AboutHeroBanner';
import OurStory from '../components/about/OurStory';
import OurMission from '../components/about/OurMission';
import OurImpact from '../components/about/OurImpact';
import CallToAction from '../components/about/CallToAction';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <main className="relative">
        <AboutHeroBanner />
        <OurStory />
        <OurMission />
        <OurImpact />
        <CallToAction />
      </main>
    </div>
  );
}