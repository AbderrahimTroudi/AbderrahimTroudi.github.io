/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true, // Disable image optimization for GitHub Pages
  },
  basePath: '/troudi-abderrahim',
  assetPrefix: '/troudi-abderrahim',
};

export default nextConfig;
