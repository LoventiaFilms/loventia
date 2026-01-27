'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Mail, ArrowRight, Calendar } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer - 4 Column Grid */}
      <div className="container-max section-padding !py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Brand & Vibe */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/loventia-photographe-videaste-mariage-logo-footer.webp"
                alt="Loventia - Vidéaste et Photographe Mariage Grand Est"
                width={160}
                height={53}
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-white/70 leading-relaxed font-sans text-sm">
              L'émotion d'un film, l'élégance d'un regard. Créateurs de souvenirs dans le Grand Est et partout en Europe.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/loventiafilms/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                aria-label="Instagram Loventia"
              >
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:contact@loventia.fr"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-serif text-xs uppercase tracking-widest mb-6 text-white/40">
              Explorer
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/portfolio"
                  className="text-white/70 hover:text-white transition-colors text-sm font-sans inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Portfolio</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/zones-intervention"
                  className="text-white/70 hover:text-white transition-colors text-sm font-sans inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Zones d'intervention</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-white/70 hover:text-white transition-colors text-sm font-sans inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Questions Fréquentes</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-serif text-xs uppercase tracking-widest mb-6 text-white/40">
              Offres
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/devis?preselect=pack"
                  className="text-white/70 hover:text-white transition-colors text-sm font-sans inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Le Pack Signature</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/devis?type=video"
                  className="text-white/70 hover:text-white transition-colors text-sm font-sans inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Film Cinématographique</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/devis?type=photo"
                  className="text-white/70 hover:text-white transition-colors text-sm font-sans inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Reportage Photo</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Vos Projets (The Money Column) */}
          <div className="space-y-6">
            <h3 className="font-serif text-xs uppercase tracking-widest mb-6 text-white/40">
              Votre Mariage
            </h3>

            {/* Primary CTA */}
            <Link
              href="/devis"
              className="group inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F4D03F] transition-colors font-sans text-sm font-medium"
            >
              <span>Estimer mon Budget</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/#calendrier"
              className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors font-sans text-sm"
            >
              <Calendar size={14} />
              <span>Vérifier nos disponibilités</span>
            </Link>

            {/* Contact */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-white/40 text-xs mb-2 font-sans">Nous contacter</p>
              <a
                href="tel:+33651301383"
                className="text-white font-sans text-lg font-medium hover:text-[#D4AF37] transition-colors inline-block"
              >
                06 51 30 13 83
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-sans">
            <p>
              © {currentYear} Loventia. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/cgv"
                className="hover:text-white transition-colors"
              >
                Mentions Légales
              </Link>
              <Link
                href="/cgv"
                className="hover:text-white transition-colors"
              >
                CGV
              </Link>
              <Link
                href="/cgv"
                className="hover:text-white transition-colors"
              >
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}