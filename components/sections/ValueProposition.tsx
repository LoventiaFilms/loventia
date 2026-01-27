'use client';

import { motion } from 'framer-motion';
import { Film, Sparkles, Gem } from 'lucide-react';

const pillars = [
    {
        icon: Film,
        title: 'Cinématographique',
        description:
            'Chaque plan raconte une histoire. Des mouvements fluides, une lumière maîtrisée, une narration qui capture l\'essence de votre journée.',
    },
    {
        icon: Sparkles,
        title: 'Authentique',
        description:
            'Vos vrais moments. Vos vraies émotions. Nous capturons l\'instant sans le dénaturer, pour des souvenirs qui vous ressemblent.',
    },
    {
        icon: Gem,
        title: 'Élégant',
        description:
            'Un rendu intemporel et raffiné. Des images qui traverseront les années sans prendre une ride.',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut' as const,
        },
    },
};

interface ValuePropositionProps {
    introText?: React.ReactNode;
}

export default function ValueProposition({ introText }: ValuePropositionProps) {
    return (
        <section id="valeurs" className="section-padding bg-loventia-cream">
            <div className="container-max">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h2 className="font-serif text-3xl md:text-5xl text-loventia-charcoal mb-6">
                        Notre Vision
                    </h2>
                    <div className="font-sans text-loventia-charcoal/70 max-w-2xl mx-auto text-lg leading-relaxed">
                        {introText || (
                            <p>
                                Basés au cœur des <strong>Vosges</strong>, nous nous déplaçons à <strong>Nancy, Metz, Luxembourg</strong> et partout où votre histoire nous appelle. Notre mission : sublimer l'authenticité de votre union.
                            </p>
                        )}
                    </div>
                </motion.div>

                {/* Three Pillars */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
                >
                    {pillars.map((pillar) => (
                        <motion.div
                            key={pillar.title}
                            variants={itemVariants}
                            className="group text-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm
                         border border-loventia-rose/10 transition-all duration-500
                         hover:bg-white hover:shadow-glass-lg hover:-translate-y-2"
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full
                              bg-loventia-beige text-loventia-rose mb-6
                              group-hover:bg-loventia-rose group-hover:text-white
                              transition-all duration-500">
                                <pillar.icon size={28} strokeWidth={1.5} />
                            </div>

                            {/* Title */}
                            <h3 className="font-serif text-2xl text-loventia-charcoal mb-4">
                                {pillar.title}
                            </h3>

                            {/* Description */}
                            <p className="font-sans text-loventia-charcoal/70 leading-relaxed">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
