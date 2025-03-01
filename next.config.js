/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  experimental: {
    serverComponentsExternalPackages: [
      "puppeteer",
      "puppeteer-core",
      "@sparticuz/chromium",
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
