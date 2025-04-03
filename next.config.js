/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    outputFileTracingRoot: undefined,
    outputFileTracingIncludes: {
      '/**/*': ['./public/**/*'],
    },
  },
};

module.exports = nextConfig; 