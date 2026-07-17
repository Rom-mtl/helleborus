import Link from 'next/link';
import FlowerDivider from '../../components/FlowerDivider';

export const metadata = {
  title: 'Merci',
  robots: { index: false },
};

export default function Merci() {
  return (
    <section
      className="section--plum center"
      style={{
        minHeight: '80svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(8rem, 15vw, 11rem) var(--gutter) 4rem',
      }}
    >
      <span className="eyebrow">Message envoyé</span>
      <h1>Merci&nbsp;!</h1>
      <FlowerDivider />
      <p style={{ maxWidth: '480px', marginInline: 'auto' }}>
        Votre demande est bien arrivée. Nous revenons vers vous sous
        48&nbsp;h pour parler de votre projet.
      </p>
      <p style={{ marginTop: '2.5rem' }}>
        <Link href="/" className="btn">
          Retour à l&apos;accueil
        </Link>
      </p>
    </section>
  );
}
