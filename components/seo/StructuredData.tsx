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
                { '@type': 'City', name: 'Genève' },
                { '@type': 'City', name: 'Paris' },
                { '@type': 'City', name: 'Lyon' },
                { '@type': 'City', name: 'Strasbourg' },
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
                            name: 'Formule Unique Mariage',
                            description:
                                'Film cinématique 10-20min + Reportage photo complet + Drone + Teaser J+6 + Modifications illimitées',
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
