import Flower from './Flower';

/**
 * Séparateur floral : trait — hellébore — trait.
 * align="left" pour les sections alignées à gauche (grid-2).
 */
export default function FlowerDivider({ align = 'center' }) {
  return (
    <div
      className={`divider${align === 'left' ? ' divider--left' : ''}`}
      role="separator"
    >
      <span className="divider__line" />
      <Flower />
      <span className="divider__line" />
    </div>
  );
}
