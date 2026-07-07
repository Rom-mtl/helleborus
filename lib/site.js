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
    person: '[PRÉNOM NOM DE LA FLEURISTE]',
    email: 'contact@maison-helleborus.fr', // [À REMPLACER si autre adresse]
    phone: '+33 6 00 00 00 00', // [À REMPLACER]
    phoneDisplay: '06 00 00 00 00', // [À REMPLACER]
    instagram: 'https://www.instagram.com/[COMPTE-INSTAGRAM]',
    instagramHandle: '@[COMPTE-INSTAGRAM]',
  },

  // --- Zone d'intervention [À REMPLACER] ---
  area: {
    base: '[VILLE]', // ex. « Lyon »
    region: '[RÉGION]', // ex. « Auvergne-Rhône-Alpes »
    description: '[VILLE], [RÉGION] et toute la France sur demande',
  },

  // --- Mentions légales [À REMPLACER] ---
  legal: {
    owner: '[PRÉNOM NOM ou RAISON SOCIALE]',
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
