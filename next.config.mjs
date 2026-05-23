/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.habitante.co',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/es', destination: '/', permanent: true },
      { source: '/en', destination: '/', permanent: true },
      { source: '/es/proyectos', destination: '/proyectos', permanent: true },
      { source: '/es/la-firma', destination: '/la-firma', permanent: true },
      { source: '/es/forma-de-disenar', destination: '/forma-de-disenar', permanent: true },
      { source: '/es/conversacion', destination: '/conversacion', permanent: true },
      { source: '/es/proyectos/:slug', destination: '/proyectos/:slug', permanent: true },
      { source: '/en/projects', destination: '/proyectos', permanent: true },
      { source: '/en/about', destination: '/la-firma', permanent: true },
      { source: '/en/contact', destination: '/conversacion', permanent: true },
      { source: '/en/proyectos/:slug', destination: '/proyectos/:slug', permanent: true },
      { source: '/es/:path*', destination: '/:path*', permanent: true },
      { source: '/en/:path*', destination: '/:path*', permanent: true },
    ];
  },
};

export default nextConfig;
