/**
 * Hero réduit pour les pages intérieures.
 * `image` : chemin sous /public (ex. /images/mariages-hero.jpg)
 */
export default function PageHero({ eyebrow, title, image, alt = '' }) {
  return (
    <section className="hero hero--page">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hero__img" src={image} alt={alt} />
      <div className="hero__inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
      </div>
    </section>
  );
}
