'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Palette, ArrowRight, Check, Camera, Video, Plane } from 'lucide-react';

const packFeatures = [
    '8h Photo',
    '8h Vidéo',
    'Drone',
    'Teaser Offert',
];

export default function HomePricingHub() {
    return (
        <section
            id="tarifs"
            className="relative py-24 md:py-32 bg-gradient-to-b from-loventia-beige/30 via-loventia-beige/50 to-white overflow-hidden"
        >
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-loventia-rose/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-200/10 rounded-full blur-3xl" />
            </div>

            <div className="container-elegant relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-loventia-rose text-sm tracking-[0.25em] uppercase mb-4">
                        Nos Formules
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-loventia-charcoal mb-4">
                        Votre Histoire, Votre Format
                    </h2>
                    <p className="text-loventia-charcoal/60 max-w-xl mx-auto">
                        Découvrez nos deux approches pour immortaliser votre journée
                    </p>
                </motion.div>

                {/* Pricing Cards Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {/* Card A: Pack Loventia Signature (Primary) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-loventia-rose/10 rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-500" />
                        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-amber-300 p-8 lg:p-10 shadow-xl shadow-amber-100/30">
                            {/* Recommended Badge */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    Recommandé
                                </span>
                            </div>

                            {/* Header */}
                            <div className="text-center pt-4 mb-6">
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center">
                                    <Sparkles className="w-8 h-8 text-amber-600" />
                                </div>
                                <h3 className="font-serif text-2xl lg:text-3xl text-loventia-charcoal mb-2">
                                    Pack Loventia Signature
                                </h3>
                                <p className="text-loventia-charcoal/60 text-sm">
                                    L'équilibre parfait pour ne rien rater
                                </p>
                            </div>

                            {/* Price */}
                            <div className="text-center mb-6">
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="font-serif text-5xl lg:text-6xl text-loventia-rose font-semibold">
                                        2 990
                                    </span>
                                    <span className="text-loventia-charcoal/50 text-xl">€</span>
                                </div>
                                <p className="text-xs text-loventia-charcoal/40 mt-1">
                                    au lieu de 3 950 € à la carte
                                </p>
                            </div>

                            {/* Features */}
                            <div className="flex flex-wrap justify-center gap-2 mb-8">
                                {packFeatures.map((feature, i) => (
                                    <span
                                        key={i}
                                        className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-sm px-3 py-1.5 rounded-lg"
                                    >
                                        <Check className="w-3.5 h-3.5" />
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}
                            <Link
                                href="/devis"
                                className="group/btn w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-amber-200/50 hover:shadow-amber-300/50"
                            >
                                Vérifier la disponibilité
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Card B: Sur-Mesure (Secondary) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-loventia-beige/30 rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-500" />
                        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border border-loventia-beige p-8 lg:p-10 h-full flex flex-col">
                            {/* Header */}
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 mx-auto mb-4 bg-loventia-beige/50 rounded-2xl flex items-center justify-center">
                                    <Palette className="w-8 h-8 text-loventia-charcoal/70" />
                                </div>
                                <h3 className="font-serif text-2xl lg:text-3xl text-loventia-charcoal mb-2">
                                    Création Sur-Mesure
                                </h3>
                                <p className="text-loventia-charcoal/60 text-sm">
                                    Construisez votre offre idéale
                                </p>
                            </div>

                            {/* Price */}
                            <div className="text-center mb-6">
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-loventia-charcoal/50 text-lg">à partir de</span>
                                </div>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="font-serif text-4xl lg:text-5xl text-loventia-charcoal font-semibold">
                                        1 100
                                    </span>
                                    <span className="text-loventia-charcoal/50 text-xl">€</span>
                                </div>
                            </div>

                            {/* Options */}
                            <div className="flex-1 mb-8">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-loventia-charcoal/70">
                                        <div className="w-8 h-8 rounded-lg bg-loventia-beige/50 flex items-center justify-center">
                                            <Camera className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm">Photo seule (6h à 12h)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-loventia-charcoal/70">
                                        <div className="w-8 h-8 rounded-lg bg-loventia-beige/50 flex items-center justify-center">
                                            <Video className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm">Vidéo seule (6h à 12h)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-loventia-charcoal/70">
                                        <div className="w-8 h-8 rounded-lg bg-loventia-beige/50 flex items-center justify-center">
                                            <Plane className="w-4 h-4" />
                                        </div>
                                        <span className="text-sm">Options à la carte</span>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <Link
                                href="/devis"
                                className="group/btn w-full flex items-center justify-center gap-2 bg-transparent hover:bg-loventia-charcoal text-loventia-charcoal hover:text-white border-2 border-loventia-charcoal font-medium py-4 px-6 rounded-xl transition-all duration-300"
                            >
                                Estimer mon budget
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center text-loventia-charcoal/50 text-sm mt-10 max-w-lg mx-auto"
                >
                    Frais de déplacement offerts dans le Grand Est. Devis personnalisé sous 24h.
                </motion.p>
            </div>
        </section>
    );
}
