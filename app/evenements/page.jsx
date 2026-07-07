import Link from 'next/link';
import PageHero from '../../components/PageHero';

export const metadata = {
  title: 'Événements',
  description:
    "Décoration florale d'événements privés et professionnels : réceptions, dîners, anniversaires, lancements, événements d'entreprise.",
};

export default function Evenements() {
  return (
    <>
      <PageHero
        eyebrow="Prestations"
        title="Événements"
        image="/images/evenements-hero.jpg"
        alt="Décor floral de réception"
      />

      <section className="section center">
        <div className="container narrow">
          <span className="eyebrow">Réceptions &amp; célébrations</span>
          <h2>Des décors qui marquent les&nbsp;esprits</h2>
          <hr className="hr-leaf" />
          <p className="lead">
            Un anniversaire, un baptême, un dîner d&apos;exception, un
            lancement de produit : les fleurs donnent le ton avant même le
            premier mot.
          </p>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container grid-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/evenement-prive.jpg"
            alt="Table de fête fleurie pour une réception privée"
            style={{ aspectRatio: '4 / 5', objectFit: 'cover', width: '100%' }}
          />
          <div>
            <span className="eyebrow">Particuliers</span>
            <h2>Événements privés</h2>
            <hr className="hr-leaf" style={{ marginInline: 0 }} />
            <p style={{ marginBottom: '1.25rem' }}>
              Anniversaires, fiançailles, baptêmes, fêtes de famille : nous
              créons des décors floraux à la hauteur de vos plus belles
              occasions, adaptés à votre lieu et à votre réception.
            </p>
            <p>
              De la simple composition de table à la scénographie complète,
              chaque projet reçoit la même attention.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">Professionnels</span>
            <h2>Entreprises &amp; marques</h2>
            <hr className="hr-leaf" style={{ marginInline: 0 }} />
            <p style={{ marginBottom: '1.25rem' }}>
              Lancements, soirées d&apos;entreprise, vitrines, shootings,
              abonnements floraux pour vos espaces d&apos;accueil : nous
              accompagnons les marques qui veulent soigner leur image
              jusque dans les fleurs.
            </p>
            <p>
              Chaque collaboration commence par une conversation sur votre
              univers, vos codes et vos contraintes.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/evenement-corporate.jpg"
            alt="Décor floral pour événement d'entreprise"
            style={{ aspectRatio: '4 / 5', objectFit: 'cover', width: '100%' }}
          />
        </div>
      </section>

      <section className="section section--forest center">
        <div className="container narrow">
          <span className="eyebrow">Votre événement</span>
          <p className="quote">
            Dites-nous ce que vous célébrez, nous nous occupons du reste.
          </p>
          <p style={{ marginTop: '2.5rem' }}>
            <Link href="/contact/" className="btn">
              Prendre contact
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
