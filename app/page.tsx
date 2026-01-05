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
  title: 'Loventia | Vidéaste & Photographe de Mariage – Grand Est',
  description:
    "L'émotion d'un film, l'élégance d'un regard. Vidéaste et photographe de mariage haut de gamme dans le Grand Est. Film cinématographique, reportage photo, drone et teaser J+6.",
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