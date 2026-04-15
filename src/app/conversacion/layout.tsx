import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conversación",
  description:
    "Inicia una conversación con Habitante Arquitectura. Cuéntanos sobre tu proyecto, tu visión y cómo quieres habitar tu espacio.",
  keywords: [
    "contacto arquitectura",
    "iniciar proyecto",
    "brief emocional",
    "consulta arquitectónica",
    "Habitante Arquitectura",
  ],
  openGraph: {
    title: "Conversación | Habitante Arquitectura",
    description:
      "Inicia una conversación sobre tu proyecto de arquitectura.",
    url: "https://habitante.co/conversacion",
  },
  alternates: {
    canonical: "/conversacion",
  },
};

export default function ConversacionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
