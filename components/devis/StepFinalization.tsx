'use client';

import { motion } from 'framer-motion';
import { UseFormReturn } from 'react-hook-form';
import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { DevisFormData } from '@/lib/schemas/devis';
import { calculateTotal, formatPrice } from '@/lib/pricing';

interface StepFinalizationProps {
    form: UseFormReturn<DevisFormData>;
    onPrev: () => void;
    onSubmit: () => void;
    isSubmitting: boolean;
}

export function StepFinalization({ form, onPrev, onSubmit, isSubmitting }: StepFinalizationProps) {
    const mediaType = form.watch('mediaType');
    const photoHours = form.watch('photoHours') || 6;
    const videoHours = form.watch('videoHours') || 6;
    const options = form.watch('options');
    const delivery = form.watch('delivery');

    const breakdown = calculateTotal({
        mediaType: mediaType || 'video',
        photoHours,
        videoHours,
        options: options || {
            drone: false,
            teaser: false,
            interviews: false,
            longFilm: false,
            rawFootage: false,
            secondPhotographer: false,
            secondVideographer: false,
        },
        delivery: delivery || {
            expressPhotos: false,
            expressVideo: false,
        },
    });

    const handleSubmit = async () => {
        const isValid = await form.trigger(['name', 'email', 'phone']);
        if (isValid) {
            onSubmit();
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
                    Étape 04
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-serif text-3xl md:text-4xl text-loventia-charcoal"
                >
                    Finalisation
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-loventia-charcoal/60 mt-3"
                >
                    Plus qu'une étape pour recevoir votre devis
                </motion.p>
            </div>

            {/* Summary Card */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-loventia-rose/10 to-loventia-beige/50 rounded-2xl p-6 mb-8 text-center"
            >
                <p className="text-sm text-loventia-charcoal/60 mb-1">Estimation totale</p>
                <p className="font-serif text-3xl text-loventia-rose font-semibold">
                    {formatPrice(breakdown.finalTotal)}
                </p>
                {breakdown.isPackApplied && (
                    <p className="text-xs text-loventia-sage mt-1">
                        Pack Loventia Signature appliqué
                    </p>
                )}
            </motion.div>

            {/* Form Fields */}
            <div className="space-y-5">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-loventia-charcoal font-medium flex items-center gap-2">
                                <User className="w-4 h-4 text-loventia-rose" />
                                Votre nom complet
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Marie Dupont"
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
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-loventia-charcoal font-medium flex items-center gap-2">
                                <Mail className="w-4 h-4 text-loventia-rose" />
                                Email
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="marie@exemple.com"
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
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-loventia-charcoal font-medium flex items-center gap-2">
                                <Phone className="w-4 h-4 text-loventia-rose" />
                                Téléphone
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="tel"
                                    placeholder="06 12 34 56 78"
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
                    name="notes"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-loventia-charcoal font-medium flex items-center gap-2">
                                <MessageSquare className="w-4 h-4 text-loventia-rose" />
                                Message (optionnel)
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Parlez-nous de votre mariage, vos attentes particulières..."
                                    className="min-h-[120px] rounded-xl border-loventia-beige focus:border-loventia-rose focus:ring-loventia-rose/20 bg-white resize-none"
                                    {...field}
                                />
                            </FormControl>
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
                    disabled={isSubmitting}
                    className="flex-1 h-14 rounded-xl border-loventia-charcoal/20 text-loventia-charcoal hover:bg-loventia-beige/50"
                >
                    Retour
                </Button>
                <Button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex-1 h-14 rounded-xl bg-loventia-rose hover:bg-loventia-rose-dark text-white font-medium text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50"
                >
                    {isSubmitting ? (
                        <span className="flex items-center gap-2">
                            <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                className="inline-block"
                            >
                                ⏳
                            </motion.span>
                            Envoi en cours...
                        </span>
                    ) : (
                        <span className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            Recevoir mon devis
                        </span>
                    )}
                </Button>
            </motion.div>

            {/* Privacy notice */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-xs text-loventia-charcoal/40 text-center mt-6"
            >
                En soumettant ce formulaire, vous acceptez d'être contacté par Loventia.
                <br />Vos données ne seront jamais partagées.
            </motion.p>
        </motion.div>
    );
}
