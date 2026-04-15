import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Explora nuestra selección curada de proyectos de arquitectura residencial y comercial. Diseño de autor con alcance internacional.",
  keywords: [
    "proyectos de arquitectura",
    "arquitectura residencial",
    "arquitectura comercial",
    "portafolio arquitectura",
    "Habitante Arquitectura",
    "diseño de autor",
  ],
  openGraph: {
    title: "Proyectos | Habitante Arquitectura",
    description:
      "Selección curada de proyectos de arquitectura residencial y comercial.",
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
