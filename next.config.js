/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'], // Add domains you'll use for images
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig