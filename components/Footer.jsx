import Link from 'next/link';
import { site } from '../lib/site';
import InstagramIcon from './InstagramIcon';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__brand">Helleborus</p>
          <p className="footer__person">{site.contact.person}</p>
          <p className="footer__tag">{site.tagline}</p>
        </div>

        <div className="footer__block">
          <p className="footer__label">Contact</p>
          <p>
            <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`}>
              {site.contact.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </p>
        </div>

        <div className="footer__block">
          <p className="footer__label">Suivre</p>
          <p>
            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <InstagramIcon size={16} />
              {site.contact.instagramHandle}
            </a>
          </p>
        </div>

        <div className="footer__block">
          <p className="footer__label">Zone d&apos;intervention</p>
          <p>{site.area.description}</p>
        </div>
      </div>

      <div className="container footer__bottom">
        <Link href="/mentions-legales/">Mentions légales</Link>
        <span>
          © {new Date().getFullYear()} Helleborus — Tous droits réservés
        </span>
      </div>
    </footer>
  );
}
