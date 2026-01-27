import { Metadata } from 'next';
import Link from 'next/link';
import { cities } from '@/data/cities';
import Hero from '@/components/sections/Hero';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Zones d\'Intervention | Vidéaste Mariage Grand Est & Europe | Loventia',
    description: 'Découvrez les lieux où Loventia capture vos souvenirs. Vidéaste de mariage en Lorraine, Alsace, Vosges, Luxembourg et Suisse.',
};

export default function ZonesInterventionPage() {
    // 1. Grouper les villes par région
    const citiesByRegion = cities.reduce((acc, city) => {
        if (!acc[city.region]) {
            acc[city.region] = [];
        }
        acc[city.region].push(city);
        return acc;
    }, {} as Record<string, typeof cities>);

    // 2. Définir l'ordre de priorité des régions
    const priorityRegions = ['Vosges', 'Lorraine', 'Alsace', 'Grand Est', 'Luxembourg', 'Suisse'];

    // Récupérer toutes les régions uniques et les trier selon la priorité, puis alphabétiquement
    const sortedRegions = Object.keys(citiesByRegion).sort((a, b) => {
        const indexA = priorityRegions.indexOf(a);
        const indexB = priorityRegions.indexOf(b);

        // Si les deux sont dans la liste de priorité, on trie par index
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        // Si seulement A est prioritaire, il passe devant
        if (indexA !== -1) return -1;
        // Si seulement B est prioritaire, il passe devant
        if (indexB !== -1) return 1;
        // Sinon tri alphabétique
        return a.localeCompare(b);
    });

    return (
        <main>
            {/* Simple Editorial Hero */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-loventia-charcoal text-white overflow-hidden">
                <div className="container-max text-center relative z-10">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
                        Zones d'Intervention
                    </h1>
                    <p className="font-sans text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                        Loventia accompagne les mariés partout dans le Grand Est et en Europe.
                        <br />
                        Où que votre histoire s'écrive, nous serons là pour la sublimer.
                    </p>
                </div>
                {/* Background Texture/Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-loventia-charcoal via-loventia-charcoal/95 to-loventia-charcoal/90 z-0" />
            </section>

            {/* Directory Grid */}
            <section className="section-padding bg-loventia-cream min-h-[50vh]">
                <div className="container-max">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                        {sortedRegions.map((region) => (
                            <div key={region} className="group">
                                {/* Region Header */}
                                <div className="flex items-baseline gap-4 mb-6 border-b border-loventia-charcoal/10 pb-4">
                                    <h2 className="font-serif text-2xl md:text-3xl text-loventia-charcoal">
                                        {region}
                                    </h2>
                                    <span className="text-sm font-sans text-loventia-charcoal/40 uppercase tracking-widest">
                                        {citiesByRegion[region].length} Lieux
                                    </span>
                                </div>

                                {/* Cities List */}
                                <ul className="space-y-3">
                                    {citiesByRegion[region].sort((a, b) => a.name.localeCompare(b.name)).map((city) => (
                                        <li key={city.slug}>
                                            <Link
                                                href={`/${city.slug}`}
                                                className="group/link flex items-center gap-2 text-loventia-charcoal/70 hover:text-loventia-rose transition-colors duration-300"
                                            >
                                                <ChevronRight size={14} className="opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300 text-loventia-rose" />
                                                <span className="font-sans text-lg">{city.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
