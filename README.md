# Helleborus — site vitrine

Site statique construit avec **Next.js 15** (export statique via
`output: 'export'`), déployé sur **GitHub Pages**, domaine
`www.maison-helleborus.fr`.

## Développement local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # génère le site statique dans out/
npm run preview    # sert out/ pour tester le build
```

## Structure

```
lib/site.js        ← ⭐ config centrale : coordonnées, liens, mentions légales
app/               ← une page = un dossier (App Router)
components/        ← Nav, Footer, PageHero
public/images/     ← les photos (voir IMAGES.md pour les remplacer)
public/CNAME       ← domaine custom (ne pas supprimer)
```

**Maintenance courante** : 90 % des changements (téléphone, Instagram,
zone d'intervention…) se font dans `lib/site.js`. Ajouter une photo à la
galerie : déposer le fichier dans `public/images/galerie/` et l'ajouter à
la liste en haut de `app/galerie/page.jsx`.

## Checklist de mise en ligne

### 0. Régénérer les images sans watermark visible

Les images générées via l'app Gemini portent le logo « sparkle » ;
celles générées via l'**API** n'en ont pas (SynthID invisible conservé).

```bash
# clé gratuite : https://aistudio.google.com/apikey
export GEMINI_API_KEY="..."
node scripts/generate-images.mjs          # tout (~3 min, rate limit)
node scripts/generate-images.mjs hero.jpg # une seule
```

Les PNG bruts sortent dans `generated/` (non versionné) → demander à
Claude de les optimiser et de les placer dans `public/images/`.

### 1. Contenu — à faire AVANT publication

- [ ] Remplacer tous les `[À REMPLACER]` de `lib/site.js` (coordonnées,
      ville, **mentions légales : SIRET obligatoire en France**)
- [ ] Compléter les textes `[À REMPLACER]` de `app/a-propos/page.jsx`
      (parcours, engagements — **ne rien inventer**, lui demander)
- [ ] Remplacer les images placeholder (voir `IMAGES.md`)
- [ ] Vraie photo de la fleuriste pour `portrait.jpg` (pas d'IA)

### 2. Domaine (~10 €/an)

- [ ] Acheter `maison-helleborus.fr` (libre au 07/07/2026, à confirmer)
      chez OVH, Gandi ou Ionos
- [ ] Dans la zone DNS du registrar :

  ```
  www      CNAME   rom-mtl.github.io.
  @        A       185.199.108.153
  @        A       185.199.109.153
  @        A       185.199.110.153
  @        A       185.199.111.153
  ```

  (les 4 A pointent l'apex `maison-helleborus.fr` vers GitHub Pages,
  qui redirigera vers `www`)

### 3. Formulaire de contact (FormSubmit — aucun compte requis)

- [ ] Une fois le site en ligne, faire **un envoi de test** depuis la
      page contact
- [ ] Ouvrir la boîte `contact.helleborus@gmail.com` : cliquer le lien
      d'**activation** envoyé par FormSubmit (une seule fois)
- [ ] Refaire un envoi de test pour vérifier la réception
- Les demandes arrivent ensuite par email (mise en page tableau).
  Anti-spam : captcha FormSubmit actif par défaut. Après envoi, le
  visiteur est redirigé vers `/merci/`.

### 4. GitHub — repo : [Rom-mtl/helleborus](https://github.com/Rom-mtl/helleborus)

- [ ] Pousser `main` (remote `origin` déjà configuré)
- [ ] Settings → Pages → Source : **GitHub Actions**
- [ ] Settings → Pages → Custom domain : `www.maison-helleborus.fr`,
      cocher **Enforce HTTPS** (dispo ~1 h après la propagation DNS)
- Le workflow `.github/workflows/deploy.yml` déploie à chaque push sur
  `main`.

### 5. Après mise en ligne

- [ ] Déclarer le site sur
      [Google Search Console](https://search.google.com/search-console)
      et soumettre `sitemap.xml`
- [ ] Créer la fiche
      [Google Business Profile](https://business.google.com) — pour un
      fleuriste événementiel c'est **plus important que le site** pour
      le référencement local
- [ ] Lier le site depuis la bio Instagram

## Choix techniques (pour mémoire)

- **Export statique** : pas de serveur, GitHub Pages sert du HTML pur →
  SEO ok, hébergement gratuit, rien à maintenir côté infra.
- **Pas de `next/image`** : l'optimisation d'images nécessite un serveur ;
  en export statique on utilise `<img>` + images pré-dimensionnées.
- **Polices self-hostées** (`next/font`) : conformité RGPD (pas d'appel
  à Google Fonts au chargement).
- **Pas de cookies, pas d'analytics** : pas de bandeau cookie à gérer.
  Si un jour il faut des stats, prendre Plausible ou GoatCounter (sans
  cookie) plutôt que Google Analytics.
