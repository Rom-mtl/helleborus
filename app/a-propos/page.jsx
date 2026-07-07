import Link from 'next/link';
import PageHero from '../../components/PageHero';
import { site } from '../../lib/site';

export const metadata = {
  title: 'À propos',
  description:
    "L'histoire d'Helléborus : une fleuriste passionnée, une signature florale poétique inspirée de la rose de Noël.",
};

export default function APropos() {
  return (
    <>
      <PageHero
        eyebrow="La maison"
        title="À propos"
        image="/images/apropos-hero.jpg"
        alt="Atelier floral Helléborus"
      />

      <section className="section">
        <div className="container grid-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/portrait.jpg"
            alt={`${site.contact.person}, fondatrice d'Helléborus`}
            style={{ aspectRatio: '3 / 4', objectFit: 'cover', width: '100%' }}
          />
          <div>
            <span className="eyebrow">Rencontre</span>
            <h2>{site.contact.person}</h2>
            <hr className="hr-leaf" style={{ marginInline: 0 }} />
            <p style={{ marginBottom: '1.25rem' }}>
              [À REMPLACER : 2-3 paragraphes sur son parcours. Exemples de
              questions à lui poser : comment est-elle devenue fleuriste ?
              Qu&apos;est-ce qui l&apos;anime dans l&apos;événementiel ?
              Une anecdote fondatrice ?]
            </p>
            <p>
              [À REMPLACER : sa vision du métier, son style — champêtre,
              minimaliste, opulent ? — et ce qui la distingue.]
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft center">
        <div className="container narrow">
          <span className="eyebrow">Le nom</span>
          <h2>Pourquoi Helléborus&nbsp;?</h2>
          <hr className="hr-leaf" />
          <p>
            L&apos;hellébore — <em>Helleborus</em> en latin — est surnommée
            la rose de Noël. C&apos;est l&apos;une des rares fleurs à
            s&apos;épanouir au cœur de l&apos;hiver, discrète et tenace,
            quand tout le reste sommeille. Elle incarne ce que nous
            cherchons dans chaque création : une beauté sincère, qui ne
            force rien, et qui dure.
          </p>
        </div>
      </section>

      <section className="section center">
        <div className="container narrow">
          <span className="eyebrow">Engagements</span>
          <h2>Notre façon de travailler</h2>
          <hr className="hr-leaf" />
          <div className="meta-list" style={{ textAlign: 'left' }}>
            <p>
              <strong>Fleurs de saison</strong>
              Nous composons avec ce que la saison offre de plus beau —
              c&apos;est plus durable, et toujours plus juste.
            </p>
            <p>
              <strong>Sur mesure</strong>
              Pas de formule toute faite : chaque proposition est dessinée
              pour votre lieu, votre lumière, votre histoire.
            </p>
            <p>
              <strong>Artisanat local</strong>
              [À REMPLACER : ses engagements réels — producteurs locaux,
              circuits courts, zéro mousse florale… Ne rien inventer.]
            </p>
          </div>
          <p style={{ marginTop: '2.5rem' }}>
            <Link href="/contact/" className="btn btn--solid">
              Travaillons ensemble
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
