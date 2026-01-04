'use client';

import { motion } from 'framer-motion';
import { Check, Camera, Film, Plane, Clock, RefreshCw, Frame } from 'lucide-react';
import { BookingButton } from '@/components/ui/BookingButton';

const inclusions = [
    { icon: Film, text: 'Film de mariage 10-20 minutes' },
    { icon: Camera, text: 'Reportage photo complet' },
    { icon: Plane, text: 'Prises de vue drone' },
    { icon: Clock, text: 'Teaser express J+6' },
    { icon: RefreshCw, text: 'Modifications illimitées' },
];

export default function PricingCard() {
    return (
        <section id="offre" className="section-padding bg-loventia-cream">
            <div className="container-max">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-5xl text-loventia-charcoal mb-6">
                        La Formule Unique
                    </h2>
                    <p className="font-sans text-loventia-charcoal/70 max-w-2xl mx-auto text-lg">
                        Une seule offre d'excellence, pensée pour vous offrir l'essentiel sans compromis.
                    </p>
                </motion.div>

                {/* Pricing Card - Luxury Wedding Invitation Style */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-glass-lg border border-loventia-rose/10 overflow-hidden">
                        {/* Decorative Corner Elements */}
                        <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-loventia-rose/20 rounded-tl-3xl" />
                        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-loventia-rose/20 rounded-br-3xl" />

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Badge */}
                            <div className="text-center mb-8">
                                <span className="inline-block px-4 py-1.5 bg-loventia-beige text-loventia-rose text-sm font-medium rounded-full">
                                    Formule Tout-Inclus
                                </span>
                            </div>

                            {/* Price */}
                            <div className="text-center mb-10">
                                <div className="flex items-baseline justify-center gap-2">
                                    <span className="font-serif text-6xl md:text-7xl text-loventia-charcoal">
                                        2990
                                    </span>
                                    <span className="font-sans text-xl text-loventia-charcoal/70">€ TTC</span>
                                </div>
                                <p className="font-sans text-sm text-loventia-charcoal/50 mt-2">
                                    Aucun frais supplémentaire • Déplacement inclus (rayon 200km)
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="flex items-center gap-4 mb-10">
                                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-loventia-rose/30 to-transparent" />
                                <span className="font-serif text-loventia-rose italic">Ce qui est inclus</span>
                                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-loventia-rose/30 to-transparent" />
                            </div>

                            {/* Inclusions Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                {inclusions.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-loventia-sage/20 flex items-center justify-center">
                                            <item.icon size={18} className="text-loventia-sage" />
                                        </div>
                                        <span className="font-sans text-loventia-charcoal">
                                            {item.text}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Upsell Option */}
                            <div className="bg-loventia-beige/30 rounded-xl p-6 mb-10 border border-loventia-rose/20">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white rounded-full text-loventia-rose shadow-sm flex-shrink-0">
                                        <Frame size={24} />
                                    </div>
                                    <div className="text-left">
                                        <span className="text-xs font-bold text-loventia-rose uppercase tracking-wider">
                                            Disponible en option
                                        </span>
                                        <h4 className="font-serif text-lg text-loventia-charcoal mt-1 mb-2">
                                            Le Bar à Souvenirs
                                        </h4>
                                        <p className="font-sans text-sm text-loventia-charcoal/80">
                                            Impressions photos 15x20cm sur place, mises directement sous cadre pour un cadeau invité inoubliable.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="text-center">
                                <BookingButton variant="default">
                                    Réserver cette date
                                </BookingButton>
                                <p className="font-sans text-xs text-loventia-charcoal/50 mt-4">
                                    Réponse sous 24h • Sans engagement
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
