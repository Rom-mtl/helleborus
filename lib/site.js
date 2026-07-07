/**
 * ============================================================
 * CONFIGURATION CENTRALE DU SITE
 * C'est ICI qu'on modifie les infos de contact, liens, textes
 * de base. Éviter de toucher aux pages pour ces infos-là.
 * ============================================================
 */

export const site = {
  name: 'Helléborus',
  tagline: 'Fleuriste événementiel — mariages & réceptions',
  url: 'https://www.maison-helleborus.fr',

  // --- Coordonnées [À REMPLACER] ---
  contact: {
    person: 'Justine Lemoine',
    email: 'contact.helleborus@gmail.com',
    phone: '+33 7 77 75 91 39',
    phoneDisplay: '07 77 75 91 39',
    instagram: 'https://www.instagram.com/maison.helleborus',
    instagramHandle: '@maison.helleborus',
  },

  // --- Zone d'intervention [À REMPLACER] ---
  area: {
    base: 'Aix-en-Provence',
    region: 'Provence-Alpes-Côte d\'Azur',
    description: 'Aix-en-Provence, la Provence et toute la France sur demande',
  },

  // --- Mentions légales [À REMPLACER] ---
  legal: {
    owner: 'Justine Lemoine', // [VÉRIFIER : nom exact de la structure juridique]
    status: '[STATUT : micro-entreprise, EI, SASU…]',
    siret: '[NUMÉRO SIRET]',
    address: '[ADRESSE PROFESSIONNELLE]',
  },
};

export const nav = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos/', label: 'À propos' },
  { href: '/mariages/', label: 'Mariages' },
  { href: '/evenements/', label: 'Événements' },
  { href: '/galerie/', label: 'Galerie' },
  { href: '/contact/', label: 'Contact' },
];
