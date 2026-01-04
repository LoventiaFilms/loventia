import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Open_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Toaster } from '@/components/ui/toaster';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-opensans',
  display: 'swap',
});

const baseUrl = 'https://www.loventia.fr';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: 'Loventia',
  title: {
    template: '%s | Loventia Films',
    default: 'Loventia | Vidéaste & Photographe de Mariage – Grand Est, France',
  },
  description:
    "L'émotion d'un film, l'élégance d'un regard. Vidéaste et photographe de mariage haut de gamme dans le Grand Est. Storytelling cinématographique pour des souvenirs intemporels.",
  keywords: [
    'vidéaste mariage grand est',
    'photographe mariage vosges',
    'film mariage cinématographique',
    'loventia',
    'vidéo mariage alsace',
    'photographe mariage lorraine',
    'film mariage émotionnel',
    'mariage haut de gamme',
    'reportage mariage',
    'teaser mariage',
    'drone mariage',
  ],
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
    title: 'Loventia',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Loventia',
    title: 'Loventia | Vidéaste & Photographe de Mariage – Grand Est',
    description:
      "L'émotion d'un film, l'élégance d'un regard. Vidéaste et photographe de mariage haut de gamme pour des souvenirs intemporels.",
    images: [
      {
        url: '/asset/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Loventia - Vidéaste et Photographe de Mariage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loventia | Vidéaste & Photographe de Mariage',
    description:
      "L'émotion d'un film, l'élégance d'un regard. Storytelling cinématographique pour votre mariage.",
    images: ['/asset/hero.webp'],
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Loventia',
      description:
        'Vidéaste et photographe de mariage haut de gamme dans le Grand Est, France.',
      publisher: {
        '@id': `${baseUrl}/#organization`,
      },
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'WebPage',
      '@id': `${baseUrl}/#webpage`,
      url: baseUrl,
      name: "Loventia : L'émotion d'un film, l'élégance d'un regard",
      description:
        'Vidéaste et photographe de mariage haut de gamme. Storytelling cinématographique pour des souvenirs intemporels.',
      isPartOf: {
        '@id': `${baseUrl}/#website`,
      },
      about: {
        '@id': `${baseUrl}/#organization`,
      },
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}/#organization`,
      name: 'Loventia',
      alternateName: 'Loventia Films',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/asset/1-BASE.webp`,
        width: 512,
        height: 512,
      },
      image: {
        '@type': 'ImageObject',
        url: `${baseUrl}/asset/hero.webp`,
        width: 1200,
        height: 630,
      },
      description:
        "Vidéaste et photographe de mariage haut de gamme. L'émotion d'un film, l'élégance d'un regard. Nous capturons l'authenticité et la magie de votre jour J avec une approche cinématographique.",
      priceRange: '$$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Épinal',
        postalCode: '88000',
        addressRegion: 'Vosges',
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 48.1742,
        longitude: 6.4492,
      },
      areaServed: [
        { '@type': 'State', name: 'Grand Est' },
        { '@type': 'AdministrativeArea', name: 'Vosges' },
        { '@type': 'AdministrativeArea', name: 'Alsace' },
        { '@type': 'AdministrativeArea', name: 'Lorraine' },
        { '@type': 'Country', name: 'France' },
        { '@type': 'Country', name: 'Suisse' },
        { '@type': 'Country', name: 'Luxembourg' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Formule Mariage',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Formule Unique Mariage',
              description:
                'Film cinématographique 10-20min + Reportage photo complet + Drone + Teaser J+6',
            },
            price: '2990',
            priceCurrency: 'EUR',
          },
        ],
      },
      sameAs: ['https://www.instagram.com/loventiafilms/'],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`scroll-smooth ${playfair.variable} ${openSans.variable}`}>
      <body className={`${openSans.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          key="jsonld"
        />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-2QR0YK46S3" />
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}