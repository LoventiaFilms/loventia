export interface CityData {
    slug: string;
    name: string; // Display name e.g. "Nancy"
    zipCode?: string;
    region: string; // e.g. "Lorraine" or "Grand Est"
    isPrimary: boolean; // True for main targets (Nancy, Metz, Strasbourg)
    keywords: string[]; // Specific keywords for this city
    heroImage?: string; // Optional specific hero image
}

export const cities: CityData[] = [
    {
        slug: 'videaste-mariage-nancy',
        name: 'Nancy',
        zipCode: '54000',
        region: 'Lorraine',
        isPrimary: true,
        keywords: ['vidéaste mariage nancy', 'photographe mariage nancy', 'mariage place stanislas'],
    },
    {
        slug: 'videaste-mariage-metz',
        name: 'Metz',
        zipCode: '57000',
        region: 'Lorraine',
        isPrimary: true,
        keywords: ['vidéaste mariage metz', 'photographe mariage metz', 'mariage moselle'],
    },
    {
        slug: 'videaste-mariage-strasbourg',
        name: 'Strasbourg',
        zipCode: '67000',
        region: 'Alsace',
        isPrimary: true,
        keywords: ['vidéaste mariage strasbourg', 'photographe mariage strasbourg', 'mariage alsace'],
    },
    {
        slug: 'videaste-mariage-colmar',
        name: 'Colmar',
        zipCode: '68000',
        region: 'Alsace',
        isPrimary: false,
        keywords: ['vidéaste mariage colmar', 'mariage petite venise', 'photographe alsace'],
    },
    {
        slug: 'videaste-mariage-vosges',
        name: 'Vosges',
        zipCode: '88000',
        region: 'Grand Est',
        isPrimary: true,
        keywords: ['vidéaste mariage vosges', 'mariage gerardmer', 'photographe epinal'],
    },
    {
        slug: 'videaste-mariage-luxembourg',
        name: 'Luxembourg',
        region: 'Luxembourg',
        isPrimary: true,
        keywords: ['vidéaste mariage luxembourg', 'photographe mariage luxembourg', 'mariage grand duché'],
    },
    {
        slug: 'videaste-mariage-reims',
        name: 'Reims',
        zipCode: '51100',
        region: 'Champagne',
        isPrimary: false,
        keywords: ['vidéaste mariage reims', 'mariage champagne', 'photographe reims'],
    },
    {
        slug: 'videaste-mariage-basel',
        name: 'Bâle',
        region: 'Suisse',
        isPrimary: false,
        keywords: ['vidéaste mariage suisse', 'hochzeitsvideograf basel', 'mariage bale'],
    },
    {
        slug: 'videaste-mariage-geneve',
        name: 'Genève',
        region: 'Suisse',
        isPrimary: true,
        keywords: ['vidéaste mariage genève', 'videaste mariage suisse romande', 'mariage lac leman'],
    },
    {
        slug: 'videaste-mariage-annecy',
        name: 'Annecy',
        zipCode: '74000',
        region: 'Rhône-Alpes',
        isPrimary: false,
        keywords: ['vidéaste mariage annecy', 'mariage lac annecy', 'photographe haute savoie'],
    },
    {
        slug: 'videaste-mariage-dijon',
        name: 'Dijon',
        zipCode: '21000',
        region: 'Bourgogne',
        isPrimary: false,
        keywords: ['vidéaste mariage dijon', 'mariage bourgogne', 'photographe cote d or'],
    },
];
