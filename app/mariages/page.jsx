import Link from 'next/link';
import PageHero from '../../components/PageHero';

export const metadata = {
  title: 'Mariages',
  description:
    'Fleuriste mariage : bouquet de mariée, arche de cérémonie, centres de table, scénographie florale complète. Création sur mesure.',
};

export default function Mariages() {
  return (
    <>
      <PageHero
        eyebrow="Prestations"
        title="Mariages"
        image="/images/mariages-hero.jpg"
        alt="Arche florale de cérémonie de mariage"
      />

      <section className="section center">
        <div className="container narrow">
          <span className="eyebrow">Votre jour</span>
          <h2>Une création florale unique, à&nbsp;votre&nbsp;image</h2>
          <hr className="hr-leaf" />
          <p className="lead">
            Du bouquet de mariée à la scénographie complète de votre
            réception, nous imaginons un univers floral cohérent, qui vous
            ressemble et sublime votre lieu.
          </p>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="center" style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow">Ce que nous créons</span>
            <h2>Nos créations mariage</h2>
          </div>
          <div className="grid-3">
            <div className="card">
              <div className="card__imgwrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/mariage-bouquet.jpg"
                  alt="Bouquet de mariée"
                />
              </div>
              <h3>Le bouquet</h3>
              <p>
                Bouquet de mariée, boutonnières, couronnes : les fleurs que
                vous porterez, pensées avec votre tenue.
              </p>
            </div>
            <div className="card">
              <div className="card__imgwrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/mariage-ceremonie.jpg"
                  alt="Arche de cérémonie fleurie"
                />
              </div>
              <h3>La cérémonie</h3>
              <p>
                Arche, allée, autel : le décor du moment le plus attendu,
                celui de toutes les photos.
              </p>
            </div>
            <div className="card">
              <div className="card__imgwrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/mariage-reception.jpg"
                  alt="Table de réception fleurie"
                />
              </div>
              <h3>La réception</h3>
              <p>
                Centres de table, suspensions, plan de table fleuri :
                l&apos;ambiance de votre soirée, jusqu&apos;au dernier
                détail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow">Comment ça se passe</span>
            <h2>Le déroulé</h2>
          </div>
          <div className="steps">
            <div className="step">
              <div>
                <h3>La rencontre</h3>
                <p>
                  Un premier échange — de vive voix ou en visio — pour
                  comprendre votre projet, votre lieu, vos envies et votre
                  budget.
                </p>
              </div>
            </div>
            <div className="step">
              <div>
                <h3>La proposition</h3>
                <p>
                  Une proposition sur mesure : univers, palette de
                  couleurs, variétés de saison, moodboard et devis
                  détaillé.
                </p>
              </div>
            </div>
            <div className="step">
              <div>
                <h3>Le jour J</h3>
                <p>
                  Installation complète sur place, retouches de dernière
                  minute, et démontage après l&apos;événement si besoin.
                  Vous n&apos;avez à penser à rien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--plum center">
        <div className="container narrow">
          <span className="eyebrow">Votre mariage</span>
          <p className="quote">
            Chaque histoire d&apos;amour mérite son propre jardin.
          </p>
          <p style={{ marginTop: '2.5rem' }}>
            <Link href="/contact/" className="btn">
              Demander un devis
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
