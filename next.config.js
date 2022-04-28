/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['news.itmo.ru'],
  },
  experimental: { images: { layoutRaw: true } }
}

module.exports = nextConfig
