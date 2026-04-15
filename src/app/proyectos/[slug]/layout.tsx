import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/lib/data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://habitante.co";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return { title: "Proyecto no encontrado" };
  }

  const title = project.title.es;
  const description = project.description.es;

  return {
    title,
    description,
    keywords: [
      title,
      "arquitectura",
      project.category === "residential" ? "arquitectura residencial" : "arquitectura comercial",
      project.city,
      "Habitante Arquitectura",
      "diseño de autor",
      "neuroarquitectura",
    ],
    openGraph: {
      title: `${title} | Habitante Arquitectura`,
      description,
      url: `${siteUrl}/proyectos/${project.slug}`,
      images: [
        {
          url: project.heroImage.startsWith("/")
            ? `${siteUrl}${project.heroImage}`
            : project.heroImage,
          width: 1200,
          height: 630,
          alt: `${title} — Habitante Arquitectura`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Habitante Arquitectura`,
      description,
      images: [
        project.heroImage.startsWith("/")
          ? `${siteUrl}${project.heroImage}`
          : project.heroImage,
      ],
    },
    alternates: {
      canonical: `/proyectos/${project.slug}`,
    },
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
