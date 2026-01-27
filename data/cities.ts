export interface CityData {
    slug: string;
    name: string;
    zipCode?: string;
    region: string;
    isPrimary: boolean;
    keywords: string[];
    heroImage?: string;
    heroTitleOverride?: string;
    introText: string;
    localLandmarks: string[];
}

export const cities: CityData[] = [
    // --- GRANDS CENTRES URBAINS ---
    {
        slug: 'videaste-mariage-nancy',
        name: 'Nancy',
        zipCode: '54000',
        region: 'Lorraine',
        isPrimary: true,
        keywords: ['vidéaste mariage nancy', 'mariage place stanislas', 'film mariage art nouveau'],
        introText: "Entre l'or de la Place Stanislas et l'élégance de l'école de Nancy, la cité ducale offre un décor architectural unique. Nous jouons avec ses perspectives classiques et ses dorures pour donner une dimension royale à votre film de mariage.",
        localLandmarks: ['Place Stanislas', 'Parc de la Pépinière', 'Villa Majorelle']
    },
    {
        slug: 'videaste-mariage-metz',
        name: 'Metz',
        zipCode: '57000',
        region: 'Lorraine',
        isPrimary: true,
        keywords: ['vidéaste mariage metz', 'mariage cathédrale metz', 'parc de la seille'],
        introText: "De la pierre de Jaumont dorée au soleil couchant jusqu'à l'audace architecturale du Centre Pompidou, Metz est une ville de contrastes. Nous y capturons aussi bien la solennité de la Cathédrale Saint-Étienne que la douceur des quais de Moselle.",
        localLandmarks: ['Cathédrale Saint-Étienne', 'Temple Neuf', 'Jardin Botanique']
    },
    {
        slug: 'videaste-mariage-strasbourg',
        name: 'Strasbourg',
        zipCode: '67000',
        region: 'Alsace',
        isPrimary: true,
        keywords: ['vidéaste mariage strasbourg', 'mariage petite france', 'cathédrale strasbourg'],
        introText: "Capitale européenne au charme intemporel, Strasbourg mêle canaux romantiques et façades à colombages. C'est le cadre idéal pour un reportage empreint de poésie, entre les ruelles de la Petite France et la majesté de la Cathédrale.",
        localLandmarks: ['Petite France', 'Parc de l\'Orangerie', 'Quais de l\'Ill']
    },

    // --- CŒUR DES VOSGES (NOUVEAUX TARGETS) ---
    {
        slug: 'videaste-mariage-gerardmer',
        name: 'Gérardmer',
        zipCode: '88400',
        region: 'Vosges',
        isPrimary: true,
        heroTitleOverride: "Mariage au bord du Lac à Gérardmer",
        keywords: ['vidéaste mariage gerardmer', 'mariage lac de gérardmer', 'grand hotel gerardmer'],
        introText: "La Perle des Vosges offre un décor naturel époustouflant, entre lac scintillant et forêts profondes. Nous y réalisons des images grandioses, capturant cette ambiance 'Chalet Chic' et la lumière si particulière qui se reflète sur l'eau.",
        localLandmarks: ['Lac de Gérardmer', 'Le Grand Hôtel', 'Les crêtes vosgiennes']
    },
    {
        slug: 'videaste-mariage-epinal', // Updated from 'vosges' to 'epinal' specific for better targeting, kept 'vosges' keywords implicitly
        name: 'Épinal',
        zipCode: '88000',
        region: 'Vosges',
        isPrimary: true,
        keywords: ['vidéaste mariage epinal', 'mariage vosges', 'chateau epinal'],
        introText: "Cité des Images lovée au bord de la Moselle, Épinal conjugue patrimoine historique et nature omniprésente. Nous connaissons chaque recoin du Parc du Château pour des séances couple intimes et lumineuses.",
        localLandmarks: ['Le Parc du Château', 'Port d\'Épinal', 'La Roseraie']
    },
    {
        slug: 'videaste-mariage-thaon-les-vosges',
        name: 'Thaon-les-Vosges',
        zipCode: '88150',
        region: 'Vosges',
        isPrimary: false,
        heroTitleOverride: "Vidéaste Mariage à La Rotonde (Thaon)",
        keywords: ['vidéaste mariage thaon', 'mariage rotonde thaon', 'domaine mariage vosges'],
        introText: "Dominée par l'architecture majestueuse de la Rotonde, Thaon-les-Vosges est une destination prisée pour les mariages d'exception. Ce monument emblématique offre une toile de fond graphique et monumentale pour votre film.",
        localLandmarks: ['La Rotonde', 'Le canal des Vosges']
    },
    {
        slug: 'videaste-mariage-vittel',
        name: 'Vittel',
        zipCode: '88800',
        region: 'Vosges',
        isPrimary: false,
        heroTitleOverride: "Élégance Thermale : Mariage à Vittel",
        keywords: ['vidéaste mariage vittel', 'mariage parc thermal', 'casino vittel'],
        introText: "Entre l'élégance des parcs thermaux et l'architecture Belle Époque, Vittel offre un décor intemporel. Nous capturons cette atmosphère 'Jardin Anglais' et le luxe discret des grands hôtels pour un rendu résolument chic.",
        localLandmarks: ['Parc Thermal', 'Le Palmarium', 'Galerie Thermale']
    },
    {
        slug: 'videaste-mariage-contrexeville',
        name: 'Contrexéville',
        zipCode: '88140',
        region: 'Vosges',
        isPrimary: false,
        keywords: ['vidéaste mariage contrexeville', 'mariage belle époque'],
        introText: "Sœur de Vittel, Contrexéville cultive un charme Belle Époque désuet et romantique. Ses colonnades et ses fontaines sont autant de décors parfaits pour des images douces et sophistiquées.",
        localLandmarks: ['Casino de Contrexéville', 'Parc Thermal']
    },
    {
        slug: 'videaste-mariage-saint-die-des-vosges',
        name: 'Saint-Dié-des-Vosges',
        zipCode: '88100',
        region: 'Vosges',
        isPrimary: false,
        heroTitleOverride: "Mariage Nature à Saint-Dié",
        keywords: ['vidéaste mariage saint-die', 'mariage massif vosgien'],
        introText: "Au porte du massif, Saint-Dié est un écrin de verdure entouré de montagnes. C'est le terrain de jeu idéal pour les amoureux de nature souhaitant intégrer le relief vosgien à leur narration visuelle.",
        localLandmarks: ['Tour de la Liberté', 'Massif de l\'Ormont']
    },
    {
        slug: 'videaste-mariage-remiremont',
        name: 'Remiremont',
        zipCode: '88200',
        region: 'Vosges',
        isPrimary: false,
        keywords: ['vidéaste mariage remiremont', 'mariage abbatiale'],
        introText: "La Coquette offre une architecture noble héritée de son passé de Chapitre de Dames Nobles. L'Abbatiale et son palais offrent un cadre historique et solennel, parfait pour une cérémonie grandiose.",
        localLandmarks: ['Palais Abbatial', 'Rue Charles de Gaulle']
    },
    {
        slug: 'videaste-mariage-golbey',
        name: 'Golbey',
        zipCode: '88190',
        region: 'Vosges',
        isPrimary: false,
        keywords: ['vidéaste mariage golbey', 'mariage urbain vosges'],
        introText: "Dynamique et pratique, limitrophe d'Épinal, Golbey nous permet d'accéder rapidement aux plus beaux lieux de réception du centre des Vosges. Un point d'ancrage idéal pour rayonner dans la région.",
        localLandmarks: ['Canal de l\'Est', 'Fort de la Grande Haye']
    },
    {
        slug: 'videaste-mariage-neufchateau',
        name: 'Neufchâteau',
        zipCode: '88300',
        region: 'Vosges',
        isPrimary: false,
        heroTitleOverride: "Patrimoine & Histoire : Mariage à Neufchâteau",
        keywords: ['vidéaste mariage neufchateau', 'mariage ouest vosgien'],
        introText: "Capitale de l'ouest vosgien, Neufchâteau séduit par son patrimoine Renaissance exceptionnel. Ses hôtels particuliers en pierre de taille apportent une texture et une lumière incroyables à l'image.",
        localLandmarks: ['Hôtel de Houdreville', 'Place Jeanne d\'Arc']
    },
    {
        slug: 'videaste-mariage-la-bresse',
        name: 'La Bresse',
        zipCode: '88250',
        region: 'Vosges',
        isPrimary: false,
        heroTitleOverride: "Winter Wedding & Nature à La Bresse",
        keywords: ['vidéaste mariage la bresse', 'mariage hiver vosges', 'elopement vosges'],
        introText: "Que ce soit sous la neige en hiver ou dans la fraîcheur des forêts d'été, La Bresse est le spot ultime pour les mariages 'Adventure'. Nous vous suivons sur les sommets pour des images à couper le souffle.",
        localLandmarks: ['Lac des Corbeaux', 'Station Hohneck']
    },
    {
        slug: 'videaste-mariage-mirecourt',
        name: 'Mirecourt',
        zipCode: '88500',
        region: 'Vosges',
        isPrimary: false,
        keywords: ['vidéaste mariage mirecourt', 'mariage lutherie'],
        introText: "Cité des luthiers, Mirecourt possède une âme artisanale et artistique unique. Ses bords de Madon et son architecture préservée offrent un cadre paisible et romantique pour votre journée.",
        localLandmarks: ['Pont Stanislas', 'Musée de la Lutherie']
    },

    // --- INTERNATIONAL ---
    {
        slug: 'videaste-mariage-luxembourg',
        name: 'Luxembourg',
        region: 'Luxembourg',
        isPrimary: true,
        keywords: ['vidéaste mariage luxembourg', 'photographe mariage luxembourg', 'mariage grand duché'],
        introText: "Le Grand-Duché offre un mélange fascinant de fortifications historiques et de modernité. Nous couvrons régulièrement des mariages prestigieux à Luxembourg-Ville et dans les domaines environnants.",
        localLandmarks: ['Le Grund', 'Palais Grand-Ducal']
    },
    {
        slug: 'videaste-mariage-geneve',
        name: 'Genève',
        region: 'Suisse',
        isPrimary: true,
        keywords: ['vidéaste mariage genève', 'videaste mariage suisse romande'],
        introText: "L'élégance suisse par excellence. Entre le Jet d'Eau et les vignobles alentours, Genève est un terrain de jeu magnifique pour un vidéaste de mariage haut de gamme cherchant sophistication et lumière.",
        localLandmarks: ['Lac Léman', 'Vielle Ville']
    },
    // Adding Colmar back as updated enriched entry
    {
        slug: 'videaste-mariage-colmar',
        name: 'Colmar',
        zipCode: '68000',
        region: 'Alsace',
        isPrimary: false,
        keywords: ['vidéaste mariage colmar', 'mariage petite venise', 'photographe alsace'],
        introText: "Probablement la ville la plus romantique d'Alsace. Avec la Petite Venise et ses canaux fleuris, Colmar semble tout droit sortie d'un conte de fées, idéale pour un film de mariage onirique.",
        localLandmarks: ['Petite Venise', 'Maison des Têtes']
    },
    // Adding Annecy back
    {
        slug: 'videaste-mariage-annecy',
        name: 'Annecy',
        zipCode: '74000',
        region: 'Rhône-Alpes',
        isPrimary: false,
        keywords: ['vidéaste mariage annecy', 'mariage lac annecy'],
        introText: "La Venise des Alpes. Le lac aux eaux turquoises et les montagnes en toile de fond offrent sans doute le plus beau panorama naturel de France pour se dire oui. Un must pour la vidéo par drone.",
        localLandmarks: ['Lac d\'Annecy', 'Pont des Amours']
    },
];
