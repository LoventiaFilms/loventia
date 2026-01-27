'use client';

import { motion } from 'framer-motion';
import { UseFormReturn } from 'react-hook-form';
import { Calendar, MapPin } from 'lucide-react';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DevisFormData } from '@/lib/schemas/devis';

interface StepEssentialsProps {
    form: UseFormReturn<DevisFormData>;
    onNext: () => void;
}

export function StepEssentials({ form, onNext }: StepEssentialsProps) {
    const handleNext = async () => {
        const isValid = await form.trigger(['date', 'location']);
        if (isValid) {
            onNext();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-lg mx-auto"
        >
            {/* Step Header */}
            <div className="text-center mb-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm tracking-[0.25em] uppercase text-loventia-rose mb-3"
                >
                    Étape 01
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-serif text-3xl md:text-4xl text-loventia-charcoal"
                >
                    Les Essentiels
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-loventia-charcoal/60 mt-3"
                >
                    Parlez-nous de votre jour J
                </motion.p>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-loventia-charcoal font-medium flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-loventia-rose" />
                                Date du mariage
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="date"
                                    placeholder="Sélectionnez une date"
                                    className="h-14 rounded-xl border-loventia-beige focus:border-loventia-rose focus:ring-loventia-rose/20 bg-white"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-loventia-charcoal font-medium flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-loventia-rose" />
                                Lieu / Ville
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Ex: Château de la Rochelle, Nancy"
                                    className="h-14 rounded-xl border-loventia-beige focus:border-loventia-rose focus:ring-loventia-rose/20 bg-white"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

            {/* Continue Button */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-10"
            >
                <Button
                    type="button"
                    onClick={handleNext}
                    className="w-full h-14 rounded-xl bg-loventia-rose hover:bg-loventia-rose-dark text-white font-medium text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                    Continuer
                </Button>
            </motion.div>
        </motion.div>
    );
}
