/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export statique : `next build` génère le site complet dans out/
  output: 'export',
  // URLs en /page/ -> out/page/index.html : indispensable pour GitHub Pages
  trailingSlash: true,
  // next/image n'a pas de serveur d'optimisation en export statique
  images: { unoptimized: true },
};

export default nextConfig;
