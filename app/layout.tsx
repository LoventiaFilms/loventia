import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Toaster } from '@/components/ui/toaster';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const baseUrl = 'https://www.loventia.fr';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: 'Loventia',
  title: {
    template: '%s | Loventia Films',
    default: 'Loventia | Vidéo & Photo de Mariage - Storytelling Cinématographique',
  },
  description:
    'Photographe et Vidéaste de mariage haut de gamme en France, Suisse et Luxembourg. Une approche cinématographique et émotionnelle pour des souvenirs intemporels.',
  keywords: [
    'vidéaste mariage luxe',
    'photographe mariage france',
    'film mariage cinématographique',
    'loventia',
    'nuit blanche production',
    'mariage suisse',
    'mariage luxembourg',
    'vidéo mariage haut de gamme',
    'photographe mariage grand est',
    'film de mariage émotionnel',
    'storytelling mariage',
    'mariage destination',
    'cinéaste mariage',
  ],
  authors: [{ name: 'Nuit Blanche Production' }],
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
    title: 'Loventia | Vidéo & Photo de Mariage - Storytelling Cinématographique',
    description:
      'Photographe et Vidéaste de mariage haut de gamme en France, Suisse et Luxembourg. Une approche cinématographique et émotionnelle pour des souvenirs intemporels.',
    images: [
      {
        url: '/loventia-social-card.jpg',
        width: 1200,
        height: 630,
        alt: 'Loventia - Vidéo & Photo de Mariage Cinématographique',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loventia | Vidéo & Photo de Mariage',
    description:
      'Photographe et Vidéaste de mariage haut de gamme. Une approche cinématographique et émotionnelle pour des souvenirs intemporels.',
    images: ['/loventia-social-card.jpg'],
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
        'Service de vidéographie et photographie de mariage haut de gamme en France, Suisse et Luxembourg.',
      publisher: {
        '@id': `${baseUrl}/#organization`,
      },
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'WebPage',
      '@id': `${baseUrl}/#webpage`,
      url: baseUrl,
      name: 'Loventia : Vidéo & Photo de Mariage Cinématographique',
      description:
        'Photographe et Vidéaste de mariage haut de gamme. Storytelling émotionnel et intemporel pour votre jour J.',
      isPartOf: {
        '@id': `${baseUrl}/#website`,
      },
      about: {
        '@id': `${baseUrl}/#organization`,
      },
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${baseUrl}/#organization`,
      name: 'Loventia',
      alternateName: 'Loventia Films',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logos/logo-loventia.webp`,
        width: 512,
        height: 512,
      },
      image: {
        '@type': 'ImageObject',
        url: `${baseUrl}/loventia-social-card.jpg`,
        width: 1200,
        height: 630,
      },
      description:
        'Service de vidéographie et photographie de mariage haut de gamme. Une approche cinématographique et émotionnelle pour capturer l\'authenticité et la magie de votre jour J.',
      priceRange: '$$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '39 rue Jean Mermoz',
        addressLocality: 'Golbey',
        postalCode: '88190',
        addressRegion: 'Vosges',
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 48.20110400744197,
        longitude: 6.435260076219138,
      },
      areaServed: [
        {
          '@type': 'Country',
          name: 'France',
        },
        {
          '@type': 'Country',
          name: 'Suisse',
        },
        {
          '@type': 'Country',
          name: 'Luxembourg',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services Mariage',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Film de Mariage Cinématographique',
              description:
                'Réalisation de films de mariage avec une approche cinématographique et émotionnelle',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Reportage Photo de Mariage',
              description:
                'Photographie de mariage artistique et intemporelle',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Package Vidéo + Photo',
              description:
                'Formule complète alliant vidéo cinématographique et photographie pour un souvenir complet',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mariage Destination',
              description:
                'Couverture photo et vidéo de mariages en France, Suisse et Luxembourg',
            },
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
    <html lang="fr" className={`scroll-smooth ${cormorant.variable} ${montserrat.variable}`}>
      <body className={`${montserrat.className} antialiased bg-[#FDFBF7] text-slate-900`}>
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