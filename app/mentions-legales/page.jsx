import { site } from '../../lib/site';

export const metadata = {
  title: 'Mentions légales',
  robots: { index: false },
};

export default function MentionsLegales() {
  return (
    <>
      {/* Bandeau simple (pas d'image) : fond sombre pour la lisibilité de la nav */}
      <section
        className="section--plum center"
        style={{ padding: 'clamp(8rem, 15vw, 11rem) var(--gutter) 4rem' }}
      >
        <span className="eyebrow">Informations</span>
        <h1>Mentions légales</h1>
      </section>

      <section className="section">
        <div className="container narrow prose">
          <h2>Éditeur du site</h2>
          <p>
            {site.legal.owner}
            <br />
            {site.legal.status}
            <br />
            SIRET&nbsp;: {site.legal.siret}
            <br />
            {site.legal.address}
            <br />
            Email&nbsp;: {site.contact.email} — Téléphone&nbsp;:{' '}
            {site.contact.phoneDisplay}
          </p>
          <p>
            Directeur de la publication&nbsp;: {site.legal.owner}
          </p>

          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par GitHub, Inc. (GitHub Pages)
            <br />
            88 Colin P. Kelly Jr. Street, San Francisco, CA 94107,
            États-Unis
            <br />
            <a href="https://pages.github.com" style={{ textDecoration: 'underline' }}>
              pages.github.com
            </a>
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus de ce site (textes, photographies,
            logo) est la propriété exclusive de {site.legal.owner}, sauf
            mention contraire. Toute reproduction sans autorisation
            préalable est interdite.
          </p>

          <h2>Crédits visuels</h2>
          <p>
            Dans l&apos;attente des photographies de nos réalisations,
            certaines images d&apos;illustration de ce site (ambiances,
            compositions) sont des visuels générés par intelligence
            artificielle. Ils illustrent l&apos;univers de la maison et ne
            représentent pas des réalisations existantes.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Les informations transmises via le formulaire de contact
            (nom, email, détails du projet) sont utilisées uniquement pour
            répondre à votre demande. Elles ne sont ni cédées ni utilisées
            à des fins commerciales, et sont supprimées une fois la demande
            traitée. Le formulaire est acheminé par le service Formspree
            (Formspree, Inc.), qui agit comme sous-traitant technique.
          </p>
          <p>
            Conformément au RGPD, vous disposez d&apos;un droit
            d&apos;accès, de rectification et de suppression de vos données
            en écrivant à {site.contact.email}.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site ne dépose aucun cookie de suivi et n&apos;utilise aucun
            outil de mesure d&apos;audience tiers.
          </p>
        </div>
      </section>
    </>
  );
}
