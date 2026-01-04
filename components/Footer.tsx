'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const zonesIntervention = [
    'Vosges', 'Alsace', 'Lorraine', 'Grand Est',
    'Champagne', 'Bourgogne', 'Suisse', 'Luxembourg'
  ];

  return (
    <footer className="bg-loventia-charcoal text-white">
      {/* Main Footer */}
      <div className="container-max section-padding !py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/asset/1-BASE.webp"
                alt="Loventia"
                width={180}
                height={60}
                className="h-14 w-auto object-contain brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              L'émotion d'un film, l'élégance d'un regard.
              Nous capturons l'authenticité et la magie de votre jour J
              avec une approche cinématographique.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/loventiafilms/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-loventia-rose transition-colors"
                aria-label="Instagram Loventia"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:contact@loventia.fr"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-loventia-rose transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+33600000000"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-loventia-rose transition-colors"
                aria-label="Téléphone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-loventia-rose">
              Notre Offre
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-white/70 text-sm">
                  Film Cinématographique
                </span>
              </li>
              <li>
                <span className="text-white/70 text-sm">
                  Reportage Photo
                </span>
              </li>
              <li>
                <span className="text-white/70 text-sm">
                  Prise de vue Drone
                </span>
              </li>
              <li>
                <span className="text-white/70 text-sm">
                  Teaser Express J+6
                </span>
              </li>
            </ul>
          </div>

          {/* Zones d'intervention - SEO */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-loventia-rose">
              <MapPin size={16} className="inline mr-2" />
              Zones d'intervention
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {zonesIntervention.map((zone) => (
                <li key={zone} className="text-white/70 text-sm">
                  {zone}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>© {currentYear} Loventia. Tous droits réservés.</p>
            <div className="flex items-center gap-6">
              <Link
                href="/mentions-legales"
                className="hover:text-white transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/cgv"
                className="hover:text-white transition-colors"
              >
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}