import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Conditions Générales de Vente | Loventia',
    description:
        'Conditions Générales de Vente de Loventia - Vidéaste et Photographe de Mariage. Consultez nos conditions contractuelles, modalités de réservation, paiement et livraison.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function CGVPage() {
    return (
        <main className="bg-loventia-cream">
            {/* Header */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-loventia-charcoal mb-6">
                        Conditions Générales de Vente
                    </h1>
                    <p className="font-serif text-xl md:text-2xl text-loventia-rose italic">
                        Loventia - Vidéaste et Photographe de Mariage
                    </p>
                </div>
            </section>

            {/* CGV Content */}
            <section className="pb-20 md:pb-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-card p-8 md:p-12 lg:p-16 space-y-12">

                        {/* Préambule */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-loventia-charcoal border-b border-loventia-rose/20 pb-4">
                                Préambule
                            </h2>
                            <div className="prose prose-lg max-w-none text-loventia-charcoal/80">
                                <p>
                                    Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre la société <strong>Nuit Blanche Production</strong>, exploitant la marque <strong>Loventia</strong>, et ses clients particuliers (ci-après « le Client » ou « les Mariés ») dans le cadre de prestations de vidéo et photographie de mariage.
                                </p>
                                <div className="bg-loventia-beige/50 rounded-2xl p-6 mt-6 not-prose">
                                    <p className="font-semibold text-loventia-charcoal mb-2">Loventia</p>
                                    <p className="text-sm">Une marque de la SAS Nuit Blanche Production</p>
                                    <p className="text-sm">39, rue Jean Mermoz - 88190 Golbey</p>
                                    <p className="text-sm">SIRET : 84122835600017</p>
                                    <p className="text-sm">TVA intracommunautaire : FR93841228356</p>
                                    <p className="text-sm">Site web : www.loventia.fr</p>
                                    <p className="text-sm">Email : contact@loventia.fr</p>
                                </div>
                                <p className="mt-6">
                                    Toute commande de prestation implique l'acceptation sans réserve des présentes CGV par le Client.
                                </p>
                            </div>
                        </div>

                        {/* Article 1 */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-loventia-charcoal border-b border-loventia-rose/20 pb-4">
                                Article 1 - Objet et Prestations
                            </h2>
                            <div className="prose prose-lg max-w-none text-loventia-charcoal/80">
                                <p>
                                    Loventia propose des prestations de captation vidéo et photographique pour mariages et événements privés associés (demande en mariage, séance couple, etc.). Les prestations incluent, selon la formule choisie :
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>La captation vidéo et/ou photographique le jour du mariage</li>
                                    <li>Le montage et la post-production des images</li>
                                    <li>La livraison de fichiers numériques (vidéo, photos) via plateforme sécurisée ou support physique</li>
                                    <li>Des services optionnels (drone, séance engagement, album photo, etc.)</li>
                                </ul>
                                <p>
                                    Le détail précis de la prestation (durée, livrables, options) est défini dans le devis signé par les deux parties. Loventia s'engage à mettre en œuvre tous les moyens nécessaires pour réaliser la prestation dans les meilleures conditions, conformément à son style artistique reconnu.
                                </p>
                                <p className="font-semibold text-loventia-rose">
                                    Tous les prix indiqués sont TTC (Toutes Taxes Comprises).
                                </p>
                            </div>
                        </div>

                        {/* Article 2 */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-loventia-charcoal border-b border-loventia-rose/20 pb-4">
                                Article 2 - Devis, Commande et Réservation
                            </h2>
                            <div className="prose prose-lg max-w-none text-loventia-charcoal/80">
                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">2.1 Établissement du devis</h3>
                                <p>
                                    Après un premier contact (téléphone, email, rencontre), Loventia établit un devis personnalisé gratuit et sans engagement, valable 30 jours. Le devis précise la date du mariage, les prestations incluses, les options, le prix total TTC et les conditions de paiement.
                                </p>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">2.2 Réservation de la date</h3>
                                <p>
                                    La réservation de la date du mariage devient ferme et définitive à réception :
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Du devis signé par les deux parties (signature manuscrite ou électronique)</li>
                                    <li>De l'acompte correspondant à <strong>40% du montant total TTC</strong></li>
                                </ul>
                                <p>
                                    Le paiement de l'acompte confirme l'acceptation sans réserve des présentes CGV. <strong>Sans réception de l'acompte, aucune date n'est bloquée</strong> et Loventia reste libre d'accepter d'autres demandes pour la même date.
                                </p>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">2.3 Modalités de paiement de l'acompte</h3>
                                <p>L'acompte peut être réglé par :</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Virement bancaire</li>
                                    <li>Chèque (encaissé immédiatement)</li>
                                    <li>Carte bancaire (via lien de paiement sécurisé)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Article 3 */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-loventia-charcoal border-b border-loventia-rose/20 pb-4">
                                Article 3 - Prix et Règlement du Solde
                            </h2>
                            <div className="prose prose-lg max-w-none text-loventia-charcoal/80">
                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">3.1 Prix</h3>
                                <p>
                                    Le prix total de la prestation est indiqué TTC dans le devis signé. Il comprend la captation, le montage, la post-production et la livraison des fichiers numériques selon les modalités convenues.
                                </p>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">3.2 Règlement du solde</h3>
                                <p>
                                    Le solde (soit <strong>60% du montant total TTC</strong>) est exigible <strong>au plus tard le jour du mariage</strong>, avant le début de la prestation, sauf arrangement écrit contraire convenu avec Loventia.
                                </p>
                                <p>Les moyens de paiement acceptés pour le solde sont :</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Virement bancaire</li>
                                    <li>Chèque</li>
                                    <li>Espèces (dans la limite légale en vigueur)</li>
                                    <li>Carte bancaire</li>
                                </ul>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">3.3 Retard de paiement</h3>
                                <p>En cas de retard de paiement du solde, Loventia se réserve le droit de :</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Suspendre la livraison des fichiers définitifs jusqu'à règlement complet</li>
                                    <li>Appliquer des pénalités de retard au taux annuel de 10% à compter de la date d'exigibilité</li>
                                    <li>Facturer une indemnité forfaitaire pour frais de recouvrement de 40€, conformément à l'article D. 441-5 du Code de commerce</li>
                                </ul>
                                <p>
                                    Le défaut de paiement ne dispense pas le Client de son obligation de régler l'intégralité des sommes dues.
                                </p>
                            </div>
                        </div>

                        {/* Article 4 */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-loventia-charcoal border-b border-loventia-rose/20 pb-4">
                                Article 4 - Droit de Rétractation
                            </h2>
                            <div className="prose prose-lg max-w-none text-loventia-charcoal/80">
                                <p>
                                    Conformément à l'article L. 221-28 du Code de la consommation, <strong>le droit de rétractation ne s'applique pas</strong> aux prestations de services d'hébergement, de transport, de restauration ou d'activités de loisirs qui doivent être fournis à une date ou à une période déterminée.
                                </p>
                                <p>
                                    Les prestations de captation vidéo et photographique de mariage entrant dans cette catégorie, <strong>aucun droit de rétractation de 14 jours n'est applicable</strong> après signature du devis et paiement de l'acompte.
                                </p>
                                <p className="text-loventia-rose font-medium">
                                    Le Client est donc invité à réfléchir attentivement avant de s'engager.
                                </p>
                            </div>
                        </div>

                        {/* Article 5 */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-loventia-charcoal border-b border-loventia-rose/20 pb-4">
                                Article 5 - Annulation par le Client
                            </h2>
                            <div className="prose prose-lg max-w-none text-loventia-charcoal/80">
                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">5.1 Annulation à l'initiative du Client</h3>
                                <p>
                                    En cas d'annulation du mariage ou de la prestation à l'initiative du Client, quelle qu'en soit la raison (sauf cas de force majeure visé à l'article 6), les conditions suivantes s'appliquent :
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>L'acompte versé reste acquis à Loventia</strong> à titre d'indemnité pour la date bloquée et les opportunités commerciales perdues</li>
                                    <li>Si le solde a déjà été versé, il sera remboursé dans un délai de 30 jours</li>
                                </ul>
                                <p>
                                    L'annulation doit être notifiée par écrit (email ou courrier recommandé) à Loventia.
                                </p>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">5.2 Report de date</h3>
                                <p>
                                    En cas de report de la date du mariage à l'initiative du Client (hors force majeure), et sous réserve de disponibilité de Loventia à la nouvelle date proposée :
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Premier report</strong> : aucun frais supplémentaire si la nouvelle date se situe dans les 18 mois suivant la date initiale</li>
                                    <li><strong>Deuxième report ou report au-delà de 18 mois</strong> : des frais administratifs de 150€ TTC pourront être appliqués</li>
                                </ul>
                                <p>
                                    Le report est soumis à acceptation écrite de Loventia et à la disponibilité effective du prestataire.
                                </p>
                            </div>
                        </div>

                        {/* Article 6 */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-loventia-charcoal border-b border-loventia-rose/20 pb-4">
                                Article 6 - Force Majeure et Événements Exceptionnels
                            </h2>
                            <div className="prose prose-lg max-w-none text-loventia-charcoal/80">
                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">6.1 Définition</h3>
                                <p>
                                    Sont considérés comme cas de force majeure les événements imprévisibles, irrésistibles et extérieurs aux parties, tels que :
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Catastrophes naturelles (inondation, tempête, tremblement de terre)</li>
                                    <li>Pandémie ou épidémie entraînant une interdiction légale de rassemblements</li>
                                    <li>Décision administrative interdisant la tenue de l'événement</li>
                                    <li>Accident grave ou hospitalisation des Mariés ou du prestataire</li>
                                </ul>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">6.2 Conséquences</h3>
                                <p>En cas de force majeure rendant impossible la tenue du mariage :</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Report de date</strong> : si Loventia est disponible à une nouvelle date dans les 24 mois, aucun frais supplémentaire ne sera appliqué. L'acompte et le solde éventuellement versés restent valables</li>
                                    <li><strong>Annulation définitive</strong> : si aucun report n'est possible ou souhaité, Loventia remboursera l'intégralité des sommes versées (acompte + solde) dans un délai de 60 jours</li>
                                </ul>
                                <p>
                                    La force majeure doit être justifiée par un document officiel (arrêté préfectoral, certificat médical, etc.).
                                </p>
                            </div>
                        </div>

                        {/* Article 7 */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-loventia-charcoal border-b border-loventia-rose/20 pb-4">
                                Article 7 - Obligations du Client
                            </h2>
                            <div className="prose prose-lg max-w-none text-loventia-charcoal/80">
                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">7.1 Informations et coordination</h3>
                                <p>Le Client s'engage à :</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Fournir à Loventia toutes les informations nécessaires au bon déroulement de la prestation (planning détaillé, lieux, contacts des prestataires)</li>
                                    <li>Informer Loventia de toute modification du planning ou des lieux au moins 7 jours avant le mariage</li>
                                    <li>Désigner une personne référente le jour du mariage pour faciliter la coordination</li>
                                </ul>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">7.2 Conditions d'intervention</h3>
                                <p>Le Client s'engage à permettre à Loventia d'intervenir dans les meilleures conditions :</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Accès libre et sécurisé à tous les lieux de captation (cérémonie, cocktail, soirée)</li>
                                    <li>Information préalable sur les éventuelles restrictions (lieux de culte interdisant la vidéo, etc.)</li>
                                    <li>Respect des horaires communiqués pour optimiser la captation</li>
                                </ul>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">7.3 Repas du prestataire</h3>
                                <p>
                                    Pour les prestations d'une durée supérieure à 6 heures continues, le Client s'engage à fournir un <strong>repas complet au prestataire</strong> (entrée, plat, dessert) au même moment que les invités, dans une salle à proximité. Cette clause est essentielle pour permettre au prestataire de maintenir sa concentration et son énergie tout au long de la journée.
                                </p>
                                <p>
                                    En cas de non-respect de cette clause, Loventia se réserve le droit d'interrompre la prestation pour se restaurer à l'extérieur, sans que cela puisse donner lieu à un quelconque dédommagement.
                                </p>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">7.4 Frais de déplacement</h3>
                                <p>
                                    Les frais de déplacement sont inclus dans le tarif pour toute prestation située dans un rayon de <strong>200 km</strong> autour de Golbey (88190).
                                </p>
                                <p>
                                    Au-delà de ce périmètre, des frais de déplacement supplémentaires seront facturés au tarif de <strong>0,50€/km</strong> (aller-retour) au-delà des 200 premiers kilomètres. Ces frais seront indiqués dans le devis.
                                </p>
                                <p>
                                    Pour les prestations situées à plus de 300 km, Loventia pourra également facturer des frais d'hébergement (à définir au cas par cas dans le devis).
                                </p>
                            </div>
                        </div>

                        {/* Article 8 */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-loventia-charcoal border-b border-loventia-rose/20 pb-4">
                                Article 8 - Prestations Drone et Aléas Techniques
                            </h2>
                            <div className="prose prose-lg max-w-none text-loventia-charcoal/80">
                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">8.1 Conditions de vol</h3>
                                <p>Lorsque la prestation inclut des prises de vue par drone, celles-ci sont soumises :</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Aux conditions météorologiques (vent, pluie, brouillard)</li>
                                    <li>Aux autorisations de vol réglementaires (zones interdites, proximité d'aéroports)</li>
                                    <li>Aux restrictions locales (sites classés, propriétés privées)</li>
                                </ul>
                                <p>
                                    Loventia, titulaire des certifications nécessaires, respecte scrupuleusement la réglementation en vigueur relative à l'utilisation de drones civils.
                                </p>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">8.2 Impossibilité de vol</h3>
                                <p>
                                    En cas d'impossibilité de réaliser des prises de vue par drone pour des raisons de sécurité, météorologiques ou réglementaires, <strong>aucune indemnisation ne sera due</strong> au Client. Il s'agit d'une obligation de moyens et non de résultat, la sécurité des personnes primant sur toute considération commerciale.
                                </p>
                                <p>
                                    Dans la mesure du possible, Loventia proposera des alternatives de captation au sol pour compenser l'absence de vues aériennes.
                                </p>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">8.3 Aléas techniques</h3>
                                <p>
                                    Loventia utilise du matériel professionnel de haute qualité et double systématiquement les captations (caméras de secours, cartes mémoire multiples). Toutefois, en cas de défaillance technique imprévisible (panne de matériel, corruption de fichiers) malgré toutes les précautions prises, la responsabilité de Loventia sera limitée au remboursement des sommes perçues, à l'exclusion de tout autre dédommagement.
                                </p>
                            </div>
                        </div>

                        {/* Article 9 */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-loventia-charcoal border-b border-loventia-rose/20 pb-4">
                                Article 9 - Style Artistique et Modifications
                            </h2>
                            <div className="prose prose-lg max-w-none text-loventia-charcoal/80">
                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">9.1 Style artistique</h3>
                                <p>
                                    Le Client déclare avoir pris connaissance du style artistique de Loventia (vidéos émotionnelles, cinématographiques, musique, rythme de montage) en consultant le portfolio disponible sur le site web et/ou les réseaux sociaux.
                                </p>
                                <p>
                                    Le Client reconnaît et accepte que le résultat final reflète la sensibilité artistique et l'interprétation créative du prestataire. <strong>Aucune réclamation fondée sur des critères subjectifs de goût artistique ne pourra être acceptée.</strong>
                                </p>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">9.2 Modifications incluses</h3>
                                <p>La prestation inclut des <strong>modifications illimitées</strong> dans les limites suivantes :</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Ajustements techniques (correction colorimétrique, ajustement du son)</li>
                                    <li>Modifications du rythme de montage ou de la durée de certaines séquences</li>
                                    <li>Changement de musique (sous réserve de disponibilité dans la bibliothèque de Loventia)</li>
                                </ul>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">9.3 Modifications exclues</h3>
                                <p>Ne sont pas considérées comme des modifications incluses :</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>La refonte complète du montage ou du style général</li>
                                    <li>L'ajout de séquences non prévues dans le brief initial</li>
                                    <li>Les demandes contraires aux indications données lors du briefing pré-mariage</li>
                                    <li>Les demandes de modifications répétées portant sur les mêmes éléments déjà corrigés</li>
                                </ul>
                                <p>
                                    Au-delà de 5 demandes de modifications distinctes, Loventia se réserve le droit de facturer des frais supplémentaires de 100€ TTC par série de modifications additionnelles, afin de préserver la qualité du travail et l'équilibre contractuel.
                                </p>
                            </div>
                        </div>

                        {/* Article 10 */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-loventia-charcoal border-b border-loventia-rose/20 pb-4">
                                Article 10 - Délais de Livraison
                            </h2>
                            <div className="prose prose-lg max-w-none text-loventia-charcoal/80">
                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">10.1 Livraison des fichiers</h3>
                                <p>Les délais de livraison sont les suivants (à compter de la réception du solde) :</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Teaser vidéo</strong> (1-2 minutes) : 3 à 4 semaines</li>
                                    <li><strong>Film complet de mariage</strong> : 8 à 12 semaines</li>
                                    <li><strong>Galerie photos</strong> (si incluse) : 4 à 6 semaines</li>
                                </ul>
                                <p>
                                    Ces délais sont donnés à titre indicatif et peuvent varier selon la période de l'année (haute saison de mai à septembre) et la complexité du montage. Loventia s'engage à tenir le Client informé en cas de dépassement prévisible.
                                </p>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">10.2 Modalités de livraison</h3>
                                <p>Les fichiers sont livrés par :</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Lien de téléchargement sécurisé</strong> (valable 90 jours)</li>
                                    <li><strong>Clé USB personnalisée</strong> (option payante selon formule)</li>
                                    <li><strong>Album photo</strong> (si inclus dans la formule)</li>
                                </ul>
                                <p>
                                    Le Client s'engage à télécharger et sauvegarder les fichiers dans les délais impartis. Passé ce délai, Loventia ne pourra être tenue responsable de la perte des fichiers.
                                </p>
                            </div>
                        </div>

                        {/* Article 11 */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-loventia-charcoal border-b border-loventia-rose/20 pb-4">
                                Article 11 - Propriété Intellectuelle et Droit à l'Image
                            </h2>
                            <div className="prose prose-lg max-w-none text-loventia-charcoal/80">
                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">11.1 Droits d'auteur</h3>
                                <p>
                                    Loventia demeure propriétaire des droits d'auteur sur l'ensemble des créations réalisées (vidéos, photographies, montages). Les fichiers livrés au Client ne constituent qu'une <strong>cession des droits d'usage</strong> dans les limites définies ci-après.
                                </p>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">11.2 Droits du Client</h3>
                                <p>Le Client acquiert le droit d'utiliser les fichiers livrés pour un <strong>usage privé et familial</strong> uniquement :</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Diffusion dans le cercle familial et amical</li>
                                    <li>Partage sur les réseaux sociaux personnels</li>
                                    <li>Projection lors d'événements privés</li>
                                </ul>
                                <p><strong>Sont strictement interdits</strong> :</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Toute utilisation commerciale ou publicitaire</li>
                                    <li>La revente ou la cession des fichiers à des tiers</li>
                                    <li>La modification des fichiers (recadrage, filtres, ajout de texte) sans autorisation</li>
                                    <li>La suppression des mentions de copyright ou du logo Loventia</li>
                                </ul>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">11.3 Droit à l'image et promotion de Loventia</h3>
                                <p>
                                    Le Client autorise expressément Loventia à utiliser des extraits vidéo et des photographies issues de la prestation à des fins de <strong>promotion et de communication</strong> (site web, réseaux sociaux, portfolio, publicités, concours).
                                </p>
                                <p>Cette autorisation est accordée à titre gracieux et pour une durée illimitée.</p>
                                <p>
                                    <strong>Opposition possible</strong> : si les Mariés souhaitent s'opposer à cette utilisation promotionnelle, ils doivent le notifier par écrit à Loventia avant la signature du devis. Dans ce cas, un supplément tarifaire de <strong>300€ TTC</strong> sera appliqué pour compenser la perte de visibilité commerciale.
                                </p>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">11.4 Diffusion publique</h3>
                                <p>
                                    Pour toute diffusion publique des vidéos (télévision, cinéma, diffusion payante), le Client devra obtenir l'autorisation écrite préalable de Loventia et s'acquitter des droits d'auteur complémentaires selon un tarif à définir.
                                </p>
                            </div>
                        </div>

                        {/* Article 12 */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-loventia-charcoal border-b border-loventia-rose/20 pb-4">
                                Article 12 - Responsabilité et Assurance
                            </h2>
                            <div className="prose prose-lg max-w-none text-loventia-charcoal/80">
                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">12.1 Assurance</h3>
                                <p>
                                    Loventia est couverte par une assurance responsabilité civile professionnelle couvrant les dommages matériels et corporels pouvant survenir dans le cadre de l'exercice de son activité.
                                </p>
                                <p>Une copie de l'attestation d'assurance peut être transmise au Client sur simple demande.</p>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">12.2 Limitation de responsabilité</h3>
                                <p>
                                    Loventia met en œuvre tous les moyens nécessaires pour assurer la qualité et la sécurité de ses prestations. Toutefois, sa responsabilité est limitée dans les cas suivants :
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Perte ou dégradation des fichiers</strong> : Loventia conserve une copie de sauvegarde des fichiers pendant 6 mois après livraison. Passé ce délai, le Client est seul responsable de la conservation de ses fichiers.</li>
                                    <li><strong>Dommages indirects</strong> : Loventia ne pourra être tenue responsable des dommages indirects ou immatériels (préjudice moral, perte de souvenirs irremplaçables) au-delà du montant des sommes versées par le Client.</li>
                                    <li><strong>Faits des tiers</strong> : Loventia ne saurait être tenue responsable des dommages causés par des tiers (autres prestataires, invités, propriétaires de lieux).</li>
                                </ul>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">12.3 Obligation de réclamation</h3>
                                <p>
                                    Toute réclamation concernant la qualité des prestations doit être formulée par écrit dans un délai de <strong>30 jours</strong> suivant la livraison des fichiers. Passé ce délai, aucune réclamation ne pourra être prise en compte.
                                </p>
                            </div>
                        </div>

                        {/* Article 13 */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-loventia-charcoal border-b border-loventia-rose/20 pb-4">
                                Article 13 - Confidentialité et Protection des Données
                            </h2>
                            <div className="prose prose-lg max-w-none text-loventia-charcoal/80">
                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">13.1 Confidentialité</h3>
                                <p>
                                    Loventia s'engage à traiter avec la plus grande confidentialité toutes les informations personnelles et sensibles communiquées par le Client dans le cadre de la prestation.
                                </p>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">13.2 Protection des données personnelles</h3>
                                <p>
                                    Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, le Client dispose d'un droit d'accès, de rectification, d'opposition, de limitation et de portabilité sur ses données personnelles.
                                </p>
                                <p>
                                    Les données collectées (nom, prénom, adresse, email, téléphone, date du mariage) sont utilisées uniquement dans le cadre de l'exécution de la prestation et ne sont jamais cédées à des tiers à des fins commerciales.
                                </p>
                                <p>
                                    Pour exercer ces droits, le Client peut contacter Loventia à l'adresse : <a href="mailto:contact@loventia.fr" className="text-loventia-rose hover:underline">contact@loventia.fr</a>
                                </p>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">13.3 Conservation des données</h3>
                                <p>
                                    Les données personnelles du Client sont conservées pendant la durée nécessaire à l'exécution du contrat, puis archivées conformément aux obligations légales de conservation (factures, documents comptables).
                                </p>
                            </div>
                        </div>

                        {/* Article 14 */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-loventia-charcoal border-b border-loventia-rose/20 pb-4">
                                Article 14 - Médiation et Litige
                            </h2>
                            <div className="prose prose-lg max-w-none text-loventia-charcoal/80">
                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">14.1 Médiation de la consommation</h3>
                                <p>
                                    Conformément à l'article L. 612-1 du Code de la consommation, le Client a la possibilité de recourir gratuitement à un médiateur de la consommation en cas de litige non résolu avec Loventia.
                                </p>

                                <p className="mt-4">
                                    Le Client peut saisir le médiateur dans un délai d'un an à compter de sa réclamation écrite auprès de Loventia.
                                </p>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">14.2 Règlement amiable</h3>
                                <p>
                                    Avant toute saisine du médiateur ou des tribunaux, les parties s'engagent à tenter de résoudre leur différend à l'amiable par voie de négociation directe.
                                </p>

                                <h3 className="font-serif text-xl font-medium text-loventia-charcoal mt-6 mb-4">14.3 Droit applicable et juridiction</h3>
                                <p>
                                    Les présentes CGV sont soumises au droit français. En cas d'échec de la médiation, tout litige relève de la compétence exclusive des tribunaux du ressort du domicile du Client, conformément aux règles de compétence en matière de litiges de consommation.
                                </p>
                            </div>
                        </div>

                        {/* Article 15 */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-loventia-charcoal border-b border-loventia-rose/20 pb-4">
                                Article 15 - Modification des CGV
                            </h2>
                            <div className="prose prose-lg max-w-none text-loventia-charcoal/80">
                                <p>
                                    Loventia se réserve le droit de modifier les présentes CGV à tout moment. Les modifications s'appliquent uniquement aux contrats conclus après leur entrée en vigueur.
                                </p>
                                <p>
                                    Les CGV applicables au contrat du Client sont celles en vigueur à la date de signature du devis.
                                </p>
                                <p>
                                    La version la plus récente des CGV est consultable à tout moment sur le site web <a href="https://www.loventia.fr" className="text-loventia-rose hover:underline">www.loventia.fr</a>
                                </p>
                            </div>
                        </div>

                        {/* Article 16 */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-loventia-charcoal border-b border-loventia-rose/20 pb-4">
                                Article 16 - Acceptation des CGV
                            </h2>
                            <div className="prose prose-lg max-w-none text-loventia-charcoal/80">
                                <p>
                                    La signature du devis et le paiement de l'acompte valent acceptation sans réserve des présentes Conditions Générales de Vente.
                                </p>
                                <p>
                                    Le Client déclare avoir pris connaissance de l'intégralité des CGV, les avoir comprises et les accepter.
                                </p>
                            </div>
                        </div>

                        {/* Mentions finales */}
                        <div className="space-y-6 pt-8 border-t border-loventia-rose/20">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-loventia-charcoal">
                                Mentions finales
                            </h2>
                            <div className="prose prose-lg max-w-none text-loventia-charcoal/80">
                                <p className="font-serif italic text-lg text-loventia-rose">
                                    Nous vous remercions de votre confiance et sommes honorés de faire partie de votre journée de mariage. Loventia s'engage à capturer avec authenticité et émotion les moments précieux de votre union, pour que vous puissiez les revivre encore et encore.
                                </p>
                                <p className="mt-6">
                                    Pour toute question ou information complémentaire, n'hésitez pas à nous contacter :
                                </p>
                                <div className="bg-loventia-beige/50 rounded-2xl p-6 mt-4 not-prose">
                                    <p className="font-serif text-xl font-medium text-loventia-charcoal mb-2">Loventia</p>
                                    <p className="text-sm">Une marque de SAS Nuit Blanche Production</p>
                                    <p className="text-sm">39, rue Jean Mermoz - 88190 Golbey</p>
                                    <p className="text-sm">SIRET : 84122835600017</p>
                                    <p className="text-sm">Email : <a href="mailto:contact@loventia.fr" className="text-loventia-rose hover:underline">contact@loventia.fr</a></p>
                                    <p className="text-sm">Site web : <a href="https://www.loventia.fr" className="text-loventia-rose hover:underline">www.loventia.fr</a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
