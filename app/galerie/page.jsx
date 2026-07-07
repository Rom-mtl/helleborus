import PageHero from '../../components/PageHero';
import { site } from '../../lib/site';

export const metadata = {
  title: 'Galerie',
  description:
    "Nos réalisations florales : mariages, réceptions, scénographies. Un aperçu de l'univers Helleborus.",
};

// Pour ajouter/retirer une photo : modifier cette liste + déposer le
// fichier dans public/images/galerie/
const photos = [
  { src: '/images/galerie/galerie-01.jpg', alt: 'Arche florale de cérémonie en extérieur' },
  { src: '/images/galerie/galerie-02.jpg', alt: 'Bouquet de mariée aux tons crème et poudré' },
  { src: '/images/galerie/galerie-03.jpg', alt: 'Centre de table — dîner de réception' },
  { src: '/images/galerie/galerie-04.jpg', alt: 'Composition florale suspendue' },
  { src: '/images/galerie/galerie-05.jpg', alt: 'Décor floral d’escalier de château' },
  { src: '/images/galerie/galerie-06.jpg', alt: 'Boutonnière et accessoires fleuris' },
  { src: '/images/galerie/galerie-07.jpg', alt: 'Table d’honneur fleurie aux chandelles' },
  { src: '/images/galerie/galerie-08.jpg', alt: 'Détail de composition — hellébores et feuillages' },
];

export default function Galerie() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Galerie"
        image="/images/galerie-hero.jpg"
        alt="Réalisations florales Helleborus"
      />

      <section className="section">
        <div className="container">
          <div className="gallery">
            {photos.map((photo) => (
              <figure key={photo.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </figure>
            ))}
          </div>
          <p className="center" style={{ marginTop: '3rem' }}>
            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Plus de réalisations sur Instagram {site.contact.instagramHandle}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
