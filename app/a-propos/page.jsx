import Link from 'next/link';
import PageHero from '../../components/PageHero';
import FlowerDivider from '../../components/FlowerDivider';
import { site } from '../../lib/site';

export const metadata = {
  title: 'À propos',
  description:
    "Justine Lemoine, fondatrice de la Maison Helleborus : une fleuriste passionnée, une signature florale poétique inspirée de la rose de Noël.",
};

export default function APropos() {
  return (
    <>
      <PageHero
        eyebrow="La maison"
        title="À propos"
        image="/images/apropos-hero.jpg"
        alt="Atelier floral Helleborus"
      />

      <section className="section">
        <div className="container grid-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/portrait.jpg" loading="lazy"
            alt={`${site.contact.person}, fondatrice de la Maison Helleborus`}
            style={{ aspectRatio: '3 / 4', objectFit: 'cover', width: '100%' }}
          />
          <div>
            <span className="eyebrow">Rencontre</span>
            <h2>{site.contact.person}</h2>
            <FlowerDivider align="left" />
            <p style={{ marginBottom: '1.25rem' }}>
              Fleuriste depuis plus de quinze ans, j&apos;ai affûté mon
              regard au sein de belles maisons, à Lyon puis à
              Aix-en-Provence. De ces années d&apos;atelier, je garde une
              exigence — celle du geste juste — et l&apos;envie, mûrie au
              fil des saisons, de créer sous mon propre nom.
            </p>
            <p>
              L&apos;événementiel s&apos;est imposé comme une évidence :
              un mariage, une réception, c&apos;est un décor entier à
              imaginer, une histoire à raconter en fleurs. Ce qui
              m&apos;anime par-dessus tout, c&apos;est la création —
              proposer, oser, surprendre — et transformer vos envies en
              quelque chose que vous n&apos;auriez pas su rêver
              vous-même.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft center">
        <div className="container narrow">
          <span className="eyebrow">Le nom</span>
          <h2>Pourquoi Helleborus&nbsp;?</h2>
          <FlowerDivider />
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
          <FlowerDivider />
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
              Des producteurs locaux, des circuits courts, des fleurs
              françaises autant que la saison le permet : choisir à
              quelques kilomètres plutôt qu&apos;à l&apos;autre bout du
              monde, c&apos;est soutenir ceux qui cultivent bien — et
              offrir des fleurs plus fraîches, qui durent.
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
