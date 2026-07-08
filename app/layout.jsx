import { Cormorant_Garamond, Jost } from 'next/font/google';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { site } from '../lib/site';
import './globals.css';

// Polices auto-hébergées au build (aucune requête vers Google au runtime — RGPD ok)
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-jost',
});

// Couleur de la barre du navigateur mobile
export const viewport = {
  themeColor: '#4a1e3d',
};

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Fleuriste mariage & événements, Aix-en-Provence`,
    template: `%s — ${site.name}`,
  },
  // URL canonique : se résout automatiquement page par page
  alternates: { canonical: './' },
  description:
    "La Maison Helleborus crée des décors floraux sur mesure pour mariages, réceptions privées et événements : bouquets, arches, scénographies. Basée à " +
    site.area.base +
    ', intervient dans toute la région et au-delà.',
  openGraph: {
    siteName: site.name,
    locale: 'fr_FR',
    type: 'website',
    images: ['/images/og.jpg'],
  },
};

// Données structurées : aide Google à comprendre l'activité (SEO local)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Florist',
  name: site.name,
  alternateName: 'Helleborus',
  logo: `${site.url}/images/logo.png`,
  description: site.tagline,
  url: site.url,
  email: site.contact.email,
  telephone: site.contact.phone,
  areaServed: site.area.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.area.base,
    addressRegion: site.area.region,
    addressCountry: 'FR',
  },
  founder: { '@type': 'Person', name: site.contact.person },
  sameAs: [site.contact.instagram],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
