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
                tagline={`Vidéaste & Photographe Mariage ${city.name}`}
                headline={
                    city.heroTitleOverride ? (
                        <>
                            {city.heroTitleOverride}
                        </>
                    ) : (
                        <>
                            Votre histoire d'amour
                            <br />
                            <span className="italic">immortalisée à {city.name}.</span>
                        </>
                    )
                }
                description={
                    <>
                        Créateurs de souvenirs d'exception à <strong>{city.name}</strong> et en <strong>{city.region}</strong>.
                        <br className="hidden md:block" />
                        Une approche cinématique pour sublimer votre union.
                    </>
                }
                image={city.heroImage} // Fallback handled in component
                isLanding={true}
            />

            {/* Value Proposition - Enrichi avec le contexte local de la ville */}
            <ValueProposition
                introText={
                    <div className="space-y-6">
                        <p className="font-medium text-xl leading-relaxed">
                            {city.introText}
                        </p>

                        {/* Affichage optionnel des lieux iconiques */}
                        {city.localLandmarks && city.localLandmarks.length > 0 && (
                            <div className="pt-4 border-t border-loventia-charcoal/10 mt-6">
                                <span className="block text-sm uppercase tracking-widest text-loventia-charcoal/50 mb-3 font-semibold">
                                    Lieux iconiques que nous couvrons
                                </span>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {city.localLandmarks.map((landmark) => (
                                        <span key={landmark} className="px-3 py-1 bg-white/50 border border-loventia-charcoal/5 rounded-full text-sm text-loventia-charcoal/70">
                                            {landmark}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
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
