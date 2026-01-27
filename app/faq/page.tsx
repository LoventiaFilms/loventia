'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Metadata } from 'next';

const faqs = [
    {
        question: "Quel est votre délai de livraison ?",
        answer: "Nous livrons vos créations sous 6 à 8 semaines après votre mariage. Nous prenons le temps de peaufiner chaque détail pour vous offrir un résultat d'exception. Un teaser vidéo vous est envoyé dans les 48h pour patienter !"
    },
    {
        question: "Vous déplacez-vous partout en France et à l'étranger ?",
        answer: "Nous sommes basés dans le Grand Est (Épinal), mais nous nous déplaçons partout en France, en Suisse, au Luxembourg et en Europe. Chaque destination est une nouvelle aventure que nous sommes ravis de capturer pour vous."
    },
    {
        question: "Comment réserver une prestation ?",
        answer: "Rien de plus simple ! Contactez-nous via notre formulaire de devis, par téléphone au 06 51 30 13 83, ou par email. Nous échangeons sur votre projet, puis vous recevez un devis personnalisé. Une fois validé, un acompte de 30% sécurise votre date."
    },
    {
        question: "Proposez-vous uniquement le mariage ou d'autres prestations ?",
        answer: "Le mariage est notre spécialité, mais nous réalisons également des reportages pour fiançailles, baptêmes, anniversaires, et événements familiaux. Chaque moment mérite d'être capturé avec la même élégance et émotion."
    },
    {
        question: "Peut-on choisir la musique de notre film de mariage ?",
        answer: "Absolument ! Vous pouvez nous suggérer des artistes ou morceaux qui vous correspondent. Nous créons ensuite une bande-son sur mesure qui reflète l'ambiance de votre journée, avec votre validation avant la livraison finale."
    }
];

function AccordionItem({ question, answer, isOpen, onToggle }: {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="border-b border-loventia-charcoal/10 last:border-0">
            <button
                onClick={onToggle}
                className="w-full py-6 flex items-center justify-between gap-4 text-left group"
                aria-expanded={isOpen}
            >
                <h3 className="font-serif text-xl md:text-2xl text-loventia-charcoal group-hover:text-loventia-rose transition-colors">
                    {question}
                </h3>
                <ChevronDown
                    className={`flex-shrink-0 w-6 h-6 text-loventia-rose transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}
            >
                <p className="text-loventia-charcoal/70 leading-relaxed font-sans">
                    {answer}
                </p>
            </div>
        </div>
    );
}

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main className="min-h-screen bg-loventia-cream">
            {/* Hero Section */}
            <section className="section-padding !pt-32 !pb-16 text-center">
                <div className="container-max">
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-loventia-charcoal mb-6">
                        Questions Fréquentes
                    </h1>
                    <p className="text-lg md:text-xl text-loventia-charcoal/60 max-w-2xl mx-auto font-sans">
                        Tout ce que vous devez savoir avant de nous confier votre jour J.
                    </p>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="pb-20 md:pb-32">
                <div className="container-max max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-12 text-center">
                        <p className="text-loventia-charcoal/60 mb-6 font-sans">
                            Une question qui n'apparaît pas ici ?
                        </p>
                        <a
                            href="tel:+33651301383"
                            className="btn-primary inline-flex"
                        >
                            Appelez-nous au 06 51 30 13 83
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
