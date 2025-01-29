/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Ensures static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
