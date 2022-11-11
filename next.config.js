/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  presets: ["@next/babel"],
  dangerouslyAllowSVG: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // experimental: {
  //   nextScriptWorkers: true,
  // },
};

module.exports = nextConfig;
