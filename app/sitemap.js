import { site } from '../lib/site';

export const dynamic = 'force-static';

export default function sitemap() {
  const pages = [
    '',
    'a-propos/',
    'mariages/',
    'evenements/',
    'decors-permanents/',
    'galerie/',
    'contact/',
  ];

  return pages.map((page) => ({
    url: `${site.url}/${page}`,
    changeFrequency: 'monthly',
    priority: page === '' ? 1 : 0.7,
  }));
}
