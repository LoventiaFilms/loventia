import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cities } from '@/data/cities';
import Hero from '@/components/sections/Hero';
import ValueProposition from '@/components/sections/ValueProposition';
import Portfolio from '@/components/sections/Portfolio';
import HomePricingHub from '@/components/home/HomePricingHub';
import Bonus from '@/components/sections/Bonus';
import Testimonials from '@/components/sections/Testimonials';
import FinalCTA from '@/components/sections/FinalCTA';
import CalendlySection from '@/components/sections/CalendlySection';

// Génération des paramètres statiques pour le build
export async function generateStaticParams() {
    return cities.map((city) => ({
        slug: city.slug,
    }));
}

// Métadonnées dynamiques
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const city = cities.find((c) => c.slug === params.slug);

    if (!city) {
        return {};
    }

    return {
        title: `Vidéaste & Photographe Mariage ${city.name} (${city.region}) | Loventia`,
        description: `Vidéaste & Photographe de mariage à ${city.name}. Une approche cinématique et haut de gamme pour votre mariage en ${city.region}. Déplacement inclus à ${city.name}.`,
        keywords: [
            ...city.keywords,
            `mariage ${city.name}`,
            `photographe ${city.name}`,
            `vidéo mariage ${city.region}`
        ],
        alternates: {
            canonical: `/${city.slug}`,
        },
    };
}

export default function CityPage({ params }: { params: { slug: string } }) {
    const city = cities.find((c) => c.slug === params.slug);

    if (!city) {
        notFound();
    }

    return (
        <main>
            {/* Hero - Customisé pour la ville */}
            <Hero
                title={`Vidéaste & Photographe Mariage ${city.name}`}
                subtitle={`Votre histoire d'amour\nimmortalisée à ${city.name}.`}
                locationText={
                    <p>
                        Créateurs de souvenirs d'exception à <strong>{city.name}</strong> et en <strong>{city.region}</strong>.
                        <br className="hidden md:block" />
                        Une approche cinématique pour sublimer votre union.
                    </p>
                }
                image={city.heroImage} // Fallback handled in component
            />

            {/* Value Proposition - Customisé */}
            <ValueProposition
                introText={
                    <p>
                        Basés dans le Grand Est, nous connaissons parfaitement <strong>{city.name}</strong> et ses lieux d'exception.
                        Nous vous accompagnons en <strong>{city.region}</strong> pour capturer l'élégance de votre journée avec discrétion et sensibilité.
                    </p>
                }
            />

            {/* Portfolio - Reuse standard */}
            <Portfolio />

            {/* Pricing Hub - Reuse standard */}
            <HomePricingHub />

            {/* Bonus - Reuse standard */}
            <Bonus />

            {/* Testimonials - Reuse standard */}
            <Testimonials />

            {/* Final CTA - Reuse standard */}
            <FinalCTA />

            {/* Calendly Booking Widget */}
            <CalendlySection />
        </main>
    );
}
