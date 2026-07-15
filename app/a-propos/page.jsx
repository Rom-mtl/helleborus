import Link from 'next/link';
import PageHero from '../../components/PageHero';
import FlowerDivider from '../../components/FlowerDivider';
import { site } from '../../lib/site';

export const metadata = {
  title: 'À propos',
  description:
    "Justine Lemoine, designer floral à Aix-en-Provence : scénographies florales sur mesure pour mariages et événements dans toute la région PACA.",
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
              Designer floral installée à Aix-en-Provence, je crée des
              scénographies florales sur mesure pour les mariages et les
              événements privés dans toute la région PACA. Fleuriste
              diplômée, je conçois des scénographies florales élégantes,
              poétiques et raffinées, pensées pour sublimer chaque lieu et
              raconter une histoire qui vous ressemble.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              Basée à Aix-en-Provence, je me déplace dans les
              Bouches-du-Rhône, le Var, le Vaucluse, le Luberon, les
              Alpilles, les Alpes-de-Haute-Provence, les Hautes-Alpes et
              les Alpes-Maritimes, selon les projets. Mariages,
              anniversaires, baby showers, gender reveals, soirées
              privées, événements d&apos;entreprise, hôtels ou domaines de
              réception : chaque création est entièrement personnalisée,
              des premiers croquis jusqu&apos;à l&apos;installation le
              jour J.
            </p>
            <p>
              Je réalise notamment les bouquets de mariée, arches
              florales, centres de table, cérémonies religieuses ou
              laïques, décors suspendus, compositions monumentales,
              panneaux de bienvenue, scénographies complètes ainsi que des
              créations végétales permanentes : murs végétaux, plafonds
              végétalisés et décors en fleurs artificielles, séchées ou
              stabilisées, sélectionnées avec le plus grand soin.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <FlowerDivider />
          <div
            className="grid-2"
            style={{ marginTop: '2.5rem', alignItems: 'start' }}
          >
            <div className="prose">
              <p>
                Je suis devenue fleuriste par passion du geste, des
                couleurs et de la création. Après un parcours complet, de
                l&apos;apprentissage aux réalisations les plus techniques,
                j&apos;ai exercé aussi bien en boutique qu&apos;en
                événementiel avant de choisir de me consacrer entièrement
                aux projets qui me font vibrer : ceux qui célèbrent les
                moments importants d&apos;une vie.
              </p>
              <p>
                Chaque réception est une page blanche. J&apos;aime
                écouter, comprendre vos envies, imaginer plusieurs pistes
                créatives et trouver des solutions adaptées à votre lieu,
                à votre budget et à vos rêves. Mon rôle n&apos;est pas
                seulement de fleurir un événement, mais de créer une
                atmosphère, un décor dont on se souvient longtemps après
                que les fleurs se sont fanées.
              </p>
            </div>
            <div className="prose">
              <p>
                Mon univers n&apos;a pas de style imposé. Romantique,
                contemporain, méditerranéen, éditorial, naturel, luxuriant
                ou minimaliste : je m&apos;adapte à chaque projet pour
                créer une décoration qui ne ressemble qu&apos;à vous.
                Lorsque la saison le permet, je privilégie les fleurs
                françaises et les végétaux de qualité, avec la même
                exigence pour les créations permanentes.
              </p>
              <p>
                J&apos;aime les détails qui font toute la différence, les
                compositions qui surprennent sans jamais en faire trop,
                les décors qui révèlent un lieu plutôt que de le masquer.
                Car, à mes yeux, les plus belles créations florales sont
                celles qui semblent avoir toujours été à leur place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section center">
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

      <section className="section section--soft center">
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
