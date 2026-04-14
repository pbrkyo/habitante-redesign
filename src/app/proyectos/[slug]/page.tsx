"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getProjectBySlug, projects } from "@/lib/data/projects";
import ProjectGallery from "@/components/projects/ProjectGallery";
import type { ProjectSection, Language } from "@/types";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const staggerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

function nl2br(text: string) {
  return text.split("\n").map((line, i, arr) =>
    i < arr.length - 1 ? (
      <span key={i}>
        {line}
        <br />
      </span>
    ) : (
      <span key={i}>{line}</span>
    )
  );
}

function SectionRenderer({ section, lang }: { section: ProjectSection; lang: Language }) {
  switch (section.type) {
    case "concept":
      return (
        <section className="bg-white section-pad py-16 border-b border-bone/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[780px]"
          >
            {section.label && (
              <div className="label-upper text-sand-light mb-5">{section.label[lang]}</div>
            )}
            {section.lead && (
              <p className="font-serif text-display-md text-carbon leading-[1.4] mb-8">
                {nl2br(section.lead[lang])}
              </p>
            )}
            {section.body && (
              <div className="text-[15px] text-ink/80 leading-[1.9] font-light space-y-5">
                {section.body[lang].split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
          </motion.div>
        </section>
      );

    case "quote":
      return (
        <section className={`section-pad py-20 ${section.bgDark ? "bg-az-deep text-linen" : "bg-linen text-carbon"}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-[780px]"
          >
            {section.title && (
              <blockquote className="font-serif text-display-md leading-[1.35] mb-8">
                {nl2br(section.title[lang])}
              </blockquote>
            )}
            {section.body && (
              <div className={`text-[15px] leading-[1.9] font-light space-y-5 ${section.bgDark ? "text-bone/75" : "text-ink/75"}`}>
                {section.body[lang].split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
          </motion.div>
        </section>
      );

    case "gallery":
      return (
        <motion.section
          className="bg-linen section-pad py-16 border-t border-bone/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-baseline justify-between mb-6">
            {section.label && (
              <div className="label-upper text-sand-light">{section.label[lang]}</div>
            )}
            {section.credit && (
              <div className="text-xs text-sand/60">{section.credit}</div>
            )}
          </div>
          {section.images && (
            <ProjectGallery images={section.images} title={section.label?.[lang] ?? ""} />
          )}
        </motion.section>
      );

    case "materiality":
      return (
        <section className="bg-linen section-pad py-16 border-t border-bone/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[780px]"
          >
            {section.label && (
              <div className="label-upper text-sand-light mb-5">{section.label[lang]}</div>
            )}
            {section.title && (
              <h2 className="font-serif text-display-sm text-carbon leading-[1.3] mb-5">
                {nl2br(section.title[lang])}
              </h2>
            )}
            {section.body && (
              <div className="text-[15px] text-ink/80 leading-[1.9] font-light space-y-5">
                {section.body[lang].split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
          </motion.div>
        </section>
      );

    case "feature":
      return (
        <section className={`section-pad py-16 border-t border-bone/50 ${section.bgDark ? "bg-az-deep" : "bg-white"}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[780px]"
          >
            {section.label && (
              <div className={`label-upper mb-5 ${section.bgDark ? "text-bone/40" : "text-sand-light"}`}>
                {section.label[lang]}
              </div>
            )}
            {section.title && (
              <h2 className={`font-serif text-display-sm leading-[1.3] mb-6 ${section.bgDark ? "text-bone" : "text-carbon"}`}>
                {nl2br(section.title[lang])}
              </h2>
            )}
            {section.body && (
              <div className={`text-[15px] leading-[1.9] font-light space-y-5 ${section.bgDark ? "text-bone/60" : "text-ink/80"}`}>
                {section.body[lang].split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
            {section.items && (
              <div className="flex flex-col gap-5 mt-8">
                {section.items.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className={`w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0 ${section.bgDark ? "bg-az-light/40" : "bg-az-brand"}`} />
                    <div>
                      <strong className={`text-sm font-medium block mb-0.5 ${section.bgDark ? "text-bone" : "text-carbon"}`}>
                        {item.title[lang]}
                      </strong>
                      <span className={`text-[13px] leading-[1.7] ${section.bgDark ? "text-bone/50" : "text-ink/60"}`}>
                        {item.text[lang]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </section>
      );

    case "strategy":
      return (
        <section className="bg-linen section-pad py-16 border-t border-bone/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[780px]"
          >
            {section.label && (
              <div className="label-upper text-az-brand/50 mb-5">{section.label[lang]}</div>
            )}
            {section.title && (
              <h2 className="font-serif text-display-sm text-carbon leading-[1.3] mb-8">
                {nl2br(section.title[lang])}
              </h2>
            )}
            {section.items && (
              <div className="flex flex-col gap-5">
                {section.items.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-az-brand mt-[7px] flex-shrink-0" />
                    <div>
                      <strong className="text-sm font-medium text-carbon block mb-0.5">
                        {item.title[lang]}
                      </strong>
                      <span className="text-[13px] text-ink/60 leading-[1.7]">
                        {item.text[lang]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </section>
      );

    default:
      return null;
  }
}

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
  };

  const hasSections = project.sections && project.sections.length > 0;

  const nextProj = project.nextProject
    ? projects.find((p) => p.slug === project.nextProject)
    : null;

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
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
          <motion.div variants={staggerVariants} initial="hidden" animate="visible">
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
              {categoryLabels[project.category]?.[lang]}
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

      {/* Intro + Ficha (for rich projects) */}
      {hasSections ? (
        <section className="bg-white section-pad py-16 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-16 max-md:gap-10 border-b border-bone/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="label-upper text-sand-light mb-4">
              {categoryLabels[project.category]?.[lang]} · {project.city}
            </div>
            {project.tagline && (
              <p className="font-serif text-display-sm text-az-brand italic leading-[1.4] pb-8 border-b border-bone/50 mb-8">
                {nl2br(project.tagline[lang])}
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {project.ficha && (
              <div className="flex flex-col">
                <div className="text-xs uppercase tracking-label text-carbon font-medium mb-4">
                  {lang === "es" ? "Ficha del proyecto" : "Project sheet"}
                </div>
                {project.ficha.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between py-3 border-b border-bone/40 text-sm"
                  >
                    <span className="text-sand">{item.label[lang]}</span>
                    <span className="text-carbon text-right">{item.value[lang]}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </section>
      ) : (
        /* Fallback for legacy projects without sections */
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
              <div>
                <div className="text-[11px] uppercase tracking-label text-sand">
                  {lang === "es" ? "Ubicación" : "Location"}
                </div>
                <div className="text-sm text-carbon">{project.city}</div>
              </div>
            </div>
            {project.area && (
              <div className="flex items-center gap-3 py-3 border-b border-bone/50">
                <div>
                  <div className="text-[11px] uppercase tracking-label text-sand">
                    {lang === "es" ? "Área" : "Area"}
                  </div>
                  <div className="text-sm text-carbon">{project.area}</div>
                </div>
              </div>
            )}
            <div className="flex items-center gap-3 py-3 border-b border-bone/50">
              <div>
                <div className="text-[11px] uppercase tracking-label text-sand">
                  {lang === "es" ? "Año" : "Year"}
                </div>
                <div className="text-sm text-carbon">{project.year}</div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Rich sections */}
      {hasSections &&
        project.sections!.map((section, i) => (
          <SectionRenderer key={i} section={section} lang={lang} />
        ))}

      {/* Legacy gallery fallback */}
      {!hasSections && project.images.length > 1 && (
        <motion.section
          className="bg-linen section-pad py-16 border-t border-bone/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="label-upper text-sand-light mb-6">
            {lang === "es" ? "Galería" : "Gallery"}
          </div>
          <ProjectGallery images={project.images} title={project.title[lang]} />
        </motion.section>
      )}

      {/* Next project (for rich projects) */}
      {nextProj && (
        <section className="bg-carbon section-pad py-16 flex items-center justify-between">
          <div>
            <div className="label-upper text-bone/40 mb-2">
              {lang === "es" ? "Siguiente proyecto" : "Next project"}
            </div>
            <div className="font-serif text-display-sm text-linen">
              {nextProj.title[lang]}
            </div>
          </div>
          <Link
            href={`/proyectos/${nextProj.slug}`}
            className="text-2xl text-az-light/60 hover:text-az-light transition-colors"
          >
            →
          </Link>
        </section>
      )}

      {/* CTA (for rich projects) */}
      {project.ctaTitle && (
        <section className="bg-white section-pad py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-bone/50">
          <h2 className="font-serif text-display-md text-carbon leading-[1.3]">
            {nl2br(project.ctaTitle[lang])}
          </h2>
          <div className="flex flex-col items-start md:items-end gap-3">
            <Link href="/conversacion" className="btn-primary">
              {lang === "es" ? "Iniciar conversación" : "Start conversation"}
            </Link>
            <span className="text-xs text-sand">
              {lang === "es" ? "Sin compromiso · Brief emocional inicial" : "No commitment · Initial emotional brief"}
            </span>
          </div>
        </section>
      )}

      {/* Related projects (fallback for legacy projects without nextProject) */}
      {!nextProj && related.length > 0 && (
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((rp) => (
              <Link
                key={rp.slug}
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
                    {categoryLabels[rp.category]?.[lang]}
                  </div>
                  <div className="font-serif text-lg text-linen">{rp.title[lang]}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
