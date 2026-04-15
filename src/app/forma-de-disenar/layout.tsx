import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forma de diseñar",
  description:
    "No servicios. Una práctica de autor. Conoce los principios, el proceso y la filosofía de neuroarquitectura que guían cada proyecto de Habitante.",
  keywords: [
    "forma de diseñar",
    "proceso arquitectónico",
    "neuroarquitectura",
    "principios de diseño",
    "arquitectura de autor",
    "Habitante Arquitectura",
  ],
  openGraph: {
    title: "Forma de diseñar | Habitante Arquitectura",
    description:
      "Principios, proceso y filosofía de neuroarquitectura de Habitante.",
    url: "https://habitante.co/forma-de-disenar",
  },
  alternates: {
    canonical: "/forma-de-disenar",
  },
};

export default function FormaDeDisenarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
