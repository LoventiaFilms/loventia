'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Gift, Zap } from 'lucide-react';
import { PriceBreakdown, formatPrice, PRICING } from '@/lib/pricing';

interface PriceSummaryProps {
    breakdown: PriceBreakdown;
    mediaType: 'photo' | 'video' | 'duo';
    photoHours: number;
    videoHours: number;
}

export function PriceSummary({ breakdown, mediaType, photoHours, videoHours }: PriceSummaryProps) {
    const showPack = breakdown.packLoventiaEligible ||
        (mediaType === 'duo' && photoHours >= 10 && videoHours >= 10);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl border border-loventia-beige p-6 shadow-glass sticky top-6"
        >
            {/* Header */}
            <div className="text-center mb-6">
                <h3 className="font-serif text-xl text-loventia-charcoal">Votre estimation</h3>
                <p className="text-sm text-loventia-charcoal/60">Prix indicatif, non contractuel</p>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3">
                {/* Photo */}
                {(mediaType === 'photo' || mediaType === 'duo') && breakdown.photoPrice > 0 && (
                    <motion.div
                        layout
                        className="flex justify-between items-center text-sm"
                    >
                        <span className="text-loventia-charcoal/70">
                            Photo ({breakdown.isPackApplied && photoHours >= PRICING.PACK_LOVENTIA_PHOTO_HOURS ? '10h incluses' : `${photoHours}h`})
                        </span>
                        <span className="text-loventia-charcoal">
                            {breakdown.isPackApplied ? 'Inclus' : formatPrice(breakdown.photoPrice)}
                        </span>
                    </motion.div>
                )}

                {/* Video */}
                {(mediaType === 'video' || mediaType === 'duo') && breakdown.videoPrice > 0 && (
                    <motion.div
                        layout
                        className="flex justify-between items-center text-sm"
                    >
                        <span className="text-loventia-charcoal/70">
                            Vidéo ({breakdown.isPackApplied && videoHours >= PRICING.PACK_LOVENTIA_VIDEO_HOURS ? '10h incluses' : `${videoHours}h`})
                        </span>
                        <span className="text-loventia-charcoal">
                            {breakdown.isPackApplied ? 'Inclus' : formatPrice(breakdown.videoPrice)}
                        </span>
                    </motion.div>
                )}

                {/* Options */}
                {breakdown.optionsTotal > 0 && (
                    <motion.div
                        layout
                        className="flex justify-between items-center text-sm"
                    >
                        <span className="text-loventia-charcoal/70">Options</span>
                        <span className="text-loventia-charcoal">
                            {formatPrice(breakdown.isPackApplied ? breakdown.optionsTotal - PRICING.DRONE - PRICING.TEASER : breakdown.optionsTotal)}
                        </span>
                    </motion.div>
                )}

                {/* Free items */}
                <AnimatePresence>
                    {breakdown.freeItems.length > 0 && breakdown.freeItems.map((item) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="flex justify-between items-center text-sm"
                        >
                            <span className="text-loventia-sage flex items-center gap-1">
                                <Gift className="w-3.5 h-3.5" />
                                {item}
                            </span>
                            <span className="text-loventia-sage font-medium">OFFERT</span>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Delivery */}
                {breakdown.deliveryTotal > 0 && (
                    <motion.div
                        layout
                        className="flex justify-between items-center text-sm"
                    >
                        <span className="text-loventia-charcoal/70 flex items-center gap-1">
                            <Zap className="w-3.5 h-3.5" />
                            Livraison Express
                        </span>
                        <span className="text-loventia-charcoal">{formatPrice(breakdown.deliveryTotal)}</span>
                    </motion.div>
                )}

                {/* Divider */}
                <div className="border-t border-loventia-beige my-4" />

                {/* Pack Loventia Banner */}
                <AnimatePresence>
                    {showPack && breakdown.packLoventiaEligible && breakdown.packLoventiaSavings > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="bg-gradient-to-r from-loventia-rose/10 to-loventia-beige/50 rounded-xl p-4 mb-4"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="w-5 h-5 text-loventia-rose" />
                                <span className="font-serif text-loventia-rose font-medium">Pack Loventia Signature</span>
                            </div>
                            <p className="text-xs text-loventia-charcoal/70 mb-2">
                                Photo + Vidéo + Drone + Teaser inclus
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-loventia-charcoal/50 line-through text-sm">
                                    {formatPrice(breakdown.subtotal)}
                                </span>
                                <span className="text-loventia-rose font-serif text-lg font-semibold">
                                    {formatPrice(breakdown.packLoventiaPrice)}
                                </span>
                            </div>
                            <p className="text-xs text-loventia-sage mt-1 text-right">
                                Économie de {formatPrice(breakdown.packLoventiaSavings)}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Total */}
                <motion.div
                    layout
                    className="flex justify-between items-center"
                >
                    <span className="font-serif text-lg text-loventia-charcoal">Total estimé</span>
                    <motion.span
                        key={breakdown.finalTotal}
                        initial={{ scale: 1.1, color: '#B76E79' }}
                        animate={{ scale: 1, color: '#333333' }}
                        className="font-serif text-2xl font-semibold text-loventia-charcoal"
                    >
                        {formatPrice(breakdown.finalTotal)}
                    </motion.span>
                </motion.div>

                {/* Not Pack eligible hint */}
                <AnimatePresence>
                    {mediaType === 'duo' && !breakdown.packLoventiaEligible && photoHours >= 8 && videoHours >= 8 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-xs text-loventia-charcoal/50 text-center mt-3 p-3 bg-loventia-beige/30 rounded-lg"
                        >
                            <Sparkles className="w-4 h-4 inline mr-1 text-loventia-rose/50" />
                            Sélectionnez 10h+ en Photo & Vidéo avec Drone & Teaser pour débloquer le Pack Loventia
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
