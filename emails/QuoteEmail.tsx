import * as React from 'react';

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

/**
 * React-Email Template for Quote Confirmation
 * 
 * This is a draft template for use with Resend.
 * To use: npm install @react-email/components resend
 * 
 * For now, this is a placeholder that follows React-Email patterns.
 */
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
        <html>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Votre demande de devis - Loventia</title>
            </head>
            <body style={{
                fontFamily: "'Open Sans', Arial, sans-serif",
                backgroundColor: '#FDFBF7',
                margin: 0,
                padding: '40px 20px',
            }}>
                <table
                    role="presentation"
                    style={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        backgroundColor: '#ffffff',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(183, 110, 121, 0.1)',
                    }}
                    width="100%"
                >
                    {/* Header */}
                    <tr>
                        <td style={{
                            backgroundColor: '#B76E79',
                            padding: '40px 30px',
                            textAlign: 'center',
                        }}>
                            <h1 style={{
                                fontFamily: "'Playfair Display', Georgia, serif",
                                color: '#ffffff',
                                fontSize: '28px',
                                margin: 0,
                            }}>
                                Loventia
                            </h1>
                            <p style={{
                                color: 'rgba(255,255,255,0.8)',
                                fontSize: '12px',
                                letterSpacing: '3px',
                                textTransform: 'uppercase',
                                marginTop: '8px',
                            }}>
                                Vidéaste & Photographe de Mariage
                            </p>
                        </td>
                    </tr>

                    {/* Content */}
                    <tr>
                        <td style={{ padding: '40px 30px' }}>
                            <h2 style={{
                                fontFamily: "'Playfair Display', Georgia, serif",
                                color: '#333333',
                                fontSize: '24px',
                                marginTop: 0,
                            }}>
                                Demande de devis reçue
                            </h2>

                            <p style={{ color: '#666666', lineHeight: '1.6' }}>
                                Bonjour {contactName},<br /><br />
                                Nous avons bien reçu votre demande de devis pour le mariage de{' '}
                                <strong>{coupleName1} & {coupleName2}</strong>.
                            </p>

                            {/* Quote Reference */}
                            <div style={{
                                backgroundColor: '#F4E1D2',
                                borderRadius: '12px',
                                padding: '20px',
                                textAlign: 'center',
                                margin: '30px 0',
                            }}>
                                <p style={{ margin: 0, color: '#666666', fontSize: '12px' }}>
                                    Référence
                                </p>
                                <p style={{
                                    margin: '8px 0 0',
                                    fontFamily: "'Courier New', monospace",
                                    fontSize: '18px',
                                    color: '#333333',
                                }}>
                                    {quoteId}
                                </p>
                            </div>

                            {/* Details */}
                            <h3 style={{
                                fontFamily: "'Playfair Display', Georgia, serif",
                                color: '#B76E79',
                                fontSize: '16px',
                                borderBottom: '1px solid #F4E1D2',
                                paddingBottom: '10px',
                            }}>
                                Récapitulatif de votre demande
                            </h3>

                            <table style={{ width: '100%', fontSize: '14px' }}>
                                <tbody>
                                    <tr>
                                        <td style={{ padding: '8px 0', color: '#666666' }}>Date</td>
                                        <td style={{ padding: '8px 0', color: '#333333', textAlign: 'right' }}>{date}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '8px 0', color: '#666666' }}>Lieu</td>
                                        <td style={{ padding: '8px 0', color: '#333333', textAlign: 'right' }}>{location}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '8px 0', color: '#666666' }}>Style</td>
                                        <td style={{ padding: '8px 0', color: '#333333', textAlign: 'right' }}>{style}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '8px 0', color: '#666666' }}>Invités</td>
                                        <td style={{ padding: '8px 0', color: '#333333', textAlign: 'right' }}>{guestCount}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '8px 0', color: '#666666' }}>Prestation</td>
                                        <td style={{ padding: '8px 0', color: '#333333', textAlign: 'right' }}>{mediaType}</td>
                                    </tr>
                                    {mediaType !== 'video' && (
                                        <tr>
                                            <td style={{ padding: '8px 0', color: '#666666' }}>Photo</td>
                                            <td style={{ padding: '8px 0', color: '#333333', textAlign: 'right' }}>{photoHours}h</td>
                                        </tr>
                                    )}
                                    {mediaType !== 'photo' && (
                                        <tr>
                                            <td style={{ padding: '8px 0', color: '#666666' }}>Vidéo</td>
                                            <td style={{ padding: '8px 0', color: '#333333', textAlign: 'right' }}>{videoHours}h</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            {options.length > 0 && (
                                <>
                                    <h4 style={{ color: '#666666', fontSize: '14px', marginTop: '20px' }}>Options sélectionnées</h4>
                                    <ul style={{ paddingLeft: '20px', color: '#333333' }}>
                                        {options.map((opt, i) => (
                                            <li key={i} style={{ marginBottom: '4px' }}>{opt}</li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {deliveryOptions.length > 0 && (
                                <>
                                    <h4 style={{ color: '#666666', fontSize: '14px', marginTop: '20px' }}>Livraison</h4>
                                    <ul style={{ paddingLeft: '20px', color: '#333333' }}>
                                        {deliveryOptions.map((opt, i) => (
                                            <li key={i} style={{ marginBottom: '4px' }}>{opt}</li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {/* Price */}
                            <div style={{
                                backgroundColor: isPackApplied
                                    ? 'linear-gradient(135deg, rgba(183,110,121,0.1) 0%, rgba(244,225,210,0.5) 100%)'
                                    : '#FDFBF7',
                                borderRadius: '12px',
                                padding: '20px',
                                textAlign: 'center',
                                margin: '30px 0',
                                border: isPackApplied ? '2px solid #B76E79' : '1px solid #F4E1D2',
                            }}>
                                {isPackApplied && (
                                    <p style={{
                                        margin: '0 0 10px',
                                        color: '#B76E79',
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                    }}>
                                        ✨ Pack Loventia Signature
                                    </p>
                                )}
                                <p style={{ margin: 0, color: '#666666', fontSize: '12px' }}>
                                    Estimation totale
                                </p>
                                <p style={{
                                    fontFamily: "'Playfair Display', Georgia, serif",
                                    fontSize: '32px',
                                    color: '#B76E79',
                                    margin: '8px 0 0',
                                    fontWeight: 600,
                                }}>
                                    {finalPrice}
                                </p>
                            </div>

                            {notes && (
                                <>
                                    <h4 style={{ color: '#666666', fontSize: '14px' }}>Message</h4>
                                    <p style={{
                                        color: '#333333',
                                        backgroundColor: '#F4E1D2',
                                        padding: '15px',
                                        borderRadius: '8px',
                                        fontStyle: 'italic',
                                    }}>
                                        "{notes}"
                                    </p>
                                </>
                            )}

                            <p style={{ color: '#666666', lineHeight: '1.6', marginTop: '30px' }}>
                                Nous reviendrons vers vous dans les <strong>24 heures</strong> avec un devis détaillé
                                et nos disponibilités pour votre date.
                            </p>

                            {/* Contact */}
                            <h3 style={{
                                fontFamily: "'Playfair Display', Georgia, serif",
                                color: '#B76E79',
                                fontSize: '16px',
                                borderBottom: '1px solid #F4E1D2',
                                paddingBottom: '10px',
                                marginTop: '40px',
                            }}>
                                Vos coordonnées
                            </h3>
                            <p style={{ color: '#333333', margin: '10px 0' }}>
                                <strong>Email:</strong> {contactEmail}
                            </p>
                            <p style={{ color: '#333333', margin: '10px 0' }}>
                                <strong>Téléphone:</strong> {contactPhone}
                            </p>
                        </td>
                    </tr>

                    {/* Footer */}
                    <tr>
                        <td style={{
                            backgroundColor: '#333333',
                            padding: '30px',
                            textAlign: 'center',
                        }}>
                            <p style={{
                                fontFamily: "'Playfair Display', Georgia, serif",
                                color: '#B76E79',
                                fontSize: '18px',
                                margin: '0 0 10px',
                            }}>
                                Loventia
                            </p>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', margin: 0 }}>
                                Grand Est • Alsace • Suisse • Luxembourg
                            </p>
                            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', marginTop: '15px' }}>
                                © {new Date().getFullYear()} Loventia. Tous droits réservés.
                            </p>
                        </td>
                    </tr>
                </table>
            </body>
        </html>
    );
}

export default QuoteEmail;
