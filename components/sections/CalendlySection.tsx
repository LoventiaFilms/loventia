'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function CalendlySection() {
    useEffect(() => {
        // Load Calendly script only once
        const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <section id="calendrier" className="relative section-padding overflow-hidden bg-white">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-loventia-rose/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-loventia-sage/5 rounded-full blur-3xl" />

            <div className="container-max relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-loventia-charcoal mb-4">
                        Réservez
                        <span className="italic text-loventia-rose"> votre date</span>
                    </h2>
                    <p className="font-sans text-lg text-loventia-charcoal/70 max-w-xl mx-auto">
                        Sélectionnez la date de votre mariage pour bloquer notre disponibilité.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full"
                >
                    {/* Calendly Inline Widget */}
                    <div
                        className="calendly-inline-widget rounded-2xl overflow-hidden shadow-card"
                        data-url="https://calendly.com/loventia/reservation?hide_gdpr_banner=1"
                        style={{ minWidth: '320px', height: '700px', width: '100%' }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
