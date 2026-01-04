'use client';

import { motion } from 'framer-motion';
import { BookingButton } from '@/components/ui/BookingButton';
import { Calendar, MessageCircle, Heart } from 'lucide-react';

export default function FinalCTA() {
    return (
        <section id="contact" className="relative section-padding overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-loventia-beige via-loventia-cream to-loventia-beige" />

            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-loventia-rose/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-loventia-sage/5 rounded-full blur-3xl" />

            <div className="container-max relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    {/* Headline */}
                    <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-loventia-charcoal mb-6 leading-tight">
                        Prêts à vivre
                        <br />
                        <span className="italic text-loventia-rose">l'expérience Loventia ?</span>
                    </h2>

                    {/* Subtext */}
                    <p className="font-sans text-lg md:text-xl text-loventia-charcoal/70 mb-10 max-w-2xl mx-auto">
                        Chaque histoire d'amour mérite d'être racontée avec passion.
                        Réservez un appel découverte pour discuter de votre vision.
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
                            Vérifier notre disponibilité
                        </BookingButton>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-wrap justify-center gap-8 text-loventia-charcoal/60"
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
