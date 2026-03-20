import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La firma",
  description:
    "Habitante Arquitectura es un estudio boutique de arquitectura con presencia en Costa Rica, Canadá y Nicaragua. Diseñamos desde la experiencia humana.",
  openGraph: {
    title: "La firma | Habitante Arquitectura",
    description:
      "Estudio boutique de arquitectura con presencia internacional.",
    url: "https://habitante.co/la-firma",
  },
  alternates: {
    canonical: "/la-firma",
  },
};

export default function LaFirmaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
