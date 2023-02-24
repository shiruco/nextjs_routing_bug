/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:slug",
        destination: "/api/v1/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
