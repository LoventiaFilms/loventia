/**
 * Loventia Wedding Quote Pricing Engine
 * 
 * Base Rules:
 * - Video: 2000€ base (0-6h), +100€/hr after
 * - Photo: 1100€ base (0-6h), +100€/hr after
 * 
 * Pack Loventia Signature (2990€):
 * - Photo (8h) + Video (8h) + Drone + Teaser + Interviews
 * - Drone and Teaser become FREE when Pack is applied
 * - À la carte value: 3950€ → Savings: ~960€
 */

// Constants
export const PRICING = {
    // Base services
    VIDEO_BASE: 2000,
    VIDEO_BASE_HOURS: 6,
    VIDEO_EXTRA_RATE: 100,

    PHOTO_BASE: 1100,
    PHOTO_BASE_HOURS: 6,
    PHOTO_EXTRA_RATE: 100,

    // Pack Loventia
    PACK_LOVENTIA_PRICE: 2990,
    PACK_LOVENTIA_PHOTO_HOURS: 8,
    PACK_LOVENTIA_VIDEO_HOURS: 8,
    PACK_LOVENTIA_A_LA_CARTE_VALUE: 3950, // For display purposes

    // Options
    DRONE: 200,
    TEASER: 250,
    INTERVIEWS: 0, // OFFERT
    LONG_FILM: 350,
    RAW_FOOTAGE: 300,
    SECOND_PHOTOGRAPHER: 800,
    SECOND_VIDEOGRAPHER: 1000,

    // Delivery
    EXPRESS_PHOTOS: 200,
    EXPRESS_VIDEO: 400,
} as const;

export type MediaType = 'photo' | 'video' | 'duo';

export interface OptionSelection {
    drone: boolean;
    teaser: boolean;
    interviews: boolean;
    longFilm: boolean;
    rawFootage: boolean;
    secondPhotographer: boolean;
    secondVideographer: boolean;
}

export interface DeliverySelection {
    expressPhotos: boolean;
    expressVideo: boolean;
}

export interface QuoteConfig {
    mediaType: MediaType;
    photoHours: number;
    videoHours: number;
    options: OptionSelection;
    delivery: DeliverySelection;
}

export interface PriceBreakdown {
    photoPrice: number;
    videoPrice: number;
    optionsTotal: number;
    deliveryTotal: number;
    subtotal: number;
    packLoventiaEligible: boolean;
    packLoventiaPrice: number;
    packLoventiaSavings: number;
    isPackApplied: boolean;
    finalTotal: number;
    freeItems: string[];
}

/**
 * Calculate video price based on hours
 */
export function calculateVideoPrice(hours: number): number {
    if (hours <= 0) return 0;
    const extraHours = Math.max(0, hours - PRICING.VIDEO_BASE_HOURS);
    return PRICING.VIDEO_BASE + (extraHours * PRICING.VIDEO_EXTRA_RATE);
}

/**
 * Calculate photo price based on hours
 */
export function calculatePhotoPrice(hours: number): number {
    if (hours <= 0) return 0;
    const extraHours = Math.max(0, hours - PRICING.PHOTO_BASE_HOURS);
    return PRICING.PHOTO_BASE + (extraHours * PRICING.PHOTO_EXTRA_RATE);
}

/**
 * Calculate options total (without Pack discount)
 */
export function calculateOptionsTotal(options: OptionSelection): number {
    let total = 0;
    if (options.drone) total += PRICING.DRONE;
    if (options.teaser) total += PRICING.TEASER;
    if (options.interviews) total += PRICING.INTERVIEWS;
    if (options.longFilm) total += PRICING.LONG_FILM;
    if (options.rawFootage) total += PRICING.RAW_FOOTAGE;
    if (options.secondPhotographer) total += PRICING.SECOND_PHOTOGRAPHER;
    if (options.secondVideographer) total += PRICING.SECOND_VIDEOGRAPHER;
    return total;
}

/**
 * Calculate delivery total
 */
