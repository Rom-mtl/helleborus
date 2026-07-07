/**
 * Hellébore stylisée au trait fin — motif signature de la charte.
 * Hérite de la couleur du texte (currentColor).
 */
const PETAL = 'M0,-6 C-7,-16 -5,-26 0,-29 C5,-26 7,-16 0,-6';

export default function Flower({ size = 26, strokeWidth = 2 }) {
  return (
    <svg
      viewBox="-32 -32 64 64"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      aria-hidden="true"
    >
      {[0, 72, 144, 216, 288].map((a) => (
        <path key={a} d={PETAL} transform={`rotate(${a})`} />
      ))}
      <circle r="2.5" />
      {[30, 90, 150, 210, 270, 330].map((a) => (
        <line
          key={a}
          x1="0"
          y1="-4.5"
          x2="0"
          y2="-6.5"
          transform={`rotate(${a})`}
        />
      ))}
    </svg>
  );
}
