import { Metadata } from 'next';

/**
 * Centralized SEO metadata configuration for Loventia
 * Optimized for "Vidéaste Mariage Luxe" niche
 */

export const siteConfig = {
    name: 'Loventia',
    url: 'https://www.loventia.fr',
    description:
        'Vidéaste & Photographe de mariage haut de gamme. Basés dans le Grand Est (Épinal), nous réalisons des reportages photo et vidéo de mariage en France et en Suisse.',
    founder: 'Denis',
    phone: '+33651301383',
    email: 'contact@loventia.fr',
    address: {
        street: '39, rue Jean Mermoz',
        city: 'Golbey',
        postalCode: '88190',
        region: 'Vosges',
        country: 'FR',
    },
    social: {
        instagram: 'https://www.instagram.com/loventiafilms/',
        youtube: 'https://www.youtube.com/@loventiafilms',
    },
    images: {
        og: '/film-mariage-cinematique-haut-de-gamme-loventia-production.webp',
        twitter: '/photographe-videaste-mariage-luxe-france-suisse-italie-loventia-social-card.webp',
        logo: '/loventia-videaste-mariage-logo-texte.webp',
    },
} as const;

export const defaultKeywords = [
    // Zone Primaire - Grand Est & Villes Clés
    'vidéaste mariage Grand Est',
    'vidéaste mariage Nancy',
    'vidéaste mariage Metz',
    'vidéaste mariage Strasbourg',
    'vidéaste mariage Vosges',
    'vidéaste mariage Luxembourg',
    'vidéaste mariage Suisse',
    'photographe mariage Grand Est',
    'photographe mariage Nancy',
    'photographe mariage Metz',

    // Zone Secondaire & Spécifique
    'vidéaste mariage Alsace',
    'vidéaste mariage Lorraine',
    'vidéaste mariage Colmar',
    'vidéaste mariage Genève',
    'vidéaste mariage Annecy',

    // Mots-clés génériques & Style
    'film mariage cinématique',
    'mariage haut de gamme',
    'reportage photo mariage',
    'vidéaste mariage luxe',
    'destination wedding videographer france',
];

export const sharedMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    title: {
        template: '%s | Loventia',
        default: 'Loventia | Photographe & Vidéaste Mariage Grand Est (Nancy, Metz, Strasbourg)',
    },
    description: siteConfig.description,
    keywords: defaultKeywords,
    authors: [{ name: 'Loventia Films' }],
    alternates: {
        canonical: '/', // This implies relative to metadataBase, so 'https://www.loventia.fr/'
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: '48x48' },
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        shortcut: '/favicon.ico',
    },
    manifest: '/site.webmanifest',
    appleWebApp: {
        title: siteConfig.name,
    },
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        siteName: siteConfig.name,
        title: 'Loventia | Photographe & Vidéaste de Mariage – Grand Est, Alsace, Suisse',
        description: siteConfig.description,
        images: [
            {
                url: siteConfig.images.og,
                width: 1200,
                height: 630,
                alt: 'Loventia - Photographe et Vidéaste de Mariage Grand Est Alsace Lorraine Suisse',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Loventia | Photographe & Vidéaste de Mariage – Grand Est & Suisse',
        description: siteConfig.description,
        images: [siteConfig.images.twitter],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};
