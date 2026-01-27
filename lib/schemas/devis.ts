import { z } from 'zod';

/**
 * Zod Schema for the Wedding Quote Generator
 * Covers all 4 wizard steps with French error messages
 */

// Step 1: Les Essentiels
export const stepEssentialsSchema = z.object({
    date: z.string().min(1, 'La date est requise'),
    location: z.string().min(2, 'Le lieu est requis'),
});

// Step 2: L'Histoire
export const stepHistorySchema = z.object({
    coupleName1: z.string().min(2, 'Le prénom est requis'),
    coupleName2: z.string().min(2, 'Le prénom est requis'),
    style: z.enum(['intime', 'classique', 'festif', 'boheme', 'luxe'], {
        errorMap: () => ({ message: 'Veuillez sélectionner un style' }),
    }),
    guestCount: z.string().min(1, 'Le nombre d\'invités est requis'),
});

// Step 3: La Configuration
export const stepConfigurationSchema = z.object({
    mediaType: z.enum(['photo', 'video', 'duo'], {
        errorMap: () => ({ message: 'Veuillez sélectionner un type de prestation' }),
    }),
    photoHours: z.number().min(6).max(14).default(6),
    videoHours: z.number().min(6).max(14).default(6),
    options: z.object({
        drone: z.boolean().default(false),
        teaser: z.boolean().default(false),
        interviews: z.boolean().default(false),
        longFilm: z.boolean().default(false),
        rawFootage: z.boolean().default(false),
        secondPhotographer: z.boolean().default(false),
        secondVideographer: z.boolean().default(false),
    }),
    delivery: z.object({
        expressPhotos: z.boolean().default(false),
        expressVideo: z.boolean().default(false),
    }),
});

// Step 4: Finalisation
export const stepFinalizationSchema = z.object({
    name: z.string().min(2, 'Votre nom est requis'),
    email: z.string().email('Veuillez entrer un email valide'),
    phone: z.string().min(10, 'Veuillez entrer un numéro de téléphone valide'),
    notes: z.string().optional(),
});

// Complete form schema (all steps combined)
export const devisFormSchema = z.object({
    // Step 1
    ...stepEssentialsSchema.shape,
    // Step 2
    ...stepHistorySchema.shape,
    // Step 3
    ...stepConfigurationSchema.shape,
    // Step 4
    ...stepFinalizationSchema.shape,
});

export type DevisFormData = z.infer<typeof devisFormSchema>;
export type StepEssentialsData = z.infer<typeof stepEssentialsSchema>;
export type StepHistoryData = z.infer<typeof stepHistorySchema>;
export type StepConfigurationData = z.infer<typeof stepConfigurationSchema>;
export type StepFinalizationData = z.infer<typeof stepFinalizationSchema>;

// Style options for display
export const styleOptions = [
    { value: 'intime', label: 'Intime & Épuré', description: 'Cérémonie intime, ambiance minimaliste' },
    { value: 'classique', label: 'Classique & Élégant', description: 'Tradition et raffinement' },
    { value: 'festif', label: 'Festif & Joyeux', description: 'Grande fête, beaucoup d\'énergie' },
    { value: 'boheme', label: 'Bohème & Nature', description: 'Outdoor, champêtre, relaxed' },
    { value: 'luxe', label: 'Luxe & Prestige', description: 'Haut de gamme, destinations d\'exception' },
] as const;

// Guest count options for display
export const guestCountOptions = [
    { value: '1-30', label: 'Moins de 30 invités' },
    { value: '30-80', label: '30 à 80 invités' },
    { value: '80-150', label: '80 à 150 invités' },
    { value: '150+', label: 'Plus de 150 invités' },
] as const;
