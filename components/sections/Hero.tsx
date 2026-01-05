'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookingButton } from '@/components/ui/BookingButton';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    // Parallax transforms
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    const scrollToNext = () => {
        const nextSection = document.querySelector('#valeurs');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden"
        >
            {/* Background Image with Parallax */}
            <motion.div
                style={{ scale }}
                className="absolute inset-0"
            >
                <Image
                    src="/film-mariage-cinematique-haut-de-gamme-loventia-production.webp"
                    alt="Film mariage cinématique haut de gamme couple luxe Grand Est Alsace Lorraine Suisse Loventia"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center"
            >
                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-white/80 mb-6"
                >
                    Vidéaste & Photographe de Mariage
                </motion.p>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="font-serif text-4xl md:text-6xl lg:text-7xl text-white max-w-4xl leading-tight text-shadow-lg"
                >
                    L'émotion d'un film,
                    <br />
                    <span className="italic">l'élégance d'un regard.</span>
                </motion.h1>

                {/* Subline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="font-sans text-base md:text-lg text-white/80 mt-6 max-w-2xl"
                >
                    Des souvenirs cinématographiques qui traversent le temps.
                    <br className="hidden md:block" />
                    Grand Est • France • Suisse • Luxembourg
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mt-10"
                >
                    <BookingButton variant="hero" />
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.button
                onClick={scrollToNext}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors"
                aria-label="Défiler vers le bas"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ChevronDown size={32} />
                </motion.div>
            </motion.button>
        </section>
    );
}
