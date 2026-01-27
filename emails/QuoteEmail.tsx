import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Heading,
    Hr,
    Row,
    Column,
    Link,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface QuoteEmailProps {
    quoteId: string;
    coupleName1: string;
    coupleName2: string;
    date: string;
    location: string;
    style: string;
    guestCount: string;
    mediaType: string;
    photoHours: number;
    videoHours: number;
    options: string[];
    deliveryOptions: string[];
    finalPrice: string;
    isPackApplied: boolean;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    notes?: string;
}

const getMediaTypeLabel = (type: string) => {
    switch (type) {
        case 'photo': return 'Photo uniquement';
        case 'video': return 'Vidéo uniquement';
        case 'duo': return 'Photo + Vidéo';
        default: return type;
    }
};

export function QuoteEmail({
    quoteId,
    coupleName1,
    coupleName2,
    date,
    location,
    style,
    guestCount,
    mediaType,
    photoHours,
    videoHours,
    options,
    deliveryOptions,
    finalPrice,
    isPackApplied,
    contactName,
    contactEmail,
    contactPhone,
    notes,
}: QuoteEmailProps) {
    return (
        <Html>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Tailwind>
                <Body className="bg-[#FDFBF7] font-sans py-10 px-4">
                    <Container className="bg-white rounded-2xl overflow-hidden max-w-[600px] mx-auto shadow-lg">
                        {/* Header */}
                        <Section className="bg-[#B76E79] px-8 py-10 text-center">
                            <Heading
                                as="h1"
                                className="font-serif text-white text-3xl m-0"
                            >
                                Loventia
                            </Heading>
                            <Text className="text-white/80 text-xs tracking-[3px] uppercase mt-2 mb-0">
                                Vidéaste & Photographe de Mariage
                            </Text>
                        </Section>

                        {/* Content */}
                        <Section className="px-8 py-10">
                            <Heading
                                as="h2"
                                className="font-serif text-[#333] text-2xl mt-0 mb-6"
                            >
                                Demande reçue ✨
                            </Heading>

                            <Text className="text-[#666] leading-relaxed">
                                Bonjour <strong>{contactName}</strong>,
                            </Text>
                            <Text className="text-[#666] leading-relaxed">
                                Nous avons bien reçu votre demande de devis pour le mariage de{' '}
                                <strong className="text-[#B76E79]">{coupleName1} & {coupleName2}</strong>.
                            </Text>

                            {/* Quote Reference */}
                            <Section className="bg-[#F4E1D2] rounded-xl p-5 text-center my-8">
                                <Text className="text-[#666] text-xs m-0 uppercase tracking-wider">
                                    Référence
                                </Text>
                                <Text className="font-mono text-lg text-[#333] m-0 mt-2 font-semibold">
                                    {quoteId}
                                </Text>
                            </Section>

                            <Hr className="border-[#F4E1D2] my-8" />

                            {/* Configuration Recap */}
                            <Heading
                                as="h3"
                                className="font-serif text-[#B76E79] text-base border-b border-[#F4E1D2] pb-3 mb-4"
                            >
                                Récapitulatif
                            </Heading>

                            <Section>
                                <Row className="mb-2">
                                    <Column className="text-[#666] text-sm">Date</Column>
                                    <Column className="text-[#333] text-sm text-right font-medium">{date}</Column>
                                </Row>
                                <Row className="mb-2">
                                    <Column className="text-[#666] text-sm">Lieu</Column>
                                    <Column className="text-[#333] text-sm text-right font-medium">{location}</Column>
                                </Row>
                                <Row className="mb-2">
                                    <Column className="text-[#666] text-sm">Style</Column>
                                    <Column className="text-[#333] text-sm text-right font-medium">{style}</Column>
                                </Row>
                                <Row className="mb-2">
                                    <Column className="text-[#666] text-sm">Invités</Column>
                                    <Column className="text-[#333] text-sm text-right font-medium">{guestCount}</Column>
                                </Row>
                                <Row className="mb-2">
                                    <Column className="text-[#666] text-sm">Prestation</Column>
                                    <Column className="text-[#333] text-sm text-right font-medium">{getMediaTypeLabel(mediaType)}</Column>
                                </Row>
                                {mediaType !== 'video' && (
                                    <Row className="mb-2">
                                        <Column className="text-[#666] text-sm">Photo</Column>
                                        <Column className="text-[#333] text-sm text-right font-medium">{photoHours}h</Column>
                                    </Row>
                                )}
                                {mediaType !== 'photo' && (
                                    <Row className="mb-2">
                                        <Column className="text-[#666] text-sm">Vidéo</Column>
                                        <Column className="text-[#333] text-sm text-right font-medium">{videoHours}h</Column>
                                    </Row>
                                )}
                            </Section>

                            {options.length > 0 && (
                                <Section className="mt-4">
                                    <Text className="text-[#666] text-xs uppercase tracking-wider mb-2">
                                        Options
                                    </Text>
                                    <Text className="text-[#333] text-sm m-0">
                                        {options.join(' • ')}
                                    </Text>
                                </Section>
                            )}

                            {deliveryOptions.length > 0 && (
                                <Section className="mt-4">
                                    <Text className="text-[#666] text-xs uppercase tracking-wider mb-2">
                                        Livraison
                                    </Text>
                                    <Text className="text-[#333] text-sm m-0">
                                        {deliveryOptions.join(' • ')}
                                    </Text>
                                </Section>
                            )}

                            {/* Price Box */}
                            <Section className={`rounded-xl p-6 text-center my-8 ${isPackApplied
                                    ? 'bg-gradient-to-r from-[#B76E79]/10 to-[#F4E1D2]/50 border-2 border-[#B76E79]'
                                    : 'bg-[#FDFBF7] border border-[#F4E1D2]'
                                }`}>
                                {isPackApplied && (
                                    <Text className="text-[#B76E79] text-xs font-bold m-0 mb-2">
                                        ✨ Pack Loventia Signature
                                    </Text>
                                )}
                                <Text className="text-[#666] text-xs m-0 uppercase tracking-wider">
                                    Estimation totale
                                </Text>
                                <Text className="font-serif text-4xl text-[#B76E79] m-0 mt-2 font-semibold">
                                    {finalPrice}
                                </Text>
                            </Section>

                            {notes && (
                                <Section className="mt-6">
                                    <Text className="text-[#666] text-xs uppercase tracking-wider mb-2">
                                        Votre message
                                    </Text>
                                    <Text className="text-[#333] text-sm bg-[#F4E1D2]/50 p-4 rounded-lg italic m-0">
                                        "{notes}"
                                    </Text>
                                </Section>
                            )}

                            <Hr className="border-[#F4E1D2] my-8" />

                            {/* Next Steps */}
                            <Section className="bg-[#FDFBF7] rounded-xl p-6">
                                <Heading as="h3" className="font-serif text-[#333] text-lg m-0 mb-3">
                                    Et ensuite ?
                                </Heading>
                                <Text className="text-[#666] text-sm leading-relaxed m-0">
                                    <strong>Denis ou Maxime</strong> vous recontactera sous <strong>24 heures</strong> pour
                                    confirmer la disponibilité et discuter des détails de votre journée.
                                </Text>
                            </Section>

                            {/* Contact */}
                            <Section className="mt-8">
                                <Text className="text-[#666] text-xs uppercase tracking-wider mb-2">
                                    Vos coordonnées enregistrées
                                </Text>
                                <Text className="text-[#333] text-sm m-0">
                                    📧 {contactEmail}
                                </Text>
                                <Text className="text-[#333] text-sm m-0 mt-1">
                                    📱 {contactPhone}
                                </Text>
                            </Section>
                        </Section>

                        {/* Footer */}
                        <Section className="bg-[#333] px-8 py-8 text-center">
                            <Text className="font-serif text-[#B76E79] text-lg m-0">
                                Loventia
                            </Text>
                            <Text className="text-white/60 text-xs m-0 mt-2">
                                Grand Est • Alsace • Suisse • Luxembourg
                            </Text>
                            <Text className="text-white/40 text-xs m-0 mt-4">
                                © {new Date().getFullYear()} Loventia. Tous droits réservés.
                            </Text>
                            <Section className="mt-4">
                                <Link href="https://www.loventia.fr" className="text-[#B76E79] text-xs">
                                    www.loventia.fr
                                </Link>
                            </Section>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}

export default QuoteEmail;
