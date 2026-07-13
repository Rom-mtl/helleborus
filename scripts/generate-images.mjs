/**
 * Régénère les images du site via l'API Gemini (sans watermark visible).
 *
 * Usage :
 *   1. Clé API gratuite : https://aistudio.google.com/apikey
 *   2. export GEMINI_API_KEY="ta-clé"
 *   3. node scripts/generate-images.mjs            → tout
 *      node scripts/generate-images.mjs hero.jpg   → une seule image
 *
 * Les images brutes sortent dans generated/ (PNG). Ensuite : optimisation
 * (conversion JPEG, poids) avant de remplacer public/images/ — voir README.
 *
 * NB : vérifier le nom du modèle image courant dans la doc si erreur 404 :
 * https://ai.google.dev/gemini-api/docs/image-generation
 */

import { mkdir, writeFile } from 'node:fs/promises';

const MODEL = 'gemini-2.5-flash-image'; // à ajuster si la doc a changé
const KEY = process.env.GEMINI_API_KEY;
if (!KEY) {
  console.error('GEMINI_API_KEY manquante. → https://aistudio.google.com/apikey');
  process.exit(1);
}

const STYLE =
  'Editorial wedding photography, shot on medium format film, soft natural ' +
  'light, muted palette of ivory, linen, plum, mauve and blush pink with ' +
  'natural green foliage, elegant French countryside aesthetic, timeless and ' +
  'understated luxury, fine grain, no text, no people\'s faces visible.';

const IMAGES = [
  ['hero.jpg', 'Wide shot of a lush floral wedding arch with white roses, hellebores and trailing greenery, set in a French château garden at golden hour, empty ceremony chairs, dreamy atmosphere. Slightly dark and moody so white text overlaid on top stays readable. Landscape aspect ratio 16:10.'],
  ['apropos-hero.jpg', "Florist's atelier workbench seen from above: scattered stems of hellebores, ranunculus and eucalyptus, pruning shears, kraft paper, linen apron, soft window light. Landscape aspect ratio 16:9."],
  ['mariages-hero.jpg', 'Outdoor wedding ceremony aisle lined with cream and blush flower arrangements, stone chapel in the background, morning light, no people. Landscape aspect ratio 16:9.'],
  ['evenements-hero.jpg', 'Elegant long dinner table dressed with low lush floral runners, candlelight, linen tablecloth, under a pergola at dusk. Landscape aspect ratio 16:9.'],
  ['galerie-hero.jpg', 'Close-up of an opulent floral installation cascading down a stone staircase, whites and greens with hints of plum. Landscape aspect ratio 16:9.'],
  ['contact-hero.jpg', 'Hands of a florist (no face) wrapping a bouquet of white hellebores and garden roses in kraft paper, warm workshop light. Landscape aspect ratio 16:9.'],
  ['prestation-mariage.jpg', 'Vertical shot of a bridal bouquet resting on a wooden chair, soft focus background of a garden venue. Portrait aspect ratio 3:4.'],
  ['prestation-evenement.jpg', 'Vertical shot of a candlelit reception table centerpiece, glassware bokeh, evening ambiance. Portrait aspect ratio 3:4.'],
  ['prestation-galerie.jpg', 'Vertical detail shot of hellebore blooms and mauve foliage in a ceramic vase against a plaster wall. Portrait aspect ratio 3:4.'],
  ['mariage-bouquet.jpg', 'Bridal bouquet of white garden roses, plum hellebores and silk ribbon, held against an ivory dress, no face in frame. Portrait aspect ratio 3:4.'],
  ['mariage-ceremonie.jpg', 'Asymmetrical floral ceremony arch on a terrace overlooking countryside, empty wooden chairs. Portrait aspect ratio 3:4.'],
  ['mariage-reception.jpg', 'Wedding reception table with garland of greenery and cream flowers, name cards, taper candles. Portrait aspect ratio 3:4.'],
  ['evenement-prive.jpg', 'Birthday dinner table in a private garden, generous floral centerpiece, champagne glasses, string lights softly out of focus. Portrait aspect ratio 4:5.'],
  ['evenement-corporate.jpg', 'Minimal and refined floral installation at a brand event, sculptural arrangement on a plinth in a bright modern space. Portrait aspect ratio 4:5.'],
  ['galerie/galerie-01.jpg', 'Wide shot of a floral ceremony arch in a garden. Portrait aspect ratio 4:5.'],
  ['galerie/galerie-02.jpg', 'Close-up of a cream and blush bridal bouquet. Portrait aspect ratio 4:5.'],
  ['galerie/galerie-03.jpg', 'Reception table centerpiece with taper candles. Portrait aspect ratio 4:5.'],
  ['galerie/galerie-04.jpg', 'Suspended floral installation above a dinner table. Portrait aspect ratio 4:5.'],
  ['galerie/galerie-05.jpg', 'Stone staircase decorated with cascading flowers. Portrait aspect ratio 4:5.'],
  ['galerie/galerie-06.jpg', 'Detail of a boutonnière on a linen jacket, no face. Portrait aspect ratio 4:5.'],
  ['galerie/galerie-07.jpg', 'Candlelit head table with lush floral garland at night. Portrait aspect ratio 4:5.'],
  ['galerie/galerie-08.jpg', 'Macro detail of plum hellebore petals with morning dew. Portrait aspect ratio 4:5.'],
];

const only = process.argv[2];
const list = only ? IMAGES.filter(([f]) => f.endsWith(only)) : IMAGES;
if (!list.length) {
  console.error(`Aucune image ne correspond à "${only}"`);
  process.exit(1);
}

const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${KEY}`;

async function generate(file, prompt) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: `${STYLE} ${prompt}` }] }],
      generationConfig: { responseModalities: ['TEXT', 'IMAGE'] },
    }),
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  const data = await res.json();
  const part = data.candidates?.[0]?.content?.parts?.find(
    (p) => p.inlineData?.data
  );
  if (!part) throw new Error('pas d’image dans la réponse');
  const out = `generated/${file.replace('.jpg', '.png')}`;
  await mkdir(out.substring(0, out.lastIndexOf('/')), { recursive: true });
  await writeFile(out, Buffer.from(part.inlineData.data, 'base64'));
  console.log(`✓ ${out}`);
}

for (const [file, prompt] of list) {
  try {
    await generate(file, prompt);
  } catch (e) {
    console.error(`✗ ${file} — ${e.message}`);
  }
  // petite pause pour respecter le rate limit du free tier
  await new Promise((r) => setTimeout(r, 6000));
}
console.log('\nTerminé. Dis à Claude d’optimiser generated/ vers public/images/.');
