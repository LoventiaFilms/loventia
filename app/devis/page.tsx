'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Heart } from 'lucide-react';

import { Form } from '@/components/ui/form';
import { WizardProgress } from '@/components/devis/WizardProgress';
import { StepEssentials } from '@/components/devis/StepEssentials';
import { StepHistory } from '@/components/devis/StepHistory';
import { StepConfiguration } from '@/components/devis/StepConfiguration';
import { StepFinalization } from '@/components/devis/StepFinalization';
import { devisFormSchema, DevisFormData } from '@/lib/schemas/devis';
import { submitQuote } from './actions';

const TOTAL_STEPS = 4;

export default function DevisPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [quoteId, setQuoteId] = useState<string | null>(null);

    const form = useForm<DevisFormData>({
        resolver: zodResolver(devisFormSchema),
        defaultValues: {
            date: '',
            location: '',
            coupleName1: '',
            coupleName2: '',
            style: undefined,
            guestCount: '',
            mediaType: 'duo',
            photoHours: 6,
            videoHours: 6,
            options: {
                drone: false,
                teaser: false,
                interviews: false,
                longFilm: false,
                rawFootage: false,
                secondPhotographer: false,
                secondVideographer: false,
            },
            delivery: {
                expressPhotos: false,
                expressVideo: false,
            },
            name: '',
            email: '',
            phone: '',
            notes: '',
        },
        mode: 'onChange',
    });

    const nextStep = () => {
        if (currentStep < TOTAL_STEPS) {
            setCurrentStep(currentStep + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        const data = form.getValues();

        const result = await submitQuote(data);

        setIsSubmitting(false);

        if (result.success) {
            setQuoteId(result.quoteId || null);
            setIsSubmitted(true);
        } else {
            // Show error toast (using the existing Toaster)
            console.error('Submission failed:', result.message);
        }
    };

    // Success state
    if (isSubmitted) {
        return (
            <main className="min-h-screen bg-loventia-cream pt-24 pb-16 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md mx-auto text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className="w-20 h-20 bg-loventia-sage/20 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <CheckCircle2 className="w-10 h-10 text-loventia-sage" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="font-serif text-3xl md:text-4xl text-loventia-charcoal mb-4"
                    >
                        Demande envoyée !
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-loventia-charcoal/70 mb-6"
                    >
                        Merci pour votre confiance. Nous vous répondrons sous 24h avec un devis personnalisé.
                    </motion.p>

                    {quoteId && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-sm text-loventia-charcoal/50 mb-8"
                        >
                            Référence: <span className="font-mono">{quoteId}</span>
                        </motion.p>
                    )}

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center justify-center gap-2 text-loventia-rose"
                    >
                        <Heart className="w-5 h-5" />
                        <span className="font-serif italic">À très bientôt</span>
                    </motion.div>
                </motion.div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-loventia-cream pt-24 pb-16 px-4">
            {/* Page Header */}
            <div className="text-center mb-8">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-serif text-4xl md:text-5xl text-loventia-charcoal mb-3"
                >
                    Estimateur de Devis
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-loventia-charcoal/60 max-w-md mx-auto"
                >
                    Configurez votre prestation en quelques clics et recevez une estimation personnalisée
                </motion.p>
            </div>

            {/* Progress Bar */}
            <WizardProgress currentStep={currentStep} totalSteps={TOTAL_STEPS} />

            {/* Form Container */}
            <div className="max-w-6xl mx-auto">
                <Form {...form}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <AnimatePresence mode="wait">
                            {currentStep === 1 && (
                                <StepEssentials
                                    key="step-1"
                                    form={form}
                                    onNext={nextStep}
                                />
                            )}

                            {currentStep === 2 && (
                                <StepHistory
                                    key="step-2"
                                    form={form}
                                    onNext={nextStep}
                                    onPrev={prevStep}
                                />
                            )}

                            {currentStep === 3 && (
                                <StepConfiguration
                                    key="step-3"
                                    form={form}
                                    onNext={nextStep}
                                    onPrev={prevStep}
                                />
                            )}

                            {currentStep === 4 && (
                                <StepFinalization
                                    key="step-4"
                                    form={form}
                                    onPrev={prevStep}
                                    onSubmit={handleSubmit}
                                    isSubmitting={isSubmitting}
                                />
                            )}
                        </AnimatePresence>
                    </form>
                </Form>
            </div>
        </main>
    );
}
