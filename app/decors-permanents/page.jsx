import Link from 'next/link';
import PageHero from '../../components/PageHero';
import FlowerDivider from '../../components/FlowerDivider';

export const metadata = {
  title: 'Décors floraux permanents — murs végétaux & installations, Aix-en-Provence',
  description:
    "Installations florales permanentes à Aix-en-Provence : murs végétaux, plafonds fleuris, vitrines. Fleurs et végétaux artificiels haut de gamme pour hôtels, restaurants, boutiques et bureaux.",
};

export default function DecorsPermanents() {
  return (
    <>
      <PageHero
        eyebrow="Prestations"
        title="Décors floraux permanents"
        image="/images/permanents-hero.jpg"
        alt="Mur végétal permanent dans un hall d'hôtel élégant"
      />

      <section className="section center">
        <div className="container narrow">
          <span className="eyebrow">Lieux de vie</span>
          <h2>Une identité florale qui&nbsp;dure</h2>
          <FlowerDivider />
          <p className="lead">
            Pour les espaces qui reçoivent au quotidien, nous concevons des
            installations permanentes en fleurs et végétaux artificiels
            haut de gamme — l&apos;élégance du végétal, sans
            l&apos;entretien.
          </p>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="center" style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow">Ce que nous installons</span>
            <h2>L&apos;univers permanent</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <div className="card__imgwrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/permanent-mur.jpg" loading="lazy"
                  alt="Mur végétal fleuri sur mesure"
                />
              </div>
              <h3>Murs végétaux</h3>
              <p>
                Des murs végétaux et fleuris sur mesure qui habillent un
                accueil, une salle ou une terrasse — denses, réalistes,
                pensés pour vos volumes et votre lumière.
              </p>
            </div>
            <div className="card">
              <div className="card__imgwrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/permanent-plafond.jpg" loading="lazy"
                  alt="Plafond fleuri et suspensions florales"
                />
              </div>
              <h3>Plafonds &amp; suspensions</h3>
              <p>
                Plafonds fleuris, suspensions et compositions aériennes :
                le décor prend de la hauteur et transforme
                l&apos;atmosphère d&apos;un lieu.
              </p>
            </div>
            <div className="card">
              <div className="card__imgwrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/permanent-vitrine.jpg" loading="lazy"
                  alt="Vitrine de boutique décorée de fleurs"
                />
              </div>
              <h3>Vitrines &amp; compositions</h3>
              <p>
                Décoration de vitrines, compositions et aménagements
                d&apos;espaces : une image soignée au quotidien, saison
                après saison.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">Professionnels</span>
            <h2>Pour les lieux qui reçoivent</h2>
            <FlowerDivider align="left" />
            <p style={{ marginBottom: '1.25rem' }}>
              Hôtels, restaurants, boutiques, bureaux, salles de sport et
              lieux de bien-être : nous créons des décors sur mesure qui
              portent votre image jour après jour, sans arrosage, sans
              fanaison, sans contrainte.
            </p>
            <p>
              Nos fleurs et végétaux artificiels sont choisis pour leur
              réalisme et leur tenue dans le temps — de près comme de
              loin, l&apos;illusion est parfaite.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/permanent-espace.jpg" loading="lazy"
            alt="Composition florale permanente dans un espace de bien-être"
            style={{ aspectRatio: '4 / 5', objectFit: 'cover', width: '100%' }}
          />
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="center" style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow">Comment ça se passe</span>
            <h2>Le déroulé</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div>
                <h3>La visite</h3>
                <p>
                  Nous découvrons votre espace : les volumes, la lumière,
                  la circulation, votre image et vos contraintes.
                </p>
              </div>
            </div>
            <div className="step">
              <div>
                <h3>La proposition</h3>
                <p>
                  Une conception sur mesure : croquis, palette, choix des
                  matériaux et des variétés, devis détaillé.
                </p>
              </div>
            </div>
            <div className="step">
              <div>
                <h3>L&apos;installation</h3>
                <p>
                  Pose soignée en dehors de vos heures d&apos;affluence,
                  finitions sur place, et conseils pour que le décor reste
                  impeccable dans la durée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--plum center">
        <div className="container narrow">
          <span className="eyebrow">Votre espace</span>
          <p className="quote">
            Un décor qui ne fane pas, une image qui&nbsp;dure.
          </p>
          <p style={{ marginTop: '2.5rem' }}>
            <Link href="/contact/" className="btn">
              Demander une étude
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
