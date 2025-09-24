'use client';

import ContactHeroBanner from '../components/contact/ContactHeroBanner';
import FormSection from '../components/contact/FormSection';
import InfoSection from '../components/contact/InfoSection';
import { MapSectionLayout } from '../components/contact/MapSection';

export default function Contact() {
  return (
    <>
      <ContactHeroBanner />
      <FormSection />
      <InfoSection />
      <MapSectionLayout />
    </>
  );
}