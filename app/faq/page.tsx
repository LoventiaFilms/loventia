'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Metadata } from 'next';

const faqs = [
    {
        question: "Quels sont vos délais de livraison réels ?",
        answer: "Nous savons que vous êtes impatients. Le Teaser (format réel/tiktok) arrive sous 6 jours maximum après le mariage. La galerie photos complète est livrée sous 2 à 3 semaines, et le film final sous 4 semaines. Une option 'Livraison Express' est disponible si vous souhaitez tout recevoir en priorité."
    },
    {
        question: "Proposez-vous des formules sur-mesure ?",
        answer: "Absolument. C'est notre grande différence. Contrairement aux forfaits rigides, nous vous permettons de composer votre équipe (Photo, Vidéo ou Duo) et vos horaires à la carte via notre 'Estimateur de Budget' en ligne. Vous ne payez que ce dont vous avez vraiment besoin."
    },
    {
        question: "Le drone est-il inclus ?",
        answer: "Si vous optez pour le 'Pack Signature Loventia' (notre formule la plus complète), les prises de vue aériennes par drone sont offertes. Pour les prestations à la carte, c'est une option que vous pouvez ajouter si la météo et la législation le permettent."
    },
    {
        question: "Jusqu'où vous déplacez-vous ?",
        answer: "Partout où il y a une histoire à raconter. Les frais de déplacement sont d'ailleurs offerts dans un rayon de 200 km autour d'Épinal (couvrant Nancy, Metz, Strasbourg, Luxembourg). Au-delà, nous appliquons un forfait kilométrique standard validé ensemble sur le devis."
    },
    {
        question: "Peut-on choisir les musiques du film ?",
        answer: "Pour que vous puissiez partager votre film sur les réseaux sociaux sans blocage, nous utilisons des musiques sous licence professionnelle (Artlist, Musicbed). Nous définissons ensemble le style musical (émotion, dynamique, folk...) et nous sélectionnons les meilleurs titres pour rythmer votre histoire."
    },
    {
        question: "Pouvons-nous demander des modifications sur le montage ?",
        answer: "Oui, et c'est inclus ! Nous voulons que votre film soit parfait. Une fois la première version livrée, vous pouvez demander des ajustements illimités (changement de plan, coupe, rythme) jusqu'à satisfaction totale."
    },
    {
        question: "Comment bloquer la date ?",
        answer: "Premier arrivé, premier servi. Après validation de votre devis (faisable en ligne), un acompte de 30% est demandé pour verrouiller définitivement la date dans notre calendrier. Le solde est à régler avant la livraison des images."
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
