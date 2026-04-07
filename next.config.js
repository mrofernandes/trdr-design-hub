/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
        destination: 'https://trdr.mrocontent.com.br/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
