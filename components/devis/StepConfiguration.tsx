'use client';

import { motion } from 'framer-motion';
import { UseFormReturn } from 'react-hook-form';
import { Camera, Video, Layers, Podcast, Plane, Film, Clock, Users2, HardDrive, Zap, Sparkles, Check } from 'lucide-react';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormDescription,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { DevisFormData } from '@/lib/schemas/devis';
import { PRICING, formatPrice, calculateTotal, PriceBreakdown } from '@/lib/pricing';
import { PriceSummary } from './PriceSummary';

interface StepConfigurationProps {
    form: UseFormReturn<DevisFormData>;
    onNext: () => void;
    onPrev: () => void;
}

const mediaOptions = [
    { value: 'photo' as const, label: 'Photo', icon: Camera, description: 'Reportage photo uniquement', recommended: false },
    { value: 'video' as const, label: 'Vidéo', icon: Video, description: 'Film de mariage uniquement', recommended: false },
    { value: 'duo' as const, label: 'Photo + Vidéo', icon: Layers, description: 'Couverture complète', recommended: true },
];

const optionsList = [
    { id: 'drone' as const, label: 'Prises de vue drone', price: PRICING.DRONE, icon: Plane, free: false },
    { id: 'teaser' as const, label: 'Teaser Vertical (1 min)', price: PRICING.TEASER, icon: Film, free: false },
    { id: 'interviews' as const, label: 'Interviews invités', price: 0, icon: Podcast, free: true },
    { id: 'longFilm' as const, label: 'Film Long Métrage (+20 min)', price: PRICING.LONG_FILM, icon: Clock, free: false },
    { id: 'rawFootage' as const, label: 'Rushs Bruts sur Clé USB', price: PRICING.RAW_FOOTAGE, icon: HardDrive, free: false },
    { id: 'secondPhotographer' as const, label: '2nd Photographe', price: PRICING.SECOND_PHOTOGRAPHER, icon: Users2, free: false },
    { id: 'secondVideographer' as const, label: '2nd Vidéaste', price: PRICING.SECOND_VIDEOGRAPHER, icon: Users2, free: false },
];

const deliveryOptions = [
    { id: 'expressPhotos' as const, label: 'Photos Express (J+7)', price: PRICING.EXPRESS_PHOTOS, forMedia: ['photo', 'duo'] as const },
    { id: 'expressVideo' as const, label: 'Vidéo Express (J+14)', price: PRICING.EXPRESS_VIDEO, forMedia: ['video', 'duo'] as const },
];

