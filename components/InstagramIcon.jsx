/**
 * Icône Instagram outline — trait fin, hérite de la couleur du texte
 * (currentColor) pour suivre les états de la nav et du footer.
 */
export default function InstagramIcon({ size = 18 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}
