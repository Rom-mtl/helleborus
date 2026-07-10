import PageHero from '../../components/PageHero';
import FlowerDivider from '../../components/FlowerDivider';
import { site } from '../../lib/site';

export const metadata = {
  title: 'Contact & devis',
  description:
    'Contactez la Maison Helleborus pour votre mariage ou votre événement : demande de devis, informations, disponibilités.',
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Votre projet"
        title="Contact"
        image="/images/contact-hero.jpg"
        alt="Atelier de la Maison Helleborus — préparation d'une composition"
      />

      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'start' }}>
          {/* --- Coordonnées --- */}
          <div>
            <span className="eyebrow">Parlons-en</span>
            <h2>Racontez-nous votre&nbsp;événement</h2>
            <FlowerDivider align="left" />
            <p style={{ marginBottom: '2.5rem' }}>
              Chaque projet commence par une conversation. Écrivez-nous
              quelques lignes sur ce que vous préparez — nous revenons vers
              vous sous 48&nbsp;h.
            </p>

            <div className="meta-list">
              <p>
                <strong>Téléphone</strong>
                <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`}>
                  {site.contact.phoneDisplay}
                </a>
              </p>
              <p>
                <strong>Email</strong>
                <a href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </a>
              </p>
              <p>
                <strong>Instagram</strong>
                <a
                  href={site.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  {site.contact.instagramHandle}
                </a>
              </p>
              <p>
                <strong>Zone d&apos;intervention</strong>
                {site.area.description}
              </p>
            </div>
          </div>

          {/* --- Formulaire ---
              FormSubmit : les envois partent vers l'adresse ci-dessous.
              Premier envoi = email d'activation à cliquer (voir README). --- */}
          <form
            className="form"
            action={`https://formsubmit.co/${site.contact.email}`}
            method="POST"
          >
            {/* Options FormSubmit */}
            <input
              type="hidden"
              name="_subject"
              value="Nouvelle demande via maison-helleborus.fr"
            />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_next"
              value={`${site.url}/merci/`}
            />
            <div className="form__row">
              <div>
                <label htmlFor="name">Nom *</label>
                <input id="name" name="name" type="text" required />
              </div>
              <div>
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" required />
              </div>
            </div>

            <div className="form__row">
              <div>
                <label htmlFor="type">Type d&apos;événement</label>
                <select id="type" name="type_evenement" defaultValue="">
                  <option value="" disabled>
                    Choisir…
                  </option>
                  <option>Mariage</option>
                  <option>Événement privé</option>
                  <option>Événement professionnel</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="date">Date envisagée</label>
                <input id="date" name="date" type="date" />
              </div>
            </div>

            <div>
              <label htmlFor="lieu">Lieu de l&apos;événement</label>
              <input
                id="lieu"
                name="lieu"
                type="text"
                placeholder="Ville, domaine, salle…"
              />
            </div>

            <div>
              <label htmlFor="message">Votre projet *</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Ambiance recherchée, nombre d'invités, budget approximatif…"
              />
            </div>

            <p style={{ fontSize: '0.8rem', color: 'var(--ink-soft)' }}>
              Les informations envoyées via ce formulaire servent uniquement
              à répondre à votre demande. Voir nos{' '}
              <a href="/mentions-legales/" style={{ textDecoration: 'underline' }}>
                mentions légales
              </a>
              .
            </p>

            <div>
              <button type="submit" className="btn btn--solid">
                Envoyer ma demande
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
