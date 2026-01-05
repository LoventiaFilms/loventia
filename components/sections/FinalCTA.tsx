'use client';

import { motion } from 'framer-motion';
import { BookingButton } from '@/components/ui/BookingButton';
import { Calendar, MessageCircle, Heart } from 'lucide-react';
import Image from 'next/image';

export default function FinalCTA() {
    return (
        <section id="contact" className="relative section-padding overflow-hidden min-h-[60vh] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-black">
                <Image
                    src="/reserver-photographe-videaste-mariage-luxe-france-suisse-loventia-contact.webp"
                    alt="Couple heureux"
                    fill
                    className="object-cover grayscale"
                    quality={100}
                    priority
                />
                <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for readability */}
            </div>

            <div className="container-max relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    {/* Headline */}
                    <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight drop-shadow-lg">
                        Prêts à vivre
                        <br />
                        <span className="italic text-loventia-rose">l'expérience Loventia ?</span>
                    </h2>

                    {/* Subtext */}
                    <p className="font-sans text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
                        Chaque histoire d'amour mérite d'être racontée avec passion.
                        Bloquez dès maintenant votre date pour immortaliser ce jour unique.
                    </p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mb-12"
                    >
                        <BookingButton variant="hero">
                            Réservez votre date
                        </BookingButton>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-wrap justify-center gap-8 text-white/80"
                    >
                        <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-loventia-rose" />
                            <span className="font-sans text-sm">Réponse sous 24h</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MessageCircle size={18} className="text-loventia-rose" />
                            <span className="font-sans text-sm">Appel découverte offert</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Heart size={18} className="text-loventia-rose" />
                            <span className="font-sans text-sm">Sans engagement</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
