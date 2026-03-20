"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { projects } from "@/lib/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilter from "@/components/projects/ProjectFilter";

export default function ProjectsPage() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = filter
    ? projects.filter((p) => p.category === filter)
    : projects;

  return (
    <>
      {/* Header */}
      <section className="bg-white section-pad pt-20 pb-12 border-b border-bone/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="label-upper text-sand-light mb-3">
            {t("proy.label")}
          </div>
          <h1 className="font-serif text-display-lg text-carbon mb-8">
            {t("projects.title")}
          </h1>
          <p className="text-sm text-ink/70 font-light max-w-md mb-10">
            {t("projects.subtitle")}
          </p>
          <ProjectFilter active={filter} onChange={setFilter} />
        </motion.div>
      </section>

      {/* Grid */}
      <section className="bg-white section-pad py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              lang={lang}
              index={i}
            />
          ))}
        </div>
      </section>
    </>
  );
}
