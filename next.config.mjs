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
      // Homepages
      { source: '/es', destination: '/', permanent: true },
      { source: '/en', destination: '/', permanent: true },

      // Spanish pages (renamed)
      { source: '/es/contacto', destination: '/conversacion', permanent: true },
      { source: '/es/sobre-nosotros', destination: '/la-firma', permanent: true },
      { source: '/es/servicios', destination: '/forma-de-disenar', permanent: true },
      { source: '/es/portafolio', destination: '/proyectos', permanent: true },
      { source: '/es/portafolio-de-arquitectura', destination: '/proyectos', permanent: true },
      { source: '/es/all-projects-portfolio', destination: '/proyectos', permanent: true },
      { source: '/es/faqs', destination: '/', permanent: true },
      { source: '/es/premios', destination: '/', permanent: true },
      { source: '/es/guanacaste', destination: '/proyectos', permanent: true },
      { source: '/es/arquitectura-urbana-2', destination: '/proyectos', permanent: true },
      { source: '/es/commercial-architecture-cr', destination: '/proyectos', permanent: true },
      { source: '/es/residential-architecture', destination: '/proyectos', permanent: true },

      // Spanish portfolio projects
      { source: '/es/portafolio/descalzo-house', destination: '/proyectos/casa-descalzo', permanent: true },
      { source: '/es/portafolio/:slug', destination: '/proyectos', permanent: true },

      // English pages (renamed)
      { source: '/en/about-us', destination: '/la-firma', permanent: true },
      { source: '/en/contact', destination: '/conversacion', permanent: true },
      { source: '/en/services', destination: '/forma-de-disenar', permanent: true },
      { source: '/en/portfolio', destination: '/proyectos', permanent: true },
      { source: '/en/all-projects-portfolio', destination: '/proyectos', permanent: true },
      { source: '/en/architecture-portfolio-costa-rica', destination: '/proyectos', permanent: true },
      { source: '/en/faqs', destination: '/', permanent: true },
      { source: '/en/awards', destination: '/', permanent: true },
      { source: '/en/guanacaste', destination: '/proyectos', permanent: true },
      { source: '/en/commercial-architecture-cr', destination: '/proyectos', permanent: true },
      { source: '/en/residential-architecture', destination: '/proyectos', permanent: true },
      { source: '/en/urban-architecture', destination: '/proyectos', permanent: true },

      // English portfolio projects
      { source: '/en/portfolio/descalzo-house', destination: '/proyectos/casa-descalzo', permanent: true },
      { source: '/en/portfolio/:slug', destination: '/proyectos', permanent: true },

      // Fallback for any remaining /es/* or /en/* paths not matched above
      { source: '/es/:path*', destination: '/', permanent: true },
      { source: '/en/:path*', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
