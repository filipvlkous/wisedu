/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  presets: ["@next/babel"],
  dangerouslyAllowSVG: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compress: true,
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
