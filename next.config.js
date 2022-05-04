/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/yeezy',
        permanent: true,
      },
    ]
  },

  images: {
    domains: ['media.graphassets.com'],
  },
}

module.exports = nextConfig
