/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   loader: 'imgix',
  //   path: '/',
  //   },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  
}

module.exports = nextConfig
