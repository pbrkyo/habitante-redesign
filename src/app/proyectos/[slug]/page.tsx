"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Ruler, Calendar, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getProjectBySlug, projects } from "@/lib/data/projects";
import ProjectGallery from "@/components/projects/ProjectGallery";

export default function ProjectDetailPage() {
  const params = useParams();
  const { lang, t } = useLanguage();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="section-pad py-40 text-center">
        <h1 className="font-serif text-display-md text-carbon">
          {lang === "es" ? "Proyecto no encontrado" : "Project not found"}
        </h1>
        <Link href="/proyectos" className="btn-outline mt-8 inline-block">
          ← {t("proy.viewAll")}
        </Link>
      </div>
    );
  }

  const categoryLabels: Record<string, Record<"es" | "en", string>> = {
    residential: { es: "Residencial", en: "Residential" },
    commercial: { es: "Comercial", en: "Commercial" },
    urban: { es: "Urbano", en: "Urban" },
  };

  const related = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[400px] overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title[lang]}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 to-carbon/10" />

        <div className="absolute bottom-0 left-0 right-0 section-pad pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-nav text-linen/60 hover:text-linen transition-colors mb-6"
            >
              <ArrowLeft size={14} />
              {t("nav.projects")}
            </Link>

            <div className="text-[9px] tracking-[0.2em] uppercase text-[#8AABDC] mb-2">
              {categoryLabels[project.category]?.[lang]} · {project.country}
            </div>
            <h1 className="font-serif text-display-xl text-linen">
              {project.title[lang]}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Meta + Description */}
      <section className="bg-white section-pad py-16 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-ink leading-[1.9] font-light">
            {project.description[lang]}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="flex items-center gap-3 py-3 border-b border-bone/50">
            <MapPin size={14} className="text-az-brand" />
            <div>
              <div className="text-[9px] uppercase tracking-label text-sand-light">
                {lang === "es" ? "Ubicación" : "Location"}
              </div>
              <div className="text-xs text-carbon">
                {project.city}, {project.country}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 py-3 border-b border-bone/50">
            <Ruler size={14} className="text-az-brand" />
            <div>
              <div className="text-[9px] uppercase tracking-label text-sand-light">
                {lang === "es" ? "Área" : "Area"}
              </div>
              <div className="text-xs text-carbon">{project.area}</div>
            </div>
          </div>
          <div className="flex items-center gap-3 py-3 border-b border-bone/50">
            <Calendar size={14} className="text-az-brand" />
            <div>
              <div className="text-[9px] uppercase tracking-label text-sand-light">
                {lang === "es" ? "Año" : "Year"}
              </div>
              <div className="text-xs text-carbon">{project.year}</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Gallery */}
      {project.images.length > 1 && (
        <section className="bg-linen section-pad py-16 border-t border-bone/50">
          <div className="label-upper text-sand-light mb-6">
            {lang === "es" ? "Galería" : "Gallery"}
          </div>
          <ProjectGallery
            images={project.images}
            title={project.title[lang]}
          />
        </section>
      )}

      {/* Related projects */}
      {related.length > 0 && (
        <section className="bg-white section-pad py-16 border-t border-bone/50">
          <div className="label-upper text-sand-light mb-8">
            {lang === "es" ? "Más proyectos" : "More projects"}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((rp) => (
              <Link
                key={rp.slug}
                href={`/proyectos/${rp.slug}`}
                className="group relative overflow-hidden"
              >
                <Image
                  src={rp.heroImage}
                  alt={rp.title[lang]}
                  width={600}
                  height={350}
                  className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 to-carbon/0" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[8px] tracking-[0.18em] uppercase text-[#8AABDC] mb-1">
                    {categoryLabels[rp.category]?.[lang]} · {rp.country}
                  </div>
                  <div className="font-serif text-lg text-linen">
                    {rp.title[lang]}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