export function StepConfiguration({ form, onNext, onPrev }: StepConfigurationProps) {
    const mediaType = form.watch('mediaType');
    const photoHours = form.watch('photoHours') || 6;
    const videoHours = form.watch('videoHours') || 6;
    const options = form.watch('options') || {
        drone: false,
        teaser: false,
        interviews: false,
        longFilm: false,
        rawFootage: false,
        secondPhotographer: false,
        secondVideographer: false,
    };
    const delivery = form.watch('delivery') || {
        expressPhotos: false,
        expressVideo: false,
    };

    // Calculate price breakdown
    const breakdown: PriceBreakdown = calculateTotal({
        mediaType: mediaType || 'video',
        photoHours,
        videoHours,
        options,
        delivery,
    });

    const handleNext = async () => {
        const isValid = await form.trigger(['mediaType', 'photoHours', 'videoHours', 'options', 'delivery']);
        if (isValid) {
            onNext();
        }
    };

    // One-click Pack Loventia activation
    const handlePackClick = () => {
        form.setValue('mediaType', 'duo');
        form.setValue('photoHours', PRICING.PACK_LOVENTIA_PHOTO_HOURS);
        form.setValue('videoHours', PRICING.PACK_LOVENTIA_VIDEO_HOURS);
        form.setValue('options.drone', true);
        form.setValue('options.teaser', true);
        form.setValue('options.interviews', true);
    };

    // Check if current config matches Pack Loventia
    const isPackSelected =
        mediaType === 'duo' &&
        photoHours >= PRICING.PACK_LOVENTIA_PHOTO_HOURS &&
        videoHours >= PRICING.PACK_LOVENTIA_VIDEO_HOURS &&
        options.drone &&
        options.teaser;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-5xl mx-auto"
        >
            {/* Step Header */}
            <div className="text-center mb-10">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm tracking-[0.25em] uppercase text-loventia-rose mb-3"
                >
                    Étape 03
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-serif text-3xl md:text-4xl text-loventia-charcoal"
                >
                    La Configuration
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-loventia-charcoal/60 mt-3"
                >
                    Composez votre prestation idéale
                </motion.p>
            </div>

            {/* Pack Loventia Hero Card - One-Click Activation */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
            >
                <motion.button
                    type="button"
                    onClick={handlePackClick}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full relative overflow-hidden rounded-2xl p-6 md:p-8 text-left transition-all duration-500 ${isPackSelected
                        ? 'bg-gradient-to-br from-amber-50 via-white to-amber-50 border-2 border-amber-400 shadow-lg shadow-amber-100'
                        : 'bg-gradient-to-br from-loventia-beige/30 via-white to-loventia-beige/20 border-2 border-amber-200/50 hover:border-amber-300 hover:shadow-md'
                        }`}
                >
                    {/* Recommended Badge */}
                    <div className="absolute top-4 right-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-colors ${isPackSelected
                            ? 'bg-amber-400 text-white'
                            : 'bg-amber-100 text-amber-700'
                            }`}>
                            <Sparkles className="w-3 h-3" />
                            Recommandé
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                        {/* Icon & Title */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${isPackSelected
                                    ? 'bg-amber-400 text-white'
                                    : 'bg-amber-100 text-amber-600'
                                    }`}>
                                    <Layers className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl md:text-2xl text-loventia-charcoal">
                                        ✨ Pack Loventia Signature
                                    </h3>
                                    <p className="text-sm text-loventia-charcoal/60">
                                        Le choix des mariés
                                    </p>
                                </div>
                            </div>

                            {/* Features List */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {[
                                    `Photo ${PRICING.PACK_LOVENTIA_PHOTO_HOURS}h`,
                                    `Vidéo ${PRICING.PACK_LOVENTIA_VIDEO_HOURS}h`,
                                    'Drone',
                                    'Teaser',
                                    'Interviews'
                                ].map((feature) => (
                                    <span
                                        key={feature}
                                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${isPackSelected
                                            ? 'bg-amber-100 text-amber-700'
                                            : 'bg-loventia-beige/50 text-loventia-charcoal/70'
                                            }`}
                                    >
                                        <Check className="w-3 h-3" />
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Price */}
                        <div className="text-right md:text-center md:min-w-[160px]">
                            <p className="text-sm text-loventia-charcoal/50 line-through">
                                {formatPrice(PRICING.PACK_LOVENTIA_A_LA_CARTE_VALUE)}
                            </p>
                            <p className={`font-serif text-3xl md:text-4xl font-semibold transition-colors ${isPackSelected ? 'text-amber-500' : 'text-loventia-rose'
                                }`}>
                                {formatPrice(PRICING.PACK_LOVENTIA_PRICE)}
                            </p>
                            <p className="text-xs text-loventia-sage font-medium mt-1">
                                Économie de ~{formatPrice(PRICING.PACK_LOVENTIA_A_LA_CARTE_VALUE - PRICING.PACK_LOVENTIA_PRICE)}
                            </p>
                            {!isPackSelected && (
                                <p className="text-xs text-amber-600 mt-2 font-medium">
                                    Cliquez pour sélectionner →
                                </p>
                            )}
                            {isPackSelected && (
                                <motion.p
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="inline-flex items-center gap-1 text-xs text-amber-600 mt-2 font-medium bg-amber-100 px-2 py-1 rounded-full"
                                >
                                    <Check className="w-3 h-3" />
                                    Sélectionné
                                </motion.p>
                            )}
                        </div>
                    </div>
                </motion.button>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Configuration */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Media Type Selection */}
                    <div className="bg-white rounded-2xl border border-loventia-beige p-6">
                        <h4 className="font-serif text-lg text-loventia-charcoal mb-4">Type de prestation</h4>
                        <FormField
                            control={form.control}
                            name="mediaType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="grid sm:grid-cols-3 gap-3">
                                            {mediaOptions.map((option) => {
                                                const Icon = option.icon;
                                                const isSelected = field.value === option.value;
                                                return (
                                                    <motion.button
                                                        key={option.value}
                                                        type="button"
                                                        onClick={() => field.onChange(option.value)}
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-left ${isSelected
                                                            ? 'border-loventia-rose bg-loventia-rose/5'
                                                            : 'border-loventia-beige hover:border-loventia-rose/50'
                                                            }`}
                                                    >
                                                        {option.recommended && (
                                                            <span className="absolute -top-2 -right-2 bg-loventia-rose text-white text-xs px-2 py-0.5 rounded-full">
                                                                Populaire
                                                            </span>
                                                        )}
                                                        <Icon className={`w-6 h-6 mb-2 ${isSelected ? 'text-loventia-rose' : 'text-loventia-charcoal/50'}`} />
                                                        <p className={`font-medium ${isSelected ? 'text-loventia-rose' : 'text-loventia-charcoal'}`}>
                                                            {option.label}
                                                        </p>
                                                        <p className="text-xs text-loventia-charcoal/50">{option.description}</p>
                                                    </motion.button>
                                                );
                                            })}
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Hours Sliders */}
                    <div className="bg-white rounded-2xl border border-loventia-beige p-6">
                        <h4 className="font-serif text-lg text-loventia-charcoal mb-6">Durée de couverture</h4>

                        {/* Photo Hours */}
                        {(mediaType === 'photo' || mediaType === 'duo') && (
                            <FormField
                                control={form.control}
                                name="photoHours"
                                render={({ field }) => (
                                    <FormItem className="mb-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <FormLabel className="flex items-center gap-2">
                                                <Camera className="w-4 h-4 text-loventia-rose" />
                                                Photo
                                            </FormLabel>
                                            <span className="text-lg font-serif text-loventia-charcoal">
                                                {field.value || 6}h
                                            </span>
                                        </div>
                                        <FormControl>
                                            <Slider
                                                value={[field.value || 6]}
                                                onValueChange={([val]) => field.onChange(val)}
                                                min={6}
                                                max={14}
                                                step={1}
                                                className="py-2"
                                            />
                                        </FormControl>
                                        <FormDescription className="flex justify-between text-xs text-loventia-charcoal/50 mt-2">
                                            <span>6h - {formatPrice(PRICING.PHOTO_BASE)}</span>
                                            <span>14h - {formatPrice(PRICING.PHOTO_BASE + 8 * PRICING.PHOTO_EXTRA_RATE)}</span>
                                        </FormDescription>
                                    </FormItem>
                                )}
                            />
                        )}

                        {/* Video Hours */}
                        {(mediaType === 'video' || mediaType === 'duo') && (
                            <FormField
                                control={form.control}
                                name="videoHours"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex justify-between items-center mb-3">
                                            <FormLabel className="flex items-center gap-2">
                                                <Video className="w-4 h-4 text-loventia-rose" />
                                                Vidéo
                                            </FormLabel>
                                            <span className="text-lg font-serif text-loventia-charcoal">
                                                {field.value || 6}h
                                            </span>
                                        </div>
                                        <FormControl>
                                            <Slider
                                                value={[field.value || 6]}
                                                onValueChange={([val]) => field.onChange(val)}
                                                min={6}
                                                max={14}
                                                step={1}
                                                className="py-2"
                                            />
                                        </FormControl>
                                        <FormDescription className="flex justify-between text-xs text-loventia-charcoal/50 mt-2">
                                            <span>6h - {formatPrice(PRICING.VIDEO_BASE)}</span>
                                            <span>14h - {formatPrice(PRICING.VIDEO_BASE + 8 * PRICING.VIDEO_EXTRA_RATE)}</span>
                                        </FormDescription>
                                    </FormItem>
                                )}
                            />
                        )}
                    </div>

                    {/* Options */}
                    <div className="bg-white rounded-2xl border border-loventia-beige p-6">
                        <h4 className="font-serif text-lg text-loventia-charcoal mb-4">Options & Suppléments</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {optionsList.map((option) => {
                                const Icon = option.icon;
                                // Filter options based on media type
                                if (option.id === 'secondPhotographer' && mediaType === 'video') return null;
                                if (option.id === 'secondVideographer' && mediaType === 'photo') return null;
                                if ((option.id === 'longFilm' || option.id === 'rawFootage') && mediaType === 'photo') return null;

                                return (
                                    <FormField
                                        key={option.id}
                                        control={form.control}
                                        name={`options.${option.id}` as any}
                                        render={({ field }) => (
                                            <FormItem>
                                                <motion.label
                                                    whileHover={{ scale: 1.01 }}
                                                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${field.value
                                                        ? 'border-loventia-rose bg-loventia-rose/5'
                                                        : 'border-loventia-beige hover:border-loventia-rose/30'
                                                        }`}
                                                >
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                    </FormControl>
                                                    <Icon className={`w-4 h-4 flex-shrink-0 ${field.value ? 'text-loventia-rose' : 'text-loventia-charcoal/50'}`} />
                                                    <div className="flex-1 min-w-0">
                                                        <Label className="text-sm font-medium cursor-pointer">{option.label}</Label>
                                                    </div>
                                                    <span className={`text-sm font-medium ${option.free ? 'text-loventia-sage' : 'text-loventia-charcoal'}`}>
                                                        {option.free ? 'OFFERT' : `+${formatPrice(option.price)}`}
                                                    </span>
                                                </motion.label>
                                            </FormItem>
                                        )}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Delivery Speed */}
                    <div className="bg-white rounded-2xl border border-loventia-beige p-6">
                        <h4 className="font-serif text-lg text-loventia-charcoal mb-4 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-loventia-rose" />
                            Livraison Express
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {deliveryOptions.map((option) => {
                                // Only show relevant delivery options
                                if (!(option.forMedia as readonly string[]).includes(mediaType || 'video')) return null;

                                return (
                                    <FormField
                                        key={option.id}
                                        control={form.control}
                                        name={`delivery.${option.id}` as any}
                                        render={({ field }) => (
                                            <FormItem>
                                                <motion.label
                                                    whileHover={{ scale: 1.01 }}
                                                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${field.value
                                                        ? 'border-loventia-rose bg-loventia-rose/5'
                                                        : 'border-loventia-beige hover:border-loventia-rose/30'
                                                        }`}
                                                >
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                    </FormControl>
                                                    <div className="flex-1">
                                                        <Label className="text-sm font-medium cursor-pointer">{option.label}</Label>
                                                    </div>
                                                    <span className="text-sm font-medium text-loventia-charcoal">
                                                        +{formatPrice(option.price)}
                                                    </span>
                                                </motion.label>
                                            </FormItem>
                                        )}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Column - Price Summary */}
                <div className="lg:col-span-1">
                    <PriceSummary
                        breakdown={breakdown}
                        mediaType={mediaType || 'video'}
                        photoHours={photoHours}
                        videoHours={videoHours}
                    />
                </div>
            </div>

            {/* Navigation Buttons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex gap-4 max-w-lg mx-auto"
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
