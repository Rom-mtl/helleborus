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

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Helléborus crée des décors floraux sur mesure pour mariages, réceptions privées et événements : bouquets, arches, scénographies. Basé à " +
    site.area.base +
    ', intervient dans toute la région et au-delà.',
  openGraph: {
    siteName: site.name,
    locale: 'fr_FR',
    type: 'website',
  },
};

// Données structurées : aide Google à comprendre l'activité (SEO local)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Florist',
  name: site.name,
  description: site.tagline,
  url: site.url,
  email: site.contact.email,
  telephone: site.contact.phone,
  areaServed: site.area.description,
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
