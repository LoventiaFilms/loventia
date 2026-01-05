import { siteConfig } from '@/app/shared-metadata';

/**
 * JSON-LD Structured Data Component
 * Generates comprehensive schema.org markup for SEO
 */

const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebSite',
            '@id': `${siteConfig.url}/#website`,
            url: siteConfig.url,
            name: siteConfig.name,
            description: siteConfig.description,
            publisher: {
                '@id': `${siteConfig.url}/#organization`,
            },
            inLanguage: 'fr-FR',
        },
        {
            '@type': 'WebPage',
            '@id': `${siteConfig.url}/#webpage`,
            url: siteConfig.url,
            name: "Loventia : L'émotion d'un film, l'élégance d'un regard",
            description: siteConfig.description,
            isPartOf: {
                '@id': `${siteConfig.url}/#website`,
            },
            about: {
                '@id': `${siteConfig.url}/#organization`,
            },
            inLanguage: 'fr-FR',
        },
        {
            '@type': ['LocalBusiness', 'ProfessionalService'],
            '@id': `${siteConfig.url}/#organization`,
            name: siteConfig.name,
            alternateName: 'Loventia Films',
            url: siteConfig.url,
            telephone: siteConfig.phone,
            email: siteConfig.email,
            logo: {
                '@type': 'ImageObject',
                url: `${siteConfig.url}${siteConfig.images.logo}`,
                width: 512,
                height: 512,
            },
            image: {
                '@type': 'ImageObject',
                url: `${siteConfig.url}${siteConfig.images.og}`,
                width: 1200,
                height: 630,
            },
            description:
                "Vidéaste et photographe de mariage luxe. L'émotion d'un film, l'élégance d'un regard. Nous capturons l'authenticité et la magie de votre jour J avec une approche cinématique haut de gamme.",
            priceRange: '€€€€',
            currenciesAccepted: 'EUR',
            paymentAccepted: 'Cash, Credit Card, Bank Transfer',
            address: {
                '@type': 'PostalAddress',
                streetAddress: siteConfig.address.street,
                addressLocality: siteConfig.address.city,
                postalCode: siteConfig.address.postalCode,
                addressRegion: siteConfig.address.region,
                addressCountry: siteConfig.address.country,
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: 48.1742,
                longitude: 6.4492,
            },
            areaServed: [
                { '@type': 'Country', name: 'France' },
                { '@type': 'Country', name: 'Suisse' },
                { '@type': 'Country', name: 'Italie' },
                { '@type': 'State', name: 'Grand Est' },
                { '@type': 'AdministrativeArea', name: 'Vosges' },
                { '@type': 'AdministrativeArea', name: 'Alsace' },
                { '@type': 'AdministrativeArea', name: 'Lorraine' },
                // Strategic luxury destinations
                { '@type': 'City', name: 'Genève' },
                { '@type': 'City', name: 'Lausanne' },
                { '@type': 'City', name: 'Annecy' },
                { '@type': 'City', name: 'Paris' },
                { '@type': 'City', name: 'Lyon' },
                { '@type': 'City', name: 'Strasbourg' },
                { '@type': 'AdministrativeArea', name: 'Lac Léman' },
                { '@type': 'AdministrativeArea', name: 'Lac de Côme' },
                { '@type': 'AdministrativeArea', name: 'Toscane' },
                { '@type': 'AdministrativeArea', name: 'Côte d\'Azur' },
                { '@type': 'AdministrativeArea', name: 'Provence' },
                { '@type': 'Country', name: 'Luxembourg' },
            ],
            founder: {
                '@type': 'Person',
                name: siteConfig.founder,
            },
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Formule Mariage Luxe',
                itemListElement: [
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Formule Unique Mariage Luxe - Cinéma & Photo',
                            description:
                                'Film cinématique 10-20min + Reportage photo complet + Prises de vue Drone + Teaser Express J+6 + Modifications illimitées du montage final. Déplacement inclus (rayon 200km).',
                            provider: {
                                '@id': `${siteConfig.url}/#organization`,
                            },
                        },
                        price: '2990',
                        priceCurrency: 'EUR',
                    },
                ],
            },
            sameAs: [
                siteConfig.social.instagram,
                siteConfig.social.youtube,
            ],
            openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '09:00',
                closes: '20:00',
            },
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '47',
                bestRating: '5',
                worstRating: '1',
            },
        },
        {
            '@type': 'FAQPage',
            '@id': `${siteConfig.url}/#faq`,
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'Quel est le délai de livraison pour un film de mariage ?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Le teaser vidéo est livré sous 3 à 4 semaines. Le film complet de mariage (10-20 minutes) est livré sous 8 à 12 semaines. La galerie photos complète est disponible sous 4 à 6 semaines.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Quelles régions couvrez-vous pour les mariages ?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Nous couvrons la France (Grand Est, Paris, Annecy, Côte d\'Azur), la Suisse (Genève, Lausanne, Lac Léman), l\'Italie (Lac de Côme, Toscane) et le Luxembourg. Déplacement inclus dans un rayon de 200km autour de Golbey (88190).',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Combien coûte une prestation complète vidéo et photo ?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Notre formule unique tout-en-un est à 2990€ TTC. Elle inclut : film cinématique 10-20min, reportage photo complet, prises de vue drone, teaser express J+6, et modifications illimitées du montage final.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Proposez-vous uniquement la vidéo ou aussi la photo ?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Notre formule unique combine vidéo ET photo pour une cohérence artistique parfaite. Vous bénéficiez d\'un film cinématique complet et d\'un reportage photo professionnel de votre journée.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Combien de modifications peut-on demander sur le film final ?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Nous offrons des modifications illimitées du montage final : ajustements techniques, rythme de montage, changement de musique, correction colorimétrique. Votre satisfaction est notre priorité.',
                    },
                },
            ],
        },
    ],
};

export default function StructuredData() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            key="jsonld"
        />
    );
}
