import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Explora nuestra selección curada de proyectos de arquitectura residencial, comercial y urbana en Costa Rica, Canadá y Nicaragua.",
  openGraph: {
    title: "Proyectos | Habitante Arquitectura",
    description:
      "Selección curada de proyectos de arquitectura residencial, comercial y urbana.",
    url: "https://habitante.co/proyectos",
  },
  alternates: {
    canonical: "/proyectos",
  },
};

export default function ProyectosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
