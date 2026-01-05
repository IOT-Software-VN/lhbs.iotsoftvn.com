import type { NextConfig } from 'next'

export const baseNextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [75, 90]
  },
  transpilePackages: ['@lhbs/ui', '@lhbs/utils', '@lhbs/styles'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false
      }
    }
    return config
  },
  turbopack: {}
}
