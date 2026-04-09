/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['gumroad.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gumroad.com',
      },
    ],
  },
}

export default nextConfig
