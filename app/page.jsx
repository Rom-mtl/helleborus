import Link from 'next/link';
import { site } from '../lib/site';
import FlowerDivider from '../components/FlowerDivider';

export const metadata = {
  title: `${site.name} — Fleuriste mariage & événements, Aix-en-Provence`,
  description:
    "Fleuriste événementiel à Aix-en-Provence : décors floraux sur mesure pour mariages et réceptions en Provence. Bouquets, arches, scénographies.",
};

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero__img" fetchPriority="high"
          src="/images/hero.jpg"
          alt="Scénographie florale de mariage signée Maison Helleborus"
        />
        <div className="hero__inner">
          <span className="eyebrow">Créations florales &amp; scénographie d&apos;événements</span>
          <h1>Maison Helleborus</h1>
          <p>L&apos;art floral des instants précieux</p>
          <Link href="/contact/" className="btn">
            Demander un devis
          </Link>
        </div>
        <a
          href="#la-maison"
          className="hero__scroll"
          aria-label="Découvrir la suite"
        >
          <span />
        </a>
      </section>

      {/* ===== Philosophie ===== */}
      <section className="section center" id="la-maison">
        <div className="container narrow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="Maison Helleborus — créations florales et scénographie d'événements"
            style={{
              width: 'min(230px, 60vw)',
              marginInline: 'auto',
              marginBottom: '2rem',
            }}
          />
          <h2>Scénographie florale pour mariages & événements</h2>
          <FlowerDivider />
          <p className="lead">
            Les fleurs fraîches sont au coeur de notre savoir-faire. Nous créons
            des scénographies florales sur mesure pour les mariages, les célébrations
            privées et les événements professionnels, en imaginant des décors élégants,
            naturels et intemporels qui racontent votre histoire.
          </p>
           <p className="lead">
            Au-delà de l'évenement, nous fleurissons aussi les lieux de vie.
          </p>
          <p className="lead">
            Parce que certains espaces méritent une identité florale durable, Maison Helleborus
            conçoit également des installations permanentes en fleurs et végétaux artificiels
            haut de game.
          </p>
          <p className="lead">
            Murs végétaux, plafonds fleuris, suspensions, compositions florales, décoration de 
            vitrines ou aménagements d'espaces professionnels : nous créons des décors sur mesure
            pour les hôtels, restaurants, boutiques, bureaux, salles de sport et lieux de bien-être.
          </p>
          <p className="signature">Justine Lemoine, fondatrice</p>
          <p style={{ marginTop: '1.5rem' }}>
            <Link href="/a-propos/" className="link">
              Découvrir la maison
            </Link>
          </p>
        </div>
      </section>

      {/* ===== Prestations ===== */}
      <section className="section section--soft">
        <div className="container">
          <div className="center" style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow">Savoir-faire</span>
            <h2>Nos prestations</h2>
          </div>

          <div className="grid-3">
            <article className="card">
              <Link href="/mariages/">
                <div className="card__imgwrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/prestation-mariage.jpg" loading="lazy"
                    alt="Décor floral de cérémonie de mariage"
                  />
                </div>
              </Link>
              <h3>Mariages</h3>
              <p>
                Bouquet de mariée, arche de cérémonie, centres de table :
                une création florale unique, à votre image.
              </p>
              <Link href="/mariages/" className="link">
                Entrez
              </Link>
            </article>

            <article className="card">
              <Link href="/evenements/">
                <div className="card__imgwrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/prestation-evenement.jpg" loading="lazy"
                    alt="Décoration florale de réception"
                  />
                </div>
              </Link>
              <h3>Événements</h3>
              <p>
                Réceptions privées, dîners, événements d&apos;entreprise :
                des décors élégants et contemporains.
              </p>
              <Link href="/evenements/" className="link">
                Entrez
              </Link>
            </article>

            <article className="card">
              <Link href="/galerie/">
                <div className="card__imgwrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/prestation-galerie.jpg" loading="lazy"
                    alt="Composition florale — galerie Helleborus"
                  />
                </div>
              </Link>
              <h3>Galerie</h3>
              <p>
                Un aperçu de nos réalisations : ambiances, matières et
                palettes qui inspirent nos créations.
              </p>
              <Link href="/galerie/" className="link">
                Entrez
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ===== Le nom ===== */}
      <section className="section section--plum center">
        <div className="container">
          <span className="eyebrow">Maison Helleborus</span>
          <p className="quote">
            «&nbsp;L&apos;hellébore, la rose de Noël, est la fleur qui ose
            fleurir en plein hiver. Comme elle, nous croyons que la beauté
            trouve toujours son chemin.&nbsp;»
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section center">
        <div className="container narrow">
          <span className="eyebrow">Votre projet</span>
          <h2>Parlons de votre événement</h2>
          <p style={{ margin: '1.5rem 0 2.5rem' }}>
            Basés à {site.area.base}, nous intervenons dans toute la région
            — et au-delà pour les projets qui nous font rêver.
          </p>
          <Link href="/contact/" className="btn btn--solid">
            Prendre contact
          </Link>
        </div>
      </section>
    </>
  );
}
