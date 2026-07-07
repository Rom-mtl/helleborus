# Images du site — guide de génération (Gemini)

Chaque image du site a un placeholder dans `public/images/`. Pour remplacer :
générer l'image, la recadrer aux dimensions indiquées, l'enregistrer en JPEG
(qualité ~80, viser < 400 Ko) **sous le même nom de fichier**. Rien d'autre à
toucher.

## ⚠️ Deux avertissements avant de générer

1. **Le portrait (`portrait.jpg`) ne doit PAS être généré par IA.** C'est la
   photo de la fleuriste elle-même — un visage IA à la place de la vraie
   personne détruirait la confiance des clientes. Utiliser une vraie photo,
   même prise au smartphone en lumière naturelle.
2. **Les images IA sont un échafaudage, pas une fin.** Pour lancer le site,
   très bien. Mais le portfolio d'un fleuriste événementiel est son argument
   de vente : remplacer progressivement par les photos de ses vraies
   réalisations (les photographes de mariage partagent volontiers leurs
   clichés contre crédit).

## Style de base (à coller au début de CHAQUE prompt)

> Editorial wedding photography, shot on medium format film, soft natural
> light, muted palette of cream, ivory, sage green and blush pink, elegant
> French countryside aesthetic, timeless and understated luxury, fine grain,
> no text, no people's faces visible.

## Les images une par une

| Fichier | Où sur le site | Dimensions | Prompt spécifique (après le style de base) |
|---|---|---|---|
| `hero.jpg` | Accueil, plein écran | 1920×1200 | Wide shot of a lush floral wedding arch with white roses, hellebores and trailing greenery, set in a French château garden at golden hour, empty ceremony chairs, dreamy atmosphere. Slightly dark and moody so white text overlaid on top stays readable. |
| `apropos-hero.jpg` | À propos, bandeau | 1920×1080 | Florist's atelier workbench seen from above: scattered stems of hellebores, ranunculus and eucalyptus, pruning shears, kraft paper, linen apron, soft window light. |
| `mariages-hero.jpg` | Mariages, bandeau | 1920×1080 | Outdoor wedding ceremony aisle lined with cream and blush flower arrangements, stone chapel in the background, morning light, no people. |
| `evenements-hero.jpg` | Événements, bandeau | 1920×1080 | Elegant long dinner table dressed with low lush floral runners, candlelight, linen tablecloth, under a pergola at dusk. |
| `galerie-hero.jpg` | Galerie, bandeau | 1920×1080 | Close-up of an opulent floral installation cascading down a stone staircase, whites and greens with hints of blush. |
| `contact-hero.jpg` | Contact, bandeau | 1920×1080 | Hands of a florist (no face) wrapping a bouquet of white hellebores and garden roses in kraft paper, warm workshop light. |
| `portrait.jpg` | À propos | 900×1200 | **NE PAS GÉNÉRER — vraie photo de la fleuriste** (cadrage vertical 3:4, lumière naturelle, fond neutre ou atelier). |
| `prestation-mariage.jpg` | Accueil, carte 1 | 900×1200 | Vertical shot of a bridal bouquet resting on a wooden chair, soft focus background of a garden venue. |
| `prestation-evenement.jpg` | Accueil, carte 2 | 900×1200 | Vertical shot of a candlelit reception table centerpiece, glassware bokeh, evening ambiance. |
| `prestation-galerie.jpg` | Accueil, carte 3 | 900×1200 | Vertical detail shot of hellebore blooms and sage foliage in a ceramic vase against a plaster wall. |
| `mariage-bouquet.jpg` | Mariages, carte 1 | 900×1200 | Bridal bouquet of white garden roses, hellebores and silk ribbon, held against an ivory dress (no face in frame). |
| `mariage-ceremonie.jpg` | Mariages, carte 2 | 900×1200 | Asymmetrical floral ceremony arch on a terrace overlooking countryside, empty wooden chairs. |
| `mariage-reception.jpg` | Mariages, carte 3 | 900×1200 | Wedding reception table with garland of greenery and cream flowers, name cards, taper candles. |
| `evenement-prive.jpg` | Événements | 960×1200 | Birthday dinner table in a private garden, generous floral centerpiece, champagne glasses, string lights softly out of focus. |
| `evenement-corporate.jpg` | Événements | 960×1200 | Minimal and refined floral installation at a brand event: sculptural arrangement on a plinth in a bright modern space. |
| `galerie/galerie-01.jpg` → `galerie-08.jpg` | Galerie | 960×1200 | Décliner 8 scènes différentes en gardant le style de base : arche, bouquet, centre de table, suspension, escalier fleuri, boutonnière, table d'honneur aux chandelles, détail d'hellébores. Varier les cadrages (large / serré) pour que la grille respire. |

## Astuce cohérence

Générer les images **dans la même session Gemini** en commençant par le style
de base, puis demander les variations : la série gardera une unité de palette
et de lumière. Si une image sort trop saturée, ajouter « faded film look,
desaturated » au prompt.
