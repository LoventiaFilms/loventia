import './globals.css';
import { Playfair_Display, Open_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Toaster } from '@/components/ui/toaster';
import StructuredData from '@/components/seo/StructuredData';
import { sharedMetadata } from './shared-metadata';

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

export const metadata = sharedMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`scroll-smooth ${playfair.variable} ${openSans.variable}`}>
      <body className={`${openSans.className} antialiased`}>
        <StructuredData />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-2QR0YK46S3" />
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}