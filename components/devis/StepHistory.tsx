'use client';

import { motion } from 'framer-motion';
import { UseFormReturn } from 'react-hook-form';
import { Heart, Users, Sparkles } from 'lucide-react';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { DevisFormData, styleOptions, guestCountOptions } from '@/lib/schemas/devis';

interface StepHistoryProps {
    form: UseFormReturn<DevisFormData>;
    onNext: () => void;
    onPrev: () => void;
}

export function StepHistory({ form, onNext, onPrev }: StepHistoryProps) {
    const handleNext = async () => {
        const isValid = await form.trigger(['coupleName1', 'coupleName2', 'style', 'guestCount']);
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
                    Étape 02
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-serif text-3xl md:text-4xl text-loventia-charcoal"
                >
                    L'Histoire
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-loventia-charcoal/60 mt-3"
                >
                    Qui êtes-vous ?
                </motion.p>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
                {/* Couple Names - Side by Side */}
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="coupleName1"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-loventia-charcoal font-medium flex items-center gap-2">
                                    <Heart className="w-4 h-4 text-loventia-rose" />
                                    Prénom
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Alice"
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
                        name="coupleName2"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-loventia-charcoal font-medium flex items-center gap-2">
                                    <Heart className="w-4 h-4 text-loventia-rose" />
                                    Prénom
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Lucas"
                                        className="h-14 rounded-xl border-loventia-beige focus:border-loventia-rose focus:ring-loventia-rose/20 bg-white"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Style Select */}
                <FormField
                    control={form.control}
                    name="style"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-loventia-charcoal font-medium flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-loventia-rose" />
                                Style de votre mariage
                            </FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                    <SelectTrigger className="h-14 rounded-xl border-loventia-beige focus:border-loventia-rose focus:ring-loventia-rose/20 bg-white">
                                        <SelectValue placeholder="Sélectionnez un style" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-white border-loventia-beige">
                                    {styleOptions.map((option) => (
                                        <SelectItem
                                            key={option.value}
                                            value={option.value}
                                            className="py-3 focus:bg-loventia-beige/50"
                                        >
                                            <div>
                                                <p className="font-medium">{option.label}</p>
                                                <p className="text-xs text-loventia-charcoal/60">{option.description}</p>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Guest Count */}
                <FormField
                    control={form.control}
                    name="guestCount"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-loventia-charcoal font-medium flex items-center gap-2">
                                <Users className="w-4 h-4 text-loventia-rose" />
                                Nombre d'invités
                            </FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                    <SelectTrigger className="h-14 rounded-xl border-loventia-beige focus:border-loventia-rose focus:ring-loventia-rose/20 bg-white">
                                        <SelectValue placeholder="Sélectionnez une tranche" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-white border-loventia-beige">
                                    {guestCountOptions.map((option) => (
                                        <SelectItem
                                            key={option.value}
                                            value={option.value}
                                            className="py-3 focus:bg-loventia-beige/50"
                                        >
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

            {/* Navigation Buttons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex gap-4"
            >
                <Button
                    type="button"
                    onClick={onPrev}
                    variant="outline"
                    className="flex-1 h-14 rounded-xl border-loventia-charcoal/20 text-loventia-charcoal hover:bg-loventia-beige/50"
                >
                    Retour
                </Button>
                <Button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 h-14 rounded-xl bg-loventia-rose hover:bg-loventia-rose-dark text-white font-medium text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                    Continuer
                </Button>
            </motion.div>
        </motion.div>
    );
}
