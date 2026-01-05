import { Metadata } from 'next';

/**
 * Centralized SEO metadata configuration for Loventia
 * Optimized for "Vidéaste Mariage Luxe" niche
 */

export const siteConfig = {
    name: 'Loventia',
    url: 'https://www.loventia.fr',
    description:
        'Vidéaste & Photographe de mariage luxe. Storytelling cinématique pour capturer l\'émotion de votre jour J en France, Suisse & Italie.',
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
    'Vidéaste mariage Suisse',
    'Photographe mariage luxe',
    'Film mariage cinématique',
    'Wedding Filmmaker France',
    'vidéaste mariage Grand Est',
    'photographe mariage Vosges',
    'film mariage émotionnel',
    'mariage haut de gamme',
    'vidéo mariage Alsace',
    'photographe mariage Lorraine',
    'vidéaste mariage Italie',
    'mariage luxe Genève',
    'reportage mariage',
    'teaser mariage',
    'drone mariage',
    // Geo-targeted luxury keywords
    'destination wedding Italy',
    'vidéaste mariage Genève',
    'photographe mariage Annecy',
    'film mariage Lac Léman',
    'luxury wedding videographer Switzerland',
    'mariage Toscane vidéo',
    'wedding cinematographer Lake Como',
    'photographe mariage Lausanne',
    'vidéaste mariage Paris',
    'film mariage destination Italie',
    'mariage luxe Côte d\'Azur',
    'wedding film France Suisse',
];

export const sharedMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    title: {
        template: '%s | Loventia - Vidéaste Mariage Luxe France & Suisse',
        default: 'Loventia | Vidéaste & Photographe de Mariage Luxe – France, Suisse, Italie',
    },
    description: siteConfig.description,
    keywords: defaultKeywords,
    authors: [{ name: 'Loventia Films' }],
    alternates: {
        canonical: '/',
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
        title: 'Loventia | Vidéaste & Photographe de Mariage Luxe',
        description: siteConfig.description,
        images: [
            {
                url: siteConfig.images.og,
                width: 1200,
                height: 630,
                alt: 'Loventia - Vidéaste et Photographe de Mariage Luxe France Suisse Italie',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Loventia | Vidéaste & Photographe de Mariage Luxe',
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
