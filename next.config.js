/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      "puppeteer",
      "puppeteer-core",
      "@sparticuz/chromium-min",
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
