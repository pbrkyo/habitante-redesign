"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Ruler, Calendar, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getProjectBySlug, projects } from "@/lib/data/projects";
import ProjectGallery from "@/components/projects/ProjectGallery";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const staggerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

const relatedCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

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
      {/* Hero with Ken Burns effect */}
      <section className="relative h-[70vh] min-h-[400px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Image
            src={project.heroImage}
            alt={project.title[lang]}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 to-carbon/10" />

        <div className="absolute bottom-0 left-0 right-0 section-pad pb-12">
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUpVariants}>
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-nav text-linen/80 hover:text-linen transition-colors mb-6"
              >
                <ArrowLeft size={14} />
                {t("nav.projects")}
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              className="text-[11px] tracking-[0.2em] uppercase text-[#8AABDC] mb-2"
            >
              {categoryLabels[project.category]?.[lang]} · {project.country}
            </motion.div>

            <motion.h1
              variants={fadeUpVariants}
              className="font-serif text-display-xl text-linen"
            >
              {project.title[lang]}
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Meta + Description */}
      <section className="bg-white section-pad py-16 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16 max-md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base text-ink/80 leading-[1.9] font-light">
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
              <div className="text-[11px] uppercase tracking-label text-sand">
                {lang === "es" ? "Ubicación" : "Location"}
              </div>
              <div className="text-sm text-carbon">
                {project.city}, {project.country}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 py-3 border-b border-bone/50">
            <Ruler size={14} className="text-az-brand" />
            <div>
              <div className="text-[11px] uppercase tracking-label text-sand">
                {lang === "es" ? "Área" : "Area"}
              </div>
              <div className="text-sm text-carbon">{project.area}</div>
            </div>
          </div>
          <div className="flex items-center gap-3 py-3 border-b border-bone/50">
            <Calendar size={14} className="text-az-brand" />
            <div>
              <div className="text-[11px] uppercase tracking-label text-sand">
                {lang === "es" ? "Año" : "Year"}
              </div>
              <div className="text-sm text-carbon">{project.year}</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Gallery */}
      {project.images.length > 1 && (
        <motion.section
          className="bg-linen section-pad py-16 border-t border-bone/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="label-upper text-sand-light mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {lang === "es" ? "Galería" : "Gallery"}
          </motion.div>
          <ProjectGallery
            images={project.images}
            title={project.title[lang]}
          />
        </motion.section>
      )}

      {/* Related projects */}
      {related.length > 0 && (
        <section className="bg-white section-pad py-16 border-t border-bone/50">
          <motion.div
            className="label-upper text-sand-light mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {lang === "es" ? "Más proyectos" : "More projects"}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {related.map((rp) => (
              <motion.div key={rp.slug} variants={relatedCardVariants}>
                <Link
                  href={`/proyectos/${rp.slug}`}
                  className="group relative overflow-hidden block"
                >
                  <Image
                    src={rp.heroImage}
                    alt={rp.title[lang]}
                    width={600}
                    height={350}
                    className="w-full h-[280px] max-md:h-[220px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 to-carbon/0 group-hover:from-carbon/82 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[11px] tracking-[0.18em] uppercase text-[#8AABDC] mb-1">
                      {categoryLabels[rp.category]?.[lang]} · {rp.country}
                    </div>
                    <div className="font-serif text-lg text-linen">
                      {rp.title[lang]}
                    </div>
                  </div>
                  <div className="absolute right-5 bottom-5 text-base text-[#8AABDC]/70 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    →
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}
    </>
  );
}
