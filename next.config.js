/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  presets: ["@next/babel"],
  dangerouslyAllowSVG: true,
};

module.exports = nextConfig;
