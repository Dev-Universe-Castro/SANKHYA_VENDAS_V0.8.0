/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Otimizações de performance
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Prefetch automático de links
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    optimizeCss: true,
    // Otimizações para alta concorrência
    cpus: 4,
    workerThreads: true,
    // Otimizações adicionais
    serverMinification: true,
  },
  // Cache agressivo
  cacheMaxMemorySize: 100 * 1024 * 1024, // 100MB
  // Compressão agressiva
  compress: true,
  generateEtags: true,
  // Otimizações de compilação
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Configurações de cache agressivo para múltiplos usuários
  onDemandEntries: {
    maxInactiveAge: 120 * 1000, // 2 minutos
    pagesBufferLength: 10, // Mais páginas em cache
  },
  // Headers de cache otimizados
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: process.env.NEXT_PUBLIC_SITE_URL || '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Cookie, Set-Cookie' },
        ],
      },
    ];
  },
}

export default nextConfig