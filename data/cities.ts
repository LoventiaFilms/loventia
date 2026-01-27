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
        region: 'Europe',
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

    // --- LORRAINE (EXTENSION) ---
    {
        slug: 'videaste-mariage-pont-a-mousson',
        name: 'Pont-à-Mousson',
        zipCode: '54700',
        region: 'Lorraine',
        isPrimary: false,
        keywords: ['vidéaste mariage pont-a-mousson', 'mariage abbaye prémontrés', 'film mariage lorraine'],
        introText: "Nichée au bord de l’eau, Pont-à-Mousson séduit par l’élégance intemporelle de l’Abbaye des Prémontrés. Ses galeries séculaires et ses jardins symétriques offrent un cadre monastique chic idéal pour des cérémonies empreintes de solennité.",
        localLandmarks: ['Abbaye des Prémontrés', 'Place Duroc', 'Église Saint-Martin']
    },
    {
        slug: 'videaste-mariage-luneville',
        name: 'Lunéville',
        zipCode: '54300',
        region: 'Lorraine',
        isPrimary: false,
        keywords: ['vidéaste mariage luneville', 'mariage chateau luneville', 'petit versailles lorrain'],
        introText: "Surnommée le Petit Versailles Lorrain, Lunéville déploie ses fastes royaux autour de son Château des Lumières. L'architecture du XVIIIe siècle y compose une symphonie visuelle parfaite pour un mariage princier.",
        localLandmarks: ['Château de Lunéville', 'Église Saint-Jacques', 'Le Bosquet']
    },
    {
        slug: 'videaste-mariage-thionville',
        name: 'Thionville',
        zipCode: '57100',
        region: 'Lorraine',
        isPrimary: false,
        keywords: ['vidéaste mariage thionville', 'mariage moselle', 'videaste luxembourg'],
        introText: "Au carrefour des frontières, Thionville dévoile un charme fluvial le long de la Moselle. Son dynamisme et ses parcs verdoyants offrent un décor moderne, tandis que la proximité du Luxembourg y insuffle une énergie cosmopolite.",
        localLandmarks: ['Parc Napoléon', 'Bords de Moselle', 'Autel de la Patrie']
    },
    {
        slug: 'videaste-mariage-toul',
        name: 'Toul',
        zipCode: '54200',
        region: 'Lorraine',
        isPrimary: false,
        keywords: ['vidéaste mariage toul', 'mariage cathédrale saint-etienne', 'vignoble toulois'],
        introText: "Cité fortifiée au caractère affirmé, Toul impressionne par la majesté de sa Cathédrale Saint-Étienne. Entre pierres gothiques et vignobles des côtes de Toul, c'est une destination de choix pour un mariage alliant patrimoine et terroir.",
        localLandmarks: ['Cathédrale Saint-Étienne', 'Le Cloître', 'Remparts de Toul']
    },
    {
        slug: 'videaste-mariage-sarrebourg',
        name: 'Sarrebourg',
        zipCode: '57400',
        region: 'Lorraine',
        isPrimary: false,
        keywords: ['vidéaste mariage sarrebourg', 'mariage chapelle cordeliers', 'vitrail chagall'],
        introText: "Aux portes des Vosges, Sarrebourg est un écrin de culture et de nature. La lumière unique filtrant à travers le vitrail de Chagall à la Chapelle des Cordeliers offre une inspiration artistique rare pour une cinématographie poétique.",
        localLandmarks: ['Chapelle des Cordeliers', 'Etang de la Petite-Pierre', 'Parc Naturel Régional']
    },
    {
        slug: 'videaste-mariage-bar-le-duc',
        name: 'Bar-le-Duc',
        zipCode: '55000',
        region: 'Lorraine',
        isPrimary: false,
        keywords: ['vidéaste mariage bar-le-duc', 'mariage meuse', 'ville renaissance'],
        introText: "Joyau de la Renaissance, la Ville Haute de Bar-le-Duc est un musée à ciel ouvert. Ses façades de pierre blonde et ses ruelles pavées créent une atmosphère aristocratique et confidentielle, hors du temps.",
        localLandmarks: ['Quartier Renaissance', 'Tour de l\'Horloge', 'Collège Gilles de Trèves']
    },
    {
        slug: 'videaste-mariage-verdun',
        name: 'Verdun',
        zipCode: '55100',
        region: 'Lorraine',
        isPrimary: false,
        keywords: ['vidéaste mariage verdun', 'mariage meuse', 'chateau des monthairons'],
        introText: "Au-delà de son histoire, Verdun révèle des paysages paisibles et des domaines prestigieux en bord de Meuse. Une ville qui a su se réinventer pour offrir des cadres de réception élégants, empreints de dignité et de verdure.",
        localLandmarks: ['Quai de Londres', 'Cathédrale Notre-Dame', 'Château des Monthairons']
    },
    {
        slug: 'videaste-mariage-commercy',
        name: 'Commercy',
        zipCode: '55200',
        region: 'Lorraine',
        isPrimary: false,
        keywords: ['vidéaste mariage commercy', 'mariage chateau stanislas', 'madeleine commercy'],
        introText: "Célèbre pour sa douceur de vivre, Commercy rayonne autour du Château Stanislas. La cour d'honneur en fer à cheval constitue un arrière-plan architectural grandiose pour des arrivées de cortège spectaculaires.",
        localLandmarks: ['Château Stanislas', 'Parc de Commercy']
    },
    {
        slug: 'videaste-mariage-saint-avold',
        name: 'Saint-Avold',
        zipCode: '57500',
        region: 'Lorraine',
        isPrimary: false,
        keywords: ['vidéaste mariage saint-avold', 'mariage cimetière américain', 'abbatiale saint-nabor'],
        introText: "Terre de mémoire et de verdure, Saint-Avold surprend par l'esthétique soignée de ses espaces. L'Abbatiale Saint-Nabor y veille avec grandeur, offrant un cadre spirituel et majestueux.",
        localLandmarks: ['Abbatiale Saint-Nabor', 'Cimetière Américain', 'Forêt d\'Oderfang']
    },

    // --- ALSACE (EXTENSION) ---
    {
        slug: 'videaste-mariage-mulhouse',
        name: 'Mulhouse',
        zipCode: '68100',
        region: 'Alsace',
        isPrimary: false,
        keywords: ['vidéaste mariage mulhouse', 'mariage industriel', 'cite de l\'auto'],
        introText: "Loin des clichés, Mulhouse joue la carte de l'audace avec son patrimoine industriel réhabilité de façon spectaculaire. Des murs de briques rouges aux verrières des anciennes filatures, c’est le décor rêvé pour un mariage urbain et arty.",
        localLandmarks: ['Cité de l\'Auto', 'Parc Zoologique', 'Temple Saint-Étienne']
    },
    {
        slug: 'videaste-mariage-obernai',
        name: 'Obernai',
        zipCode: '67210',
        region: 'Alsace',
        isPrimary: false,
        keywords: ['vidéaste mariage obernai', 'mariage route des vins', 'mont sainte-odile'],
        introText: "Quintessence du charme alsacien, Obernai déroule ses remparts au pied du Mont Sainte-Odile. Entre vignes et maisons traditionnelles, elle incarne l'Alsace éternelle, parfaite pour un récit visuel authentique et chaleureux.",
        localLandmarks: ['Mont Sainte-Odile', 'Place du Marché', 'Remparts']
    },
    {
        slug: 'videaste-mariage-selestat',
        name: 'Sélestat',
        zipCode: '67600',
        region: 'Alsace',
        isPrimary: false,
        keywords: ['vidéaste mariage selestat', 'mariage bibliotheque humaniste', 'centre alsace'],
        introText: "Berceau de l'humanisme, Sélestat est une ville d'art et d'histoire au cœur de l'Alsace. Sa Bibliothèque Humaniste et ses églises gothiques offrent une trame de fond intellectuelle et raffinée pour votre union.",
        localLandmarks: ['Bibliothèque Humaniste', 'Église Saint-Georges', 'Église Sainte-Foy']
    },
    {
        slug: 'videaste-mariage-haguenau',
        name: 'Haguenau',
        zipCode: '67500',
        region: 'Alsace',
        isPrimary: false,
        keywords: ['vidéaste mariage haguenau', 'mariage alsace nord', 'foret de haguenau'],
        introText: "Porte de l'Alsace du Nord, Haguenau est une ville verte entourée de sa Forêt Sainte. Son centre historique piétonnier et ses édifices religieux en grès rose créent une ambiance intime et apaisante.",
        localLandmarks: ['Musée Historique', 'Forêt de Haguenau', 'Église Saint-Georges']
    },
    {
        slug: 'videaste-mariage-saverne',
        name: 'Saverne',
        zipCode: '67700',
        region: 'Alsace',
        isPrimary: false,
        keywords: ['vidéaste mariage saverne', 'mariage chateau rohan', 'port de saverne'],
        introText: "Ville princière dominée par le somptueux Château des Rohan, Saverne a des allures de petite Versailles alsacienne. Son port de plaisance ajoute une touche de fraîcheur et d'ouverture, idéale pour des séquences lifestyle au bord de l'eau.",
        localLandmarks: ['Château des Rohan', 'Port de Plaisance', 'Jardin Botanique']
    },
    {
        slug: 'videaste-mariage-riquewihr',
        name: 'Riquewihr',
        zipCode: '68340',
        region: 'Alsace',
        isPrimary: false,
        keywords: ['vidéaste mariage riquewihr', 'elopement alsace', 'plus beau village de france'],
        introText: "Perle du vignoble, Riquewihr est un décor de cinéma à part entière. Ses remparts et ses maisons colorées, préservés du temps, en font l'une des destinations les plus prisées pour des elopements romantiques et hors du temps.",
        localLandmarks: ['Le Dolder', 'Rue du Général-de-Gaulle', 'Vignobles']
    },
    {
        slug: 'videaste-mariage-ribeauville',
        name: 'Ribeauvillé',
        zipCode: '68150',
        region: 'Alsace',
        isPrimary: false,
        keywords: ['vidéaste mariage ribeauville', 'mariage trois chateaux', 'fête des ménétriers'],
        introText: "Sous le regard bienveillant de ses trois châteaux, Ribeauvillé vibre d'une énergie médiévale festive. Ses ruelles pittoresques et ses vues sur les vignobles offrent une variété de plans incroyable pour enrichir votre film.",
        localLandmarks: ['Château de Saint-Ulrich', 'Tour des Bouchers', 'Grand-Rue']
    },
    {
        slug: 'videaste-mariage-molsheim',
        name: 'Molsheim',
        zipCode: '67120',
        region: 'Alsace',
        isPrimary: false,
        keywords: ['vidéaste mariage molsheim', 'mariage bugatti', 'route des vins'],
        introText: "Fief historique de la famille Bugatti, Molsheim allie tradition viticole et excellence mécanique. La Porte des Forges et le centre historique offrent un cadre de caractère, symbole de réussite et d'élégance.",
        localLandmarks: ['Porte des Forges', 'La Metzig', 'Église des Jésuites']
    },
    {
        slug: 'videaste-mariage-wissembourg',
        name: 'Wissembourg',
        zipCode: '67160',
        region: 'Alsace',
        isPrimary: false,
        keywords: ['vidéaste mariage wissembourg', 'mariage alsace du nord', 'abbatiale'],
        introText: "Au nord de l'Alsace, Wissembourg séduit par son charme romantique traversé par la Lauter. L'Abbatiale Saints-Pierre-et-Paul et les maisons à colombages y composent un tableau bucolique d'une grande douceur.",
        localLandmarks: ['Abbatiale Saints-Pierre-et-Paul', 'Quartier du Bruch', 'Maison du Sel']
    },

    // --- SUISSE (EXTENSION) ---
    {
        slug: 'videaste-mariage-lausanne',
        name: 'Lausanne',
        region: 'Suisse',
        isPrimary: false,
        keywords: ['vidéaste mariage lausanne', 'mariage lac leman', 'photographe lausanne'],
        introText: "Capitale Olympique surplombant le Léman, Lausanne étincelle par ses palaces et sa vue imprenable sur les Alpes. Un cadre de prestige absolu, où le luxe de la Riviera suisse rencontre l'effervescence urbaine.",
        localLandmarks: ['Cathédrale de Lausanne', 'Musée Olympique', 'Ouchy']
    },
    {
        slug: 'videaste-mariage-montreux',
        name: 'Montreux',
        region: 'Suisse',
        isPrimary: false,
        keywords: ['vidéaste mariage montreux', 'mariage riviera suisse', 'chateau de chillon'],
        introText: "La perle de la Riviera suisse. Entre palmiers, palaces Belle Époque et le mystérieux Château de Chillon, Montreux offre une ambiance méditerranéenne exclusive et une lumière dorée inoubliable.",
        localLandmarks: ['Château de Chillon', 'Promenade des Fleuris', 'Rochers-de-Naye']
    },
    {
        slug: 'videaste-mariage-neuchatel',
        name: 'Neuchâtel',
        region: 'Suisse',
        isPrimary: false,
        keywords: ['vidéaste mariage neuchatel', 'mariage lac neuchatel', 'pierre jaune'],
        introText: "Bâtie en pierre jaune d'Hauterive, Neuchâtel rayonne d'une lumière solaire unique. Son château et sa collégiale dominent le lac, offrant des panoramas d'une élégance rare pour des images aériennes sublimes.",
        localLandmarks: ['Château de Neuchâtel', 'Collégiale', 'Bords du Lac']
    },
    {
        slug: 'videaste-mariage-fribourg',
        name: 'Fribourg',
        region: 'Suisse',
        isPrimary: false,
        keywords: ['vidéaste mariage fribourg', 'mariage suisse medieval', 'basse ville'],
        introText: "Médiévale et spectaculaire, Fribourg joue avec les reliefs et les ponts au-dessus de la Sarine. Ses falaises de molasse et sa cathédrale gothique créent un décor dramatique et puissant, parfait pour une cinématographie contrastée.",
        localLandmarks: ['Cathédrale Saint-Nicolas', 'Pont de Berne', 'Funiculaire']
    }
];
