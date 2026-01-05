'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Portfolio images from assets
const portfolioItems = [
    { src: '/asset/seance-photo-mariage-couple-luxe-suisse-italie-loventia.webp', alt: 'Séance photo mariage couple luxe Suisse Italie', size: 'tall' },
    { src: '/asset/photographe-mariage-couple-spontane-emotions-vives-loventia.webp', alt: 'Photographe mariage couple spontané émotions vives', size: 'normal' },
    { src: '/asset/sortie-ceremonie-mariage-festive-groupe-emotion-loventia-luxe.webp', alt: 'Sortie cérémonie mariage festive groupe émotion', size: 'normal' },
    { src: '/asset/shooting-couple-mariage-romantique-naturel-loventia-france.webp', alt: 'Shooting couple mariage romantique naturel France', size: 'tall' },
    { src: '/asset/alliances-mariage-luxe-detail-macrophotographie-loventia.webp', alt: 'Alliances mariage luxe détail macrophotographie', size: 'normal' },
    { src: '/asset/bagues-mariage-or-diamant-photographe-suisse-france-loventia.webp', alt: 'Bagues mariage or diamant photographe Suisse France', size: 'normal' },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut' as const,
        },
    },
};

export default function Portfolio() {
    return (
        <section id="portfolio" className="section-padding bg-loventia-beige/50">
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
                        Nos Histoires
                    </h2>
                    <p className="font-sans text-loventia-charcoal/70 max-w-2xl mx-auto text-lg">
                        Chaque mariage est unique. Voici quelques-unes des histoires que nous avons eu le privilège de capturer.
                    </p>
                </motion.div>

                {/* Masonry Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
                >
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer"
                        >
                            <div
                                className={`relative ${item.size === 'tall' ? 'aspect-[3/4]' : 'aspect-square'
                                    }`}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-loventia-charcoal/60 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Hover Text */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 
                                transition-transform duration-500">
                                    <p className="font-serif text-white text-lg">{item.alt}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Instagram CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <a
                        href="https://www.instagram.com/loventiafilms/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        Voir plus sur Instagram
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
