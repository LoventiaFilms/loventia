'use server';

import { devisFormSchema, DevisFormData } from '@/lib/schemas/devis';
import { calculateTotal, formatPrice } from '@/lib/pricing';

interface SubmitResult {
    success: boolean;
    message: string;
    quoteId?: string;
}

export async function submitQuote(data: DevisFormData): Promise<SubmitResult> {
    try {
        // Validate the data on the server
        const validatedData = devisFormSchema.parse(data);

        // Calculate final pricing
        const breakdown = calculateTotal({
            mediaType: validatedData.mediaType,
            photoHours: validatedData.photoHours,
            videoHours: validatedData.videoHours,
            options: validatedData.options,
            delivery: validatedData.delivery,
        });

        // Generate a quote ID
        const quoteId = `LV-${Date.now().toString(36).toUpperCase()}`;

        // TODO: Integrate with Resend for email sending
        // For now, we'll just log the submission
        console.log('=== NEW QUOTE SUBMISSION ===');
        console.log('Quote ID:', quoteId);
        console.log('Date:', validatedData.date);
        console.log('Location:', validatedData.location);
        console.log('Couple:', `${validatedData.coupleName1} & ${validatedData.coupleName2}`);
        console.log('Style:', validatedData.style);
        console.log('Guests:', validatedData.guestCount);
        console.log('Media Type:', validatedData.mediaType);
        console.log('Photo Hours:', validatedData.photoHours);
        console.log('Video Hours:', validatedData.videoHours);
        console.log('Options:', validatedData.options);
        console.log('Delivery:', validatedData.delivery);
        console.log('Contact:', {
            name: validatedData.name,
            email: validatedData.email,
            phone: validatedData.phone,
        });
        console.log('Notes:', validatedData.notes);
        console.log('---');
        console.log('Final Price:', formatPrice(breakdown.finalTotal));
        console.log('Pack Applied:', breakdown.isPackApplied);
        console.log('============================');

        // Simulate email sending delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return {
            success: true,
            message: 'Votre demande de devis a été envoyée avec succès ! Nous vous répondrons sous 24h.',
            quoteId,
        };
    } catch (error) {
        console.error('Quote submission error:', error);

        if (error instanceof Error) {
            return {
                success: false,
                message: `Une erreur est survenue: ${error.message}`,
            };
        }

        return {
            success: false,
            message: 'Une erreur inattendue est survenue. Veuillez réessayer.',
        };
    }
}
