import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PageTransition from "@/components/layout/PageTransition";
import CustomCursor from "@/components/layout/CustomCursor";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://habitante.co";

export const metadata: Metadata = {
  title: {
    default: "Habitante Arquitectura — Arquitectura para quien la habita",
    template: "%s | Habitante Arquitectura",
  },
  description:
    "Diseñamos desde la experiencia humana, no desde la forma. Arquitectura residencial y comercial con alcance internacional.",
  keywords: [
    "arquitectura residencial",
    "diseño residencial lujo",
    "arquitectura comercial",
    "neuroarquitectura",
    "Habitante Arquitectura",
    "arquitectura de autor",
  ],
  authors: [{ name: "Habitante Arquitectura" }],
  creator: "Habitante Arquitectura",
  publisher: "Habitante Arquitectura",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: siteUrl,
    siteName: "Habitante Arquitectura",
    title: "Habitante Arquitectura — Arquitectura para quien la habita",
    description:
      "Diseñamos desde la experiencia humana, no desde la forma. Arquitectura residencial y comercial con alcance internacional.",
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Habitante Arquitectura - Arquitectura para quien la habita",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Habitante Arquitectura — Arquitectura para quien la habita",
    description:
      "Diseñamos desde la experiencia humana, no desde la forma. Arquitectura residencial y comercial con alcance internacional.",
    images: [`${siteUrl}/images/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Habitante Arquitectura",
  description:
    "Estudio de arquitectura boutique especializado en diseño residencial y comercial con alcance internacional.",
  url: siteUrl,
  logo: `${siteUrl}/icons/habitante_logo_new.svg`,
  image: `${siteUrl}/images/og-image.jpg`,
  telephone: "+506 8311 7094",
  email: "info@habitante.co",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tamarindo",
    addressRegion: "Guanacaste",
    addressCountry: "CR",
  },
  areaServed: [
    { "@type": "Place", name: "International" },
  ],
  serviceType: [
    "Arquitectura Residencial",
    "Arquitectura Comercial",
    "Neuroarquitectura",
  ],
  sameAs: ["https://www.instagram.com/habitantearquitectura/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="font-sans">
        <LanguageProvider>
          <CustomCursor />
          <SmoothScroll />
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
