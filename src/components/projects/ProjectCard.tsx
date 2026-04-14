"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project, Language } from "@/types";

interface ProjectCardProps {
  project: Project;
  lang: Language;
  index?: number;
}

export default function ProjectCard({ project, lang }: ProjectCardProps) {
  const categoryLabels: Record<string, Record<Language, string>> = {
    residential: { es: "Residencial", en: "Residential" },
    commercial: { es: "Comercial", en: "Commercial" },
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <Link
        href={`/proyectos/${project.slug}`}
        className="group block relative overflow-hidden"
      >
        <div className="aspect-[4/3] relative">
          <Image
            src={project.heroImage}
            alt={project.title[lang]}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 to-carbon/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <div className="text-[11px] tracking-[0.18em] uppercase text-[#8AABDC] mb-1">
              {categoryLabels[project.category]?.[lang]}
            </div>
            <div className="font-serif text-base text-linen">
              {project.title[lang]}
            </div>
          </div>
        </div>

        <div className="pt-4 pb-6">
          <div className="text-[11px] tracking-[0.14em] uppercase text-sand mb-1.5">
            {categoryLabels[project.category]?.[lang]} · {project.city}
          </div>
          <h3 className="font-serif text-lg text-carbon group-hover:text-az-brand transition-colors duration-200">
            {project.title[lang]}
          </h3>
          <p className="text-sm text-ink/65 mt-2 leading-[1.75] line-clamp-2">
            {project.description[lang]}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
