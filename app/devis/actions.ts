'use server';

import { Resend } from 'resend';
import { render } from '@react-email/render';
import { devisFormSchema, DevisFormData, styleOptions, guestCountOptions } from '@/lib/schemas/devis';
import { calculateTotal, formatPrice } from '@/lib/pricing';
import { QuoteEmail } from '@/emails/QuoteEmail';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration
const FROM_EMAIL = 'Loventia <ne-pas-repondre@loventia.fr>';
const ADMIN_EMAIL = 'contact@loventia.fr';

interface SubmitResult {
    success: boolean;
    message: string;
    quoteId?: string;
}

// Helper to get readable labels
function getStyleLabel(value: string): string {
    const option = styleOptions.find(opt => opt.value === value);
    return option?.label || value;
}

function getGuestCountLabel(value: string): string {
    const option = guestCountOptions.find(opt => opt.value === value);
    return option?.label || value;
}

function getMediaTypeLabel(type: string): string {
    switch (type) {
        case 'photo': return 'Photo uniquement';
        case 'video': return 'Vidéo uniquement';
        case 'duo': return 'Photo + Vidéo';
        default: return type;
    }
}

function getSelectedOptions(options: DevisFormData['options']): string[] {
    const labels: string[] = [];
    if (options.drone) labels.push('Drone');
    if (options.teaser) labels.push('Teaser Vertical');
    if (options.interviews) labels.push('Interviews invités');
    if (options.longFilm) labels.push('Film Long Métrage');
    if (options.rawFootage) labels.push('Rushs Bruts');
    if (options.secondPhotographer) labels.push('2nd Photographe');
    if (options.secondVideographer) labels.push('2nd Vidéaste');
    return labels;
}

function getDeliveryOptions(delivery: DevisFormData['delivery']): string[] {
    const labels: string[] = [];
    if (delivery.expressPhotos) labels.push('Photos Express (J+7)');
    if (delivery.expressVideo) labels.push('Vidéo Express (J+14)');
    return labels;
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

        // Prepare email data
        const emailProps = {
            quoteId,
            coupleName1: validatedData.coupleName1,
            coupleName2: validatedData.coupleName2,
            date: validatedData.date,
            location: validatedData.location,
            style: getStyleLabel(validatedData.style),
            guestCount: getGuestCountLabel(validatedData.guestCount),
            mediaType: validatedData.mediaType,
            photoHours: validatedData.photoHours,
            videoHours: validatedData.videoHours,
            options: getSelectedOptions(validatedData.options),
            deliveryOptions: getDeliveryOptions(validatedData.delivery),
            finalPrice: formatPrice(breakdown.finalTotal),
            isPackApplied: breakdown.isPackApplied,
            contactName: validatedData.name,
            contactEmail: validatedData.email,
            contactPhone: validatedData.phone,
            notes: validatedData.notes,
        };

        // Log for debugging
        console.log('=== NEW QUOTE SUBMISSION ===');
        console.log('Quote ID:', quoteId);
        console.log('Final Price:', formatPrice(breakdown.finalTotal));
        console.log('Pack Applied:', breakdown.isPackApplied);
        console.log('============================');

        // Render client email to HTML
        const clientEmailHtml = await render(QuoteEmail(emailProps));

        // Send emails in parallel
        const [adminEmailResult, clientEmailResult] = await Promise.allSettled([
            // Email 1: Admin Notification
            resend.emails.send({
                from: FROM_EMAIL,
                to: ADMIN_EMAIL,
                subject: `⚡ Nouveau Lead Loventia : ${validatedData.date} - ${validatedData.location}`,
                html: `
                    <h1>🎉 Nouvelle demande de devis</h1>
                    <p><strong>Référence:</strong> ${quoteId}</p>
                    <hr/>
                    <h2>📋 Informations</h2>
                    <ul>
                        <li><strong>Couple:</strong> ${validatedData.coupleName1} & ${validatedData.coupleName2}</li>
                        <li><strong>Date:</strong> ${validatedData.date}</li>
                        <li><strong>Lieu:</strong> ${validatedData.location}</li>
                        <li><strong>Style:</strong> ${getStyleLabel(validatedData.style)}</li>
                        <li><strong>Invités:</strong> ${getGuestCountLabel(validatedData.guestCount)}</li>
                    </ul>
                    <h2>📸 Configuration</h2>
                    <ul>
                        <li><strong>Type:</strong> ${getMediaTypeLabel(validatedData.mediaType)}</li>
                        ${validatedData.mediaType !== 'video' ? `<li><strong>Photo:</strong> ${validatedData.photoHours}h</li>` : ''}
                        ${validatedData.mediaType !== 'photo' ? `<li><strong>Vidéo:</strong> ${validatedData.videoHours}h</li>` : ''}
                        <li><strong>Options:</strong> ${getSelectedOptions(validatedData.options).join(', ') || 'Aucune'}</li>
                        <li><strong>Livraison:</strong> ${getDeliveryOptions(validatedData.delivery).join(', ') || 'Standard'}</li>
                    </ul>
                    <h2>💰 Tarification</h2>
                    <p style="font-size: 24px; color: #B76E79;"><strong>${formatPrice(breakdown.finalTotal)}</strong></p>
                    ${breakdown.isPackApplied ? '<p>✨ <strong>Pack Loventia Signature</strong> appliqué</p>' : ''}
                    <p>Économie client: ${formatPrice(breakdown.packLoventiaSavings)}</p>
                    <h2>📞 Contact</h2>
                    <ul>
                        <li><strong>Nom:</strong> ${validatedData.name}</li>
                        <li><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></li>
                        <li><strong>Téléphone:</strong> <a href="tel:${validatedData.phone}">${validatedData.phone}</a></li>
                    </ul>
                    ${validatedData.notes ? `<h2>💬 Message</h2><p style="background: #f5f5f5; padding: 15px; border-radius: 8px;">${validatedData.notes}</p>` : ''}
                `,
            }),

            // Email 2: Client Confirmation (rendered React)
            resend.emails.send({
                from: FROM_EMAIL,
                to: validatedData.email,
                subject: `Votre estimation Loventia : Réception confirmée ✨`,
                html: clientEmailHtml,
            }),
        ]);

        // Log email results
        if (adminEmailResult.status === 'rejected') {
            console.error('Admin email failed:', adminEmailResult.reason);
        } else {
            console.log('Admin email sent:', adminEmailResult.value.data?.id);
        }

        if (clientEmailResult.status === 'rejected') {
            console.error('Client email failed:', clientEmailResult.reason);
        } else {
            console.log('Client email sent:', clientEmailResult.value.data?.id);
        }

        // Return success even if one email fails (we don't want to block the user)
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
