import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ValueProposition from '@/components/sections/ValueProposition';
import Portfolio from '@/components/sections/Portfolio';
import HomePricingHub from '@/components/home/HomePricingHub';
import Bonus from '@/components/sections/Bonus';
import Testimonials from '@/components/sections/Testimonials';
import FinalCTA from '@/components/sections/FinalCTA';
import CalendlySection from '@/components/sections/CalendlySection';

export const metadata: Metadata = {
  title: 'Loventia | Photographe & Vidéaste Mariage Grand Est (Nancy, Metz, Strasbourg)',
  description:
    "Vidéaste & Photographe de mariage (Nancy, Metz, Vosges). L'émotion d'un film, l'élégance d'un regard. Reportage photo et vidéo haut de gamme en France et en Suisse.",
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

      {/* Pricing Hub - Dual card funnel to /devis */}
      <HomePricingHub />

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