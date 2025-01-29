/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enables additional checks and warnings in development
    experimental: {
      appDir: true, // Ensure App Router is enabled if you're using `app/` directory
    },
  };
  
  export default nextConfig;
  