export function calculateDeliveryTotal(
    delivery: DeliverySelection,
    mediaType: MediaType
): number {
    let total = 0;
    if (delivery.expressPhotos && (mediaType === 'photo' || mediaType === 'duo')) {
        total += PRICING.EXPRESS_PHOTOS;
    }
    if (delivery.expressVideo && (mediaType === 'video' || mediaType === 'duo')) {
        total += PRICING.EXPRESS_VIDEO;
    }
    return total;
}

/**
 * Check if configuration qualifies for Pack Loventia
 * Pack requires: Photo(8h+) + Video(8h+) + Drone + Teaser
 */
export function checkPackLoventiaEligibility(config: QuoteConfig): boolean {
    return (
        config.mediaType === 'duo' &&
        config.photoHours >= PRICING.PACK_LOVENTIA_PHOTO_HOURS &&
        config.videoHours >= PRICING.PACK_LOVENTIA_VIDEO_HOURS &&
        config.options.drone &&
        config.options.teaser
    );
}

/**
 * Calculate complete price breakdown with Pack Loventia logic
 */
export function calculateTotal(config: QuoteConfig): PriceBreakdown {
    // Calculate base service prices
    let photoPrice = 0;
    let videoPrice = 0;

    if (config.mediaType === 'photo' || config.mediaType === 'duo') {
        photoPrice = calculatePhotoPrice(config.photoHours);
    }

    if (config.mediaType === 'video' || config.mediaType === 'duo') {
        videoPrice = calculateVideoPrice(config.videoHours);
    }

    const optionsTotal = calculateOptionsTotal(config.options);
    const deliveryTotal = calculateDeliveryTotal(config.delivery, config.mediaType);

    // Calculate à la carte subtotal
    const subtotal = photoPrice + videoPrice + optionsTotal + deliveryTotal;

    // Check Pack Loventia eligibility
    const packLoventiaEligible = checkPackLoventiaEligibility(config);

    // Calculate what the pack price would be (Pack base + extra hours beyond 10 + other options + delivery)
    let packLoventiaPrice = PRICING.PACK_LOVENTIA_PRICE;
    const freeItems: string[] = [];

    if (packLoventiaEligible) {
        // Add extra photo hours beyond 10
        if (config.photoHours > PRICING.PACK_LOVENTIA_PHOTO_HOURS) {
            const extraPhotoHours = config.photoHours - PRICING.PACK_LOVENTIA_PHOTO_HOURS;
            packLoventiaPrice += extraPhotoHours * PRICING.PHOTO_EXTRA_RATE;
        }

        // Add extra video hours beyond 10
        if (config.videoHours > PRICING.PACK_LOVENTIA_VIDEO_HOURS) {
            const extraVideoHours = config.videoHours - PRICING.PACK_LOVENTIA_VIDEO_HOURS;
            packLoventiaPrice += extraVideoHours * PRICING.VIDEO_EXTRA_RATE;
        }

        // Add options that are NOT included in Pack (everything except drone & teaser)
        if (config.options.longFilm) packLoventiaPrice += PRICING.LONG_FILM;
        if (config.options.rawFootage) packLoventiaPrice += PRICING.RAW_FOOTAGE;
        if (config.options.secondPhotographer) packLoventiaPrice += PRICING.SECOND_PHOTOGRAPHER;
        if (config.options.secondVideographer) packLoventiaPrice += PRICING.SECOND_VIDEOGRAPHER;

        // Add delivery
        packLoventiaPrice += deliveryTotal;

        // Mark free items
        freeItems.push('Drone');
        freeItems.push('Teaser Vertical');
    }

    // Always add interviews as free
    if (config.options.interviews) {
        freeItems.push('Interviews invités');
    }

    const packLoventiaSavings = packLoventiaEligible ? subtotal - packLoventiaPrice : 0;
    const isPackApplied = packLoventiaEligible && packLoventiaSavings > 0;
    const finalTotal = isPackApplied ? packLoventiaPrice : subtotal;

    return {
        photoPrice,
        videoPrice,
        optionsTotal,
        deliveryTotal,
        subtotal,
        packLoventiaEligible,
        packLoventiaPrice,
        packLoventiaSavings,
        isPackApplied,
        finalTotal,
        freeItems,
    };
}

/**
 * Format price in EUR
 */
export function formatPrice(amount: number): string {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}
