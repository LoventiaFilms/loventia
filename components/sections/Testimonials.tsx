'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        couple: 'Marine & Thomas',
        location: 'Mariage à Épinal',
        text: 'Nous avons été époustouflés par le résultat ! Le film est encore plus beau que ce que nous avions imaginé. Chaque émotion a été capturée avec une sensibilité incroyable.',
    },
    {
        couple: 'Camille & Antoine',
        location: 'Mariage en Alsace',
        text: 'Le teaser reçu 6 jours après le mariage nous a fait revivre tous ces moments magiques. Nos familles n\'arrêtent pas de le regarder en boucle !',
    },
    {
        couple: 'Julie & Maxime',
        location: 'Mariage à Nancy',
        text: 'Professionnels, discrets et incroyablement talentueux. Le rendu cinématographique dépasse toutes nos attentes. On recommande les yeux fermés.',
    },
    {
        couple: 'Léa & Pierre',
        location: 'Mariage dans les Vosges',
        text: 'Les photos sont sublimes et le film est une vraie œuvre d\'art. Merci de nous avoir offert de si beaux souvenirs.',
    },
];

export default function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    // Update selected index on scroll
    emblaApi?.on('select', onSelect);

    return (
        <section id="temoignages" className="section-padding bg-loventia-cream overflow-hidden">
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
                        Ils nous ont fait confiance
                    </h2>
                    <p className="font-sans text-loventia-charcoal/70 max-w-2xl mx-auto text-lg">
                        Des couples qui ont vécu l'expérience Loventia partagent leurs impressions.
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] lg:flex-[0_0_60%] px-4"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className={`bg-white rounded-2xl p-8 md:p-12 shadow-glass border border-loventia-rose/5
                               transition-all duration-500 ${selectedIndex === index ? 'scale-100' : 'scale-95 opacity-60'
                                            }`}
                                    >
                                        {/* Quote Icon */}
                                        <Quote size={40} className="text-loventia-rose/20 mb-6" />

                                        {/* Testimonial Text */}
                                        <p className="font-sans text-lg md:text-xl text-loventia-charcoal/80 leading-relaxed mb-8 italic">
                                            "{testimonial.text}"
                                        </p>

                                        {/* Couple Info */}
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-loventia-beige flex items-center justify-center">
                                                <span className="font-serif text-loventia-rose text-lg">
                                                    {testimonial.couple.charAt(0)}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="font-serif text-loventia-charcoal font-medium">
                                                    {testimonial.couple}
                                                </p>
                                                <p className="font-sans text-sm text-loventia-charcoal/60">
                                                    {testimonial.location}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={scrollPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0
                       w-12 h-12 rounded-full bg-white shadow-lg border border-loventia-rose/10
                       flex items-center justify-center text-loventia-charcoal
                       hover:bg-loventia-rose hover:text-white transition-all duration-300
                       z-10"
                        aria-label="Témoignage précédent"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0
                       w-12 h-12 rounded-full bg-white shadow-lg border border-loventia-rose/10
                       flex items-center justify-center text-loventia-charcoal
                       hover:bg-loventia-rose hover:text-white transition-all duration-300
                       z-10"
                        aria-label="Témoignage suivant"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${selectedIndex === index
                                    ? 'bg-loventia-rose w-6'
                                    : 'bg-loventia-charcoal/20 hover:bg-loventia-charcoal/40'
                                }`}
                            aria-label={`Aller au témoignage ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
