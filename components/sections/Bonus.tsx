'use client';

import { motion } from 'framer-motion';
import { Clock, Printer, Gift } from 'lucide-react';

const bonuses = [
    {
        icon: Clock,
        title: 'Teaser J+6',
        subtitle: 'Votre premier souvenir',
        description:
            'Recevez un teaser vidéo de 60 secondes seulement 6 jours après votre mariage. Idéal pour partager l\'émotion avec vos proches sur les réseaux.',
    },
    {
        icon: Printer,
        title: 'Impressions sur place',
        subtitle: 'Un cadeau pour vos invités',
        description:
            'Nous offrons des tirages photos instantanés le jour J. Vos invités repartent avec un souvenir tangible de cette belle journée.',
    },
];

export default function Bonus() {
    return (
        <section className="section-padding bg-loventia-beige/30">
            <div className="container-max">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-loventia-rose/10 rounded-full mb-6">
                        <Gift size={18} className="text-loventia-rose" />
                        <span className="font-sans text-sm font-medium text-loventia-rose">
                            Bonus exclusifs
                        </span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl text-loventia-charcoal mb-6">
                        Les Petits Plus
                    </h2>
                    <p className="font-sans text-loventia-charcoal/70 max-w-2xl mx-auto text-lg">
                        Parce que chaque détail compte, nous vous offrons des attentions qui font la différence.
                    </p>
                </motion.div>

                {/* Bonus Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {bonuses.map((bonus, index) => (
                        <motion.div
                            key={bonus.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative bg-white rounded-2xl p-8 shadow-glass border border-loventia-rose/5
                         hover:shadow-glass-lg hover:-translate-y-1 transition-all duration-500"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-loventia-rose to-loventia-rose-dark
                              flex items-center justify-center mb-6">
                                <bonus.icon size={24} className="text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="font-serif text-2xl text-loventia-charcoal mb-1">
                                {bonus.title}
                            </h3>
                            <p className="font-sans text-sm text-loventia-rose mb-4">
                                {bonus.subtitle}
                            </p>
                            <p className="font-sans text-loventia-charcoal/70 leading-relaxed">
                                {bonus.description}
                            </p>

                            {/* Decorative Element */}
                            <div className="absolute top-4 right-4 text-6xl font-serif text-loventia-rose/5">
                                {index === 0 ? '01' : '02'}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
