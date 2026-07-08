import Link from 'next/link';

/**
 * Bandeau logo avant le footer — présent sur toutes les pages.
 * Fond champagne : le logo est dessiné pour fond clair.
 */
export default function PreFooter() {
  return (
    <section className="prefooter">
      <Link href="/" aria-label="Retour à l'accueil">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.png"
          alt="Maison Helleborus — créations florales et scénographie d'événements"
        />
      </Link>
    </section>
  );
}
