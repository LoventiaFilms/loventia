import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ValueProposition from '@/components/sections/ValueProposition';
import Portfolio from '@/components/sections/Portfolio';
import PricingCard from '@/components/sections/PricingCard';
import Bonus from '@/components/sections/Bonus';
import Testimonials from '@/components/sections/Testimonials';
import FinalCTA from '@/components/sections/FinalCTA';
import CalendlySection from '@/components/sections/CalendlySection';

export const metadata: Metadata = {
  title: 'Loventia | Photographe & vidéaste de mariage dans le Grand Est',
  description:
    "L'émotion d'un film, l'élégance d'un regard. Basés dans le Grand Est (Nancy, Strasbourg), nous réalisons des reportages photo et vidéo de mariage haut de gamme en France et en Suisse. Film cinématographique, drone, teaser express.",
};

export default function Home() {
  return (
    <main>
      {/* Hero - Fullscreen immersive with parallax */}
      <Hero />

      {/* Value Proposition - 3 pillars */}
      <ValueProposition />

      {/* Portfolio - Masonry grid showcase */}
      <Portfolio />

      {/* Pricing - Premium single offer card */}
      <PricingCard />

      {/* Bonus - Teaser J+6 & Impressions */}
      <Bonus />

      {/* Testimonials - Client carousel */}
      <Testimonials />

      {/* Final CTA - Drive to Calendly */}
      <FinalCTA />

      {/* Calendly Booking Widget */}
      <CalendlySection />
    </main>
  );
}